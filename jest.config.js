module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      compiler: "typescript",
    },
  },
  testRegex: "(src/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$",
  setupFiles: ["./src/core/setupTests.ts"],
  setupTestFrameworkScriptFile: "./src/core/setupTestFrameworkScript.ts",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "^@core/(.*)$": "<rootDir>/src/core/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@static/(.*)$": "<rootDir>/static/$1",
  },
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  coverageReporters: ["text", "json", "lcov"],
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["^.+\\.d\\.ts$"],
  watchman: false,
};
