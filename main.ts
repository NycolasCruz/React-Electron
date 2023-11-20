// eslint-disable-next-line @typescript-eslint/no-var-requires
const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({ show: false });

	mainWindow.loadURL("http://localhost:8000");

	mainWindow.once("ready-to-show", () => {
		mainWindow.maximize();
		mainWindow.show();
	});
}

app.whenReady().then(() => {
	createWindow();

	// mac os
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// windows and linux
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
