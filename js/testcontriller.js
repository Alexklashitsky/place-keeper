'use strick'
function init() {

}

// function save(ev) {
//     ev.preventDefault()
//     console.log('hi');
//     let color = document.querySelector('[name=color]').value
//     let brithDate = document.querySelector('[name=birthDate]').value
//     let birthTime = document.querySelector('[name=birthTime]').value
//     setPrefers(color, brithDate, birthTime)


// }

// function onHome() {
//     location.href = 'index.html'
// }
// function onUserPrefers() {
//     location.href = 'User Prefers.html'
// }
// function onMap() {
//     location.href = 'map.html'
// }

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {

//         center: { lat: 29.549483365773415, lng: 34.95279066058168 },
//         zoom: 16,
//         mapId: '2e3402a22c68e1bf'

//     })
//     // const myLatlng = { lat, lng }

//     const marker = new google.maps.Marker({
//         // position: myLatlng,
//         map,
//         title: 'mario world',
//     });

//     map.addListener('click', (mapsMouseEvent) => {
//         const currLatlng = mapsMouseEvent.latLng.toJSON();
//         map.setCenter(new google.maps.LatLng(currLatlng));

//         const placeName = prompt('Enter a name:');
//         if (placeName) {
//             const marker = new google.maps.Marker({
//                 position: currLatlng,
//                 map,
//                 title: 'new place',
//             });

//             console.log('currLatlng:', currLatlng);
//             console.log('marker:', marker);
//             saveToLocations(placeName, currLatlng)


//             // const newPlace = addPlace(placeName, currLatlng);
//         }

//     });


// }




// function onMapClick() {
//     var marker = new google.maps.Marker({});
//     new google.maps.event.trigger(marker, 'click');

// }

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }



// function showPosition(position) {
//     var x = position.coords.latitude
//     var y = position.coords.longitude;
//     console.log('x:', x);
//     console.log('y:', y);
//     const currPos = { lat: x, lng: y }
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 14,
//         center: currPos,
//     });


//     const marker = new google.maps.Marker({
//         position: currPos,
//         map: map,


//     });


// // }


// function changeView(color = white) {

//     console.log('color:', color);
//     var test = document.querySelector('html')
//     console.log('test:', test);
//     test.style.backgroundColor = color




// }


// function onMap() {
//     location.href = 'map.html'

// }
// function onGetLocation() {

//     getUserLocation()

// }