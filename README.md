# MindMesh Studios - DHTML Mini Project

A DHTML homepage for MindMesh Studios - a student-powered tech lab.
Hover over the menu to see a description and change the page background.

## Features
- Header with MindMesh Studios branding
- Welcome section: student-powered tech lab for learning, creativity, community impact
- Interactive menu (DHTML):
  - Solutions & Services - hover shows learning tools description + background pic1
  - Projects - hover shows LearnHub, SQL Quest, FlashForge + background pic2
  - Contact - hover shows collaborate / feedback + background pic3
  - About Us - hover shows mission / team + background pic4
- Description row updates on mouse over / mouse out (`Focus()` / `LostFocus()` in `myscript.js`)
- Info box: Darius Jnr Jonah, ICT Sem 2 Student, DLC Lae
- Dark theme + responsive layout

## Tech Used
- HTML
- CSS (`mystyle.css`)
- JavaScript / DHTML (`myscript.js`) - DOM + `onMouseOver` / `onMouseOut`

## Files
```
index.html      (rename your .html file to this for GitHub Pages)
mystyle.css
myscript.js
```

## Fixes Applied
1. **CSS:** Removed empty `background: ;` and invalid `max-width: 900px auto` -> `max-width: 900px`
2. **CSS:** Fixed hover selector typo `#cell_project` -> `#cell_projects` - Projects hover never worked before
3. **CSS:** Fixed `background-color: dimgrey; #181818;` -> `background-color: #181818`
4. **CSS:** Fixed `align: right` (invalid) -> `float: right`, and `border-radius: px` (no number) -> `border-radius: 8px`
5. **HTML:** Fixed `colspan="5"` -> `colspan="4"` (table only has 4 columns)
6. **HTML:** Fixed info box `left: 20` / `top: 800` -> `left: 20px` / `top: 800px`, and `powder blue` -> `powderblue`
7. **HTML:** Removed broken `Images/logo.png` (file not uploaded) - add it back when you have it
8. **JS:** Added `var box` (was global), removed typo comment

## Missing Images (optional)
Hover backgrounds only work if you add these images to the same folder:
- `sy.jpg` (Services), `ab.jpg` (Projects), `tr.jpg` (Contact), `ox.jpg` (About)
- `Images/logo.png` (logo)
Hover TEXT works even without them.

## How to Run
1. Put `index.html`, `mystyle.css`, `myscript.js` in the same folder
2. Double-click `index.html` - it opens in your browser
3. Hover over Solutions & Services / Projects / Contact / About Us

## How to Publish Free with GitHub Pages
1. Create repo `mindmesh-studios-dhtml` on GitHub, upload the 3 files (rename .html to `index.html`)
2. Repo > Settings > Pages > Branch: `main` > Save
3. Your live site: `https://dariusgitt.github.io/mindmesh-studios-dhtml/`

## Author
Darius Jnr Jonah - ICT Sem 2 Student, DLC Lae
MindMesh Studios | DHTML Mini Project
