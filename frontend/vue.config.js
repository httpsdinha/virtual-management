const { defineConfig } = require('@vue/cli-service');

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
  devServer: {
    port: 8080,  // Certifique-se de que está na mesma porta que o Electron está buscando
  }
});
