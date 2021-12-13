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

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {

        center: { lat: 29.549483365773415, lng: 34.95279066058168 },
        zoom: 16,
        mapId: '2e3402a22c68e1bf'

    })
    // const myLatlng = { lat, lng }

    const marker = new google.maps.Marker({
        // position: myLatlng,
        map,
        title: 'mario world',
    });

    map.addListener('click', (mapsMouseEvent) => {
        const currLatlng = mapsMouseEvent.latLng.toJSON();
        map.setCenter(new google.maps.LatLng(currLatlng));

        const placeName = prompt('Enter a name:');
        if (placeName) {
            const marker = new google.maps.Marker({
                position: currLatlng,
                map,
                title: 'new place',
            });

            console.log('currLatlng:', currLatlng);
            console.log('marker:', marker);
            saveToLocations(placeName, currLatlng)
            renderLocationTable()


            // const newPlace = addPlace(placeName, currLatlng);
        }

    });


}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}



function showPosition(position) {
    var x = position.coords.latitude
    var y = position.coords.longitude;
    console.log('x:', x);
    console.log('y:', y);
    const currPos = { lat: x, lng: y }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        mapId: '2e3402a22c68e1bf',

        center: currPos,
    });


    const marker = new google.maps.Marker({
        position: currPos,
        map: map,


    });


}



function setUserPrf() {
    const PREF = getPref()
    console.log('PREF:', PREF);

    const page = document.querySelector('html')
    page.style.backgroundColor = PREF.backColor
    page.style.color = PREF.fontColor

}

function renderLocationTable() {
    const locations = getLocations()
    console.log('locations:', locations);
    const elLocationTable = document.querySelector('.locationTab')


    let strHtml = locations.map((currLocution) => {
        return `<tr>

        <td data-id="${currLocution.id}"> <input type="checkbox"></input></td> 
        <td><button data-id="${currLocution.id}" onclick="changeLocation('${currLocution.id}')">GO THERE!</button></td>
        <td><button data-id="${currLocution.id}" onclick="onDeleteLocation('${currLocution.id}')">DELETE!</button></td>
        <td data-id="${currLocution.id}" > ${currLocution.title} </td><br>
        
      

        </tr>`
    })
    elLocationTable.innerHTML = strHtml.join('')


}

function changeLocation(id) {
    const location = getLocationById(id)
    const lat = location.position.lat
    const lng = location.position.lng
    currPos = location.position
    console.log('lat:', lat);
    console.log('lan:', lng);

    map = new google.maps.Map(document.getElementById('map'), {

        center: { lat: lat, lng: lng },
        zoom: 16,
        mapId: '2e3402a22c68e1bf'

    })
    const marker = new google.maps.Marker({
        position: currPos,
        map,
        title: 'new place',
    });


}

function onDeleteLocation(id) {
    deleteLocation(id)
    console.log('hi');
    renderLocationTable()
}



{/* <label><input type="checkbox"> check</label> */ }

