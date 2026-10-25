# joliehoang.github.io

Personal site of Dung (Jolie) Hoang. Plain HTML + CSS, no build step.

- Edit text in `index.html`; styles live in `style.css`.
- **Paper figures:** save each image at the path shown in its placeholder (e.g. `assets/figures/sva-overfitting.png`); it appears automatically.
- **Before going live:** remove `class="draft"` from `<body>` (hides any figure placeholders you haven't filled), fill in the email/LinkedIn TODOs, and add `assets/Hoang_CV.pdf`.
- Preview locally: `python3 -m http.server 8765` in this folder, then open http://localhost:8765.

## Going live
Live at https://joliehoang.github.io (repo: joliehoang/joliehoang.github.io). The old preview copy is joliehoang22/joliehoang.github.io (remote "preview").
1. Transfer the repo to the `joliehoang` account (Settings → Danger Zone → Transfer), keeping the name `joliehoang.github.io`.
2. Make it public (Settings → Danger Zone → Change visibility).
3. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.

## Languages (EN / VI / 中文)
- English text lives in `index.html`. Every translatable element has a `data-i18n="tNN"` key.
- Vietnamese and Simplified Chinese live in `i18n.js` under the same keys. They are generated from a script in Claude's scratch space, but you can edit `i18n.js` directly.
- **When you change English text, update the same key in `i18n.js`.** Missing keys fall back to English. Publication entries and animation labels stay in English.
- Share a language directly with `?lang=vi` or `?lang=zh`.
