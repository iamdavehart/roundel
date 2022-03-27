import React from "react";

/**
 *
 */
export const Roundel = ({
    station,
    circlecolour,
    rectcolour,
    strokecolour,
    strokewidth,
    labelcolour,
    dropshadow = false,
}) => {
    const charsPerLine = 14;
    const textBaseSize = 52;
    const newLength = station.length;
    const newEmSize = charsPerLine / newLength;
    const newFontSize = newEmSize < 1 ? newEmSize * textBaseSize : textBaseSize;
    const formattedSize = newEmSize < 1 ? newFontSize + "px" : textBaseSize + "px";
    const circle = circlecolour || "#ec2417";
    const rect = rectcolour || "#18357e";
    const textOffset = -1 * ((80 - newFontSize) / 2 + 7);
    strokewidth = strokewidth || 8;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="App-logo">
            <defs>
                <filter id="dropShadow">
                    <feGaussianBlur result="blurOut" in="SourceAlpha" stdDeviation="5" />
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
            </defs>
            <rect x="0" width="500" y="0" height="500" fill="none" />
            <path
                d={` M 55 210 A 200 200 0 0 1 446 210 H 490 V 290 H 446 A 200 200 0 0 1 55 290 H 10 V 210 H 55 z M 132 210 H 368 A 125 125 0 0 0 131 210 z M 131 290 A 125 125 0 0 0 368 290 H 131 z `} 
                fill="#666666"
                stroke="none"
                strokeWidth="1"
                opacity="0.7"
                style={dropshadow ? { filter: "url(#dropShadow)" } : {}}
            />
            <path
                d="M 250 250 m 0 -200 a 200 200 0 1 0 1 0 Z m 0 75 a 125 125 0 1 1 -1 0 Z"
                fill={circle}
                stroke={strokecolour}
                strokeWidth={strokecolour ? strokewidth : null}
            />
            <rect
                x="10"
                y="210"
                width="480"
                height="80"
                fill={rect}
                stroke={strokecolour}
                strokeWidth={strokecolour ? strokewidth : null}
            />
            <text
                x="250"
                y="290"
                dy={textOffset}
                style={{
                    textAnchor: "middle",
                    stroke: "none",
                    fontFamily: "P22 Underground Medium",
                    fontSize: formattedSize,
                }}
                fill={labelcolour || "white"}
            >
                {station.toUpperCase()}
            </text>
        </svg>
    );
};
