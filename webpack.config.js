var path = require('path');


module.exports = {
    entry: {
        'index': './module/index.js'
    },

    externals: {
        'manhattan-essentials': 'manhattan-essentials',
        'manhattan-sortable': 'manhattan-sortable'
    },

    output: {
        library: 'manhattan-manage',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'umd'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: [
                        [
                            'babel-plugin-transform-builtin-extend',
                            {
                                globals: ['Error']
                            }
                        ]
                    ]
                }
            }
        ]
    },

    stats: {
        colors: true
    }
}
