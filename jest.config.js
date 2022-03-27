module.exports = {
    verbose: true,
    roots: ['./src/'],
    setupFilesAfterEnv: [],
    moduleNameMapper: {
      "^roundel(.*)$": "<rootDir>/src$1"
    }
  }