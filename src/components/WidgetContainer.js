import React from "react";

export const WidgetContainer = ({ children }) => {
    return (
        <div className="p-8 bg-white dark:bg-slate-800 sm:rounded-xl shadow-lg flex flex-col sm:flex-row sm:space-x-12 items-center">
            {children}
        </div>
    );
};
