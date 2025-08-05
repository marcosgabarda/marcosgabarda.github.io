+++
title = "Clipboard tool for Wayland"
date = "2025-06-08"

[taxonomies]
tags = ["debian", "nvim"]
+++

In my eternal journey to learn **nvim** and to use more the terminal, I would need to
share the clipboard between the system and nvim itself.

To be able to do that on my Debian 12, with Wayland and KDE, I need to install the
following package:

```
sudo apt install wl-clipboard
```

And then, using the `+` register in normal mode the keymap `"+y` will copy text to the
clipboard. And `"+p` will paste text from the clipboard.

An example of `vim` configuration to make it easier:

```
" Copy/paste using system clipboard
nnoremap gy "+y
xnoremap gy "+y
nnoremap gp "+p
xnoremap gp "+p
```
