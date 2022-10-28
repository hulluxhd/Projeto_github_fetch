import { useState } from "react";

export function inputWithStyles(WrappedComponent) {
    const style = {
        width: "900px",
        borderRadius: "4px",
        border: "2px solid red",
        height: "40px",
    }


    function wrapper(props) {
        return <WrappedComponent {...props}  style={style} />
    }

    return wrapper
}