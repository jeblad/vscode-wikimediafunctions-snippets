# Wikimedia Lua function snippets for VS Code

This extension for Visual Studio Code adds snippets for various languages in use by Wikimedia at its sites running [MediaWiki](http://www.mediawiki.org) software. Among those languages are Lua, which is used as a templating language by the [Scribunto extension](https://www.mediawiki.org/wiki/Extension:Scribunto).

## Usage

Type part of a snippet, make sure the highlighted entry is the one you want, press `tab` or `enter`, and the snippet unfolds. Inside the snippet there are one or more highlighted areas, those can be replaced, and it is then possible to tab to next item that can be replaced.

The snippets has a prefix that is the method name, and inside Visual Studio Code you might type additionel specifiers. Those are typically the class name or the name of an argument. If nothing else work it is possible to write the snippets number.

As this is snippets, there is no Intellisense available. This is a bit unfortunate, as the user must learn the method names. They do although work as a typing aid, and especially well as an aid to get the arguments right.

## Libraries

Please don't expect this list to be complete! ;)

### Lua

Note that this set of snippets will not provide the standard functions for Lua.

- mw; basic functions from Scribunto
- frame; functions for interacting with Mediawiki
 
## Installation

1. Install Visual Studio Code 0.10.1 or higher
2. Launch `code`
3. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OSX)
4. Select `Install Extension`
5. Choose the extension
6. Reload Visual Studio Code
