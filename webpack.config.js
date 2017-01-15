var webpack= require('webpack');

module.exports = {
    entry: './src/app.tsx',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' ,exclude: /node_modules/},
            {test: /\.css$/,  loader: 'style-loader!css'},
            {test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,loader: 'url?limit=100000@name=[name][ext]'}
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({   
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })  
    ]
}