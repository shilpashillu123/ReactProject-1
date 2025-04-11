import { useStat, useEffect, useRef, useState } from "react";
import ReactDom from "react-dom/client";

function Tot() {
    const [ inputValue, setInputValue ] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>render Count: {count.current}</h1>
        </>
    );
}

export default Tot;