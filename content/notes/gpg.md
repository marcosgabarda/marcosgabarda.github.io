+++
title = "Managing GPG keys"
date = "2026-01-13"
updated = "2026-01-14"

[taxonomies]
tags = ["computers", "gpg"]
+++

Long time ago, I tried to use **GnuPG** for singing and encrypting emails. I remember
uploading some keys to the [MIT PGP Public Key Server](https://pgp.mit.edu/) and they
still exists there!

Now, I wanted to start to use it again, and keep a healthy and usable public key.

## Create a public/private key

```
$ gpg --expert --full-gen-key
```

I used this values for creating the key:

- ECC (sign and encrypt)
- Curve 25519
- 2 years of expiration time

## List available keys

Once the key pair is created, you can list the available keys:

```
$ gpg --list-sigs
/home/marcos/.gnupg/pubring.kbx
-------------------------------
pub   ed25519 2026-01-13 [SC] [caduca: 2028-01-13]
      0AB25347D0BC94600DE1548B382154DEBCB48AF4
uid        [  absoluta ] Marcos Gabarda <hey@marcosgabarda.com>
sig 3        382154DEBCB48AF4 2026-01-13  [autofirma]
sub   cv25519 2026-01-13 [E] [caduca: 2028-01-13]
sig
```

In this case:

- `0AB25347D0BC94600DE1548B382154DEBCB48AF4` is the fingerprint.
- `382154DEBCB48AF4` is the key ID.

## Send public key to a public keyserver

The public key can be sent to a public keyserver. By default,
`hkps://keys.openpgp.org` is used as keyserver:

```
$ gpg --send-key 382154DEBCB48AF4
gpg: enviando clave 382154DEBCB48AF4 a hkps://keys.openpgp.org
```

It's possible to send the public key to a different one:

```
$ gpg --keyserver hkps://keyserver.ubuntu.com --send-key 382154DEBCB48AF4
gpg: enviando clave 382154DEBCB48AF4 a hkps://keyserver.ubuntu.com
```
