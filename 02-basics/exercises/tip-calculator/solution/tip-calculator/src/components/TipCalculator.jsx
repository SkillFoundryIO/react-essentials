import { useState } from 'react'
import TipButton from './TipButton';
import TipDisplay from './TipDisplay';

function TipCalculator() {
    const [billAmount, setBillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState(null);
    const [customTip, setCustomTip] = useState('');

    // Parse the bill amount and tip percentage
    const bill = parseFloat(billAmount) || 0;

    // handle either the pre-selected or custom tip
    let selectedTip;

    // if they pre-selected it use it, otherwise grab the custom amount or zero if invalid or missing
    if (tipPercentage !== null) {
        selectedTip = tipPercentage;
    } else {
        selectedTip = parseFloat(customTip) || null;
    }

    // Calculate tip and total
    const tipAmount = bill * (selectedTip / 100);
    const totalAmount = bill + tipAmount;

    // function for buttons
    const handlePresetTip = (percentage) => {
        setTipPercentage(percentage);
        setCustomTip(''); // Clear custom input when preset is selected
    };

    // function for custom tip
    const handleCustomTip = (value) => {
        setCustomTip(value);
        setTipPercentage(null); // Clear preset selection when custom is used
    };

    return (
        <div className="row justify-content-center mt-4">
            <div className="card shadow col-12 col-md-8 col-lg-6 col-xl-4">
                <div className="card-body">
                    <h1 className="card-title text-center mb-4">Tip Calculator</h1>
                    {/* Bill Amount Input */}
                    <div className="mb-4">
                        <label className="form-label">Bill Amount</label>
                        <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input
                                type="number"
                                value={billAmount}
                                onChange={(e) => setBillAmount(e.target.value)}
                                placeholder="0.00"
                                className="form-control form-control-lg"
                            />
                        </div>
                    </div>
                    {/* Tip Percentage Buttons */}
                    <div className="mb-4">
                        <label className="form-label">Select Tip Percentage</label>
                        <div className="row g-2 mb-3">
                            <TipButton
                                percentage={15}
                                isSelected={tipPercentage === 15}
                                onClick={handlePresetTip}
                            />
                            <TipButton
                                percentage={20}
                                isSelected={tipPercentage === 20}
                                onClick={handlePresetTip}
                            />
                            <TipButton
                                percentage={25}
                                isSelected={tipPercentage === 25}
                                onClick={handlePresetTip}
                            />
                        </div>
                    </div>
                    {/* Custom Tip Input */}
                    <div className="input-group mb-4">
                        <input
                            type="number"
                            value={customTip}
                            onChange={(e) => handleCustomTip(e.target.value)}
                            placeholder="Custom percentage"
                            className={`form-control ${customTip ? 'border-primary' : ''
                                }`}
                        />
                        <span className="input-group-text">%</span>
                    </div>
                    {/* Results */}
                    <TipDisplay
                        bill={bill}
                        percentage={selectedTip}
                        tipAmount={tipAmount}
                        totalAmount={totalAmount}
                    />
                </div>
            </div>
        </div>
    );
};

export default TipCalculator;