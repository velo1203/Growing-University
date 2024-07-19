export function upgradeSuccess(successRate: number) {
    const randomValue = Math.random();
    return randomValue < successRate;
}
