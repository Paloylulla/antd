module.exports = {
    module: {
      rules: [
        {
          test   : /\.less$/,
          loader: 'less-loader',
          options: {
            modifyVars: { // modify theme variable
              'primary-color': 'red',
              'link-color': '#1DA57A',
              'border-radius-base': '10px'
            },
            javascriptEnabled: true
          }
        }
      ]
    }
  };