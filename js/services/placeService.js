'use strick'
// const STORAGE_KEY = 'preferDB'
var gLocations = loadFromStorage('locationDB')


// function setPrefers(color, brithDate, birthTime) {
//     const PREFERS = {
//         color,
//         brithDate,
//         birthTime
//     }
//     console.log('PREFERS:', PREFERS);
//     _saveTStorage(PREFERS, 'pref')
//     changeView(PREFERS.color)

// }


function savePref(pref) {
    const PREFER = pref
    console.log('PREF:', PREFER);
    saveToStorage('preferDB', PREFER)


}



function getPref() {
    return loadFromStorage('preferDB')
}
function getUserLocation() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }

    // One shot position getting or continus watch
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
    // navigator.geolocation.watchPosition(showLocation, handleLocationError);

}

function saveToLocations(title, position) {
    if (gLocations.length) { gLocations = loadFromStorage('locationDB') }

    const location = {
        id: makeId(7),
        title,
        position
    }

    gLocations.push(location)
    console.log('gLocations:', gLocations);
    _saveTStorage(gLocations, 'location')




}

function getLocations() {
    return loadFromStorage('locationDB')
}

function _saveTStorage(val, type) {
    // storge keys:
    const pref = 'preferDB'
    const location = 'locationDB'

    if (type === 'pref') saveToStorage(pref, pref)
    if (type === 'location') saveToStorage(location, gLocations)



    // saveToStorage(STORAGE_KEY, pref)
}

function getLocationById(id) {
    const locationIdx = gLocations.findIndex(function (location) {
        return id === location.id
    })

    return gLocations[locationIdx]
}

function deleteLocation(id) {
    const locationIdx = gLocations.findIndex(function (location) {
        return id === location.id
    })
    gLocations.splice(locationIdx, 1)
    _saveTStorage(gLocations, 'location')


}






