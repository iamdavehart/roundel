import React, { useState, useEffect } from "react";
import { ImagePreview } from "./ImagePreview";
import { Roundel } from "./Roundel";
import roundelStyles from "../data/colourSchemes.json";
import { startCase } from "lodash";
import { ImageDownload } from "./ImageDownload";

export const Options = ({ onOptionsChange }) => {
    const [selectedScheme, setSelectedScheme] = useState("underground");
    const [stationName, setStationName] = useState("");
    const [dropShadow, setDropShadow] = useState(false);
    const [outline, setOutline] = useState(false);
    const scheme = roundelStyles.find((r) => r.name === selectedScheme);

    useEffect(() => {
        if (onOptionsChange) onOptionsChange({ scheme: selectedScheme, stationName, dropShadow, outline });
    }, [selectedScheme, stationName, dropShadow, outline]);

    return (
        <div>
            <label className="block my-4">
                <span className="block px-1 pb-2">Style</span>
                <select
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={(e) => setSelectedScheme(e.target.value)}
                >
                    {roundelStyles.map((r) => (
                        <option key={r.name} value={r.name}>
                            {startCase(r.name)}
                        </option>
                    ))}
                </select>
            </label>

            <label className="block  my-4">
                <span className="block px-1 pb-2">Text</span>
                <input
                    type="text"
                    onChange={(e) => {
                        setStationName(e.target.value ?? "");
                    }}
                    value={stationName}
                    placeholder={`e.g. ${scheme.example}`}
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

            <div className="py-6 flex flex-row justify-start items-center space-x-2">
                <ImageDownload stationName={stationName} scheme={scheme} renderType="png" />
            </div>
        </div>
    );
};
