function loadPalettes() {
    const petti = document.getElementById("petti");
    for (let i = 0; i < allCodes.length; i++) {
        const palette = allCodes[i];

        // Outer Container..Contains link and colors
        let kutti = document.createElement("div");
        kutti.className = "color-content ";

        // Contains colors
        let bag = document.createElement("div");
        bag.className = "color-set";

        for (let j = 0; j < palette.colors.length; j++) {
            const colorDetails = palette.colors[j];
            const color = colorDetails.value;
            const textColor = checkDarkness(color);

            let unda = document.createElement("div");
            unda.className = "color " + i + " " + color;
            unda.style.backgroundColor = color;
            unda.onclick = function () { copyCode(color,textColor); }

            let name = document.createElement("p");
            name.innerHTML = color;
            name.className = "color-detail";
            name.style.backgroundColor = color;
            name.style.color = textColor;
                unda.appendChild(name);

            bag.appendChild(unda);
        }

        // Contains link
        let more = document.createElement("div");
        more.className = "details";
        let link = document.createElement("a");
        link.href = "details.html";
        link.onclick = function () {
            localStorage.setItem("index", i);
        }
        link.target = "_blank";
        link.innerHTML = "👉";
        more.appendChild(link);

        kutti.appendChild(bag);
        kutti.appendChild(more);
        petti.appendChild(kutti);
    }
}

function checkDarkness(rrggbb) {
    const blue = parseInt(rrggbb.substr(5, 2));
    if(blue != null && blue < 60){
        return "#ffffff";
    }else{
        return "#000000";
    }
}

function copyCode(code,txt) {
    navigator.clipboard.writeText(code);
    
    const toast = document.getElementById("toast");
    toast.style.backgroundColor = code;
    toast.style.color = txt;
    toast.style.opacity = 1;
    toast.style.transform = "scale(1,1)";

    toast.innerHTML = code + " is copied";
    
    setTimeout(() => {
        toast.style.opacity = 0;
        toast.style.transform = "scale(0)";
    }, 2000);
}