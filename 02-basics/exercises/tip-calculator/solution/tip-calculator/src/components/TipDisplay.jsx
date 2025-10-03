function TipDisplay({ bill, percentage, tipAmount, totalAmount }) {
    // Check if we have valid values to display results
    if (bill > 0 && percentage > 0) {
        return (
            <div className="alert alert-light border">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-muted">Tip Amount:</span>
                    <span className="h5 text-success mb-0">
                        ${tipAmount.toFixed(2)}
                    </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-muted">Total Amount:</span>
                    <span className="h4 fw-bold mb-0">
                        ${totalAmount.toFixed(2)}
                    </span>
                </div>
                <div className="text-center text-muted small">
                    {percentage}% tip on ${bill.toFixed(2)}
                </div>
            </div>
        );
    } else {
        // Display helpful message when values aren't ready
        let message = "";
        if ((!bill || bill <= 0) && (!percentage || percentage < 0)) {
            message = "Enter a bill amount and select or enter a tip percentage to see results.";
        } else if (!bill || bill <= 0) {
            message = "Enter a bill amount to see results.";
        } else if (!percentage || percentage < 0) {
            message = "Select or enter a tip percentage to see results.";
        }

        return (
            <div className="alert alert-info">
                <div className="text-center text-muted">
                    {message}
                </div>
            </div>
        );
    }
};

export default TipDisplay;