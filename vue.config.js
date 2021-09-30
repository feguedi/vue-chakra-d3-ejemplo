const { ChakraLoaderPlugin } = require('chakra-loader')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-chakra-d3'
        : '/',
    outputDir: 'docs',
    configureWebpack: {
        plugins: [
            new ChakraLoaderPlugin(),
        ],
    },
}