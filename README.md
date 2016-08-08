TodoList
==============
Minimalistic yet comprehensive TodoList. This project was inspired by Szwacz's [Electron Boilerplate](https://github.com/szwacz/electron-boilerplate), [FromScratch](https://fromscratch.rocks), and [Electron](http://electron.atom.io). I wanted an HTML TodoList that I made, but could use it as a desktop application. Since HTML, jQuery, AngularJS, PHP, and more have all been insirations to my coding career. 

## Changes or things to do?
I have made a [TodoList](https://github.com/cjerrington/TodoList/blob/master/Todo.md) for my TodoList, or you can create an [issue](https://github.com/cjerrington/TodoList/issues).

# Quick start
The only development dependency of this project is [Node.js](https://nodejs.org). So just make sure you have it installed.
Then type few commands known to every Node developer...
```
git clone https://github.com/cjerrington/TodoList.git
cd TodoList
npm install && npm start
```
... and boom! You have TodoList Running!

Of course if you don't want to open Terminal all the time, there are [releases too](https://github.com/cjerrington/TodoList/releases)

# How to read the files?
I have adopted [Jakub Szwacz](https://github.com/szwacz)'s Boilerplate mentioned above, I have included some of his quick start guide incase you want to edit some of the app to to undestand how to get this up and running. 

# Structure of the project

There are **two** `package.json` files:  

#### 1. For development
Sits on path: `electron-boilerplate/package.json`. Here you declare dependencies for your development environment and build scripts. **This file is not distributed with real application!**

Also here you declare the version of Electron runtime you want to use:
```json
"devDependencies": {
  "electron-prebuilt": "^1.2.0"
}
```

#### 2. For your application
Sits on path: `electron-boilerplate/app/package.json`. This is **real** manifest of your application. Declare your app dependencies here.

#### OMG, but seriously why there are two `package.json`?
1. Native npm modules (those written in C, not JavaScript) need to be compiled, and here we have two different compilation targets for them. Those used in application need to be compiled against electron runtime, and all `devDependencies` need to be compiled against your locally installed node.js. Thanks to having two files this is trivial.
2. When you package the app for distribution there is no need to add up to size of the app with your `devDependencies`. Here those are always not included (because reside outside the `app` directory).

# Development

### Installation

```
npm install
```
It will also download Electron runtime, and install dependencies for second `package.json` file inside `app` folder.

### Starting the app

```
npm start
```

# Making a release

**Note:** There are various icon and bitmap files in `resources` directory. Those are used in installers and are intended to be replaced by your own graphics.

To make ready for distribution installer use command:
```
npm run release
```
It will start the packaging process for operating system you are running this command on. Ready for distribution file will be outputted to `dist` directory.

You can create Windows installer only when running on Windows, the same is true for Linux and OSX. So to generate all three installers you need all three operating systems.

All packaging actions are handled by [electron-builder](https://github.com/electron-userland/electron-builder) module. See docs of that tool if you want to customize something or just see what's available.

# License

The MIT License (MIT)

Copyright (c) 2015-2016 Clayton Errington

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
