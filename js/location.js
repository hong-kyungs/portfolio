var mapContainer = document.getElementById("map");

const branch_btns = document.querySelectorAll(".branch li");

let drag = true;
let zoom = true;

var mapOption = {
    center: new kakao.maps.LatLng(37.5101935, 127.0585824),
    level: 3
};


var map = new kakao.maps.Map(mapContainer, mapOption);

var markerOptions = [
    {
        title : "Main",
        latlng : new kakao.maps.LatLng(37.5101935, 127.0585824),
        button : branch_btns[0]
    },
    {
        title : "Gyunggi",
        latlng : new kakao.maps.LatLng(37.624699, 127.3552654),
        button : branch_btns[1]
    },
    {
        title : "Gangneung",
        latlng : new kakao.maps.LatLng(37.6960049, 128.8918872),
        button : branch_btns[2]
    }
];

var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
for(let i = 0; i < markerOptions; i++){
    var imageSize = new kakao.maps.Size(24, 35);    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    new kakao.maps.Marker({
        map : map,
        position: markerOptions[i].latlng,
        title : markerOptions[i].title,
        image : markerImage
    });

    markerOptions[i].button.onclick = (e)=>{
        e.preventDefault();

        for(let k=0; k<markerOptions.length; k++){
        markerOptions[k].button.classList.remove("on");
        }
        markerOptions[i].button.classList.add("on");

        moveTo(markerOptions[i].latlng);
    }
}


function moveTo(target){
    var moveLatLon = target;
    map.setCenter(moveLatLon);
}