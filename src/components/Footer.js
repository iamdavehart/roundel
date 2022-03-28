import React from "react";
import { FiGithub, FiTwitter, FiMail, FiCoffee } from 'react-icons/fi'
export const Footer = () => {
    return (
        <footer className="p-16 flex flex-row justify-center align-middle space-x-4">
            <a href="">made by dave</a>
            <a href="" className="flex flex-row items-center justify-center space-x-2"><FiMail size={20} /><span>email</span></a>
            <a href="" className="flex flex-row items-center justify-center space-x-2"><FiTwitter size={20} /><span>twitter</span></a>
            <a href="" className="flex flex-row items-center justify-center space-x-2"><FiGithub size={20} /><span>github</span></a>
            <a href="" className="flex flex-row items-center justify-center space-x-2"><FiCoffee size={20} /><span>buy me tea</span></a>
        </footer>
    );
};
