import React from "react";

export function ButtonTransparent({ children, type, onClick }) {
    return (
        <button
            onClick={onClick}
            type={type ?? "button"}
            className="button button-transparent"
        >
            {children}
        </button>
    );
}
