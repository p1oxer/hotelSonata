import React from "react";

export function ButtonTransparent({children, type}) {
    return (
        <button type={type ?? "button"} className="button button-transparent">
            {children}
        </button>
    );
}
