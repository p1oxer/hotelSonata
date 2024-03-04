import React from "react";

export function ButtonTransparent({children}) {
    return (
        <button type="button" className="button button-transparent">
            {children}
        </button>
    );
}
