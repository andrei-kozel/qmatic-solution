module.exports = {
  presets: [
    [
      '@babel/preset-env'
    ],
    {
      env: {
        test: {
          plugins: ["@babel/plugin-transform-runtime",  "require-context-hook"]
        }
      }
    }
  ],
  plugins:[
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      'transform-es2015-modules-commonjs',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-optional-chaining'
  ],
}
