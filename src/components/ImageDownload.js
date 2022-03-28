import React, { useRef } from "react";
import { ImagePreview } from "./ImagePreview";
import { Roundel } from "./Roundel";

export const ImageDownload = ({ stationName, scheme, renderType = "png"}) => {
    const downloadRef = useRef();
    const updateUrlData = (data) => { downloadRef.current.href = data; }
    const getDownload = (e) => {downloadRef.current.click(); e.preventDefault(); }
    return (
        <div className="px-4 py-2 text-sm rounded-md border-dotted border-2 border-slate-300 dark:border-slate-600">
            <ImagePreview className="opacity-50" width={800} height={800} renderType={renderType} style={{ maxWidth: 100 }} updateUrlData={updateUrlData}>
                <Roundel
                    station={stationName || scheme.example}
                    circlecolour={scheme.circle}
                    rectcolour={scheme.bar}
                    labelcolour={scheme.label}
                    strokecolour={scheme.stroke}
                    strokewidth={scheme.strokeWidth}
                    dropshadow={scheme.shadow}
                    embedFont={true}
                />
            </ImagePreview>
            <div className="text-center">
                <button onClick={ getDownload }>Download {renderType.toUpperCase()}</button>
                <a ref={downloadRef} href="" className="hidden" download={`roundel.${renderType.toLowerCase()}`}></a>
            </div>
        </div>
    );
};
