export var helpMenuTemplate = {
    label: 'Help',
    submenu: [
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('http://electron.atom.io') }
        },
        {
          label: "Issues",
          click () { require('electron').shell.openExternal('http://electron.atom.io') }
        },
        {
          label: "Contact", 
          click () { require('electron').shell.openExternal('http://electron.atom.io') }
        },
    ]
};
