+++
title = "Fixing Minecraft launcher on Debian 13"
date = "2025-10-12"

[taxonomies]
tags = ["debian"]
+++

I've [updated](https://bsky.app/profile/mgabarda.com/post/3lwrqyjfbps26) recently to
Debian 13 (trixie), and one of the things I have noticed is that is not possible to
install the official **Minecraft** launcher.

The error was:

```
Solving dependencies... ¡Error!
No se pudieron instalar algunos paquetes. Esto puede significar que
usted pidió una situación imposible o, si está usando la distribución
inestable, que algunos paquetes necesarios aún no se han creado o se
han sacado de «Incoming».
La siguiente información puede ayudar a resolver la situación:

Unsatisfied dependencies:
 minecraft-launcher : Depende: libgdk-pixbuf2.0-0 (>= 2.22.0) pero no es instalable
Error: No se pudieron corregir los problemas, usted ha retenido paquetes rotos.
Error: The following information from --solver 3.0 may provide additional context:
   Unable to satisfy dependencies. Reached two conflicting decisions:
   1. minecraft-launcher:amd64=2.1.3 is selected for install
   2. minecraft-launcher:amd64 Depende libgdk-pixbuf2.0-0 (>= 2.22.0)
      but none of the choices are installable:
      [no choices]
```

When I look for the missing package, what I found is:

```bash
sudo apt search libgdk-pixbuf

...

libgdk-pixbuf-2.0-0/stable,now 2.42.12+dfsg-4 amd64 [instalado, automático]
  biblioteca Pixbuf de GDK
```

So, the error is clear! The package `libgdk-pixbuf2.0-0` required by the official
package **has been renamed** to `libgdk-pixbuf-2.0-0`.

This is what I've done to solve the problem!

1. Unpack the original `.deb` package:

```bash
mkdir src/
dpkg-deb -R Minecraft.deb src/
```

2. Open the file `DEBIAN/control`:

```bash
cd src/
nvim DEBIAN/control
```

3. Replace `libgdk-pixbuf2.0-0` with `libgdk-pixbuf-2.0-0`.

4. Create again the `.deb` package:

```bash
dpkg-deb -b --root-owner-group . ~/Minecraft-fixed.deb
```

5. And install it!

```bash
sudo apt install ~/Minecraft-fixed.deb
```
