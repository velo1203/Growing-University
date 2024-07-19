export function upgradeSuccess(successRate: number) {
    const randomValue = Math.random(); // Generate a random float between 0 and 1
    return randomValue < successRate;
}
