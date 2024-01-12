const { app, BrowserWindow, ipcMain } = require('electron/main')

const { exec } = require('child_process');


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
      }
  })

  win.loadFile('dist/ngxangular/index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
    // win.webContents.openDevTools()
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Listen for the IPC message to open an external app
ipcMain.on('open-external-app', (event, arg) => {
  // Replace 'path/to/external/app' with the actual path or command
  exec('path/to/external/app', (err, stdout, stderr) => {
    if (err) {
      // handle error
      console.error('Error opening external app:', err);
      return;
    }
    console.log('External app opened successfully');
  });
});