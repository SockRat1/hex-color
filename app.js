function randomColor() {
    let ArrayHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hex = '';
    for (let i = 0; i < 6; i++) {
        let color = Math.floor(Math.random() * ArrayHex.length)
        hex += ArrayHex[color];
    }
    document.getElementById("hex-color").innerHTML = "#" + hex;
    document.getElementById("body").style.backgroundColor = "#" + hex;
}
