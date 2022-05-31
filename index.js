const {app, BrowserWindow, ipcMain } = require("electron");

ipcMain.on("setJLPTLevel", ( event, JLPTLevel) => {
    global.JLPTLevel = JLPTLevel;
});

function createWindow(){
    let win = new BrowserWindow({width: 800, height: 600, webPreferences:{nodeIntegration: true}});
    win.loadFile("index.html");
}

app.on("ready", createWindow);