var path = require('path');


module.exports = {
    entry: {
        'index': './module/index.js'
    },

    externals: {
        'manhattan-character-count': 'manhattan-character-count',
        'manhattan-date-picker': 'manhattan-date-picker',
        'manhattan-effects': 'manhattan-effects',
        'manhattan-essentials': 'manhattan-essentials',
        'manhattan-field-filled': 'manhattan-field-filled',
        'manhattan-sortable': 'manhattan-sortable',
        'manhattan-typeahead': 'manhattan-typeahead'
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
