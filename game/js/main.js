var last_float = 10;
var last_saved = 0;

var vals = {
  "energy":0,"prod":0, "click":1, "followers":0, "loss":0, "corruption":0, "achievement_multiplier":1.00, "current_tab":"Conversion","tick":500,
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
                "output":25,
                "base_cost":5000,
                "cost":5000,
                "unlock_rps":2.0,
                "unlocked":false,
            },
            "purchase5":{
                "label":"Prophetic manifestation",
                "description":"An Earthly representative placed to spread your word.",
                "amount":0,
                "output":150,
                "base_cost":30000,
                "cost":30000,
                "unlock_rps":5.0,
                "unlocked":false,
            }
    },  "ascend":{
            "ascend1":{
                "label":"Step-in-booth",
                "description":"An univiting small booth to slowly process followers.",
                "amount":0,
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
                "output":25,
                "base_cost":8000,
                "cost":8000,
                "unlock_loss":2.0,
                "unlocked":false,
            },
            "ascend5":{
                "label":"Cathedral of Ascendance",
                "description":"An entire Cathedral built to connect with you.",
                "amount":0,
                "output":150,
                "base_cost":40000,
                "cost":40000,
                "unlock_loss":5.0,
                "unlocked":false,
            }
  },
  "upgrades": {
        "1" : {
          "type":"Click amount",
            "upgrade1":{
              "label":"Basic telekinetics",
              "description":"Limited control of Earthly forces converts twice as many followers for each miracle.",
              "unlocked":false,
              "cost":500,
              "mul":2
            },
            "upgrade2":{
              "label":"Matter Manipulation",
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
          "2": {
            "type":"Tick speed",
            "upgrade1":{
               "label":"Time warp",
              "description":"You begin to speed up the passage of time..",
              "unlocked":false,
              "cost":2500,
              "mul":0.8
            },
            "upgrade2":{
               "label":"Gravity bending",
              "description":"Using gravity to change how time flows.",
              "unlocked":false,
              "cost":250000,
              "mul":0.8
            },
            "upgrade3":{
               "label":"God's stopwatch",
              "description":"Your newest toy new from the box.",
              "unlocked":false,
              "cost":250000000,
              "mul":0.8
            },
            "upgrade4":{
               "label":"The Mandela Effect",
              "description":"Reverse time and change what you wish.",
              "unlocked":false,
              "cost":250000000000,
              "mul":0.8
            }
          }
        },
            //think about creating 'god-battle' mode!
          "sacrifice": {
            "unlocked":false,

            "sacrifice1" : {
              "type":"Malevolent",
              "description":"Sacrifice your followers to increase your powers.",
              "corruption_inc":5,
              "base_cost":2500000,
              "cost":2500000,
              "amount":0
            },
            "sacrifice2" : {
              "type":"Composite",
              "description":"Sacrifice part of your being combined with followers, to further enhance your powers.",
              "corruption_inc":15,
              "base_cost":2500000,
              "cost":2500000,
              "amount":0
            },
            "sacrifice3" : {
              "type":"Benevolent",
              "description":"Surrender some of your divine essence to increase your sanctity.",
              "corruption_inc":-5,
              "base_cost":2500000,
              "cost":2500000,
              "amount":0
            }
           },
           "pantheon":{
            "unlocked":false,
            "stage":0,
            "bosses" : {


            "boss1":{
              "max_hp": 1000000,
              "current_hp":1000000,
              "regen":100,
              "reward":100000,
              "current":true,
              "name":"Vengeful Spirit"
            },
            "boss2":{
              "max_hp": 500000000,
              "current_hp":500000000,
              "regen":50000,
              "reward":50000000,
              "current":false,
              "name":"Malignant Phantom"
            }

           }
           },
           "challenges": {

            "challenge1":{
              "required_type":'click_m',
              "1" :{
              "visible":true,
              "unlocked":false,
              "label":"Your first Miracle",
              "description":"You performed your first miracle and gained an awe-struck follower.",
              "click_req":1,
              "cloned":false
              },
              "2" : {
              "visible":false,  
              "unlocked":false,
              "label":"Miracle happy",
              "description":"You've performed 100 miracles, gaining many followers along the way.",
              "click_req":100
              }
            },
             "challenge2":{
              "required_type":'click_a',
              "1":{
                "visible":true,
                "unlocked":false,
                "label":"Your first ascension",
                "description":"You ascended a follower to a higher plane of existance, increasing your divine energy.", 
                "click_req":1
              },
               "2" : {
              "visible":false,  
              "unlocked":false,
              "label":"Highway to heaven",
              "description":"You've performed 100 acensions to increase your Divine Energy.",
              "click_req":100
              }

            },
             "challenge3":{
              "required_type":'conv',
              "1" : {
                "visible":true,
                "unlocked":false,
                "label":"Zeus, take the wheel",
                "description":"Your followers have started converting others to your cause.",
                "req_tier":1,
                "req_num":1
              },
               "2" : {
              "visible":false,  
              "unlocked":false,
              "label":"Gaining traction",
              "description":"You've gained your first 4th tier Conversion herald.",
              "req_tier":4,
              "req_num":1
              }
            },
             "challenge4":{
                "required_type":'asc',
                "1": {
                  "visible":true,
                  "unlocked":false,
                  "label":"Jupiter: Ascension",
                  "description":"You developed the first Earthly Ascension point for your followers.",
                  "req_tier":1,
                  "req_num":1
                },
                 "2" : {
                "visible":false,  
                "unlocked":false,
                "label":"On the up-and-up",
                "description":"You've gained your first 4th tier ascension facilities.",
                "req_tier":4,
                "req_num":1
              }
            },
            "challenge5":{
              "required_type":'sac',
              "1": {
                "visible":true,
                "unlocked":false,
                "label":"Straying from the path",
                "description":"You sacrificed your first followers to enhance your power.. at what cost?",
                "req_corrupt":5
              },
              "2": {
                "visible":true,
                "unlocked":false,
                "label":"Embracing evil",
                "description":"The feeling of overflowing power is beginning to corrupt you..",
                "req_corrupt":25
              }
            },
            "challenge6":{
              "required_type":"panth",
              "1" :{
                "visible":true,
                "unlocked":false,
                "label":"The Pantheon Beckons",
                "description": "You may have to fight a battle more than once to win it..",
                "req_stage":0
              },
              "2": {
                "visible":true,
                "unlocked":false,
                "label":"Enemy defeated",
                "description": "You conquered your first foe, but there are many others awaiting you.",
                "req_stage":1
              }
            }
           },

};
 //global variable
var upgrade_box_size = 0;

(function($) {


  $(window).resize(function() {
    set_up_containers();
    if( $(window).width() < 700 ) {
      $.toaster( { settings: {
       toaster : {
        css : {
          'width' : '40%',
        }
     }
    }
    });
    fix_names(vals);
  }});

  $(document).ready(function() {
    loadData();
    set_up_containers();
    $.toaster( { settings: {
      toast : {
       css : {
        'background-color' : '#212121',
        'color' : '#fff'
       }
     },
     toaster : {
        css : {
          'width' : '30%',
        }
     },
     timeout : '2500'
   }
   } );
    $('#settings-tab-btn').click();
    start_game(vals);
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
    if( vals.followers < 0 ) vals.followers = 0;
    $('#click_amount').text( '[ ' + truncate_bigint(vals.click) + ' ]');
    $('#counter').text( truncate_bigint(Math.floor(vals.followers)) );
    if( $('#last_saved').text() != "" )  $('#last_saved').text(last_saved + ' seconds ago.');
    $('#power').text(truncate_bigint(vals.energy));
    //production of followers is (production*achievement_multipler) divided by the corruption factor.
    $('#production_net').text(truncate_bigint(( (vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100)) - vals.loss)));
    $('#production_gross').text(truncate_bigint(( (vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100)))));
    if( ( ((vals.achievement_multiplier*vals.prod))/(1+(vals.corruption/100)) - vals.loss) >= 0.0 || vals.followers >= (vals.loss*(1+(vals.corruption/100))) ) 
      $('#prod_energy').text(truncate_bigint(vals.loss * (1+(vals.corruption/100))));
    else $('#prod_energy').text(truncate_bigint((vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100))));
    setTimeout(function() {
    checkAchievements(vals);
    setButtonAvailability(vals);  
      if( vals.current_tab==="Pantheon" && vals.pantheon.unlocked) {
        for( var k in vals.pantheon.bosses ) {
          if( vals.pantheon.bosses[k].current ) {
            if( (vals.pantheon.bosses[k].current_hp + vals.pantheon.bosses[k].regen) <= vals.pantheon.bosses[k].max_hp ) {
              vals.pantheon.bosses[k].current_hp += vals.pantheon.bosses[k].regen;
            }
          }
        }
      }
      else if( vals.current_tab==="Stats")fix_stats(vals);
      if( vals.click >= 120 ) {vals.pantheon.unlocked = true; fix_names(vals);}
      else if( iterations % 10 === 0 && iterations != 0) {
        vals.stats.time_played++;
        last_saved++;
      }
      //save every 30 seconds
      if( (cycles * ( vals.tick * 30 ) >= 30000) ) {
        saveData();
        cycles = 0;
      }
    if( iterations >= 30 ) {
        game_engine(vals, 0, ++cycles);
    }
    else {
      game_engine(vals, ++iterations, cycles);
      //adding production to variables
      if( vals.followers >= vals.loss || ((vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100)) - (vals.loss*(1+(vals.corruption/100))) ) > 0)  {
        vals.followers += ( (vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100)) - (vals.loss)*(1+(vals.corruption/100)));
        vals.stats.total_followers += ( (vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100)) - (vals.loss*(1+(vals.corruption/100))) );
        vals.energy += vals.loss;
        vals.stats.total_energy += vals.loss;
      }
      else {vals.energy += (vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100));
        vals.stats.total_energy += (vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100));
      }
    }
  
    }, vals.tick);
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
    last_saved = 0;
  }
  function loadData() {
    try {
      var json1 = Cookies.getJSON("data-save1"), json2 = Cookies.getJSON("data-save2");
      for( var k in vals ) {
        if( k === 'sacrifice'  || k === 'pantheon' || k==='challenges')  vals[k] = json2[k]; 
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
      for( var i in vals.challenges[k])
        if( vals.challenges[k][i].unlocked) out += 0.02;
    }
    vals.achievement_multiplier = out;
    $('#prod_mul').text(Math.round(vals.achievement_multiplier * 100)/100 + 'x');
    fix_tab_buttons(vals);
  }
  function checkAchievements(vals) {
    for( var k in vals.challenges ) {
      switch( vals.challenges[k].required_type) {

        case "click_m":
        for( var i in vals.challenges[k]) {
          if( vals.challenges[k][i] != vals.challenges[k].required_type) {
          if( vals.stats.miracle_clicks >= vals.challenges[k][i].click_req) {
            //we don't want achievment messages to show unless the user actually unlocks them => not on startup every time.
            if( !vals.challenges[k][i].unlocked && ($('#save_title').text() != "Nothing saved yet." || last_saved > 2) )
              $.toaster( {message: vals.challenges[k][i].label, title:"Achievement Unlocked" } );
            vals.challenges[k][i].unlocked = true;
            fix_names(vals);
          }
        }
        }
        break;
        case "click_a":
        for( var i in vals.challenges[k]) {
          if( vals.challenges[k][i] != vals.challenges[k].required_type) {
          if( vals.stats.ascension_clicks >= vals.challenges[k][i].click_req) {
            if( !vals.challenges[k][i].unlocked && ($('#save_title').text() != "Nothing saved yet." || last_saved >= 1) )
              $.toaster( {message: vals.challenges[k][i].label, title:"Achievement Unlocked" } );
            vals.challenges[k][i].unlocked = true;
            fix_names(vals);
        }
      }
      }
        break;
        case "conv":
        for( var i in vals.challenges[k]) {
          if( vals.challenges[k][i] != vals.challenges[k].required_type) {
          if( vals.clickers['purchase' + vals.challenges[k][i].req_tier].amount >= vals.challenges[k][i].req_num ) {
            if( !vals.challenges[k][i].unlocked && ($('#save_title').text() != "Nothing saved yet." || last_saved >= 1) )
              $.toaster( {message: vals.challenges[k][i].label, title:"Achievement Unlocked" } );
            vals.challenges[k][i].unlocked = true;
            fix_names(vals);
          }
        }
        }
        break;
        case "asc":
        for( var i in vals.challenges[k]) {
          if( vals.challenges[k][i] != vals.challenges[k].required_type) {
          if( vals.ascend['ascend' + vals.challenges[k][i].req_tier].amount >= vals.challenges[k][i].req_num ) {
            if( !vals.challenges[k][i].unlocked && ($('#save_title').text() != "Nothing saved yet." || last_saved >= 1) )
             $.toaster( {message: vals.challenges[k][i].label, title:"Achievement Unlocked" } );
            vals.challenges[k][i].unlocked = true;
            fix_names(vals);
          }
        }
        }
        break;
        case "sac":
          for( var i in vals.challenges[k]) {
          if( vals.challenges[k][i] != vals.challenges[k].required_type) {
          if( vals.corruption >= vals.challenges[k][i].req_corrupt ) {
            if( !vals.challenges[k][i].unlocked && ($('#save_title').text() != "Nothing saved yet." || last_saved >= 1) )
             $.toaster( {message: vals.challenges[k][i].label, title:"Achievement Unlocked" } );
            vals.challenges[k][i].unlocked = true;
            fix_names(vals);
          }
         }
        }
        break;
        case "panth":
          for( var i in vals.challenges[k]) {
          if( vals.challenges[k][i] != vals.challenges[k].required_type) {
          if( vals.pantheon.stage == vals.challenges[k][i].req_stage && vals.pantheon.unlocked ) {
            if( !vals.challenges[k][i].unlocked && ($('#save_title').text() != "Nothing saved yet." || last_saved >= 1) )
             $.toaster( {message: vals.challenges[k][i].label, title:"Achievement Unlocked" } );
            vals.challenges[k][i].unlocked = true;
            fix_names(vals);
          }
        }
        }
        break;
      }
    }
    set_achievement_multiplier(vals);
  }
  function setButtonAvailability(vals) {
    if( vals.current_tab === 'Conversion' ) {
    for( var k in vals.clickers ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.energy >= vals.clickers[k].cost ) 
        $('#purchase_btn_' + purchase_num).prop('disabled', false);
      else $('#purchase_btn_' + purchase_num).prop('disabled', true);

      if( vals.clickers[k].amount > 0 ) 
        $('#purchase_sell_btn_' + purchase_num).prop('disabled', false);
      else $('#purchase_sell_btn_' + purchase_num).prop('disabled', true);
    }
  }
  if( vals.current_tab === 'Ascension' ) {
    for( var k in vals.ascend ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.energy >= vals.ascend[k].cost ) 
        $('#ascend_btn_' + purchase_num).prop('disabled', false);
      else $('#ascend_btn_' + purchase_num).prop('disabled', true);

      if( vals.ascend[k].amount > 0 ) 
        $('#ascend_sell_btn_' + purchase_num).prop('disabled', false);
      else $('#ascend_sell_btn_' + purchase_num).prop('disabled', true);
    }
  }
  if( vals.current_tab === 'Upgrades' ) {
    for( var k in vals.upgrades ) {
      var purchase_num = k.substr(k.length -1 );
      for( var i in vals.upgrades[k] ) {
      if( vals.energy >= vals.upgrades[k][i].cost && !vals.upgrades[k][i].unlocked)
        $('#upgrade_btn_' + purchase_num + "_" + i.substr(i.length-1)).prop('disabled', false);
      else $('#upgrade_btn_' + purchase_num + "_" + i.substr(i.length-1)).prop('disabled', true);
      }
    }
  }
  if( vals.current_tab === 'Sacrifice' ) {
    //locked screen
    if( vals.followers >= 1000000 && !vals.sacrifice.unlocked ) $('#entry_sacrifice_btn_1').prop('disabled', false);
    else if( !vals.sacrifice.unlocked && vals.followers < 1000000) $('#entry_sacrifice_btn_1').prop('disabled', true);
    //unlocked screen - check for funds
    else if( vals.sacrifice.unlocked) {
      for( var id in vals.sacrifice ) {
        var purchase_num = id.substr(id.length-1);
        //malevolent sac
        if( id.substr(id.length-1) === '1') {
          if( vals.followers >= vals.sacrifice[id].cost) $('#sacrifice_btn_' + purchase_num).prop('disabled', false);
          else $('#sacrifice_btn_' + purchase_num).prop('disabled', true);
        }
        //composite sac
        else if( id.substr(id.length-1) === '2') {
         if( vals.followers >= vals.sacrifice[id].cost && vals.energy>= vals.sacrifice[id].cost ) $('#sacrifice_btn_' + purchase_num).prop('disabled', false);
         else $('#sacrifice_btn_' + purchase_num).prop('disabled', true);
        }
        //else benevolent sac
        else {
         if( vals.energy>= vals.sacrifice[id].cost ) $('#sacrifice_btn_' + purchase_num).prop('disabled', false);
         else $('#sacrifice_btn_' + purchase_num).prop('disabled', true);
        }
      }
    }
   }

  }
  function fix_tab_buttons(vals) {
    var unlock_conv = 0, unlock_ascend = 0, unlock_aug = 0;
    var total_conv = 0, total_ascend = 0, total_aug = 0;
      for( var k in vals.upgrades ){
        for( var i in vals.upgrades[k] ){
          if( vals.upgrades[k][i].unlocked ) unlock_aug++;
          if( vals.upgrades[k][i] != "Click amount" && vals.upgrades[k][i] != "Tick speed" ) total_aug++;
          }
      }
      for( var k in vals.clickers ) {
        if( vals.clickers[k].unlocked ) unlock_conv++;
        total_conv ++;
      }
      for( var k in vals.ascend ) {
        if( vals.ascend[k].unlocked ) unlock_ascend++;
        total_ascend ++;
      }
    
    $('#challenges-tab-text').text("Challenges " + Math.floor((vals.achievement_multiplier - 1) * 50) + "/" + Object.keys(vals.challenges).length * 2);
    $('#augment-tab-text').text("Augment " + unlock_aug + "/" + total_aug);
    $('#convert-tab-text').text("Convert " + unlock_conv + "/" + total_conv);
    $('#ascend-tab-text').text("Ascend " + unlock_ascend + "/" + total_ascend);
  }
  function fix_stats(vals) {
    if( vals.prod > vals.stats.max_prod) vals.stats.max_prod = vals.prod;
    if( vals.loss > vals.stats.max_loss) vals.stats.max_loss = vals.loss;
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
          $('#stats_field_saved').text(last_saved + " seconds ago.");
       else $('#stats_field_saved').text(" never");
       $('#stats_field_15').text(truncate_bigint(vals.stats.ascension_click_energy));
       $('#stats_field_16').text(truncate_bigint(vals.stats.miracle_click_energy));
  }
   function fix_names( vals ) {
    if( vals.current_tab === 'Conversion') {
    for( var k in vals.clickers ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.prod >= vals.clickers[k].unlock_rps ) {
        vals.clickers[k].unlocked = true;
        //dynammically create divs as needed, saves creating all in the html file.
         if( !document.getElementById('purchase_' + purchase_num) && !document.getElementById('new_purchase') && k != "purchase1" ){
              var clonedDiv_id = $('#purchase_' + challenge_num + '_' + i);
              $('<div id="new_purchase" class="tab_div"> ' +
                '<h3 id="purchase_head_temp" class="header_1">This is the field for upgrade for option one.' +
                '<label id=purchase_lbl_ class="align_right">0</label></h3><p>' +
      '<b><span id="purchase_cost_">10</span></b> - <em id="purchase_text_"> Text placeholder</em></p>' +
      '<p class = "align_right">Produces <b><span id="purchase_out_">0.1</span></b> per tick</p>'+
      ' <button id="purchase_btn_" class="purchase" disabled="disabled">Purchase</button> '+
      '<button id="purchase_sell_btn_" class="sell" data-balloon="Sells for 50% original value." data-balloon-pos="right" '+
      'disabled="disabled" >Sell</button></div>').appendTo($('#Conversion'));
              //now fix the fields
              $("#new_purchase").find('#purchase_lbl_').attr('id', "purchase_lbl_" + purchase_num);
              $("#new_purchase").find('#purchase_text_').attr('id', "purchase_text_" + purchase_num);
              $("#new_purchase").find('#purchase_btn_').attr('id', "purchase_btn_" + purchase_num);
              $("#new_purchase").find('#purchase_out_').attr('id', "purchase_out_" + purchase_num);
              $("#new_purchase").find('#purchase_cost_').attr('id', "purchase_cost_" + purchase_num);
              $("#new_purchase").find('#purchase_head_temp').attr('id', "purchase_header_" + purchase_num);
              $('#new_purchase').attr('id','purchase_' + purchase_num);
           }
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
  }
  if( vals.current_tab === 'Ascension' ) {
    for( var k in vals.ascend ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.loss >= vals.ascend[k].unlock_loss ) {
        if( !document.getElementById('ascend_' + purchase_num) && !document.getElementById('new_ascend') && k != "ascend1" ){
              var clonedDiv_id = $('#ascend_' + challenge_num + '_' + i);
              $('<div id="new_ascend" class="tab_div"> ' +
                '<h3 id="ascend_head_temp" class="header_1">This is the field for upgrade for option one.' +
                '<label id=ascend_lbl_ class="align_right">0</label></h3><p>' +
      '<b><span id="ascend_cost_">10</span></b> - <em id="ascend_text_"> Text placeholder</em></p>' +
      '<p class = "align_right">Produces <b><span id="ascend_out_">0.1</span></b> per tick<br>Ascends ' +
      '<b><span id="ascend_out__2">0.1</span></b>per tick</p>'+
      ' <button id="ascend_btn_" class="purchase" disabled="disabled">Purchase</button> '+
      '<button id="ascend_sell_btn_" class="sell" data-balloon="Sells for 50% original value." data-balloon-pos="right" '+
      'disabled="disabled" >Sell</button></div>').appendTo($('#Ascension'));
              //now fix the fields
              $("#new_ascend").find('#ascend_lbl_').attr('id', "ascend_lbl_" + purchase_num);
              $("#new_ascend").find('#ascend_text_').attr('id', "ascend_text_" + purchase_num);
              $("#new_ascend").find('#ascend_btn_').attr('id', "ascend_btn_" + purchase_num);
              $("#new_ascend").find('#ascend_out_').attr('id', "ascend_out_" + purchase_num);
              $("#new_ascend").find('#ascend_cost_').attr('id', "ascend_cost_" + purchase_num);
              $("#new_ascend").find('#ascend_head_temp').attr('id', "ascend_header_" + purchase_num);
              $("#new_ascend").find('#ascend_out__2').attr('id', "ascend_out_" + purchase_num + '_2');
              $('#new_ascend').attr('id','ascend_' + purchase_num);
           }
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
  }
   if( vals.current_tab === 'Upgrades')
   for( var k in vals.upgrades ) {
      var purchase_num = k.substr(k.length-1);

      for( var i in vals.upgrades[k] ) {
        if( i != "type") {
          //set up new div for same challenge unlock
        if( (i.substr(i.length-1) === '1') || (vals.upgrades[k]["upgrade" + (String(parseInt(i.substr(i.length-1)) -1))].unlocked
          && i.substr(i.length-1) != '1') )  {
          if( !document.getElementById('upgrade_' + purchase_num + "_" + i.substr(i.length-1)) && !document.getElementById('new_upgrade') && i != "upgrade1" ){
                var clonedDiv_id = $('#upgrade_' + challenge_num + '_' + i);
                $('<div id="new_upgrade" class="tab_div"> ' +
                '<h3 id="upgrade_head_temp" class="header_1">This is the field for upgrade for option one.' +
                '<label id=upgrade_lbl_ class="glyphicon glyphicon-remove align_right"></label></h3><p>' +
                '<b><span id="upgrade_cost__">10</span></b>-<em id="upgrade_text">Text placeholder</em> </p><button id="upgrade_btn__" class="purchase" ' +
                ' data-balloon="Tick length - 20%" data-balloon-pos="right" disabled="disabled">Purchase</button></div>').appendTo($('#upgrade_' + purchase_num));

                $('#new_upgrade').find('#upgrade_btn__').attr('id', "upgrade_btn_"+ purchase_num + "_" + i.substr(i.length-1));
                $("#new_upgrade").find('#upgrade_head_temp').attr('id', "upgrade_header_"+ purchase_num + "_" + i.substr(i.length-1));
                $("#new_upgrade").find('#upgrade_lbl_').attr('id', "upgrade_lbl_" + purchase_num + "_" + i.substr(i.length-1));
                $("#new_upgrade").find('#upgrade_text').attr('id', "upgrade_text_" + purchase_num + "_" + i.substr(i.length-1));
                $('#new_upgrade').find('#upgrade_cost__').attr('id', 'upgrade_cost_' + purchase_num + '_' + i.substr(i.length-1));
                $('#new_upgrade').attr('id','upgrade_' + purchase_num + '_' + i.substr(i.length-1));
                vals.upgrades[k][i].visible = true;
            }
        $('#upgrade_btn_' + purchase_num + "_" + i.substr(i.length-1)).attr('data-balloon', vals.upgrades[k].type + ' x' + vals.upgrades[k][i].mul); 
        $('#upgrade_' + purchase_num + "_" + i.substr(i.length-1)).css("display", "block");
        $("#upgrade_header_" + purchase_num + "_" + i.substr(i.length-1)).contents().filter(function(){ return this.nodeType == 3; }).first().replaceWith(vals.upgrades[k][i].label);
        $('#upgrade_cost_' + purchase_num + "_" + i.substr(i.length-1)).text('[ ' + truncate_bigint(vals.upgrades[k][i].cost) + ' energy ]');
        $('#upgrade_text_' + purchase_num + "_" + i.substr(i.length-1)).text(vals.upgrades[k][i].description);
        if( vals.upgrades[k][i].unlocked) {
          $('#upgrade_lbl_' + purchase_num + "_" + i.substr(i.length-1)).attr('class','glyphicon glyphicon-ok align_right');
          $('#upgrade_btn_' + purchase_num + "_" + i.substr(i.length-1)).remove();
          $('#upgrade_cost_'+purchase_num + "_" + i.substr(i.length-1)).remove();
          $('#upgrade_' + purchase_num + "_" + i.substr(i.length-1)).css('background-color', '#212121');
          $('#upgrade_' +purchase_num + "_" + i.substr(i.length-1)).css('color', '#fff');
          $('#upgrade_' + purchase_num + "_" + i.substr(i.length-1)).css('border', '2px solid #fff');
         }
        }
       }
     }
    }
    if( vals.sacrifice.unlocked && vals.current_tab === 'Sacrifice') {
      if($(window).width() > 750 ){
       $(".dotted").attr('data-balloon', "\u2191 Energy prod, \u2193 Follower prod");
      }else {
        $(".dotted").attr('data-balloon', "\u2191 En. prod, \u2193 Fol. prod");
      }
      $('#sacrifice_locked').css('display', 'none');
      $('.sacrifice_unlocked').css('display', 'block');
      
      for( var k in vals.sacrifice ) {
        //show elements
        var sacrifice_num = k.substr(k.length-1); 
        $('#sacrifice_desc_'+sacrifice_num).text(vals.sacrifice[k].description);
        $('#sacrifice_cost_'+sacrifice_num).text(truncate_bigint(vals.sacrifice[k].cost));
        if( k==='sacrifice2') {
          $('#sacrifice_cost_2_2').text(truncate_bigint(vals.sacrifice[k].cost));
        }
      }
    }
    if( vals.current_tab === 'Challenges') {
      var num_unlocked = 0;
    for( var k in vals.challenges) {
      var challenge_num = k.substr(k.length-1);
      for( var i in vals.challenges[k] ) {
         if( vals.challenges[k][i] != vals.challenges[k].required_type) {
         if( !document.getElementById('challenges_' + challenge_num + '_' + i) && !document.getElementById('new_challenge') && i != "1" ){
          if( vals.challenges[k][(String(parseInt(i) -1))].unlocked )  {
              
              var clonedDiv_id = $('#challenges_' + challenge_num + '_' + i);
              $('<div id="new_challenge" class="tab_div"> ' +
                '<h3 id="challenge_head_temp" class="header_1">This is the field for upgrade for option one.' +
                '<label id=challenges_lbl_ class="glyphicon glyphicon-remove align_right"></label></h3><p>' +
                '<em id="challenges_text">Text placeholder</em> </p></div>').appendTo($('#challenge' + challenge_num));
              $("#new_challenge").find('#challenges_lbl_').attr('id', "challenges_lbl_" + challenge_num + '_' + i);
              $("#new_challenge").find('#challenges_text').attr('id', "challenges_text_" + challenge_num + '_' + i);
              $('#new_challenge').children().each(function() {
                if( this.id === 'challenge_head_temp')
                  this.id = "challenges_header_" + challenge_num + '_' + i;
              });
              $('#new_challenge').attr('id','challenges_' + challenge_num + '_' + i);
              vals.challenges[k][i].visible = true;
          }
        }
      }
        if( vals.challenges[k][i].visible) {
          $('#challenges_header_'+ challenge_num + '_' + i).css('padding-left', '2.5%');
          $('#challenges_header_' + challenge_num + '_' + i).contents().filter(function(){ return this.nodeType == 3; }).first().replaceWith(vals.challenges[k][i].label);
          $('#challenges_text_'+challenge_num + '_' + i).css('padding-left', '1%');
          $('#challenges_text_'+challenge_num + '_' + i).text("-" + vals.challenges[k][i].description);
        
        if( vals.challenges[k][i].unlocked) {
          $('#challenges_lbl_' + challenge_num + '_' + i).attr('class','glyphicon glyphicon-ok align_right');
          $('#challenges_' + challenge_num + '_' + i).css('background-color', '#212121');
          $('#challenges_' + challenge_num + '_' + i).css('color', '#fff');
          $('#challenges_' + challenge_num + '_' + i).css('border', '2px solid #fff');
         }
         else {
          $('#challenges_lbl_' + challenge_num + '_' + i).attr('class','glyphicon glyphicon-remove align_right');
          $('#challenges_' + challenge_num + '_' + i).css('background-color', '#E1F5FE');
          $('#challenges_' + challenge_num + '_' + i).css('color', '#212121');
          $('#challenges_' + challenge_num + '_' + i).css('border', 'none');
         }
        }
        }
       }
      }
    $('#corruption_amount').text(vals.corruption + '%');

   if( vals.pantheon.unlocked && vals.current_tab === 'Pantheon') {

      $('#pantheon_div_1').css('display', 'none');
      $('#pantheon_unlocked').css('display','block');
      for( var k in vals.pantheon.bosses ) {
      if( vals.pantheon.bosses[k].current ) {
        $('#battle_1').attr('src', 'data/battle_' + k.substr(k.length-1) + '.png');
        $('#boss_num').text(': Boss ' + k.substr(k.length-1));
        $('#battle_1_hp').text(vals.pantheon.bosses[k].current_hp);
        $('#regen').text(vals.pantheon.bosses[k].regen);
        $('#boss_name').text(vals.pantheon.bosses[k].name + ':');
      }
    }
   }
  }

$(document).on("click", ".purchase", function() {
    var btn = $(this).attr('id');
    if( btn === 'delete_save') {
      if( confirm("Are you sure you want to delete your save?") ) deleteSave();
      return;
    }
    else if ( btn === 'make_save') {
      saveData();
      $.toaster({message:"Successfully saved game.", title:"Saved"});  
    }
    var id = btn.substr(0, btn.indexOf('_')) + btn.substr(btn.length-1);
    switch( id.substr(0, id.length-1)) {
      case 'purchase':
        if( vals.energy >= vals.clickers[id].cost ) {
          vals.energy-= vals.clickers[id].cost;
          vals.clickers[id].amount ++;
          vals.clickers[id].cost =  set_item_cost(vals.clickers[id]);
          vals.prod += vals.clickers[id].output;
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
    //todo - fix this.
    case 'upgrade' :
      var purchase_type = btn.substr(btn.indexOf('_btn_') + 5,btn.indexOf('_btn_') + 5);
      if( vals.energy >= vals.upgrades[purchase_type[0]][id].cost) {
        vals.energy -= vals.upgrades[purchase_type[0]][id].cost;
        console.log('here');
        console.log(vals.upgrades[purchase_type[0]].type);
        if( vals.upgrades[purchase_type[0]].type === "Click amount") {
          vals.click *= vals.upgrades[purchase_type[0]][id].mul;
          console.log('purchase here');
        }
        else vals.tick *= vals.upgrades[purchase_type[0]][id].mul;
        vals.upgrades[purchase_type[0]][id].unlocked = true;
      }
      break;
    case 'entry' :
      vals.sacrifice.unlocked = true;
      vals.corruption += 5;
      vals.followers -= 1000000;
      $.toaster({message:"Sacrifice tab unlocked!",title:"Dark path"});
      break;
    case 'sacrifice':
      var processed = false;
      if( id.substr(id.length-1) === '1' ) {
        if( Math.abs(vals.corruption) <= 95 ) {
          vals.corruption +=5;
          $.toaster({message:"Your power has grown.",title:"Sacrifice"});
          vals.followers-= vals.sacrifice[id].cost;
          processed = true;
        }
        else $.toaster({message:"Your power is maxed.",title:"Sacrifice rejected"})
      }
      else if( id.substr(id.length-1) === '2' ) {
        if( Math.abs(vals.corruption) <= 85 ) {
          vals.followers-= vals.sacrifice[id].cost;
          vals.energy-= vals.sacrifice[id].cost;
          vals.corruption +=15;
          $.toaster({message:"Your power has intensified.",title:"Sacrifice"});
          processed = true;
        }
        else $.toaster({message:"Corruption overflowing.",title:"Sacrifice rejected"});
      }
      else {
          if( vals.corruption >= -95 ) {
          vals.energy-= vals.sacrifice[id].cost;
          vals.corruption -=5;
          processed = true;
          $.toaster({message:"Your sanctity increased.",title:"Sacrifice"})
        }
        else $.toaster({message:"Your sanctity is maxed.",title:"Sacrifice rejected"})
      }
      //only increment if a sacrifice was actually processed
      if( processed) {
        vals.sacrifice[id].amount++;
        vals.sacrifice[id].cost = set_item_cost(vals.sacrifice[id]);
      }
    break;
  }
  fix_tab_buttons(vals);
  fix_names(vals);
  });
function gen_target_offset(id, target) {
  switch(id.substr(1,1)) {
    //generate offsets for miracle click animations
    case  'm' :
      if( $(window).width() > 1300 )  
        //2nd miracle button
        if( id.substr(id.length-1) === 'd') target.offset({left: 1.2 * $(id).offset().left, top: $(id).offset().top *0.8});
        //first miracle button
        else target.offset({left: 1.2 * $(id).offset().left, top: $(id).offset().top *1.15});
      else if( $(window).width() <= 700) 
        if( id.substr(id.length-1) === 'd') target.offset({left: 1.2 * $(id).offset().left, top: $(id).offset().top *0.65});
        //first miracle button
        else target.offset({left: 1.2 * $(id).offset().left, top: $(id).offset().top *1.25});
      //want a less aggressive offset
      else if(  $(window).width() <= 750) 
        if( id.substr(id.length-1) === 'd') target.offset({left: 1.2 * $(id).offset().left, top: $(id).offset().top *0.7});
        //first miracle button
        else target.offset({left: 1.2 * $(id).offset().left, top: $(id).offset().top *1.2});
      else if( $(window).width() <= 1100) 
        if( id.substr(id.length-1) === 'd') target.offset({left: 1.2 * $(id).offset().left, top: $(id).offset().top *0.8});
        //first miracle button
        else target.offset({left: 1.2 * $(id).offset().left, top: $(id).offset().top *1.15});
      else if( $(window).width() <= 1300) 
        //2nd miracle button
        if( id.substr(id.length-1) === 'd') target.offset({left: 1.2 * $(id).offset().left, top: $(id).offset().top *0.8});
        //first miracle button
        else target.offset({left: 1.2 * $(id).offset().left, top: $(id).offset().top *1.15});
    break;
    case  'b' :
    //generate offsets for boss click animation
      if( $(window).width() > 1300 )  
        target.offset({left: 2.6 * $(id).offset().left, top: $(id).offset().top * 1.5 });
      else if( $(window).width() <= 700) 
        target.offset( {'top': $(id).offset().top* 1.05, 'left': $(window).width()/1.7,   });
      //want a less aggressive offset
      else if(  $(window).width() <= 750) 
        target.offset( {'top': $(id).offset().top*1.05, 'left': $(window).width()/1.75,   });
      else if( $(window).width() <= 1100) 
        target.offset( {'left': 1.75* $(id).offset().left, 'top': $(id).offset().top*1.1  });
      else if( $(window).width() <= 1300) 
        target.offset( {'left': 2.15* $(id).offset().left, 'top': $(id).offset().top*1.2  });
  }
}
$(document).on("click", ".battle", function() {
  var btn = $(this).attr('id');
  var divToAppend, target, offset;
  target = $('.miracle_click:first').clone();
  target.html( '-' + truncate_bigint(vals.click));
  perform_miracle();
  offset = $(window).height()/8;
  $('.boss_img').append(target);
  target.show();
  //handle unique animations for each click
  target.css('opacity',100);
  target.css('color', '#880E4F');
  //process the animation - we need to consider screen size here to obtain the correct offsets.
  gen_target_offset('.boss_img', target);
  //two animations to create a more smooth curve
  target.animate({ 'top': '-=25', 'opacity':0.8, 'left': '+=4' }, 250);
  target.animate({ 'top': '+=15', 'opacity':0.1, 'left':  '+=15'}, 250, function() {  $(this).remove(); });
  var boss_num = btn.substr(btn.length-1);
  for( var k in vals.pantheon.bosses) {
    if( vals.pantheon.bosses[k].current) {
      vals.pantheon.bosses[k].current_hp -= vals.click;
  //process reward for defeating boss
    if( vals.pantheon.bosses[k].current_hp <= 0 ) {
      vals.pantheon.bosses[k].current = false;
      var id = k.substr(k.length-1);
      id++;
      boss_num++;
      vals.followers += vals.pantheon.bosses[k].reward;  
      vals.pantheon.bosses['boss'+(id)].current = true;
    }
    }
  } 
  vals.followers -= vals.click;
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
          gen_target_offset( '#' + $(this).attr('id'), target); 
            //target.offset({left:event.pageX-30, top:$('#miracle_button').offset().top * 1.1});;
           // }else target.offset({left:offset * 1.1, top:$('#counter').offset().top});
          target.css('opacity',100);

          if( used_id === 'button') { target.animate({ 'top': '+=' + $(window).height()/12, 'opacity':0.1, 'left':target.offset.left+ 'px'}, 750, function() { 
            $(this).remove();
          });
          }
          else {target.animate({ 'top':'-=' + $(window).height()/8, 'opacity':0.1, 'left': '-=10'}, 750, function() { 
            $(this).remove();
          });
          }

});

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
    vals.current_tab = tabName;
    if( upgrade_box_size != 0 ) 
      $('#upgrades-box').css("height", upgrade_box_size);
    fix_names(vals);
}
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
        num = Math.round(num * 100) /100;
    }
    var num_str = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    return num_str;
}

