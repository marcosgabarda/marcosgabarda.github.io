+++
title = "GPS Notes"
date = 2025-11-29

[extra]
tags = ["idea", "note", "hardware"]
+++

## 📄 Description

Some times, when you are driving, you see interesting places next to the road, but it's
complicated (or impossible) later to remember where was that places. Therefore, the
idea is to build a systems using:

- a button
- EPS32 micro controller
- GPS module
- a battery

So you put the button next to the steering wheel, so you press it and the GPS position
and time stamp is saved.

## ✅ Development Status

- [x] Idea drafted
- [ ] Initial research
- [ ] First prototype
- [ ] Published on the blog
- [ ] Archived / abandoned

## 🏷️ Additional Notes

There are a couple of things to solve:

- gap between the moment you press the button and when you have the coordinates
- where to save the data
- how to synchronize the data with some external notes app

For example: the micro controller could be connected with the mobile and use that
connection to send the information.
