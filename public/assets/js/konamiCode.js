const codes = [
    {
        sequence: ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"],
        href: "https://www.youtube.com/watch?v=boaDNMrpLOw",
        index: 0,
    },
    {
        sequence: ["v", "i","d","h","a","a","t"],
        href: "https://www.vidha.at",
        index: 0,
    },
    {
        sequence: ["s", "u","r","s","k","i","t"],
        href: "https://www.youtube.com/watch?v=2ZEBkdGJnl4",
        index: 0,
    },
    {
        sequence: ["s", "u","s","s","y","b","a","k","a"],
        href: "https://www.youtube.com/watch?v=Ru_j8oRi-rY",
        index: 0,
    }
]

let sequenceIndex = 0;

document.addEventListener("keydown", (e) => {
    
    const ignoredChars = [" "];
    if (ignoredChars.includes(e.key)) return;

    codes.forEach((code) => {
        if (code.sequence[code.index] === e.key) {
            code.index += 1;
            if (code.index === code.sequence.length) {
                location.href = code.href;
            }
        } else {
            code.index = 0;
        }
    })
});