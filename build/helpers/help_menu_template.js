export var helpMenuTemplate = {
    label: 'Help',
    submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('https://github.com/cjerrington/TodoList/') }
        },
        {
          label: "Issues",
          click () { require('electron').shell.openExternal('https://github.com/cjerrington/TodoList/issues') }
        },
        {
          label: "Contact",
          click () { require('electron').shell.openExternal('http://claytonerrington.com/about/') }
        },
    ]
};
