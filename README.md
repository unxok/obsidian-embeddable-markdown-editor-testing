# Obsidian Embeddable Markdown Editor Testing

This Obsidian plugin is meant to use Fevol's [Embeddable CM Markdown Editor](https://gist.github.com/Fevol/caa478ce303e69eabede7b12b2323838) implementation to show an issue in Obsidian 1.9+

## What's the problem?

When an Embeddable Markdown Editor (EMDE) is created within a Markdown Note view, when the EMDE is focused it will set `app.workspace.activeEditor` to the EMDE's `owner` property. This is expected.

The issue lies in when an editor other than the EMDE is focused (like the standard note content editor). When this happens, the `emde.owner` permanently remains as `app.workspace.activeEditor` for that view's lifecycle. If the view is destroyed (like navigating to a different note in that same tab), then everything is back to normal until an EMDE is focused again.

## 1.9+ only?

This bug appears to only occur in Obsidian version 1.9.0 or later.

## Please help!

If you think you know why this is happening, please let me know!
