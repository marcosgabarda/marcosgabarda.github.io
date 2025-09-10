+++
title = "Custom service for dynamic DNS"
date = 2025-09-25

[taxonomies]
tags = ["idea", "note", "dns", "project"]
+++

## 📄 Description

Create a local service in the computer that works as a DNS updater. The router has an
option to configure a custom service for dynamic DNS, therefore, this service could
live in the server, and use the API from DigitalOcean to update the DNS record when
the IP changes.

This [service](https://www.ipify.org/) allows to get the remote IP, using:

```bash
 $ curl 'https://api.ipify.org?format=json'
 ```

 Or clicking [here](https://api.ipify.org/).

## ✅ Development Status

- [x] Idea drafted
- [x] Initial research
- [ ] First prototype
- [ ] Published on the blog
- [ ] Archived / abandoned

## 🏷️ Additional Notes

- Extend to make it compatible with other services.
- Look for european services.
