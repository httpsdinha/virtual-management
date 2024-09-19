const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,  // Permite integração com Node.js
      contextIsolation: false // Certifique-se de desativar o isolamento de contexto se for usar nodeIntegration
    }
  });

  // Carregar a URL do servidor de desenvolvimento do Vue.js
  const startURL = isDev
    ? 'http://localhost:8080' // URL do servidor Vue.js em desenvolvimento
    : `file://${path.join(__dirname, '../dist/index.html')}`; // Arquivo buildado para produção

  mainWindow.loadURL(startURL);

  // Abrir o DevTools automaticamente se estiver no modo de desenvolvimento
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
