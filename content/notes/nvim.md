+++
title = "NeoVIM in Debian"
date = "2026-01-12"

[taxonomies]
tags = ["computers", "debian", "nvim"]
+++

To install the latest version of [NeoVIM](https://neovim.io/) in Debian, using a `.deb`
package, you can download the latest version from:

[https://github.com/neovim/neovim-releases](https://github.com/neovim/neovim-releases)

Also, I personally add this configuration to my `.zshrc`:

```bash
# make nvim default vim editor
alias vim="nvim"
export EDITOR="nvim"
```
