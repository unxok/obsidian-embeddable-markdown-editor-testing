# Obsidian Embeddable Markdown Editor Testing

This Obsidian plugin is meant to use Fevol's [Embeddable CM Markdown Editor](https://gist.github.com/Fevol/caa478ce303e69eabede7b12b2323838) implementation to show an issue in Obsidian 1.9+

## What's the problem?

When an Embeddable Markdown Editor (EMDE) is created within a Markdown Note view, when the EMDE is focused it will set `app.workspace.activeEditor` to the EMDE's `owner` property. This is expected.

The issue lies in when an editor other than the EMDE is focused (like the standard note content editor). When this happens, the `emde.owner` permanently remains as `app.workspace.activeEditor` for that view's lifecycle. If the view is destroyed (like navigating to a different note in that same tab), then everything is back to normal until an EMDE is focused again.

## 1.9+ only?

This bug appears to only occur in Obsidian version 1.9.0 or later.

## How can I test this?

For information on changing between early access to public versions, see the [Obsidian Help Docs](https://help.obsidian.md/early-access)

1. Fork or download this repo and place it in the `.obsidian/plugins` directory or your testing vault
2. Open a terminal in the repo root directory and enter `npm run build`
3. Open your testing vault and make sure the browser developer tools are open
4. Within a note, create a codeblock with the language `emde` (e.g. \`\`\`emde `<newline>` \`\`\`)
    - You should see a live-preview editor rendered within the codeblock
5. Click inside the EMDE and type something to ensure you are focused within the EMDE
6. Click the regular note editor (like any line before or after the codeblock within the same note)
7. Run the command `Toggle Reading view` (default `Ctrl + E`)
    - If using Obsidian 1.8 you should see no error
    - If using Obsidian 1.9+ you should see an error
        - This error happens because `app.workspace.activeEditor` is still set to the EMDE's `owner` despite clicking the normal note editor, and trying to toggle reading view within EMDE.owner causes an error

## Please help!

If you think you know why this is happening, please let me know!
