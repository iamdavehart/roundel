import React from "react";
import { FiGithub, FiTwitter, FiMail, FiCoffee } from 'react-icons/fi'
export const Footer = () => {
    return (
        <footer className="p-4 py-16 flex flex-row flex-wrap justify-center align-middle space-x-4 text-xs sm:text-lg ">
            <span  className="hidden sm:block">made by dave</span>
            <a href="mailto:github@iamdavehart.com" className="flex flex-row items-center justify-center space-x-2"><FiMail size={20} /><span className="hidden sm:block">email</span></a>
            <a href="https://twitter.com/iamdavehart" target="_blank" className="flex flex-row items-center justify-center space-x-2"><FiTwitter size={20} /><span className="hidden sm:block">twitter</span></a>
            <a href="https://github.com/iamdavehart" target="_blank" className="flex flex-row items-center justify-center space-x-2"><FiGithub size={20} /><span className="hidden sm:block">github</span></a>
            <a href="https://buymeacoffee.com/iamdavehart" target="_blank" className="flex flex-row items-center justify-center space-x-2"><FiCoffee size={20} /><span className="hidden sm:block">buy me tea</span></a>
        </footer>
    );
};
