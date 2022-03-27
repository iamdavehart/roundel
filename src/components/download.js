
import React, { useEffect, useRef, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export const ImageDownloader = ({ renderType = "svg", width = 500, height = 500, children }) => {
    const canvasRef = useRef(document.createElement("canvas"));
    const imageRef = useRef(new Image());
    const [ urlData, setUrlData ] = useState();

    useEffect(()=> {
        canvasRef.current.width = imageRef.current.width = width;
        canvasRef.current.height = imageRef.current.height = height;
        imageRef.current.onload = (e) => {
            const ctx = canvasRef.current.getContext("2d");
            ctx.drawImage(imageRef.current, 0, 0, width, height);
            setUrlData(canvasRef.current.toDataURL());
        }
    }, [])

    useEffect(()=> {
        if (renderType === "png") { 
            imageRef.current.src = getDataUrlForSVGComponent(children);
        } else {
            setUrlData(getDataUrlForSVGComponent(children));
        }
    }, [ children ])

    return (
        <>
        <img width={width} height={height} src={ urlData } />
        { children }
        </>
    )
}

const getDataUrlForSVGComponent = (component) => {
    const svgString = renderToStaticMarkup(component);
    const dataString = `data:image/svg+xml;base64,${btoa(svgString)}`;
    return dataString;
} 