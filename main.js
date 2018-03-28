const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow() {
    win = new BrowserWindow({ 
        width: 800, 
        height: 600,
    })

    //win.loadURL('https://appr.tc/');
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

//    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

// handle self certificate error. 
// app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
//       event.preventDefault()
//       callback(true)
//   })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
