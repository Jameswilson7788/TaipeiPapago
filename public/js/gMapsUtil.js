function initialize() {
			    var mapProp = {
			    center:new google.maps.LatLng(24.1005,120.710088),
			    zoom:5,
			    mapTypeId:google.maps.MapTypeId.ROADMAP
			    };
				var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
				//標記
				var marker = new google.maps.Marker({
					position:new google.maps.LatLng(24.1005,120.710088),
					animation:google.maps.Animation.BOUNCE,
				});
				var marker2 = new google.maps.Marker(
					{position:new google.maps.LatLng(20,100),
					animation:google.maps.Animation.BOUNCE}
				);
			    marker.setMap(map);
			    marker2.setMap(map);
			    //文字敘述    
				var infowindow = new google.maps.InfoWindow({content:'瑋哥的秘密基地'});
				infowindow.open(map,marker);
				
			} 
			
			
			google.maps.event.addDomListener(window, 'load', initialize);
			
function weigoMaps(options){
	
}
