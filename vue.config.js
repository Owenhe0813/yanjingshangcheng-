module.exports = {
    devServer: {
        proxy: {
            '/': {
                target: 'http://www.api.qsyj.com',
                changeOrigin: true
            }
        }
    }
}