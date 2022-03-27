import React from "react";

export const WidgetContainer = ({ children }) => {
    return (
        <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex space-x-12 items-center">
            {children}
        </div>
    );
};
