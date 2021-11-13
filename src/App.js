import React , { useState, useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import './App.css';

function App() {

  let designs = [
		{  name:"underground", circle: "#E32826", bar: "#18357e", outline: null, example: "Brixton" },
		{  name:"overground", circle: "#ED7C23", bar: "#18357e", example: "Shoreditch High Street" },
		{  name:"bus", circle: "#ec2417", bar: "#ec2417", example: "Oxford Street" },
		{  name:"dlr", circle: "#07A6AA", example: "London City Airport" },
		{  name:"crossrail", circle: "#8A79B7", example: "Abbeywood" },
		{  name:"elizabeth", circle: "#6639B7", example: "Farringdon" },
		{  name:"tram", circle: "#80BB41", example: "Wimbledon" },
		{  name:"river", circle: "#1498D5", example: "Embankment Pier" },
		{  name:"bakerloo_line", circle: "#B36305", bar:"#B36305", example: "Elephant & Castle" },
		{  name:"victoria_line", circle: "#0098D4", bar:"#0098D4", example: "Euston" },
		{  name:"central_line", circle: "#E32017", bar: "#E32017", example: "Tottenham Court Road" },
		{  name:"circle_line", circle: "#FFD300", bar: "#FFD300", example: "Notting Hill Gate" },
		{  name:"district_line", circle: "#00782A", bar: "#00782A", example: "Earls Court" },
		{  name:"hammersmith_line", circle: "#F3A9BB", bar: "#F3A9BB", example: "Shepherds Bush Market" },
		{  name:"northern_line", circle: "#000000", bar: "#000000", example: "Edgware" },
		{  name:"piccadilly_line", circle: "#003688", bar: "#003688", example: "Knightsbridge" },
		{  name:"white", circle: "#ffffff", bar: "#ffffff", label: "#003688", example: "Buskers" },
		{  name:"metropolitan_line", circle: "#9B0056", bar: "#9B0056", example: "Harrow-On-The-Hill" },
		{  name:"jubilee_line", circle: "#A0A5A9", bar: "#A0A5A9", example: "Green Park" },
		{  name:"waterloo_line", circle: "#95CDBA", bar: "#95CDBA", example: "Bank" }
  ]

  return (
    <div className="App">
      <header className="App-header">
        { designs.map((d,i,a) => <span key={d.name}>{  RoundelPng(d, a) }</span>) }
      </header>
    </div>
  );

}

function RoundelPng(d,ds) {

  const [name,setName] = useState();
  const [urldata, setUrlData] = useState();
  const [design, setDesign] = useState(d);
  const [renderType, setRenderType] = useState("png")
  const [designs] = useState(ds);

  useEffect(() => { 

    var loader, can, ctx;

    if (!can) {
      can=document.createElement("canvas");
      ctx=can.getContext("2d"); 
    }    
    if (can && !loader) {
      loader = new Image();
      loader.width  = can.width  = 500;
      loader.height = can.height = 500;
    }
  
    const dataUrl = (component) => {
      let svgString = (renderToStaticMarkup(component));
      let dataString = `data:image/svg+xml;base64,${btoa(svgString)}`;
      console.log(dataString);
      return dataString;
    }

    const makeRoundel = (name, design) => {
      
      let n = name || (design && design.example.toUpperCase());
      console.log("render",n);
      let src = RoundelSVG( n
        , design && design.circle
        , design && design.bar
        , design && design.outline
        , null
        , design && design.label
        );

      if (renderType === "png") {
        loader.onload = function(){ ctx.drawImage( loader, 0, 0, loader.width, loader.height ); setUrlData(can.toDataURL()); };
        loader.src = dataUrl(src);
      } else {
        setUrlData(dataUrl(src));
      }
    }


    makeRoundel(name, design, renderType); 

  }, [ name , design, renderType ]);

  return  <div className="holder">
            <p style={{ textAlign:"center", color:"black", fontWeight:"bold", margin:"0", padding:"0", fontSize:"12px" }}>{ design ? design.name.replace("_"," ").toUpperCase() : "" }</p>
            <img name={ name } alt= { name } className="App-logo" src={ urldata } />
            <input style={{ width: "150px", textAlign: "center" }} type="text" placeholder="Enter Station Name" value={name || ""} onChange={ (e)=> setName(e.target.value.toUpperCase()) } />
            <select value={ renderType } onChange={ (e)=> setRenderType(e.target.value) } style={{ width: "154px", textAlign: "center" }}>
              <option value="svg">svg</option><option value="png">png</option>
            </select>
            <select value={design.name} onChange={ (e)=> { setDesign(designs.find(dsgn=>dsgn.name===e.target.value)); } } style={{ width: "154px", textAlign: "center" }}>
              { designs.map(dsgn => <option key={dsgn.name}>{dsgn.name}</option>) }
            </select>
          </div> 

}


function RoundelSVG(station,circlecolour,rectcolour,strokecolour,strokewidth,labelcolour) {

  const charsPerLine = 14;
  const textBaseSize = 52;
  const newLength = station.length;
  const newEmSize = charsPerLine / newLength;
  const newFontSize = newEmSize < 1 ? newEmSize*textBaseSize : textBaseSize;
  const formattedSize = newEmSize < 1 ? newFontSize+"px" : textBaseSize+"px";
  const circle = circlecolour || "#ec2417";
  const rect = rectcolour || "#18357e";
  const textOffset = -1* ((80 - newFontSize)/2 + 7) ;
  strokewidth = strokewidth || 8;

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 500 500" className="App-logo">
        <path d="M 250 250 m 0 -200 a 200 200 0 1 0 1 0 Z m 0 75 a 125 125 0 1 1 -1 0 Z" fill={ circle } stroke={ strokecolour } strokeWidth={ strokecolour ? strokewidth : null }  />
        <rect x="10" y="210" width="480" height="80" fill={ rect }  stroke={ strokecolour } strokeWidth={ strokecolour ? strokewidth : null }  />
        <text x="250" y="290" dy={ textOffset } style={{ "textAnchor": "middle", "stroke": "none", "fontFamily":"P22 Underground Medium", "fontSize": formattedSize}} fill={ labelcolour || "white" }>{ station }</text>
    </svg>
  )
}



export default App;
