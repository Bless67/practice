import { useState } from "react";
const Test = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(c => c + 1);
    };
    const decrease = () => {
        setCount(c => c - 1);
    };
    const reset = () => {
        setCount(0);
    };
    return (
        <div className="mt-3">
            <p className="font-bold font-mono text-5xl text-center">
                {count}
            </p>
            <div
                className="flex justify-around
             text-white mt-1.5"
            >
                <button
                    onClick={increase}
                    className="font-bold text-xl rounded bg-blue-500 p-2"
                >
                    increment
                </button>
                <button
                    onClick={reset}
                    className="font-bold text-xl rounded p-2 bg-blue-500"
                >
                    reset
                </button>
                <button
                    onClick={decrease}
                    className="font-bold text-xl rounded p-2 bg-blue-500"
                >
                    decrement
                </button>
            </div>
        </div>
    );
};

export default Test;
