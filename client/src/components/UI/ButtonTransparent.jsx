import React from "react";

export function ButtonTransparent({ children, type, onClick, disabled }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type ?? "button"}
            className="button button-transparent"
        >
            {children}
        </button>
    );
}
