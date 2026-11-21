function Focus(text, pic) {
    if (!document.getElementById) return;
    var box = document.getElementById("desc");
    box.innerHTML = text;

    // NOTE: these images (sy.jpg, ab.jpg, tr.jpg, ox.jpg) are not in your upload.
    // Hover text will still work, background will only change if you add those images.
    if (pic == "pic1")
        document.body.style.background = "url(sy.jpg)";
    if (pic == "pic2")
        document.body.style.background = "url(ab.jpg)";
    if (pic == "pic3")
        document.body.style.background = "url(tr.jpg)";
    if (pic == "pic4")
        document.body.style.background = "url(ox.jpg)";

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}

function LostFocus(text, pic) {
    if (!document.getElementById) return;
    var box = document.getElementById("desc");
    box.innerHTML = text;
    if (pic == "nopic") {
        document.body.style.background = "none";
        document.body.style.backgroundColor = "#121212";
    }
}
