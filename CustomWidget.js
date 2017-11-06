var lstCities;
var lstStyle;
var itemStyle;
class CustomWidget {
  constructor( insertDiv, textStyle, listStyle, citiesList, itmStyle) {
  	this.textStyle = textStyle;
  	lstStyle = listStyle;
  	lstCities = citiesList;
  	itemStyle = itmStyle;
  	this.insertDiv = insertDiv;
  	this.strElem = '<input id="AnswerInput" type="text" name="value1" placeholder="TYPE IN YOUR CITY" style="' + this.textStyle + '"><div id="lstCity"></div>';
  	document.getElementById( insertDiv).innerHTML = this.strElem;
  	$("#AnswerInput").keyup(function(event){
  		$("p").remove(".city");
  		$("div").remove(".city");
		var cityName = $("#AnswerInput").prop("value");
		if(cityName == "") return;
  		for( var i = 0; i < lstCities.length; i++){
  			var strCityName = lstCities[i].full;
  			strCityName = strCityName.toUpperCase();
  			if( strCityName.indexOf(cityName.toUpperCase()) != -1 ){
  				$("#lstCity").append('<p class="city" style="' + lstStyle + '">'+ strCityName + '</p>');
  			}
  		}
  		$(".city").unbind("click").click(function(){
  			cityNameClicked($(this).html());
  		});
  	});
  }
}

function cityNameClicked(__city_name){
	var result = lstCities.filter(function(x){ return x.full.toUpperCase() == __city_name.toUpperCase();});
	// var result = $.grep(lstCities, function(e){ return e.full == __city_name; });
//	console.log(result);
	var a = result[0];
	$("p").remove(".city");
	for(var b='<div class="city"><h4 style="' + lstStyle + '">'+a.full+"</h4><ul style='list-style-type: none;'>",c=0;c<a.links.length;c++)
	    b+=loadStation(a.links[c]);
	b+="</ul></div>";
	$("#lstCity").append( b);
}
function loadStation(a){
	return'<li><a href="'+a.link+'" target="_blank" style="' + itemStyle + '">'+a.station+"</a></li>";
}