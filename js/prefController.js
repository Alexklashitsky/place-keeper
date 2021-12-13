'use strick'
function init() {
    console.log('hi');

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

function save(ev) {
    ev.preventDefault()
    console.log('hi');
    let color = document.querySelector('[name=color]').value
    let fontColor = document.querySelector('[name=fontColor]').value

    let brithDate = document.querySelector('[name=birthDate]').value
    let birthTime = document.querySelector('[name=birthTime]').value
    console.log('fontColor:', fontColor);

    onSavePref(color, fontColor, brithDate, birthTime)
    setUserPrf()



}

function setUserPrf() {
    const PREF = getPref()
    console.log('PREF:', PREF);

    const page = document.querySelector('html')
    page.style.backgroundColor = PREF.backColor
    page.style.color = PREF.fontColor

}


function onSavePref(color, fontColor, birthDate, birthTime) {
    var pref = {
        backColor: color,
        fontColor,
        birthDate,
        birthTime
    }
    // console.log('pref:', pref);
    savePref(pref)


}

