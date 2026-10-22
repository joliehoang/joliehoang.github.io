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
