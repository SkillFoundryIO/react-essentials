import { useState, useCallback } from 'react'

// adding values to sets only happens if they are unique
const funcsWithCallback = new Set();

export default function WithCallback() {
    const [counter, setCounter] = useState(0);

    const increment = useCallback(() => {
      setCounter(prev => prev + 1);
    }, []);

    const decrement = useCallback(() => {
      setCounter(prev => prev - 1);
    }, []);

    // add the function references to the set
    funcsWithCallback.add(increment);
    funcsWithCallback.add(decrement);

    return (
        <div className="row mt-3">
            <div className="col-md-6 mx-auto">
                <div className="card mx-3">
                    <div className="card-header">
                        <h5 className="card-title mb-0">With Callback</h5>
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
                            Number of function references: {funcsWithCallback.size}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}