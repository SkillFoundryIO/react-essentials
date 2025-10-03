import { useRef, useState } from 'react'

function RefValue() {
    const counter = useRef(0);
    const [, setUpdate] = useState(false);

    function handleCounter() {
        counter.current++;
    }

    function handleRender() {
        setUpdate((prev) => !prev);
    }

    return (
        <>
            <div style={{ maxWidth: '480px' }}>
                <p>Counter value as rendered: {counter.current}</p>
                <button
                    className="btn btn-primary mb-2"
                    onClick={handleCounter}>
                    Increment Ref Counter
                </button><br />
                <button
                    className="btn btn-secondary"
                    onClick={handleRender}>
                    Re-render Component
                </button>
            </div>
        </>
    );
}

export default RefValue