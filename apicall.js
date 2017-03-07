var key= '7ef7ea4bf1194e94a5b181943170203';
var url = 'https://api.apixu.com/v1/current.json?key=';
var apiReq = url+key;


function success(pos){
  var crd = pos.coords;

  console.log('Tu posición actual es')
  console.log(`Latitud: ${crd.latitude}`);
  console.log(`Longitud: ${crd.longitude}`);
  console.log(`Mas o menos ${crd.accuracy} meters.`);
  console.log(apiReq+'&q'+crd.latitude+','+crd.longitude)
  $.getJSON(apiReq+'&q='+crd.latitude+','+crd.longitude, function( data ){
    console.log(data);
    $("#city").text(data.location.name);
    $("#grades h1").text(Math.round(data.current.temp_c));
    $("#description").text(data.current.condition.text);
    $("#forecast").attr("src", "https://"+data.current.condition.icon)
    });
  };

function error(err){
  console.warn(`ERROR(${err.code}: ${err.message})`);
}


navigator.geolocation.getCurrentPosition(success, error);
