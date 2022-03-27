import React, { useState } from "react";
import "./app.css";
import { Roundel } from "./components/roundel";
import { ImageDownloader } from "./components/download";
import roundelStyles from "./data/colourSchemes.json";
import _ from "lodash";

// application version is injected via webpack
const APP_VERSION = APPLICATION_VERSION;

export const App = () => {
    const [selectedScheme, setSelectedScheme] = useState("underground");
    const [stationName, setStationName] = useState("");
    const scheme = roundelStyles.find((r) => r.name === selectedScheme);
    return (
        <>
            <div className="container mx-auto">
                <header className="p-6">
                    <h1 className="text-3xl text-center">Roundel Generator</h1>
                    <p className="text-lg text-center">
                        Generating SVGs and enabling downloads via PNG/SVG data URLs and HTML canvasses
                    </p>
                </header>
                <section className="py-8">
                    <div className="p-8 bg-white rounded-xl shadow-lg flex space-x-4">
                        <div className="aspect-square w-6/12">
                            <Roundel
                                station={stationName || scheme.example}
                                circlecolour={scheme.circle}
                                rectcolour={scheme.bar}
                                labelcolour={scheme.label}
                                strokecolour={scheme.stroke}
                                strokewidth={scheme.strokeWidth}
                                dropshadow={scheme.shadow}
                            />
                        </div>
                        <div className="grow">
                            <label className="block">
                                <span className="text-gray-700">Style</span>
                                <select
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={(e) => setSelectedScheme(e.target.value)}
                                >
                                    {roundelStyles.map((r) => (
                                        <option value={r.name}>{_.startCase(r.name)}</option>
                                    ))}
                                </select>
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Text</span>
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        setStationName(e.target.value ?? "");
                                    }}
                                    value={stationName}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </label>
                        </div>
                    </div>
                </section>
                <section className="mx-24">
                    <article>
                        <h3 className="text-xl">About</h3>
                        <p>
                            The Roundel is the iconic logo of the London Underground. I love how it gets stylized and have used it here as a demo on how I create dynamic SVGs in React and then render them as images (PNG or SVG). The logo is a copyrighted asset and you should only use this for educational purposes
                        </p>
                    </article>
                </section>
                <footer className="p-16 flex flex-row justify-center align-middle">
                    <a href="">made by dave</a>
                    <a href="">github</a>
                </footer>
            </div>

            {/* <select onChange={(e) => setSelectedScheme(e.target.value)}>
                {roundelStyles.map((r) => (
                    <option value={r.name}>{r.name}</option>
                ))}
            </select> */}

            {/* <Roundel
                station={ scheme.example }
                circlecolour={ scheme.circle }
                rectcolour={ scheme.bar }
                labelcolour={ scheme.label }
                strokecolour={ scheme.stroke }
                strokewidth={ scheme.strokeWidth ?? 0 }
                dropshadow={ scheme.shadow }
            /> */}
        </>
    );
};
