import React from "react";

const BlueHeader = ({ heading, className }) => {
    return (
        <div className={`blue-header  px-4  flex flex-col items-center ${className}`}>
            <div className="content-expanded width-100 px-6 py-2">
                <h3><span>{heading}</span></h3>
            </div>
        </div>
    );
};

export default BlueHeader;
