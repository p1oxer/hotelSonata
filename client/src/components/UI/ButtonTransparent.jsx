import React from "react";

export function ButtonTransparent({ children, type, onClick, disabled, modificator }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type ?? "button"}
            className={`button button-transparent ${modificator}`}
        >
            {children}
        </button>
    );
}
