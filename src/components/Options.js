import React, { useState, useEffect } from "react";
import { ImagePreview } from "./ImagePreview";
import { Roundel } from "./Roundel";
import roundelStyles from "../data/colourSchemes.json";
import _ from "lodash";

export const Options = ({ onOptionsChange }) => {
    const [selectedScheme, setSelectedScheme] = useState("underground");
    const [stationName, setStationName] = useState("");
    const [dropShadow, setDropShadow] = useState(false);
    const [outline, setOutline] = useState(false);
    const scheme = roundelStyles.find((r) => r.name === selectedScheme);

    useEffect(() => {
        const opts = { scheme:selectedScheme, stationName, dropShadow, outline };
        if (onOptionsChange) onOptionsChange(opts);
    }, [selectedScheme, stationName, dropShadow, outline]);

    return (
        <div>
            <label className="block my-4">
                <span className="block px-2 pb-2">Style</span>
                <select
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={(e) => setSelectedScheme(e.target.value)}
                >
                    {roundelStyles.map((r) => (
                        <option key={r.name} value={r.name}>
                            {_.startCase(r.name)}
                        </option>
                    ))}
                </select>
            </label>

            <label className="block  my-4">
                <span className="block px-2 pb-2">Text</span>
                <input
                    type="text"
                    onChange={(e) => {
                        setStationName(e.target.value ?? "");
                    }}
                    value={stationName}
                    placeholder={`Enter Text e.g. ${scheme.example}`}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </label>

            <label className="flex flex-row items-center py-2 pl-4">
                <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                    checked={dropShadow}
                    onChange={(e) => {
                        setDropShadow(!!e.target.checked);
                    }}
                />
                <span className="ml-2">Add a drop shadow</span>
            </label>

            <label className="flex flex-row items-center py-2 pl-4">
                <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                    checked={outline}
                    onChange={(e) => {
                        setOutline(!!e.target.checked);
                    }}
                />
                <span className="ml-2">Draw an outline</span>
            </label>

            <div className="py-6 flex flex-row justify-center items-center space-x-2">
                <button className="px-4 py-2 text-sm font-semibold rounded-md bg-slate-700 hover:bg-slate-600">
                    <ImagePreview
                        className="opacity-50"
                        width={500}
                        height={500}
                        renderType="png"
                        style={{ maxWidth: 100 }}
                    >
                        <Roundel
                            station={stationName || scheme.example}
                            circlecolour={scheme.circle}
                            rectcolour={scheme.bar}
                            labelcolour={scheme.label}
                            strokecolour={scheme.stroke}
                            strokewidth={scheme.strokeWidth}
                            dropshadow={scheme.shadow}
                            embedFont={true}
                        />
                    </ImagePreview>
                    <span>Download PNG</span>
                </button>
                <button className="px-4 py-2 text-sm font-semibold rounded-md bg-slate-700 hover:bg-slate-600">
                    <ImagePreview
                        className="opacity-50"
                        width={500}
                        height={500}
                        renderType="svg"
                        style={{ maxWidth: 100 }}
                    >
                        <Roundel
                            station={stationName || scheme.example}
                            circlecolour={scheme.circle}
                            rectcolour={scheme.bar}
                            labelcolour={scheme.label}
                            strokecolour={scheme.stroke}
                            strokewidth={scheme.strokeWidth}
                            dropshadow={scheme.shadow}
                            embedFont={true}
                        />
                    </ImagePreview>
                    <span>Download SVG</span>
                </button>
            </div>
        </div>
    );
};
