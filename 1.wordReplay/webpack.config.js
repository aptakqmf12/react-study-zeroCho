const path = require('path');

module.exports = {
    name : 'reactStudy',
    mode : 'development',
    devtool : 'eval',
    resolve : {
        extensions : ['js', 'jsx']
    },
    // 입력
    entry : {
        app : ['./client.jsx'],
    },
    // 룰
    module: {
        rules: [{
            test : /\.jsx?/,
            loader :  'babel-loader',
            options : {
                presets : ['@babel/preset-env', '@babel/preset-react'],
            }
        }]
    },
    // 출력
    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'app.js',
    },
}