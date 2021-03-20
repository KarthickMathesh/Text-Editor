const electron = require("electron");
const fs = require("fs");
const { app, BrowserWindow, Menu } = require("electron");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    resizable: true,
    movable: true,
    alwaysOnTop: false,
    skipTaskbar: false,
    fullscreen: false, //Fullscreen
    frame: true,
    show: false,
    icon: __dirname + "/img/icon.ico",
    webPreferences: {
      nodeIntegration: true,
      devTools: false,
    },
  });
  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "Save",
          accelerator: "ctrl+S",
        },
        {
          label: "Save As",
          accelerator: "ctrl+shift+S",
        },
        {
          type: "separator",
        },
        {
          label: "Select Language",
          submenu: [
            {
              label: "HTML",
              click: function () {
                win.loadFile("html.html");
              },
            },
            {
              label: "CSS",
              click: function () {
                win.loadFile("css.html");
              },
            },
            {
              label: "Javascript",
              click: function () {
                win.loadFile("javascript.html");
              },
            },
          ],
        },
        {
          type: "separator",
        },
        {
          role: "Close",
        },
      ],
    },
    {
      label: "Edit",
      submenu: [
        {
          role: "undo",
        },
        {
          role: "redo",
        },
        {
          type: "separator",
        },
        {
          role: "cut",
        },
        {
          role: "copy",
        },
        {
          role: "paste",
        },
        {
          role: "selectAll",
        },
      ],
    },
    {
      label: "View",
      submenu: [
        {
          role: "reload",
        },
        {
          role: "forcereload",
        },
        {
          role: "zoomIn",
        },
        {
          role: "zoomOut",
        },
        {
          label: "Actual Size",
          role: "resetZoom",
        },
        {
          role: "togglefullscreen",
        },
        {
          type: "separator",
        },
        {
          label: "Theme",
          submenu: [
            {
              label: "Monokai",
            },
            {
              label: "Chrome",
            },
            {
              label: "Github",
            },
            {
              label: "One Dark",
            },
          ],
        },
      ],
    },
    {
      label: "Help",
      submenu: [
        {
          label: "About",
          click: async () => {
            const { shell } = require("electron");
            await shell.openExternal("https://github.com/KarthickMathesh");
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  win.loadFile("index.html");
  win.maximize();
  win.show();
}
app.whenReady().then(createWindow);
