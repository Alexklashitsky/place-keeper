'use strick'
function init() {
    setUserPrf()
}

function onHome() {
    location.href = 'index.html'
}
function onUserPrefers() {
    location.href = 'User Prefers.html'
}
function onMap() {
    location.href = 'map.html'
}



function setUserPrf() {
    const PREF = getPref()
    console.log('PREF:', PREF);

    const page = document.querySelector('html')
    page.style.backgroundColor = PREF.backColor
    page.style.color = PREF.fontColor

}
