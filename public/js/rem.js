var html = document.querySelector('html')

function resizeFont() {
    var aWidth = html.clientWidth;
    html.style.fontSize = aWidth / 10 + 'px'
    console.log(aWidth)
}

resizeFont()
window.onresize = resizeFont;