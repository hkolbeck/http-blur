const blurDiv = document.createElement("div");
blurDiv.style.position = "absolute"
blurDiv.style.left = "0"
blurDiv.style.top = "0"
blurDiv.style.width = "100vw"
blurDiv.style.height = "100vh"
blurDiv.style.zIndex = "2147483647"
blurDiv.style.backdropFilter = "blur(20px)"
blurDiv.style.display = "flex"
blurDiv.style.alignItems = "center"
blurDiv.style.justifyContent = "center"


const emojiDiv = document.createElement("div");
emojiDiv.style.fontSize = "10rem"
emojiDiv.style.textAlign = "center"
emojiDiv.innerText = "😒"

blurDiv.appendChild(emojiDiv)
document.body.prepend(blurDiv)
blurDiv.onclick = () => document.body.removeChild(blurDiv)
