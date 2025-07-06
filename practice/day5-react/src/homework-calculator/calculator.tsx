import React, { useState } from "react";
import "./Calculator.css";

const OP_DISPLAY = { "*": "×", "/": "÷", "-": "−", "+": "+" } as const;

const Calculator: React.FC = () => {
    const [expression, setExpression] = useState<string>("");

    const displayValue =
        expression.length > 0
            ? expression
                .replace(/\*/g, OP_DISPLAY["*"])
                .replace(/\//g, OP_DISPLAY["/"])
                .replace(/-/g, OP_DISPLAY["-"])
            : "0";

    const handleNumber = (num: string) => {
        setExpression((prev) => (prev === "0" ? num : prev + num));
    };

    const handleOperator = (raw: string) => {
        const map: Record<string, string> = { "×": "*", "÷": "/", "−": "-" };
        const op = map[raw] ?? raw;

        setExpression((prev) => {
            if (!prev || /[+\-*/.]$/.test(prev)) return prev;
            return prev + op;
        });
    };

    const handleEqual = () => {
        if (!expression || /[+\-*/.]$/.test(expression)) return;

        try {
            // eslint-disable-next-line no-eval
            const result = eval(expression);
            setExpression(String(result));
        } catch {
            alert("Lỗi biểu thức");
            setExpression("");
        }
    };

    const handleClear = () => setExpression("");

    return (
        <div className="calculator">
            <div className="display">{displayValue}</div>

            <div className="button-grid">
                <button className="btn btn-ac col-span-2" onClick={handleClear}>
                    AC
                </button>
                <button className="btn btn-op" onClick={() => handleOperator("÷")}>
                    ÷
                </button>
                <button className="btn btn-op" onClick={() => handleOperator("×")}>
                    ×
                </button>

                <button className="btn btn-number" onClick={() => handleNumber("7")}>
                    7
                </button>
                <button className="btn btn-number" onClick={() => handleNumber("8")}>
                    8
                </button>
                <button className="btn btn-number" onClick={() => handleNumber("9")}>
                    9
                </button>
                <button className="btn btn-op" onClick={() => handleOperator("−")}>
                    −
                </button>

                <button className="btn btn-number" onClick={() => handleNumber("4")}>
                    4
                </button>
                <button className="btn btn-number" onClick={() => handleNumber("5")}>
                    5
                </button>
                <button className="btn btn-number" onClick={() => handleNumber("6")}>
                    6
                </button>
                <button className="btn btn-op" onClick={() => handleOperator("+")}>
                    +
                </button>

                <button className="btn btn-number" onClick={() => handleNumber("1")}>
                    1
                </button>
                <button className="btn btn-number" onClick={() => handleNumber("2")}>
                    2
                </button>
                <button className="btn btn-number" onClick={() => handleNumber("3")}>
                    3
                </button>
                <button className="btn btn-equal row-span-2" onClick={handleEqual}>
                    =
                </button>
                <button className="btn btn-number col-span-2" onClick={() => handleNumber("0")}>
                    0
                </button>
                <button className="btn btn-number" onClick={() => handleNumber(".")}>
                    .
                </button>


            </div>
        </div>
    );
};

export default Calculator;
