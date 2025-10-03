export function calculatePrimes(limit) {
    const result = [];

    for (let i = 2; i <= limit; i++) {
        if (result.every(num => i % num !== 0)) {
            result.push(i);
        }
    }
    
    return result;
}