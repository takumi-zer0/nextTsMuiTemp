import { useState } from "react";

export default function Home() {
    const [test, setTest] = useState<string>();
    console.log("hello world");

    return (
        <div>
            <h2>testing</h2>
            <p>testdsd</p>

            <div>
                <button
                    onClick={() => {
                        setTest("hi");
                    }}
                >
                    PUSH ME
                </button>

                <h2>{test}</h2>
            </div>
        </div>
    );
}
