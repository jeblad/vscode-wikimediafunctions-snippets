# VS Code function snippets for Wikimedia

This extension for Visual Studio Code adds snippets for various languages in use
by Wikimedia at its sites running [MediaWiki](http://www.mediawiki.org) software.
Among those languages are Lua, which is used as a templating language by the
[Scribunto extension](https://www.mediawiki.org/wiki/Extension:Scribunto).

## Usage

Type part of a snippet, make sure the highlighted entry is the one you want,
press `tab` or `enter`, and the snippet unfolds. Inside the snippet there are
one or more highlighted areas, those can be replaced, and it is then possible
to tab to next item that can be replaced.

The snippets has a prefix that is the method name, and inside Visual Studio Code
you might type additionel specifiers. Those are typically the class name or the
name of an argument. If nothing else work it is possible to write the snippets
number.

As this is snippets, there is no Intellisense available. This is a bit unfortunate,
as the user must learn the method names. They do although work as a typing aid,
and especially well as an aid to get the arguments right.

## Libraries

Please don't expect this list to be complete! ;)

### Javascript

None

### Lua

Note that this set of snippets will not provide the standard functions for Lua.

- [mw](snippets/mw.json) library; basic functions from Scribunto
- [bit32](snippets/but32.json) library; bit operations
- [frame](snippets/frame.json) library; interacting with Mediawiki
- [hash](snippets/hash.json) library; basic hashing
- [html](snippets/html.json) library; create html tags
- [language](snippets/language.json) library; interact with language objects
- [uri](snippets/uri.json) library; create encoded uri strings
- [ustring](snippets/ustring.json) library; manipulate unicode strings
- [util](snippets/util.json) library; various misc functions

Unfinished standard libraries

- debug library
- math library
- os library
- package library
- string library
- table library

Unfinished Scribunto libraries

- message library (mixed library and object); as an object it can't be properly
 identified unless intellisense works for Lua
- site library; this is a proper library imported as default and can be properly
 identified by prefix alone
- text library; this is a proper library imported as default and can be properly
 identified by prefix alone
- title library (mixed library and object); as an object it can't be properly
 identified unless intellisense works for Lua

### PHP

None

## Installation

1. Install Visual Studio Code 0.10.1 or higher
1. Launch `code`
1. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux)
 or `Cmd`-`Shift`-`P` (OSX)
1. Select `Install Extension`
1. Choose the extension
1. Reload Visual Studio Code
