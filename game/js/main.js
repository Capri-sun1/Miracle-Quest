var last_float = 10;

var vals = {
  "energy":0,"prod":0, "click":1, "followers":0, "loss":0, "corruption":0, "achievement_multiplier":1.00,
  "stats" :{
     "time_played":0, 
     "total_energy":0, 
     "total_followers":0,
     "max_prod":0,
     "max_loss":0,
     "miracle_clicks":0,
     "ascension_clicks":0,
     "miracle_click_energy":0,
     "ascension_click_energy":0,
  },
  "clickers":{
            "purchase1":{
                "label":"Online Blogger",
                "description":"An inspired teenager to spread the word.",
                "amount":0,
                "risk":0.05,
                "output":0.2,
                "base_cost":20,
                "cost":20,
                "unlock_rps":0,
                "unlocked":true,
            },
            "purchase2":{
                "label":"Leaflets",
                "description":"Leaflets for your followers to hand out.",
                "amount":0,
                "risk":0.005,
                "output":1,
                "base_cost":210,
                "cost":210,
                "unlock_rps":0.2,
                "unlocked":false,
            },
            "purchase3":{
                "label":"Public speaker",
                "description":"An attendant to preach in public places.",
                "amount":0,
                "risk":0.01,
                "output":5,
                "base_cost":1000,
                "cost":1000,
                "unlock_rps":1.2,
                "unlocked":false,
            },
            "purchase4":{
                "label":"Archaic Chapel",
                "description":"An old-time chapel capable of holding small services.",
                "amount":0,
                "risk":0.01,
                "output":10,
                "base_cost":5000,
                "cost":5000,
                "unlock_rps":2.0,
                "unlocked":false,
            }
    },  "ascend":{
            "ascend1":{
                "label":"Step-in-booth",
                "description":"An univiting small booth to slowly process followers.",
                "amount":0,
                "risk":0.05,
                "output":0.2,
                "base_cost":35,
                "cost":35,
                "unlock_loss":0,
                "unlocked":true,
            },
            "ascend2":{
                "label":"Ascension suite",
                "description":"A small, plush lounge holding more followers at a time.",
                "amount":0,
                "risk":0.005,
                "output":1,
                "base_cost":375,
                "cost":375,
                "unlock_loss":0.2,
                "unlocked":false,
            },
            "ascend3":{
                "label":"Holy room",
                "description":"An entire room where your followers can ascend.",
                "amount":0,
                "risk":0.01,
                "output":5,
                "base_cost":1750,
                "cost":1750,
                "unlock_loss":1.2,
                "unlocked":false,
            },
            "ascend4":{
                "label":"Delapidated monastery",
                "description":"A repurposed Monastery for your followers.",
                "amount":0,
                "risk":0.01,
                "output":10,
                "base_cost":8000,
                "cost":8000,
                "unlock_loss":2.0,
                "unlocked":false,
            }
  },
  "upgrades": {
            "upgrade1":{
              "label":"Basic telekinetics",
              "description":"Limited control of Earthly forces converts twice as many followers for each miracle.",
              "unlocked":false,
              "cost":500,
              "mul":2
            },
            "upgrade2":{
              "label":"Rudimentary Matter Manipulation",
              "description":"Ability to turn water into wine converts three times as many followers for each miracle.",
              "unlocked":false,
              "cost":5000,
              "mul":3
            },
            "upgrade3":{
              "label":"Transmogrification",
              "description":"Ability to convert animals of any shape into followers, netting four times as many followers for each miracle.",
              "unlocked":false,
              "cost":50000,
              "mul":4
            },
            "upgrade4":{
              "label":"Elementary conjuring",
              "description":"Ability to summon bolts of lightning, leveraging fear to increase followers per miracle by five times.",
              "unlocked":false,
              "cost":500000,
              "mul":5
            }
          },
            //think about creating 'god-battle' mode!
          "sacrifice": {
            "unlocked":false
           },
           "pantheon":{
            "unlocked":false
           },
           "challenges": {

            "challenge1":{
              "unlocked":false,
              "label":"Your first Miracle",
              "description":"You performed your first miracle and gained an awe-struck follower.",
              "required_type":'click_m',
              "click_req":1
            },
             "challenge2":{
              "unlocked":false,
              "label":"Your first ascension",
              "description":"You ascended a follower to a higher plane of existance, increasing your divine energy.", 
              "required_type":'click_a',
              "click_req":1
            },
             "challenge3":{
                "unlocked":false,
                "label":"Zeus, take the wheel",
                "description":"Your followers have started converting others to your cause.",
                "required_type":'conv',
                "req_tier":1,
                "req_num":1
            },
             "challenge4":{
                "unlocked":false,
                "label":"Jupiter: Ascension",
                "description":"You developed the first Earthly ascension point for your followers.",
                "required_type":'asc',
                "req_tier":1,
                "req_num":1
            }
           }

};

 //global variable
var upgrade_box_size = 0;

(function($) {


  $(window).resize(function() {
    set_up_containers();
  });

  $(document).ready(function() {
    loadData();
    set_up_containers();
    start_game(vals);
    $("#convert-tab-btn").click();
  });

  function set_up_containers() {
    var width = $(window).width();
    var height = $(window).height();
    $('#miracle_lbl').text("Divine energy ");
    $('#upgrades-box').css("height", height * 0.8);
    $('#upgrades-box').css("margin-right", width * 0.25);
    $('#upgrades-box').css("width", width * 0.65);
    upgrade_box_size = $('#upgrades-box').css('height');
  }

  function start_game(vals) {
    fix_names(vals);
    game_engine(vals, 0, 0);
  }
    function set_item_cost(item) { 
        var cost = ((item.amount + 1) * item.base_cost) * (item.amount + 1);

        if((item.amount + 1) > 10) { 
            cost *= 2;
        }
        return cost;
    }

  function game_engine(vals, iterations, cycles) {
    $('#click_amount').text( '[ ' + vals.click + ' ]');
    $('#counter').text( truncate_bigint(Math.floor(vals.followers)) );
    if( $('#last_saved').text() != "" )  $('#last_saved').text(Math.floor(cycles * 3) + ' seconds ago.');
    $('#power').text(truncate_bigint(vals.energy));
    
    $('#production_net').text(truncate_bigint((vals.achievement_multiplier*vals.prod) - vals.loss));
    $('#production_gross').text(truncate_bigint((vals.achievement_multiplier*vals.prod)));
    
    if( ((vals.achievement_multiplier*vals.prod) - vals.loss) >= 0.0 || vals.followers >= vals.loss ) $('#prod_energy').text(truncate_bigint(vals.loss));
    else $('#prod_energy').text(truncate_bigint((vals.achievement_multiplier*vals.prod) * vals.achievement_multiplier));
    setTimeout(function() {
      checkAchievements(vals);
      setButtonAvailability(vals);
      if( vals.click >= 120 ) vals.pantheon.unlocked = true;
      if( iterations % 10 === 0 && iterations != 0) vals.stats.time_played++;
      fix_stats(vals, cycles * 3);
      if( cycles >=  10) {
        saveData();
        cycles = 0;
      }
    if( iterations >= 30 ) {
        game_engine(vals, 0, ++cycles);
    }
    else {
      game_engine(vals, ++iterations, cycles);
      if( vals.followers >= vals.loss || ((vals.achievement_multiplier*vals.prod) - vals.loss) > 0)  {
        vals.followers += ( (vals.achievement_multiplier*vals.prod) - vals.loss);
        vals.stats.total_followers += ( (vals.achievement_multiplier*vals.prod) - vals.loss);
        vals.energy += vals.loss;
        vals.stats.total_energy += vals.loss;
      }
      else {vals.energy += (vals.achievement_multiplier*vals.prod);vals.stats.total_energy += (vals.achievement_multiplier*vals.prod);}
    }
  
    }, 100);
  }

  function saveData() {
    $('#save_title').html("Last saved ");
    $('#last_saved').text("0 seconds ago.");
    var output_json_1 = {};
    var output_json_2 = {};
    for( var k in vals ) {
      if( k === 'sacrifice'  || k === 'pantheon' || k==='challenges' )  output_json_2[k] = vals[k];
      else output_json_1[k] = vals[k];
    }
    Cookies.set("data-save1", output_json_1, { expires:7});
    Cookies.set("data-save2", output_json_2, { expires:7});
  }
  function loadData() {
    try {
      var json1 = Cookies.getJSON("data-save1"), json2 = Cookies.getJSON("data-save2");
      for( var k in vals ) {
        if( k === 'sacrifice'  || k === 'pantheon' || k==='challenges' )  vals[k] = json2[k]; 
        else vals[k] = json1[k];
      }
    }
     catch( error ) {
       console.log("No saved data to load!");
     }
  }
  function deleteSave() {
    Cookies.remove('data-save1');
    Cookies.remove('data-save2');
    location.reload();
  }
  function set_achievement_multiplier(vals) {
    var out = 1.00;
    for( var k in vals.challenges ) {
      if( vals.challenges[k].unlocked) out += 0.02;
    }
    vals.achievement_multiplier = out;
    $('#prod_mul').text(vals.achievement_multiplier + 'x');
    fix_tab_buttons(vals);
  }
  function checkAchievements(vals) {
    for( var k in vals.challenges ) {
      switch( vals.challenges[k].required_type) {

        case "click_m":
          if( vals.stats.miracle_clicks >= vals.challenges[k].click_req) {
            vals.challenges[k].unlocked = true;
            fix_names(vals);
        }
        break;
        case "click_a":
          if( vals.stats.ascension_clicks >= vals.challenges[k].click_req) {
            vals.challenges[k].unlocked = true;
            fix_names(vals);
          }
        break;
        case "conv":
          if( vals.clickers['purchase' + vals.challenges[k].req_tier].amount >= vals.challenges[k].req_num ) {
            vals.challenges[k].unlocked = true;
            fix_names(vals);
          }
        break;
        case "asc":
          if( vals.ascend['ascend' + vals.challenges[k].req_tier].amount >= vals.challenges[k].req_num ) {
            vals.challenges[k].unlocked = true;
            fix_names(vals);
          }
        break;
      }
    }
    set_achievement_multiplier(vals);
  }
  function setButtonAvailability(vals) {
    for( var k in vals.clickers ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.energy >= vals.clickers[k].cost ) 
        $('#purchase_btn_' + purchase_num).prop('disabled', false);
      else $('#purchase_btn_' + purchase_num).prop('disabled', true);

      if( vals.clickers[k].amount > 0 ) 
        $('#purchase_sell_btn_' + purchase_num).prop('disabled', false);
      else $('#purchase_sell_btn_' + purchase_num).prop('disabled', true);
    }
    for( var k in vals.ascend ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.energy >= vals.ascend[k].cost ) 
        $('#ascend_btn_' + purchase_num).prop('disabled', false);
      else $('#ascend_btn_' + purchase_num).prop('disabled', true);

      if( vals.ascend[k].amount > 0 ) 
        $('#ascend_sell_btn_' + purchase_num).prop('disabled', false);
      else $('#ascend_sell_btn_' + purchase_num).prop('disabled', true);
    }
    for( var k in vals.upgrades ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.energy >= vals.upgrades[k].cost && !vals.upgrades[k].unlocked)
        $('#upgrade_btn_' + purchase_num).prop('disabled', false);
      else $('#upgrade_btn_' + purchase_num).prop('disabled', true);
    }
    if( vals.followers >= 1000000 && !vals.sacrifice.unlocked ) $('#sacrifice_entry_btn_1').prop('disabled', false);
    else $('#sacrifice_entry_btn_1').prop('disabled', true);
  }
  function fix_tab_buttons(vals) {
    var unlock_conv = 0, unlock_ascend = 0, unlock_aug = 0;
    var total_conv = 0, total_ascend = 0, total_aug = 0;
      for( var k in vals.upgrades ){
        if( vals.upgrades[k].unlocked ) unlock_aug++;
        total_aug++;
      }
      for( var k in vals.clickers ) {
        if( vals.clickers[k].unlocked ) unlock_conv++;
        total_conv ++;
      }
      for( var k in vals.ascend ) {
        if( vals.ascend[k].unlocked ) unlock_ascend++;
        total_ascend ++;
      }
    
    $('#challenges-tab-text').text("Challenges " + Math.floor((vals.achievement_multiplier - 1) * 50) + "/4");
    $('#augment-tab-text').text("Augment " + unlock_aug + "/" + total_aug);
    $('#convert-tab-text').text("Convert " + unlock_conv + "/" + total_conv);
    $('#ascend-tab-text').text("Ascend " + unlock_ascend + "/" + total_ascend);
  }
  function fix_stats(vals, save_time) {
       $('#stats_field_1').text(truncate_time(vals.stats.time_played));
       $('#stats_field_2').text(truncate_bigint(Math.floor(vals.energy)));
       $('#stats_field_3').text(truncate_bigint(Math.floor(vals.stats.total_energy)));
       $('#stats_field_4').text(truncate_bigint(Math.floor(vals.followers)));
       $('#stats_field_5').text(truncate_bigint(Math.floor(vals.stats.total_followers)));
       $('#stats_field_6').text(truncate_bigint(vals.loss));
       $('#stats_field_7').text(truncate_bigint(vals.stats.max_loss));
       $('#stats_field_8').text( truncate_bigint( vals.prod));
       $('#stats_field_9').text( truncate_bigint( vals.stats.max_prod ));
       $('#stats_field_13').text(vals.stats.miracle_clicks);
       $('#stats_field_11').text(vals.click);
       $('#stats_field_14').text(vals.stats.ascension_clicks);
       if( $('#last_saved').text() != "")
          $('#stats_field_saved').text(save_time + " seconds ago.");
       else $('#stats_field_saved').text(" never");
       $('#stats_field_15').text(vals.stats.ascension_click_energy);
       $('#stats_field_16').text(vals.stats.miracle_click_energy);
  }
   function fix_names( vals ) {

    for( var k in vals.clickers ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.prod >= vals.clickers[k].unlock_rps ) {
        vals.clickers[k].unlocked = true;
        $('#purchase_' + purchase_num).css("display", "block");
        $("#purchase_header_" + purchase_num).contents().filter(function(){ return this.nodeType == 3; }).first().replaceWith(vals.clickers[k].label);
        $('#purchase_lbl_' + purchase_num).text(vals.clickers[k].amount);
        $('#purchase_cost_' + purchase_num).text( '[ ' + truncate_bigint(vals.clickers[k].cost) + ' energy ]');
        $('#purchase_text_' + purchase_num).text(vals.clickers[k].description);
        $('#purchase_out_' + purchase_num).text(vals.clickers[k].output + " followers ");
    }
    else {
      $('#purchase_' + purchase_num).css("display", "none");
    }
  }
    for( var k in vals.ascend ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.loss >= vals.ascend[k].unlock_loss ) {
        vals.ascend[k].unlocked = true;
        $('#ascend_' + purchase_num).css("display", "block");
        $("#ascend_header_" + purchase_num).contents().filter(function(){ return this.nodeType == 3; }).first().replaceWith(vals.ascend[k].label);
        $('#ascend_lbl_' + purchase_num).text(vals.ascend[k].amount);
        $('#ascend_cost_' + purchase_num).text('[ ' + truncate_bigint(vals.ascend[k].cost) + ' energy ]');
        $('#ascend_text_' + purchase_num).text(vals.ascend[k].description);
        $('#ascend_out_' + purchase_num).text(vals.ascend[k].output + " divine energy ");
        $('#ascend_out_' + purchase_num + '_2').text(vals.ascend[k].output + " followers ");
    }
    else {
      $('#ascend_' + purchase_num).css("display", "none");
    }
   }
   for( var k in vals.upgrades ) {
      var purchase_num = k.substr(k.length-1);
        $('#upgrade_' + purchase_num).css("display", "block");
        $("#upgrade_header_" + purchase_num).contents().filter(function(){ return this.nodeType == 3; }).first().replaceWith(vals.upgrades[k].label);
        $('#upgrade_cost_' + purchase_num).text('[ ' + truncate_bigint(vals.upgrades[k].cost) + ' energy ]');
        $('#upgrade_text_' + purchase_num).text(vals.upgrades[k].description);
        if( vals.upgrades[k].unlocked) {
          $('#upgrade_lbl_' + purchase_num).attr('class','glyphicon glyphicon-ok align_right');
          $('#upgrade_btn_1').remove();
          $('#upgrade_cost_'+purchase_num).remove();
          $('#upgrade_' + purchase_num).css('background-color', '#212121');
          $('#upgrade_' +purchase_num).css('color', '#fff');
          $('#upgrade_' + purchase_num).css('border', '2px solid #fff');
         }
    if( vals.sacrifice.unlocked ) {
      $('.sacrifice_locked').css('display', 'none');
      $('.sacrifice_unlocked').css('display', 'block');
      for( var k in vals.sacrifice ) {
        //show elements
      }
    }
    for( var k in vals.challenges) {
      var challenge_num = k.substr(k.length-1);
      $('#challenges_header_'+challenge_num).css('padding-left', '2.5%');
      $('#challenges_header_' + challenge_num).contents().filter(function(){ return this.nodeType == 3; }).first().replaceWith(vals.challenges[k].label);
      $('#challenges_text_'+challenge_num).css('padding-left', '1%');
      $('#challenges_text_'+challenge_num).text("-" + vals.challenges[k].description);
      vals.challenges[k].unlocked;
      if( vals.challenges[k].unlocked) {
          $('#challenges_lbl_' + challenge_num).attr('class','glyphicon glyphicon-ok align_right');
          $('#challenges_' + challenge_num).css('background-color', '#212121');
          $('#challenges_' + challenge_num).css('color', '#fff');
          $('#challenges_' + challenge_num).css('border', '2px solid #fff');
         }
    }
   }
   $('#settings_header_1').text("Reset your progress.");
    $('#corruption_amount').text(vals.corruption + '%');

   if( vals.pantheon.unlocked ) {
      $('#pantheon_div_1').css('display', 'none');
      $('#pantheon_unlocked').css('display','block');
   }
}

$(document).on("click", ".purchase", function() {
    var btn = $(this).attr('id');
    if( btn === 'delete_save') {
      if( confirm("Are you sure you want to delete your save?") ) deleteSave();
      return;
    }
    var id = btn.substr(0, btn.indexOf('_')) + btn.substr(btn.length-1);
    switch( id.substr(0, id.length-1)) {
      case 'purchase':
        if( vals.energy >= vals.clickers[id].cost ) {
          vals.energy-= vals.clickers[id].cost;
          vals.clickers[id].amount ++;
          vals.clickers[id].cost =  set_item_cost(vals.clickers[id]);
          vals.prod += vals.clickers[id].output;
          if( vals.prod > vals.stats.max_prod) max_prod = vals.prod;
        }
      break;
    case 'ascend' :
      if( vals.energy >= vals.ascend[id].cost ) {
        vals.energy -= vals.ascend[id].cost;
        vals.ascend[id].amount ++;
        vals.ascend[id].cost =  set_item_cost(vals.ascend[id]);
        vals.loss += vals.ascend[id].output;
      }
    break;
    case 'upgrade' :
      if( vals.energy >= vals.upgrades[id].cost) {
        vals.energy -= vals.upgrades[id].cost;
        vals.click *= vals.upgrades[id].mul;
        vals.upgrades[id].unlocked = true;
      }
      break;
    case 'sacrifice' :
      vals.sacrifice.unlocked = true;
      vals.corruption += 5;
      vals.followers -= 1000000;
      break;
  }
  fix_tab_buttons(vals);
  fix_names(vals);
});

$(document).on("click", ".sell", function() {
    var btn = $(this).attr('id');
    var id = btn.substr(0, btn.indexOf('_')) + btn.substr(btn.length-1);
    switch( id.substr(0, id.length-1)) {
      case 'purchase' :
        if( vals.clickers[id].amount > 0 ) {
          vals.clickers[id].amount --;
          vals.clickers[id].cost =  set_item_cost(vals.clickers[id]);
          vals.prod -= vals.clickers[id].output;
          vals.energy += (vals.clickers[id].cost * 0.5);
          vals.stats.total_energy += (vals.clickers[id].cost * 0.5);
        }
      break;
    case 'ascend' :
      if( vals.ascend[id].amount > 0 ) {
          vals.ascend[id].amount --;
          vals.ascend[id].cost =  set_item_cost(vals.ascend[id]);
          vals.prod -= vals.ascend[id].output;
          vals.loss -= vals.ascend[id].output;
          vals.energy += (vals.ascend[id].cost * 0.5);
          vals.stats.total_energy += (vals.ascend[id].cost * 0.5);
        }
      break;
  }
  fix_tab_buttons(vals);
  fix_names(vals);
});
$(document).on("click", "#convert-tab-btn", function(event) {
  openTab(event, 'Conversion');
});
$(document).on("click", "#ascend-tab-btn", function(event) {
  openTab(event, 'Ascension');
});
$(document).on("click", "#upgrade-tab-btn", function(event) {
  openTab(event, 'Upgrades');
});
$(document).on("click", "#pantheon-tab-btn", function(event) {
  openTab(event, 'Pantheon');
});
$(document).on("click", "#sacrifice-tab-btn", function(event) {
  openTab(event, 'Sacrifice');
});
$(document).on("click", "#stats-tab-btn", function(event) {
  openTab(event, 'Stats');
});
$(document).on("click", "#challenges-tab-btn", function(event) {
  openTab(event, 'Challenges');
});
$(document).on("click", "#settings-tab-btn", function(event) {
  openTab(event, 'Settings');
});

function can_click() {
  if( vals.followers >= 1 ) return true;
  return false;
}
function perform_miracle() {
  vals.followers += vals.click;
  vals.stats.total_followers += vals.click;
  vals.stats.miracle_clicks++;
  vals.stats.miracle_click_energy += vals.click;
}
function perform_trans() {
  if( vals.followers > 0 ) {
    vals.energy += vals.click;
    vals.stats.total_energy += vals.click;
    vals.followers -= vals.click;
    vals.stats.ascension_clicks++;
    vals.stats.ascension_click_energy += vals.click;
  }
  return;
}
//TODO - fix this for variable screen size!
$(document).on("click", '.miracle', function(event) { 
          var used_id = $(this).attr('id').substr($(this).attr('id').indexOf('_') + 1);
          var divToAppend, target, offset;
          if( used_id === 'button') {
            target = $('.miracle_click:first').clone();
            target.html( '+' + truncate_bigint(vals.click));
            divToAppend = '#miracle_div';
            perform_miracle();
            offset = $(window).height()/4;
          }else {
            divToAppend = '#miracle2_div'; 
            target = $('.transcend_click:first').clone();
            target.html( '-' + truncate_bigint(vals.click));
            offset = $(window).height()/4;
            if( can_click() ) perform_trans(); else return;
          }
          $(divToAppend).append(target);
          target.show();
          //handle unique animations for each click
           if( used_id === 'button' ) { target.offset({left:event.pageX-30, top:$('#miracle_button').offset().top * 1.1});;
           }else target.offset({left:offset * 1.1, top:$('#counter').offset().top});
          target.css('opacity',100);

          if( used_id === 'button') { target.animate({ 'top': target.offset().top * 1.2 + 'px', 'opacity':0.1, 'left':target.offset.left+ 'px'}, 750, function() { 
            $(this).remove();
          });
          }
          else {target.animate({ 'top':offset * 1.2 + 'px', 'opacity':0.1, 'left':offset+ 'px'}, 750, function() { 
            $(this).remove();
          });
          }

});


})(jQuery);

//loads a json file asynchronously
function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data/my_data.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a energy but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementById("tab_btns");
    var children = tablinks.children;
    for (i = 0; i < children.length; i++) {
        children[i].className = children[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    if( upgrade_box_size != 0 ) 
      $('#upgrades-box').css("height", upgrade_box_size);
    
}
function truncate_seconds(num) {
    var message = " seconds";
    if( num == 1 ) message = message.substr(0,message.length-1);
    return num + message + '.';
}
function truncate_minutes(num) {
    var output_string = '';
    var remainder = Math.floor(num / 60);
    num -= (60 * remainder);
    if( remainder >= 1 )
      output_string = output_string + remainder + ' minutes, ';
    if( remainder == 1 ) output_string = output_string.substr(0,output_string.length-3) +', ';
    return output_string + truncate_seconds(num);
}
function truncate_hours(num) {
    var output_string = '';
    var remainder = Math.floor(num / 3600);
    num -= (3600 * remainder);
    if( remainder >= 1 )
      output_string = output_string + remainder + ' hours, ';
    if( remainder == 1 ) output_string = output_string.substr(0,output_string.length-3) + ', ';
    return output_string + truncate_minutes(num);
}
function truncate_time(num) {
    var output_string = '';
    var remainder = Math.floor(num / 86400);
    num -= (86400 * remainder);
    if( remainder >= 1 )
      output_string = output_string + remainder + ' days, ';
    if( remainder == 1 ) output_string = output_string.substr(0,output_string.length-3) + ', ';
    return output_string + truncate_hours(num);
}

function truncate_bigint(num) { 
    var sn = '';
    if(num >= 1000000000000000000000000) { 
        return truncate_int(num)
    }    
    if(num >= 1000000000000000000000) { 
        sn = Math.round((num / 1000000000000000000000) * 100) / 100;
        return sn + 'S';
    }
    if(num >= 1000000000000000000) { 
        sn = Math.round((num / 1000000000000000000) * 100) / 100;
        return sn + 'Qt';
    }
    if(num >= 1000000000000000) { 
        sn = Math.round((num / 1000000000000000)*100) / 100;
        return sn + 'Q';
    }
    if(num >= 1000000000000) { 
        sn = Math.round((num / 1000000000000) * 100) / 100;
        return sn + 'T';
    }
    if(num >= 1000000000) { 
        sn = Math.round((num / 1000000000) * 100) / 100;
        return sn + 'B';
    }
    if(num >= 1000000) { 
        sn = Math.round((num / 1000000) * 100) / 100;
        return sn + 'M';
    } 
    return truncate_int(num);
}

function truncate_int(num) {
    if(num < 1000) { 
        num = Math.round(num * 10) / 10;
    } else { 
        num = Math.round(num);
    }
    var num_str = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    return num_str;
}

