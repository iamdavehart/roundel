import React from "react";

export const Header = ({ title, subtitle }) => {
    return (
        <header className="p-8">
            <h1 className="text-4xl uppercase tracking-tight font-extrabold text-slate-800 dark:text-white text-center">
                {title}
            </h1>
            <p className="text-lg text-center">
                {subtitle}
            </p>
        </header>
    );
};
