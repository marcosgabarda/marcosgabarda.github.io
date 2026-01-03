+++
title = "Using PipeWire as audio server"
date = "2026-01-03"

[taxonomies]
tags = ["computers", "debian"]
+++

When I updated to the latest version of Debian, I also started to use **PipeWire**
instead of PulseAudio.

To enable this, this meta-package install all necessary:

```bash
sudo apt install pipewire-audio
```

In addition to this, if you need to restart the audio service, you can use this
command:

```bash
systemctl --user restart wireplumber pipewire pipewire-pulse
```

Source: [Debian Wiki](https://wiki.debian.org/PipeWire#Debian_13)
