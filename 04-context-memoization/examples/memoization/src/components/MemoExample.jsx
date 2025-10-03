import { useState, useMemo } from 'react';
import { calculatePrimes } from '../services/primes';

let renderCount = 0;
let calculateCount = 0;

export default function MemoExample() {
  const [limit, setLimit] = useState(100);
  const [, setToggle] = useState(false);

  renderCount++;

  // const primes = calculatePrimes(limit);
  // calculateCount++;

  const primes = useMemo(() => {
        calculateCount++;
        return calculatePrimes(limit);
    }, [limit]); // Only recalculate when limit changes

  return (
    <div className="row mt-3">
      <div className="col-md-6 mx-auto">
        <div className="card mx-3">
          <div className="card-header">
            <h5 className="card-title">Prime Numbers</h5>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">
                Calculate primes up to:
              </label>
              <input
                type="number"
                className="form-control"
                defaultValue={limit}
                onBlur={e => setLimit(Number(e.target.value))}
              />
              <button
                className="btn btn-secondary mb-3 mt-3"
                onClick={() => setToggle(t => !t)}
              >
                Force Re-render
              </button>
              <div>Found {primes.length} prime numbers</div>
              <div className="small text-muted">
                {primes.join(', ')}
              </div>
            </div>
            <div className="alert alert-info">
              <div>Component renders: {renderCount}</div>
              <div>Prime calculations: {calculateCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}