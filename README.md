# Lua snippets for Wikimedia

This extension for Visual Studio Code adds snippets for various languages in use by Wikimedia at its sites running [MediaWiki](http://www.mediawiki.org) software. Among those languages are Lua, which is used as a templating language by the [Scribunto extension](https://www.mediawiki.org/wiki/Extension:Scribunto).

## Usage

Type part of a snippet, typically by writing something like `mw.ustring.byte`, make sure the highlighted entry is the one you want, press `tab` or `enter`, and the snippet unfolds. Inside the snippet there are one or more highlighted areas, these can be replaced, and it is then possible to tab to next item that can be replaced. Sometimes the highlighted area cover the comma before the argument, that happen when the following is an optional argument.

![GitHub Logo](hits.png)

The snippets have a prefix that is the method name, and inside Visual Studio Code you might type additionel specifiers. Those are typically the class name or the name of an argument. It is also possible to write the snippets number, even if it is a bit awkward. Instance methods are found the same way as class methods, but the leading part is skipped on the assumption that it shall be appended to a variable of some sort.

As this is snippets, there is no Intellisense available. That is a bit unfortunate, as the user must learn the method names. They do although work as a typing aid, and especially well as an aid to get the arguments right.

## Libraries

The set of snippets are mostly motivated by what I (the author) have found usefull, so please don't expect the list to be complete!

### Lua

#### Standard libraries

Not included, available through other extensions.

#### Scribunto libraries

Libraries loaded by Scribunto

- [frame](src/lua/mw/frame.json) &mdash; interactions with calls from Mediawiki

Libraries available through the “mw” structure

- [mw](src/lua/mw/mw.json) &mdash; basic functions from Scribunto to interface with Mediawiki
  - [hash](src/lua/mw/hash.json) &mdash; basic hashing
  - [html](src/lua/mw/html.json) &mdash; create and manipulate html tags
  - [language](src/lua/mw/language.json) &mdash; get, create and manipulate language objects
  - [message](src/lua/mw/message.json) &mdash; create and manipulate messages
  - [site](src/lua/mw/site.json) &mdash; access site-specific information
  - [text](src/lua/mw/text.json) &mdash; additional manipulation of strings
  - [title](src/lua/mw/title.json) &mdash; get, create and manipulate title objects
  - [uri](src/lua/mw/uri.json) &mdash; create and manipulate encoded uri strings
  - [ustring](src/lua/mw/ustring.json) &mdash; manipulate unicode strings
  - [wikibase](src/lua/mw/wikibase.json) &mdash; access repo-specific information

Libraries that must be explicitly required

- [libraryUtil](src/lua/libraryUtil.json) &mdash; manipulate arguments

#### Pickle libraries

Libraries that use bootstrapping

- [adapt](src/lua/pickle/frame.json) &mdash; create and manipulate assertions; subjects and expectations
- [frame](src/lua/pickle/frame.json) &mdash; create and manipulate examples; describe, context, and it
- [spy](src/lua/pickle/frame.json) &mdash; create and manipulate spies; carp, cluck, croak, and confess

#### Additional snippets

There a few additional snippets

- [table-class](src/lua/class.json) &mdash; table-based class structures, see [Object Orientation Tutorial](http://lua-users.org/wiki/ObjectOrientationTutorial) (*Simple metatable-based class* and *Inheritance*)

## Installation

1. Install Visual Studio Code 0.10.1 or higher
1. Launch `code`
1. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OSX)
1. Select `Install Extension`
1. Choose the extension
1. Reload Visual Studio Code
