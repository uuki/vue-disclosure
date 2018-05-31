// https://vue-test-utils.vuejs.org/ja/guides/testing-SFCs-with-jest.html

module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  'moduleNameMapper': {
    '^@/(.*)$': '<rootDir>/../src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/../node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/../node_modules/vue-jest'
  },
};