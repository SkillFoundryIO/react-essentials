import { useState, useCallback } from 'react';
import AlertButton from './AlertButton';

// comment/uncomment the clickHandler 

export default function StaleClosure() {
    const [message, setMessage] = useState("Initial message");

    const clickHandler = useCallback(() => {
        alert(message);
    }, [message]); // proper dependency

    // const clickHandler = useCallback(() => {
    //     alert(message);
    // }, []); // stale closure
    return (
        <div className="row mt-3">
            <div className="col-md-6 mx-auto">
                <div className="card mx-3">
                    <div className="card-header">
                        <h5 className="card-title">Stale Closure Example</h5>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Message:</label>
                            <input 
                                type="text"
                                className="form-control mb-3"
                                defaultValue={message}
                                onBlur={(e) => setMessage(e.target.value)}
                            />
                            <div className="text-muted mb-3">
                                Current message: {message}
                            </div>
                            <AlertButton 
                              onClick={clickHandler} 
                              className="btn btn-primary">
                                Show Alert
                            </AlertButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}