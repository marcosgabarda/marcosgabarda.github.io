+++
title = "[WIP] Debian 12 instalation guide for my PC"
date = "2025-06-25"

[taxonomies]
tags = ["personal", "debian"]
+++

This is a guide for myself with all the steps that I have to follow in order to
install and configure Debian 12 in my old but reliable PC.

## Pre-requisites

First of all, to make sure everything works, update and upgrade packages, and install
`vim` to edit files:

```bash
sudo apt update
sudo apt upgrade
```

Basic packages:

```bash
sudo apt install vim
sudo apt install lua5.4 luarocks
sudo apt install make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev curl wget git libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
```

## KDE Plasma and Wayland

Then, install my favorite desktop environment, KDE:

```bash
sudo apt install plasma-workspace-wayland
sudo apt install kde-full
```

## Enable backports

To be able to have 120Hz in my monitor, I need to

```bash
sudo vim /etc/apt/sources.list.d/debian-backports.sources
```

Enable backports repositories, the file should look like:

```
Types: deb deb-src
URIs: http://deb.debian.org/debian
Suites: stable-backports
Components: main
Enabled: yes
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
```

Update the sources:

```bash
sudo apt update
sudo apt upgrade
```

### Install kernel and mesa from backports

With the backports activated, then I have to install the Linux kernel and the mesa
drivers:

```bash
sudo apt install -t bookworm-backports linux-image-amd64
sudo apt install -t bookworm-backports mesa-utils
sudo apt install firmware-amd-graphics
```

## Install NTP for date and time

By default, the time and date are not updated using Internet. To be able to do that,
I have to install `ntp`:

```bash
sudo apt install ntp
sudo systemctl status ntp
```

## RAID

In my PC I have a set of hard disk configured as a RAID 5, using the capabilities of
my motherboard.

To mount it, first I have to create mount point:

```
sudo mkdir -p /mnt/storage/
sudo chown marcos:marcos /mnt/storage/
```

Check disks:

```bash
sudo apt install fdisk
sudo fdisk -l
```

The RAID volume is:

```
...
Disco /dev/md126: 18,19 TiB, 20003922378752 bytes, 39070160896 sectores
Unidades: sectores de 1 * 512 = 512 bytes
Tamaño de sector (lógico/físico): 512 bytes / 4096 bytes
Tamaño de E/S (mínimo/óptimo): 65536 bytes / 327680 bytes
Tipo de etiqueta de disco: gpt
Identificador del disco: 5A97A530-5A8B-499C-9B06-4A9F380B63F4
...
```

Install the NTFS driver:

```bash
sudo apt install ntfs-3g
sudo vim /etc/fstab
```

Append to fstab:

```
# Mount RAID
/dev/md126p2 /mnt/storage ntfs-3g defaults,uid=1000,gid=1001,umask=002,windows_names,locale=en_US.UTF-8	0	2
```

## Flatpack

Some applications are more useful installed from Flatpack, like Telegram.

```bash
sudo apt install flatpak
sudo apt install plasma-discover-backend-flatpak
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

## Development environments

### Node and Pyright

Used by NeoVIM to be able to use `pyright` as LSP.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/i
nstall.sh | bash
```

Add the following to the bash/zsh init script:

```bash
# nvm for node versions
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Install the latest version of Node LTS:

```bash
nvm use --lts
nvm install 22
```

Install pyright:

```
npm i -g pyright
```

### `pipx`

Install `pipx` from backports:

```bash
sudo apt install -t bookworm-backports pipx
```

## Enable SSH server

```bash
sudo apt install openssh-server mosh
```

Mosh is used to improve the connectivity from mobile clients (like Blink). Remember to
open the ports `60000:61000/udp` for `mosh` compatibility.
