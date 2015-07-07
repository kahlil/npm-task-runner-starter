<h1 class="no-break center">Build Tool</h1>
<h1 class="center">Shmuild Tool</h1>
<h2 class="no-break center"><em>npm</em> is best</h2>

---

*Kahlil* Lechelt

---

Frontend Architect *1&1*  
Co-Host *Descriptive* (http://descriptive.audio)

---

# *npm* is best?

---

# Russel Peters about the music in *Dance Dance Revolution*

<p class="center" style="margin-top: 2rem">
  <video src="russel.mp4" controls></video>
</p>

---

# What do I *really* think?

---

![](iz-best.jpg)

---

But! *Difference.*

---

Show of *hands*!

---

Grunt

---

Gulp

---

*npm*

---

make

---

Nothing

---

The Plan

---

asset building &bullet;
*watch* &bullet;
serve &bullet;
*livereload* &bullet;
clean &bullet;
*parallelism* &bullet;
custom tasks &bullet;
*deployment* &bullet;
piping &bullet;
your *own* command line tool

---

package.json

---

```
npm init
```
---

How to `npm init`

<p class="center">
  <video src="npm-init.mov" width="700" controls></video>
</p>

---

# The *`scripts`* Field

---

# *3* Things

---

# 1.

---
<h1>*Keys* & Commands</h1>
---

```
"scripts": {
  "<key>": "<command>"
}
```

---

```
npm run <key>
```
---

# 2.

---

# Node Packages *with CLI* only need to be installed *locally*

---

# 3.

---

# package.json *fields* are exposed as *enviroment variables*

---

```
process.env.npm_package_name

process.env.npm_package_config_port
```
---

# Simple Example

---

```
"demo": "node tasks/demo.js"
```

---

demo.js:

```
'use strict';

var env = process.env;

console.log('package name:', env.npm_package_name);
console.log('package config port:', env.npm_package_config_port);
```

---

# Demo Time! *\o/*

---
