module.exports = {
    setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
    collectCoverageFrom: ['client/**/*.js', 'server/**/*.js', '!**/*.story.js', '!node_modules/**'],
}
