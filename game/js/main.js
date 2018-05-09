  var Player = function( value, prod, save_file) {
 	this.value = value;
 	this.prod = prod;
 	this.save_file = save_file;
 }
 //global variable
var player = new Player(null,null,null);
var upgrade_box_size = 0;

(function($) {


	$(window).resize(function() {
		set_up_containers();
	});

	$(document).ready(function() {
		set_up_containers();
		start_game("");
		$("#shop-tab-btn").click();
		upgrade_box_size = $('#upgrades-box').css('height');
	});

	function set_up_containers() {
		var width = $(window).width();
		var height = $(window).height();
		$('#title-box').css("margin-bottom", height * 0.5);
		$('#title-box').css("width", width * 0.25);
		$('#title-box').css("margin-right", width * 0.7);
		$('#title-box').css("height", height * 0.4);
		$('#values-box').css("margin-top", height * 0.5);
		$('#values-box').css("width", width * 0.25);
		$('#values-box').css("margin-right", width * 0.7);
		$('#values-box').css("width", height * 0.25);
		$('#upgrades-box').css("height", height * 0.8);
		$('#upgrades-box').css("margin-right", width * 0.25);
		$('#upgrades-box').css("width", width * 0.65);
	}

	function start_game(save_file) {
		updatePlayer(player);
		game_engine(player, 0);
	}

	function game_engine(player, iterations) {
		$('#counter').text(player.value);
		$('#production').text("Divinity:  " + player.prod + ".0x");
		setTimeout(function() {
		
		if( iterations > 30 ) {
				updatePlayer(player);
				game_engine(player, 0);
		}
		else {
			game_engine(player, ++iterations);
			player.value += player.prod;
		}
		}, 100);
	}
	 function updatePlayer(player) {
            var data = { value : player.value, prod : player.prod };
            $.ajax({
                type: "POST", // Method type GET/POST           
                url: "main.php", //Ajax Action url
                data: data,
                ContentType: "application/json; charset=utf-8"
            }).done(function() {
            	 loadJSON(function(json_response) {
            	       var obj = JSON.parse(json_response);
            	       player.value = obj['value'];
            	       player.prod = obj['prod'];
            	       player.save_file = "hello";
            	   });
           	});
        }

$(document).on("click", "#miracle_button", function() {
	player.value += player.prod;
});
$(document).on("click", "#shop-tab-btn", function(event) {
	openCity(event, 'Shop');
});
$(document).on("click", "#upgrade-tab-btn", function(event) {
	openCity(event, 'Upgrades');
});
$(document).on("click", "#settings-tab-btn", function(event) {
	openCity(event, 'Settings');
});
$(document).on("click", "#purchase-btn-one", function() {
	player.prod++;
});
$(document).on("click", "#purchase-btn-two", function() {
	player.prod+=2;
});
$(document).on("click", "#purchase-btn-three", function() {
	player.prod+=3;
});
$(document).on("click", "#purchase-btn-four", function() {
	player.prod+=4;
});




})(jQuery);

//loads a json file asynchronously
function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data/my_data.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    if( upgrade_box_size != 0 ) 
    	$('#upgrades-box').css("height", upgrade_box_size);

    set_up_containers();
}



