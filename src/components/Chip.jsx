import React from "react";

export const Chip = (props) => {
    return (
        <span
            className="chip"
            onClick={() => {
                props.changeTab(props.index)
            }}
        >
            {props.value}
        </span>)
}