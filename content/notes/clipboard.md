+++
title = "Clipboard tool for Wayland and Neovim"
date = "2025-06-08"

[taxonomies]
tags = ["computers", "debian", "nvim"]
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

An example of `nvim` configuration in Lua to make it easier, using the leader key:

```lua
-- Yank into system clipboard
vim.keymap.set({'n', 'v'}, '<leader>y', '"+y') -- yank motion
vim.keymap.set({'n', 'v'}, '<leader>Y', '"+Y') -- yank line

-- Delete into system clipboard
vim.keymap.set({'n', 'v'}, '<leader>d', '"+d') -- delete motion
vim.keymap.set({'n', 'v'}, '<leader>D', '"+D') -- delete line

-- Paste from system clipboard
vim.keymap.set('n', '<leader>p', '"+p')  -- paste after cursor
vim.keymap.set('n', '<leader>P', '"+P')  -- paste before cursor
```
