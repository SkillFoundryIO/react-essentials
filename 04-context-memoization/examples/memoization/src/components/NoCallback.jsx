import { useState } from 'react'

// adding values to sets only happens if they are unique
const funcs = new Set();

export default function NoCallback() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(prev => prev + 1);
    };

    function decrement() {
        setCounter(prev => prev - 1);
    }

    // add the function references to the set
    funcs.add(increment);
    funcs.add(decrement);

    return (
        <div className="row mt-3">
            <div className="col-md-6 mx-auto">
                <div className="card mx-3">
                    <div className="card-header">
                        <h5 className="card-title mb-0">No Callback</h5>
                    </div>
                    <div className="card-body">
                        <div className="d-flex align-items-center gap-3">
                            <button
                                className="btn btn-danger"
                                onClick={decrement}
                            >
                                -
                            </button>
                            <span className="h4 mb-0">{counter}</span>
                            <button
                                className="btn btn-primary"
                                onClick={increment}
                            >
                                +
                            </button>
                        </div>
                        <div className="mt-3">
                            Number of function references: {funcs.size}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}