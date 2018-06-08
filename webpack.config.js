const webpack = require("webpack");

module.exports = {
    context: __dirname + "/app/javascript/packs",

    entry: {
        application: ["application.js", "application.css"],
    },

    output: {
        path: __dirname + "/public/packs",
        //filename: "[name]-[hash].js",
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },

            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },

        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};