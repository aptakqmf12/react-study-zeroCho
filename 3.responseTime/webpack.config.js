const path = require('path');
const webpackRefresh = require('@pmmmwh/react-refresh-webpack-plugin');
const { webpack } = require('webpack');


module.exports = {
    name : 'responseTime',
    mode : 'development',
    devtool : 'eval',
    resolve : {
        extensions : ['.js', '.jsx']
    },
    // 입력
    entry : {
        app : [path.resolve(__dirname, './index.js')],
    },

    module: {
        rules: [{
            test : /\.jsx?/,
            loader :  'babel-loader',
            options : {
                presets : [
                    ['@babel/preset-env', {
                        targets : {
                            browsers : ['> 0.1% in KR', 'last 2 chrome versions'],  //browserlist 사이트 참고
                        },
                        debug : true,
                    }], 
                    '@babel/preset-react',
                ],
                plugins : [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
                
            }
        }]
    },
    // 웹팩기능 외의 추가작업
    plugins : [
        new webpackRefresh()
    ],
    //출력
    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'app.js',
        publicPath : '/dist',
    },
    devServer: { 
        devMiddleware : { publicPath : '/dist'},
        static : { directory : path.resolve(__dirname)},
        hot: true,
    },
}