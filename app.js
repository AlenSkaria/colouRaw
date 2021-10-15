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

            let unda = document.createElement("div");
            unda.className = "color " + i + " " + color;
            unda.style.backgroundColor = color;

            let name = document.createElement("p");
            name.innerHTML = color;
            name.className = "color-detail";
            unda.appendChild(name);

            bag.appendChild(unda);
        }

        // Contains link
        let more = document.createElement("div");
        more.className = "details";
        let link = document.createElement("a");
        link.href = "details.html";
        link.onclick = function () {
            localStorage.setItem("index",i);
        }
        link.target = "_blank";
        link.innerHTML = "👉";
        more.appendChild(link);

        kutti.appendChild(bag);
        kutti.appendChild(more);
        petti.appendChild(kutti);
    }
}