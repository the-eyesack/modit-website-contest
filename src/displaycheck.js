const size = window.outerWidth
console.log(size)

if(size < 1080) {
    document.body.innerHTML = "<h1>This site was meant to be viewed on a larger display. Please try a computer!</h1>"
}