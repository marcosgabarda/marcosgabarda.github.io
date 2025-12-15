+++
title = "fastfetch"
date = "2025-06-08"

[taxonomies]
tags = ["computers", "debian"]
+++

I use [fastfetch](https://github.com/fastfetch-cli/fastfetch) as alternative to
neofetch to gather system information.

1. Download the latest `.deb` package released from [here](https://github.com/fastfetch-cli/fastfetch/releases).

2. Install the package:

```bash
sudo apt install ./fastfetch-linux-amd64.deb
```

My current system information:

```
~
❯ fastfetch
        _,met$$$$$gg.          marcos@guybrush
     ,g$$$$$$$$$$$$$$$P.       ---------------
   ,g$$P""       """Y$$.".     OS: Debian GNU/Linux 12 (bookworm) x86_64
  ,$$P'              `$$$.     Host: MS-7916 (1.0)
',$$P       ,ggs.     `$$b:    Kernel: Linux 6.12.32+bpo-amd64
`d$$'     ,$P"'   .    $$$     Uptime: 1 hour, 14 mins
 $$P      d$'     ,    $$P     Packages: 3538 (dpkg), 16 (flatpak)
 $$:      $$.   -    ,d$$'     Shell: zsh 5.9
 $$;      Y$b._   _,d$P'       Display (AORUS FO27Q2): 2560x1440 @ 120 Hz in 27" [External]
 Y$$.    `.`"Y$$$$P"'          DE: KDE Plasma 5.27.5
 `$$b      "-.__               WM: KWin (Wayland)
  `Y$$b                        WM Theme: Brisa
   `Y$$.                       Theme: Breeze (Dark) [Qt], Breeze [GTK2/3]
     `$$b.                     Icons: breeze-dark [Qt], breeze-dark [GTK2/3/4]
       `Y$$b.                  Font: Noto Sans (10pt) [Qt], Noto Sans (10pt) [GTK2/3/4]
         `"Y$b._               Cursor: breeze (24px)
             `""""             Terminal: kitty 0.42.1
                               Terminal Font: HackNF-Regular (11pt)
                               CPU: Intel(R) Core(TM) i7-4790K (8) @ 4.00 GHz
                               GPU: AMD Radeon RX 590 Series [Discrete]
                               Memory: 5.82 GiB / 15.57 GiB (37%)
                               Swap: 0 B / 17.12 GiB (0%)
                               Disk (/): 43.90 GiB / 898.96 GiB (5%) - ext4
                               Disk (/mnt/storage): 14.07 TiB / 18.19 TiB (77%) - fuseblk
                               Local IP (enp4s0): 192.168.1.214/24
                               Locale: es_ES.UTF-8
```
