import React, { useState } from "react";

export default function ReactInteractivityTestPage() {

    const [count, setCount] = useState(0);

    function counter() {
        setCount(p => p + 1)
    }

    return (
        <div>
            <div>
                <div>
                    <h1>Click button below</h1>
                    <button type="button" onClick={counter}>Click me!</button>
                    <p>You clicked me {count} times</p>
                </div>
            </div>
        </div>
    )
}