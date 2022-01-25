// @ts-check
const { app, BrowserWindow, dialog } = require("electron")
const { startServer } = require("./server")

/** @type {BrowserWindow | undefined} */
let win

async function main() {
  await app.whenReady()
  const { url } = await startServer()

  win = new BrowserWindow()
  await win.loadURL(url)
}

main().catch((error) => {
  dialog.showErrorBox("Error", error.stack || error.message || String(error))
})
