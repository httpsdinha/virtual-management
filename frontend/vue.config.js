const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: 'com.myrestaurant.app',
        productName: 'My Restaurant App',
        directories: {
          output: 'dist_electron'
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_OPTIONS_API__': JSON.stringify(true), // Ativa o Options API
        '__VUE_PROD_DEVTOOLS__': JSON.stringify(false), // Desativa DevTools em produção
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false) // Define a flag que está faltando
      })
    ]
  },
  devServer: {
    port: 8080,  // Certifique-se de que está na mesma porta que o Electron está buscando
  }
});
