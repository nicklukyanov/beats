let myMap;
const init = () => {
 myMap = new ymaps.Map("map", {
   center: [55.752004, 37.576133],
   zoom: 14,
   controls: [],
 });
 
 let coords = [
     [55.759472, 37.583514],
     [55.743149, 37.579792],
     [55.750607, 37.605916],
     [55.759148, 37.620098],
   ],
   myCollection = new ymaps.GeoObjectCollection({}, {
     draggable: false,
     iconLayout: 'default#image',
     iconImageHref: '../img/marker.png',
     iconImageSize: [46, 57],
     iconImageOffset: [-35, -52]
   });
 
 for (let i = 0; i < coords.length; i++) {
   myCollection.add(new ymaps.Placemark(coords[i]));
 }
 
 myMap.geoObjects.add(myCollection);
 
 myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);

