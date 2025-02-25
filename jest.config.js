module.exports = {
    testEnvironment: "node",
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js"],
    testMatch: ["**/__tests__/**/*.test.ts"],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
        },
    },
};
