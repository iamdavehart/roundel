import React, { useState } from "react";
import { Roundel } from "./components/Roundel";
import { Header } from "./components/Header";
import { Footer } from './components/Footer';
import { Options } from './components/Options';
import { WidgetContainer } from "./components/WidgetContainer";
import roundelStyles from "./data/colourSchemes.json";


// application version is injected via webpack
const APP_VERSION = APPLICATION_VERSION;

export const App = () => {
    const [ options, setOptions ] = useState({ scheme: "underground" });
    const scheme = roundelStyles.find((r) => r.name === options.scheme);

    return (
        <div className="container mx-auto sm:px-2">
            <Header title="Roundel Generator" version={`v${APP_VERSION}`} />
            <section className="pt-4 pb-8">
                <WidgetContainer>
                    <div className="aspect-square w-full sm:w-6/12">
                        <Roundel
                            station={options.stationName || scheme.example}
                            circlecolour={scheme.circle}
                            rectcolour={scheme.bar}
                            labelcolour={scheme.label}
                            strokecolour={options.outline ? scheme.stroke || "black" : null}
                            strokewidth={options.outline ? scheme.strokeWidth || 4 : null }
                            dropshadow={options.dropShadow}
                        />
                    </div>
                    <div className="w-full sm:w-6/12 sm:grow">
                        <Options onOptionsChange={setOptions} />
                    </div>
                </WidgetContainer>
            </section>
            <section className="mx-4 lg:mx-24">
                <article>
                    <h3 className="text-xl my-4 tracking-tight font-extrabold dark:text-slate-200 text-slate-800">About</h3>
                    <p>
                        The Roundel is the iconic logo of the London Underground. I love how it gets stylized and have
                        used it here as a demo on how I create dynamic SVGs in React and then render them as images (PNG
                        or SVG). The logo is a copyrighted asset and you should only use this for educational purposes
                    </p>
                    <h3 className="text-xl my-4 tracking-tight font-extrabold dark:text-slate-200 text-slate-800">Lessons</h3>
                    <ul className="list-disc list-inside">
                        <li>first time using <b>tailwind css</b> made dark mode a breeze...</li>
                        <li>to cut holes in svg paths fill with clockwise paths and cut out with anticlockwise paths</li>
                        <li>render svgs to png dataURLs via an HTML canvas to make them draggable</li>
                        <li>embed your fonts if you want your SVGs to render text correctly on canvasses</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </div>
    );
};
