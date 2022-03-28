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
        <div className="container mx-auto">
            <Header title="Roundel Generator" version={`v${APP_VERSION}`} />
            <section className="pt-4 pb-8">
                <WidgetContainer>
                    <div className="aspect-square w-6/12">
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
                    <div className="grow">
                        <Options onOptionsChange={setOptions} />
                    </div>
                </WidgetContainer>
            </section>
            <section className="mx-24">
                <article>
                <h3 className="text-xl mb-2">About</h3>
                    <p>
                        The Roundel is the iconic logo of the London Underground. I love how it gets stylized and have
                        used it here as a demo on how I create dynamic SVGs in React and then render them as images (PNG
                        or SVG). The logo is a copyrighted asset and you should only use this for educational purposes
                    </p>
                    <h3 className="text-xl my-2">Lessons</h3>
                    <ul className="list-disc list-inside">
                        <li>tailwind</li>
                        <li>how to cut holes in svg paths</li>
                        <li>rendering svgs to png via canvas</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </div>
    );
};
