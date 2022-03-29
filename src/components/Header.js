import React from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { BsGithub } from "react-icons/bs";

export const Header = ({ title, titleSmall, subtitle, version }) => {
    return (
        <header className="relative">
            <div className="pt-2 flex items-center justify-between">
                <h2 className="font-thin text-slate-400"></h2>
                <div className="flex space-x-2 items-center justify-center">
                    { version && <span className="text-sm font-thin text-slate-400">{version}</span> } 
                    <a href="https://github.com/iamdavehart/roundel">
                        <BsGithub size={24} />
                    </a>
                    <DarkModeSwitch />
                </div>
            </div>
            <div className="pt-4 pb-4 sm:pb-8">
                <h1 className="text-2xl sm:text-4xl uppercase tracking-tight font-extrabold text-slate-800 dark:text-white text-center">
                    {title}
                    {titleSmall && <small className="text-lg ml-2 tracking-tight font-thin text-slate-500">{titleSmall}</small>}
                </h1>
                {subtitle && <p className="text-lg text-center">{subtitle}</p> }
            </div>
        </header>
    );
};
