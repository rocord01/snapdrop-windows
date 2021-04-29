const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    width: 1000,
    height: 1400,
    icon: 'resources/app/ico.ico',
    title: 'Snapdrop',
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})