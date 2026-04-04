var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app.ts'),
    output: {
        path: path.resolve(__dirname, '../docs'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        noParse: [/zone\.js\/dist\/.+/],
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: path.resolve(__dirname, 'tsconfig.json')
                }
            }
        ]
    },
    devtool: 'source-map'
};
