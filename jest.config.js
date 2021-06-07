module.exports = {
    globals: {
        'ts-jest': {
            diagnostics: false,
            tsConfig: '<rootDir>/tsconfig.json',
        },
    },
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.test.{js,jsx,ts,tsx}'],
    coverageThreshold: {
        global: {
            statements: 75,
            branches: 75,
            functions: 75,
            lines: 75,
        },
    },
    coverageDirectory: 'reports',
    testRegex: '/__tests__/.*\\.(test|spec)\\.tsx?$',
    testMatch: null,
    modulePaths: ['./src'],
}
