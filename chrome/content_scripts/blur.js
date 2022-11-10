

const blurDiv = document.createElement("div");
blurDiv.style.position = "absolute"
blurDiv.style.left = "0"
blurDiv.style.top = "0"
blurDiv.style.width = "100vw"
blurDiv.style.height = "100vh"
blurDiv.style.zIndex = "2147483647"
blurDiv.style.backdropFilter = "blur(20px)"

blurDiv.onclick = () => blurDiv.style.display = "none"

const emojiDiv = document.createElement("div");
emojiDiv.style.fontSize = "10rem"
emojiDiv.style.textAlign = "center"
emojiDiv.style.gridArea = "c"
emojiDiv.style.marginTop = "45vh"
emojiDiv.innerText = "😒"

blurDiv.appendChild(emojiDiv)
document.body.appendChild(blurDiv)