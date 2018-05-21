var last_float = 10;
var last_saved = 0;

var vals = {
  "energy":0,"prod":0, "click":1, "followers":0, "loss":0, "corruption":0, "achievement_multiplier":1.00, "current_tab":"Conversion","tick":500,"flame":0,
  "events": {
    "superclick": {
      "click_num":0,
      "active":false,
      "mul": 2
    }
  },
  "stats" :{
     "time_played":0, 
     "total_energy":0, 
     "total_followers":0,
     "max_prod":0,
     "max_loss":0,
     "miracle_clicks":0,
     "ascension_clicks":0,
     "miracle_click_energy":0,
     "ascension_click_energy":0
  },
  "god_status": {
    "current": 1,
    "1": {
      "label":"Abstract presence",
      "mul": 1,
      "boss_label":"",
      "max_tier":3
    },
    "2":{
      "label":"Entity",
      "mul": 2,
      "boss_label":"Angry",
      "max_tier":4
    }
  },
  "leap" : {
    "unlocked":false,
    "selected":0,
    //each of these are tiers
    "1": {
      "click":{
        "label":"Improved Power",
        "description":"Your clicks are twice as powerful.",
        "amount":0,
        "mul": 1 // powers of 2 - 2^1 = 2 etc.
      },
      "boss":{
        "label":"Boss Killer",
        "description":"You do 3x damage to bosses.",
        "amount":0,
        "mul": 1
      },
      "tier":{
        "label":"True Ascension",
        "description":"You Ascend to a new God status, with new unlocks but increased difficulty.",
        "cost":50,
        "amount":0,
        "mul":1, //this is actually addition..
        "req":125
      }
    }
  },
  "miracle":{
            "purchase1":{
                "label":"Online Blogger",
                "description":"An inspired teenager to spread the word.",
                "amount":0,
                "output":0.2,
                "base_cost":15,
                "cost":15,
                "unlock_rps":0,
                "unlocked":true,
            },
            "purchase2":{
                "label":"Leaflets",
                "description":"Leaflets for your followers to hand out.",
                "amount":0,
                "output":1,
                "base_cost":160,
                "cost":160,
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
                "unlock_rps":5.0,
                "unlocked":false,
            },
            "purchase5":{
                "label":"Qualified priests",
                "description":"Followers trained to hold services in your name.",
                "amount":0,
                "output":150,
                "base_cost":22500,
                "cost":22500,
                "unlock_rps":25.0,
                "unlocked":false,
            },
            "purchase6":{
                "label":"Religious Sect",
                "description":"A new sect started by your followers.",
                "amount":0,
                "output":1000,
                "base_cost":125000,
                "cost":125000,
                "unlock_rps":175.0,
                "unlocked":false,
            },
            "purchase7":{
                "label":"Holy city",
                "description":"A city dedicated to your being.",
                "amount":0,
                "output":7500,
                "base_cost":800000,
                "cost":800000,
                "unlock_rps":1175.0,
                "unlocked":false,
            },
            "purchase8":{
                "label":"Random segments of code",
                "description":"Learning machine language to convert them to your cause.",
                "amount":0,
                "output":30000,
                "base_cost":5000000,
                "cost":5000000,
                "unlock_rps":8500.0,
                "unlocked":false,
            }
    },  "ascend":{
            "ascend1":{
                "label":"Step-in-booth",
                "description":"An univiting small booth to slowly process followers.",
                "amount":0,
                "output":0.2,
                "base_cost":25,
                "cost":25,
                "unlock_rps":0,
                "unlocked":true,
            },
            "ascend2":{
                "label":"Ascension suite",
                "description":"A small, plush lounge holding more followers at a time.",
                "amount":0,
                "output":1,
                "base_cost":225,
                "cost":225,
                "unlock_rps":0.2,
                "unlocked":false,
            },
            "ascend3":{
                "label":"Holy room",
                "description":"An entire room where your followers can ascend.",
                "amount":0,
                "output":5,
                "base_cost":1350,
                "cost":1350,
                "unlock_rps":1.2,
                "unlocked":false,
            },
            "ascend4":{
                "label":"Delapidated monastery",
                "description":"A repurposed Monastery for your followers.",
                "amount":0,
                "output":25,
                "base_cost":8000,
                "cost":8000,
                "unlock_rps":5.0,
                "unlocked":false,
            },
            "ascend5":{
                "label":"Cathedral of Ascendance",
                "description":"An entire Cathedral built to connect with you.",
                "amount":0,
                "output":150,
                "base_cost":30000,
                "cost":30000,
                "unlock_rps":25.0,
                "unlocked":false,
            },
            "ascend6":{
                "label":"Hallowed grounds",
                "description":"Sacred grounds where your followers may ascend.",
                "amount":0,
                "output":1000,
                "base_cost":160000,
                "cost":160000,
                "unlock_rps":175.0,
                "unlocked":false,
            },
            "ascend7":{
                "label":"Complex of enlightenment",
                "description":"A sprawling complex to convert followers.",
                "amount":0,
                "output":7500,
                "base_cost":1000000,
                "cost":1000000,
                "unlock_rps":1175.0,
                "unlocked":false,
            },
            "ascend8":{
                "label":"Ascension chip",
                "description":"A chip allowing conversion of followers through the internet.",
                "amount":0,
                "output":30000,
                "base_cost":6000000,
                "cost":6000000,
                "unlock_rps":8500.0,
                "unlocked":false,
            }
  },
    "upgrades": {
        "1" : {
          "type":"Click amount",
            "upgrade1":{
              "label":"Basic telekinetics",
              "description":"Limited control of Earthly forces doubles your Divine Power.",
              "unlocked":false,
              "cost":25,
              "mul":2
            },
            "upgrade2":{
              "label":"Matter Manipulation",
              "description":"A small amount of control over matter triples your Divine Power.",
              "unlocked":false,
              "cost":150,
              "mul":3
            },
            "upgrade3":{
              "label":"Transmogrification",
              "description":"Conversion of animals into any shape triples your Divine Power.",
              "unlocked":false,
              "cost":750,
              "mul":3
            },
            "upgrade4":{
              "label":"Elementary conjuring",
              "description":"Fledgling control of the elements triples your Divine power.",
              "unlocked":false,
              "cost":3500,
              "mul":3
            },
             "upgrade5":{
              "label":"Studying Holy texts",
              "description":"Interpreting these ancient writings increases your Divine Power by 4 times.",
              "unlocked":false,
              "cost":18500,
              "mul":4
            },
             "upgrade6":{
              "label":"Burning the Holy texts",
              "description":"Read them, have you? Page-turners they were not.",
              "unlocked":false,
              "cost":80000,
              "mul":4
            },
            "upgrade7":{
              "label":"Astral projection",
              "description":"A double of yourself to act on your command.",
              "unlocked":false,
              "cost":375000,
              "mul":5
            },
            "upgrade8":{
              "label":"Benign possession",
              "description":"Controlling some of your followers' forms to further your purpose.",
              "unlocked":false,
              "cost":1000000,
              "mul":5
            },
            "upgrade9":{
              "label":"Power siphoning",
              "description":"Enhancing your power by extracting it from the World.",
              "unlocked":false,
              "cost":9000000,
              "mul":5
            },
            "upgrade10":{
              "label":"Void gathering",
              "description":"Retrieving power from the void of space.",
              "unlocked":false,
              "cost":70000000,
              "mul":6
            },
            "upgrade11":{
              "label":"Chaotic ritual",
              "description":"Harnessing chaos energy to increase your power.",
              "unlocked":false,
              "cost":500000000,
              "mul":6
            }
          },
          "2": {
            "type":"Tick speed",
            "upgrade1":{
               "label":"Improved reflexes",
              "description":"Training speeds up your perception of time passing.",
              "unlocked":false,
              "cost":500,
              "mul":0.8
            },
            "upgrade2":{
               "label":"Mastered reflexes",
              "description":"Mastering your form speeds up your perception of time passing futher.",
              "unlocked":false,
              "cost":7500,
              "mul":0.8
            },
            "upgrade3":{
               "label":"Shapeshifting",
              "description":"Transformation allows your perception of time passing to speed up futher.",
              "unlocked":false,
              "cost":50000,
              "mul":0.8
            },
            "upgrade4":{
               "label":"Mind Control",
              "description":"Convincing your followers that time is passing at a faster rate.",
              "unlocked":false,
              "cost":125000,
              "mul":0.8
            },
            "upgrade5":{
               "label":"Gravity bending",
              "description":"Using gravity to change how time flows.",
              "unlocked":false,
              "cost":1600000,
              "mul":0.8
            },
            "upgrade6":{
               "label":"God's stopwatch",
              "description":"Your newest toy new from the box.",
              "unlocked":false,
              "cost":20000000,
              "mul":0.8
            },
            "upgrade7":{
               "label":"The Mandela Effect",
              "description":"Reverse time and change what you wish - but only something small.",
              "unlocked":false,
              "cost":250000000,
              "mul":0.8
            },
            "upgrade8":{
               "label":"Keys to the car",
              "description":"Stolen keys to a working time machine.",
              "unlocked":false,
              "cost":1000000000,
              "mul":0.8
            }
          },
          "3" : {
            "upgrade1":{
              "label":"Unlock Quantum Leap",
              "description":"To infinity and beyond",
              "unlocked":false,
              "cost":1000000000
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
            "damage":1,
            "dps":0,
            "upgrades": {
              "1":{
                "click1":{
                  "label":"Damage x1.5/click",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":1.5,
                  "max_amount":8
                },
                "prod1":{
                  "label":"Damage +0.15x energy prod",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":0.15,
                  "max_amount":8
                },
                "click2":{
                  "label":"Deal +0.025x Divine Power/Tick",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":0.025,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05 Energy Prod/Tick",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":0.05,
                  "max_amount":8
                },
                "max_hp":{
                  "label":"Boss Max Hp &darr;10%",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":0.9,
                  "max_amount":6
                },
                "regen":{
                  "label":"Boss Regen &darr;20%",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":0.8,
                  "max_amount":5
                }
              },
              //tier 2 upgrades
              "2":{
                "click1":{
                  "label":"Damage x1.5/click",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":1.5,
                  "max_amount":8
                },
                "prod1":{
                  "label":"Damage +0.05x energy prod",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":0.05,
                  "max_amount":8
                },
                "click2":{
                  "label":"Deal +0.01x Divine Power/Tick",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05 Energy Prod/Tick",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":0.05,
                  "max_amount":8
                },
                "max_hp":{
                  "label":"Boss Max Hp &darr;10%",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":0.9,
                  "max_amount":6
                },
                "regen":{
                  "label":"Boss Regen &darr;20%",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":0.8,
                  "max_amount":5
                }
              }

            },

            "bosses" : {


            "boss1":{
              "max_hp": 1000000,
              "current_hp":1000000,
              "regen":100,
              "reward":1000000,
              "current":true,
              "name":"Arion's Spirit",
              "reward":0.5,
              "defeated":false
            },
            "boss2":{
              "max_hp": 125000000,
              "current_hp":125000000,
              "regen":10000,
              "reward":50000000,
              "current":false,
              "name":"Banshee",
              "reward":2,
              "defeated": false
            },
            "boss3":{
              "max_hp": 1750000000,
              "current_hp":1750000000,
              "regen":1000000,
              "reward":275000000,
              "current":false,
              "name":"Erinys",
              "reward": 5,
              "defeated":false
            },
            "boss4":{
              "max_hp": 3500000000,
              "current_hp":3500000000,
              "regen":75000000,
              "reward":275000000,
              "current":false,
              "name":"Demonic form",
              "reward": 15,
              "defeated":false
            }
           }
           },
           "challenges": {

            "challenge1":{
              "required_type":'click_m',
              "1" :{
              "type":"quantity",
              "visible":true,
              "unlocked":false,
              "label":"Your first Miracle",
              "description":"You performed your first miracle.",
              "click_req":1,
              },
              "1_1": {
              "type":"total",
              "visible":true,  
              "unlocked":false,
              "label":"The first to your cause.",
              "description":"You've gained 10 followers through your miracles.",
              "val_req":10
              },
              "2" : {
              "type":"quantity",
              "visible":false,  
              "unlocked":false,
              "label":"Miracle happy",
              "description":"You've performed 100 miracles.",
              "click_req":100
              },
              "2_2" : {
                "type":"total",
              "visible":false,  
              "unlocked":false,
              "label":"It's a miracle..!",
              "description":"You've gained 500 followers through your miracles.",
              "val_req":500
              },
              "3" : {
              "type":"quantity",
              "visible":false,  
              "unlocked":false,
              "label":"Qualified exercise",
              "description":"You've performed 1000 miracles.",
              "click_req":1000
              },
              "3_3" : {
                "type":"total",
              "visible":false,  
              "unlocked":false,
              "label":"Ten thousand strong at least!",
              "description":"You've gained 10000 followers through your miracles.",
              "val_req":10000
              },
              "4" : {
              "type":"quantity",
              "visible":false,  
              "unlocked":false,
              "label":"Carpal tunnel",
              "description":"You've performed 15000 miracles.",
              "click_req":15000
              },
              "4_4" : {
                "type":"total",
              "visible":false,  
              "unlocked":false,
              "label":"Iceland x 3",
              "description":"You've gained 1M followers through your miracles.",
              "val_req":1000000
              }
            },
             "challenge2":{
              "required_type":'click_a',
              "1":{
                "type":"quantity",
                "visible":true,
                "unlocked":false,
                "label":"Your first Conversion",
                "description":"You converted your first follower into energy.", 
                "click_req":1
              },
                "1_1": {
              "type":"total",
              "visible":true,  
              "unlocked":false,
              "label":"Fast-tracking",
              "description":"You've gained 10 Divine Energy through converting followers.",
              "val_req":10
              },
               "2" : {
              "type":"quantity",
              "visible":false,  
              "unlocked":false,
              "label":"Highway to heaven",
              "description":"You've performed 100 Conversions.",
              "click_req":100
              },
              "2_2" : {
              "type":"total",
              "visible":false,  
              "unlocked":false,
              "label":"It's a long way to Tipperary",
              "description":"You've gained 500 energy through Converting followers.",
              "val_req":500
              },
              "3" : {
              "type":"quantity",
              "visible":false,  
              "unlocked":false,
              "label":"Children of the cause",
              "description":"You've performed 1000 Conversions.",
              "click_req":1000
              },
              "3_3" : {
                "type":"total",
              "visible":false,  
              "unlocked":false,
              "label":"Ascend this.",
              "description":"You've gained 10000 Divine Energy through Conversions.",
              "val_req":10000
              },
              "4" : {
              "type":"quantity",
              "visible":false,  
              "unlocked":false,
              "label":"A'int that a click in the head.",
              "description":"You've performed 15000 Conversions personally.",
              "click_req":15000
              },
              "4_4" : {
                "type":"total",
              "visible":false,  
              "unlocked":false,
              "label":"Unlimited power",
              "description":"You've Converted 1M followers.",
              "val_req":1000000
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
              },
              "3" : {
              "visible":false,  
              "unlocked":false,
              "label":"Someday they'll have secrets",
              "description":"You've gained your first 8th tier Conversion herald.",
              "req_tier":8,
              "req_num":1
              }
            },
             "challenge4":{
                "required_type":'asc',
                "1": {
                  "visible":true,
                  "unlocked":false,
                  "label":"Jupiter: Ascension",
                  "description":"You developed the first Earthly Conversion point for your followers.",
                  "req_tier":1,
                  "req_num":1
                },
                 "2" : {
                "visible":false,  
                "unlocked":false,
                "label":"On the up-and-up",
                "description":"You've gained your first 4th tier Conversion facilities.",
                "req_tier":4,
                "req_num":1
              },
              "3" : {
              "visible":false,  
              "unlocked":false,
              "label":"Someday they'll have dreams",
              "description":"You've gained your first 8th tier Conversion point.",
              "req_tier":8,
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
    // resolve_mobile_width();
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
    // resolve_mobile_width();
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
    $('.reset').prop('disabled', true);
    $('#tier_btn_1').prop('disabled', true);
  }

  function start_game(vals) {
    fix_names(vals);
    game_engine(vals, 0, 0);
  }
    function set_item_cost(item) { 
        var cost =  ((item.amount + 1) * ( vals.god_status[vals.god_status.current].mul * item.base_cost) * (item.amount + 1));

        if((item.amount + 1) > 10) { 
            cost *= 2;
        }
        return Math.round(cost * 0.9);
    }

  function game_engine(vals, iterations, cycles) {
    var corrected_prod = ((vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100))) - ((1+(vals.corruption/100))*vals.loss);
    var total_loss = (vals.loss * (1+(vals.corruption/100)));
    var mul = vals.god_status[vals.god_status.current].mul;
    var cost =1;
    if( mul > 1 ) cost = mul * 0.8;
    corrected_prod *= cost;
    total_loss *= cost;
    if( vals.followers < 0 ) vals.followers = 0;
    $('#click_amount').text( '[ ' + truncate_bigint( vals.click) + ' ]');
    $('#counter').text( truncate_bigint(Math.floor(vals.followers)) );
    if( $('#last_saved').text() != "" )  $('#last_saved').text(Math.round(last_saved) + ' seconds ago.');
    $('#power').text(truncate_bigint(vals.energy));
    //production of followers is (production*achievement_multipler) divided by the corruption factor.
    $('#production_net').text(truncate_bigint(corrected_prod));
    $('#production_gross').text(truncate_bigint(( (vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100)))));
    
    if( corrected_prod >= 0.0 || vals.followers >= total_loss )  
      $('#prod_energy').text(truncate_bigint(total_loss));
    
    else $('#prod_energy').text(truncate_bigint( cost * (vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100))));
    
    setTimeout(function() {
    checkAchievements(vals);
    setButtonAvailability(vals);  

      if( vals.current_tab==="Pantheon" && vals.pantheon.unlocked) {
        for( var k in vals.pantheon.bosses ) {
          if( vals.pantheon.bosses[k].current ) {
            if( ( (mul * vals.pantheon.bosses[k].current_hp) + (mul * vals.pantheon.bosses[k].regen) ) <= (mul * vals.pantheon.bosses[k].max_hp) ) {
              vals.pantheon.bosses[k].current_hp = vals.pantheon.bosses[k].current_hp + (mul * vals.pantheon.bosses[k].regen);
            } else vals.pantheon.bosses[k].current_hp = vals.pantheon.bosses[k].max_hp;
            vals.pantheon.bosses[k].current_hp -= vals.pantheon.dps;
            if( vals.pantheon.dps > 0 ) animate_attack(vals.pantheon.dps, '#battle' + (vals.pantheon.stage+1));
          }
        }
      }
      else if( vals.current_tab==="Stats")fix_stats(vals);
      if( vals.upgrades['1']['upgrade6'].unlocked && !vals.pantheon.unlocked) {
        vals.pantheon.unlocked = true; 
        fix_names(vals); 
      }
      vals.stats.time_played = (vals.tick + vals.stats.time_played * 1000)/1000;
      last_saved = (vals.tick + last_saved * 1000)/1000;
      //save every 30 seconds
      if( (cycles * ( vals.tick * 30 ) >= 30000 ) ) {
        saveData();
        cycles = 0;
      }
    if( iterations >= 30 ) {
        game_engine(vals, 0, ++cycles);
    }
    else {
      game_engine(vals, ++iterations, cycles);
      //adding production to variables
      if( vals.followers >= vals.loss || corrected_prod > 0)  {
        vals.followers += corrected_prod;
        vals.stats.total_followers += corrected_prod;
        vals.energy += ( ( 1+(vals.corruption/100) ) * vals.loss);
        vals.stats.total_energy += ( ( 1+(vals.corruption/100) ) * vals.loss);
      }
      else {vals.energy += ( cost * (vals.achievement_multiplier*vals.prod))/(1+(vals.corruption/100));
        vals.stats.total_energy += (cost *(vals.achievement_multiplier*vals.prod))/(1+(vals.corruption/100));
      }
    }
  
    }, vals.tick);
  }
  var valsToJSON = function() {
      var save = {
        'e':Math.round(vals.energy).toString(16),
        'p':vals.prod,
        'cl':vals.click.toString(16),
        'f':(Math.round(vals.followers)).toString(16),
        'l':vals.loss,
        'c':vals.corruption.toString(16),
        'ac':vals.achievement_multiplier,
        't':(Math.round(vals.tick)).toString(16),
        'fl':vals.flame.toString(16),
        'dam':vals.pantheon.damage.toString(16),
        "tier":vals.god_status.current.toString(16),
        "sac":vals.sacrifice.unlocked,
        'dps':vals.pantheon.dps,
        "stage":vals.pantheon.stage.toString(16)
      };
        var unlocks = {
            "miracle":"cl",
            "ascend":"asc"
        };
        for(var k in unlocks) { 
            var items = vals[k];
            var temp_a = [];
              for(var i in items) { 
                if(items[i].unlocked) {
                    temp_a.push([i] + ":" +items[i].amount.toString(16));
                  }
              }
              save[k] = temp_a.join('|');
        }
         for(var k in vals.leap) { 
            var items = vals.leap[k];
            var temp_a = [];
              for(var i in items) { 
                if(items[i].amount > 0) {
                    temp_a.push([i] + ":" +items[i].amount.toString(16));
                  }
              }
            if( k != 'selected' && k != 'unlocked') save['leap' + k] = temp_a.join('|');
        }
        var tiered = {
          "upgrades":"up",
          "challenges":"ch"
        }

        for(var k in tiered) { 
            var items_generic = vals[k];
            var temp_t = [];
            var temp_arr = [];
            for( var i in items_generic ) {
              for( var j in items_generic[i] ) {
                if(items_generic[i][j].unlocked) 
                    temp_t.push(items_generic[i][j].label);
                }
              }
            temp_arr.push(temp_t); 
            save[k] = temp_arr.join('|');
        }

        var temp_s = {
          't':vals.stats.time_played.toString(16),
          't_e':Math.round(vals.stats.total_energy).toString(16),
          't_f':Math.round(vals.stats.total_followers).toString(16),
          'm_p':vals.stats.max_prod,
          'm_l':vals.stats.max_loss,
          'm_c':vals.stats.miracle_clicks.toString(16),
          'a_c':vals.stats.ascension_clicks.toString(16),
          'mc_e':Math.round(vals.stats.miracle_click_energy).toString(16),
          'ac_e':Math.round(vals.stats.ascension_click_energy).toString(16)
        };
        save['s'] = temp_s;

        var pantheon = [];
        for(var k in vals.pantheon.bosses) { 
            var items = vals.pantheon.bosses[k];
            var temp_a = [];
            temp_a.push('max_hp' + ":" +items.max_hp.toString(16));
            temp_a.push('current_hp' + ":" +items.current_hp.toString(16));
            temp_a.push('regen' + ":" +items.regen.toString(16));
            temp_a.push('defeated' + ":" + items.defeated.toString().toLowerCase());
            temp_a.push('reward' + ":" + items.reward.toString(16));    
            pantheon.push(temp_a);
        }
        save['pantheon'] = pantheon;
        console.log(save);
        return save;
  }
  function get_valsFromJSON(save) {
        vals.energy = parseInt(save.e,16);
        vals.prod = save.p;
        vals.click = parseInt(save.cl, 16);
        vals.followers = parseInt(save.f, 16);
        vals.loss = save.l;
        vals.corruption = parseInt(save.c, 16);
        vals.achievement_multiplier = save.ac;
        vals.tick = parseInt(save.t, 16);
        vals.flame = parseInt(save.fl, 16);
        vals.pantheon.damage = parseInt(save.dam,16);
        vals.sacrifice.unlocked = save.sac;
        vals.pantheon.dps = save.dps;
        vals.pantheon.stage = parseInt(save.stage);
        if( save.tier ) vals.god_status.current = parseInt(save.tier,16);

        for( var k in vals.pantheon.bosses ) {
          var boss = vals.pantheon.bosses[k];
          if( boss.current && parseInt(k.substr(k.length-1)) != (parseInt(vals.pantheon.stage) +1) ) boss.current = false;
          else if( parseInt(k.substr(k.length-1)) === (parseInt(vals.pantheon.stage) +1)  ) boss.current = true;
        }
        var unlocks = {
            "miracle":"cl",
            "ascend":"asc"
        }; 
        var tiered = {
          "upgrades":"up",
          "challenges":"ch"
        }
        for(var k in unlocks) {
            if( save[k]) {
              var t_items = save[k].split('|');
                for( var i=0; i<t_items.length; i++ ) {
                  var item_num = t_items[i].split(':');
                    for( var x in vals[k] ) {
                      if( x === item_num[0] ) {
                        vals[k][x].amount = parseInt(item_num[1],16);
                        if( x.substr(x.length-1) < Object.keys(vals[k]).length ) {
                          vals[k][x.substr(0,x.length-1) + String(parseInt(x.substr(x.length-1)))].unlocked = true;    
                        }
                      }
                    }
                }
            }
        }
        for(var k in vals.leap) { 
          if( save['leap' + k] ) {
          if( k != 'unlocked' && k != 'selected') {
            var t_items = save['leap' + k].split('|');
            for( var i=0; i<t_items.length; i++ ) {
              var item_num = t_items[i].split(':');
              for( var x in vals.leap[k] ) {
                if( x === item_num[0] ) {
                  vals.leap[k][x].amount = parseInt(item_num[1],16);
                }
              }
            }
          }
        }
      }

        //load challenges and upgrades
        for(var k in tiered) {
            if( save[k]) {
              var t_items = save[k].split('|');
              t_items += '';
              var item = t_items.split(',');

                for( var i=0; i< item.length; i++ ) {
                  
                  for( var x in vals[k] ) {
                    for( var y in vals[k][x] ) {
                      if( vals[k][x][y].label === item[i] ) {
                        vals[k][x][y].unlocked = true;    
                      }
                    }
                  }
                }
            }
        }
        if( save['pantheon'] ) {
            var items = save['pantheon'];
            for( var i=0; i< items.length; i++ ) {
              for( var k in items[i] ) {
                vals.pantheon.bosses['boss' + (i+1)].max_hp = parseInt(items[i][0].split(':')[1], 16);
                vals.pantheon.bosses['boss' + (i+1)].current_hp = parseInt(items[i][1].split(':')[1], 16);
                vals.pantheon.bosses['boss' + (i+1)].regen = parseInt(items[i][2].split(':')[1], 16);
                vals.pantheon.bosses['boss' + (i+1)].defeated = (items[i][3].split(':')[1].toString().toLowerCase() == 'true');
                vals.pantheon.bosses['boss' + (i+1)].reward = parseInt(items[i][4].split(':')[1], 16);
              }
            }

        }


        //load data for statistics 
        if( save.s ) {
          vals.stats.time_played = parseInt(save.s.t,16);
          vals.stats.total_energy = parseInt(save.s.t_e,16);
          vals.stats.total_followers = parseInt(save.s.t_f,16);
          vals.stats.max_prod = save.s.m_p;
          vals.stats.max_loss = save.s.m_l;
          vals.stats.miracle_clicks = parseInt(save.s.m_c,16);
          vals.stats.ascension_clicks = parseInt(save.s.a_c,16);
          vals.stats.miracle_click_energy = parseInt(save.s.mc_e,16);
          vals.stats.ascension_click_energy = parseInt(save.s.ac_e, 16);
        }

  }
//change this to localstorage
  function saveData() {
    $('#save_title').html("Last saved ");
    $('#last_saved').text("0 seconds ago.");
    localStorage.sv1 = btoa(JSON.stringify(valsToJSON()));
    last_saved = 0;
  }
  function loadData() {
    try {
        get_valsFromJSON(JSON.parse(atob(localStorage.sv1)));
     }catch(err) {
      console.log("No saved data to load.");
    }
      fix_tab_buttons(vals);
      fix_names(vals);
  }
  function deleteSave() {
    localStorage.removeItem("sv1");
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
            var has_unlocked = false;
            if( vals.challenges[k][i].type === "total") {if( vals.stats.miracle_click_energy >= vals.challenges[k][i].val_req ) has_unlocked = true; }
            else {if( vals.stats.miracle_clicks >= vals.challenges[k][i].click_req) has_unlocked = true; }
            //we don't want achievment messages to show unless the user actually unlocks them => not on startup every time.
            if( has_unlocked ){
              if( !vals.challenges[k][i].unlocked && ($('#save_title').text() != "Nothing saved yet." || last_saved > 2) )
                $.toaster( {message: vals.challenges[k][i].label, title:"Achievement Unlocked" } );
              vals.challenges[k][i].unlocked = true;
            }
            fix_names(vals);
          }
        }
        break;
        case "click_a":
        for( var i in vals.challenges[k]) {
          if( vals.challenges[k][i] != vals.challenges[k].required_type) {
            var has_unlocked = false;
            if( vals.challenges[k][i].type === "total") {if( vals.stats.ascension_click_energy >= vals.challenges[k][i].val_req ) has_unlocked = true; }
            else {if( vals.stats.ascension_clicks >= vals.challenges[k][i].click_req) has_unlocked = true; }
            
            if(has_unlocked) {
            if( !vals.challenges[k][i].unlocked && ($('#save_title').text() != "Nothing saved yet." || last_saved >= 1) )
              $.toaster( {message: vals.challenges[k][i].label, title:"Achievement Unlocked" } );
            vals.challenges[k][i].unlocked = true;
            }
            fix_names(vals);
        }
      }
        break;
        case "conv":
        for( var i in vals.challenges[k]) {
          if( vals.challenges[k][i] != vals.challenges[k].required_type) {
          if( vals.miracle['purchase' + vals.challenges[k][i].req_tier].amount >= vals.challenges[k][i].req_num ) {
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
             {
              $.toaster( {message: vals.challenges[k][i].label, title:"Achievement Unlocked" } );
              if( i === '1') vals.pantheon.damage *= vals.click; 
            }
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
    var mul = vals.god_status[vals.god_status.current].mul;

    if( vals.current_tab === 'Conversion' ) {
    for( var k in vals.miracle ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.energy >= mul * vals.miracle[k].cost ) 
        $('#purchase_btn_' + purchase_num).prop('disabled', false);
      else $('#purchase_btn_' + purchase_num).prop('disabled', true);

      if( vals.miracle[k].amount > 0 ) 
        $('#purchase_sell_btn_' + purchase_num).prop('disabled', false);
      else $('#purchase_sell_btn_' + purchase_num).prop('disabled', true);
    }
  }
  if( vals.current_tab === 'Ascension' ) {
    for( var k in vals.ascend ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.energy >= mul * vals.ascend[k].cost ) 
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
      var cost = 1;
      if( mul > 1 ) cost = mul * 0.67;
      for( var i in vals.upgrades[k] ) {
      if( vals.energy >= (cost * vals.upgrades[k][i].cost) && !vals.upgrades[k][i].unlocked)
        $('#upgrade_btn_' + purchase_num + "_" + i.substr(i.indexOf('e')+1)).prop('disabled', false);
      else $('#upgrade_btn_' + purchase_num + "_" + i.substr(i.indexOf('e')+1)).prop('disabled', true);
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
   if( vals.current_tab === 'Pantheon') {
    if( !vals.pantheon.unlocked ) return;
      var boss_num = parseInt(vals.pantheon.stage) + 1;
      if( boss_num > 1 ) {
        $('#prev_boss').prop('disabled', false);
        $('#prev_boss').css('display', "inline-block");  
      }
      else {
        $('#prev_boss').prop('disabled', true);
        $('#prev_boss').css('display', "none");  
      }

      var defeated = vals.pantheon.bosses['boss' + String(boss_num)].defeated;
      if( boss_num >= parseInt(vals.god_status[vals.god_status.current].max_tier) || defeated != true ) {
        $('#next_boss').prop('disabled', true);
        $('#next_boss').css('display', "none");  
      }
      else {
        $('#next_boss').prop('disabled', false);
        $('#next_boss').css('display', "inline-block");  
      }
       for( var k in vals.pantheon.upgrades ) {
           for( var i in vals.pantheon.upgrades[k] ) {
             var item = vals.pantheon.upgrades[k][i];
              var id = '#';
              if( i.includes('hp') || i.includes('regen')  ) id += i + '_' + k.substr(k.length-1);
              else id += i.substr(0, i.length-1) + '_' + i.substr(i.length-1);
              if( vals.flame >= item.cost && item.amount < item.max_amount ) {
                  $(id).prop('disabled', false);
              }
              else $(id).prop('disabled', true);
          }
        }
    }
   if( vals.current_tab === 'Leap' ) {
    var id = $('.wrap-nav').attr('id');
    var tier = id.substr(id.length-1);
      if( vals.flame >= vals.leap[tier]['tier'].req) {
        $('#tier_btn_' + tier).prop('disabled', false);  
      }  
      else $('#tier_btn_' + tier).prop('disabled', true);    
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
      for( var k in vals.miracle ) {
        if( vals.miracle[k].unlocked ) unlock_conv++;
        total_conv ++;
      }
      for( var k in vals.ascend ) {
        if( vals.ascend[k].unlocked ) unlock_ascend++;
        total_ascend ++;
      }
    $('#challenges-tab-text').text("Challenges " + Math.floor((vals.achievement_multiplier - 1) * 50) + "/26");
    $('#augment-tab-text').text("Upgrade " + unlock_aug + "/20");
    $('#convert-tab-text').text("Create " + unlock_conv + "/" + total_conv);
    $('#ascend-tab-text').text("Convert " + unlock_ascend + "/" + total_ascend);
    
    if( !vals.leap.unlocked ) $('#leap-tab-btn').css('display', 'none');
    else $('#leap-tab-btn').css('display', 'inline-block');
  }
  function fix_stats(vals) {
    var mul = vals.god_status[vals.god_status.current].mul;
    var corrected_prod = (vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100));
    var corrected_loss = (1+(vals.corruption/100))*vals.loss;
    corrected_prod *= (0.8*mul);
    corrected_loss *= (0.8*mul);
    if( corrected_prod > vals.stats.max_prod) vals.stats.max_prod = corrected_prod;
    if( corrected_loss > vals.stats.max_loss) vals.stats.max_loss = corrected_loss;
       $('#stats_field_1').text(truncate_time( Math.round(vals.stats.time_played)));
       $('#stats_field_2').text(truncate_bigint(Math.floor(vals.energy)));
       $('#stats_field_3').text(truncate_bigint(Math.floor(vals.stats.total_energy)));
       $('#stats_field_4').text(truncate_bigint(Math.floor(vals.followers)));
       $('#stats_field_5').text(truncate_bigint(Math.floor(vals.stats.total_followers)));
       $('#stats_field_6').text(truncate_bigint( Math.round(corrected_loss)) );
       $('#stats_field_7').text(truncate_bigint( Math.round(vals.stats.max_loss)) );
       $('#stats_field_8').text( truncate_bigint( Math.round(corrected_prod) ));
       $('#stats_field_9').text( truncate_bigint( Math.round(vals.stats.max_prod) ));
       $('#stats_field_13').text(vals.stats.miracle_clicks);
       $('#stats_field_11').text(vals.click);
       $('#stats_field_14').text(vals.stats.ascension_clicks);
       if( $('#last_saved').text() != "")
          $('#stats_field_saved').text(Math.round(last_saved) + " seconds ago.");
       else $('#stats_field_saved').text(" never");
       $('#stats_field_15').text(truncate_bigint(vals.stats.ascension_click_energy));
       $('#stats_field_16').text(truncate_bigint(vals.stats.miracle_click_energy));
  }
   function fix_names( vals ) {
    //fix conv and asc
    fix_conv_asc(vals);
    fix_corruption_bar(vals);
    //check on each update cycle for now - later only update once the desired event has occured
    $('#god_status').text(vals.god_status[vals.god_status.current].label);
    //todo- move this to its own method.
    
    //fix upgrades
    fix_upgrades(vals);
    //fix sacrifices
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
    //fix challenges
    fix_challenges(vals);
    fix_pantheon(vals);
    fix_leap(vals);
  }
function fix_leap(vals) {
  if( vals.current_tab === 'Leap' && vals.leap.unlocked ) {
      var id = $('.wrap-nav').attr('id');
      var tier = id.substr(id.length-1);
      //$('.wrap-nav').attr('id', 'leap_tier_' + String(parseInt(tier)+1));

      //boss lbl boss desc
      for( var k in vals.leap[tier] ) {
        $('#' + k + '_lbl_' + tier).text(vals.leap[tier][k].label);
        $('#' + k + '_desc_' + tier).text(vals.leap[tier][k].description);
        if( k === 'tier' ) $('#' + k+ '_cost_' + tier).html('Costs ' + vals.leap[tier][k].cost + '<span class="glyphicon glyphicon-fire"></span>');

        if( vals.leap.selected != 0 ) {
          $('#' + vals.leap.selected ).css('background-color', '#fff');
          $('#' + vals.leap.selected ).children().each(function() {
            $(this).css('color', '#212121');
            $(this).children().each(function() {
              $(this).css('color', '#212121');
            });
          });
          $('#' + vals.leap.selected ).css('border', '6px solid #212121');
          $('#' + vals.leap.selected ).css('border-radius', '6px');
          $('#' + vals.leap.selected ).css('padding', '2.5% 2.5%');
        }
    }
  }  

}

//fix pantheon tabs, accounting for whether you can switch btw tabs
function fix_pantheon(vals) {
      //fix pantheon
    var mul = vals.god_status[vals.god_status.current].mul;
    if( vals.pantheon.unlocked && vals.current_tab === 'Pantheon') {

      $('#pantheon_div_1').css('display', 'none');
      $('#pantheon_unlocked').css('display','block');
      $('#essence_amount').text( Math.round( vals.flame * 10) /10 );
      for( var k in vals.pantheon.bosses ) {
        var id = k.substr(k.length-1);
      if( vals.pantheon.bosses[k].current ) {
        $('#battle_1').attr('src', 'data/battle_' + id + '.png');
        if( $('#boss_num').text() != ': Upgrades') $('#boss_num').text(': ' + vals.god_status[vals.god_status.current].boss_label + ' Boss ' + id);
        $('#battle_1_hp').text( truncate_bigint( mul * vals.pantheon.bosses[k].current_hp));
        $('#max_hp').text( truncate_bigint(mul * vals.pantheon.bosses[k].max_hp));
        $('#boss_hp_bar').css('width', 100 * ( (mul*vals.pantheon.bosses[k].current_hp)/(mul*vals.pantheon.bosses[k].max_hp) ) + '%');
        $('#regen').text(mul*vals.pantheon.bosses[k].regen);
        $('#boss_name').text(vals.pantheon.bosses[k].name + ':');
        break;
      }
    }

         for( var k in vals.pantheon.upgrades ) {
           for( var i in vals.pantheon.upgrades[k] ) {
             var item = vals.pantheon.upgrades[k][i];
             if( !i.includes('hp') && !i.includes('regen')) {
                if( $('#shop_' + i.substr(0, i.length-1) + '_' + i.substr(i.length-1)).text() === '' )
                 $('#shop_' + i.substr(0, i.length-1) + '_' + i.substr(i.length-1)).text(item.label);
             }
             else {
              if( $('#shop_' + i).html() === '' )
                 $('#shop_' + i).html(item.label);
             }
            }
          }
  }
}
function fix_corruption_bar(vals) {
  var cor = vals.corruption;
  if( cor >= -100 ) $('#corruption_bar').css('background-color', '#0D47A1');
  if( cor >= -80 && cor < -60 ) $('#corruption_bar').css('background-color', '#1976D2');
  if( cor >= -60 && cor < -40 ) $('#corruption_bar').css('background-color', '#42A5F5');
  if( cor >= -40 && cor < -20) $('#corruption_bar').css('background-color', '#90CAF9');
  if( cor >= -20 && cor < 0) $('#corruption_bar').css('background-color', '#BBDEFB');
  if( cor == 0 ) $('#corruption_bar').css('background-color', '#B0BEC5');
  if( cor <= 20 && cor > 0) $('#corruption_bar').css('background-color', '#EF9A9A');
  if( cor <= 40 && cor > 20) $('#corruption_bar').css('background-color', '#E57373');
  if( cor <= 60 && cor > 40) $('#corruption_bar').css('background-color', '#F44336');
  if( cor <= 80 && cor > 60) $('#corruption_bar').css('background-color', '#D32F2F');
  if( cor <= 100 && cor > 80) $('#corruption_bar').css('background-color', '#B71C1C');
  var g_e;
  if( cor < 0 ) {
    g_e = " Good";
    cor *= -1
  }
  else if( cor > 0 ) 
    g_e = " Evil";
  else if( cor === 0 )
    g_e = " - Neutral";

  $('#corruption_amount').text(cor + '%' + g_e);
}
//generalised function that handles both asc and conv tabs.
function fix_conv_asc(vals) {
  var currentTab = vals.current_tab;
  if( currentTab != 'Conversion' && currentTab != 'Ascension' ) return;
  var keyWord;
  var title;
    if( currentTab === 'Ascension') { keyWord = 'ascend'; title = 'ascend'; }
    else { keyWord = 'miracle'; title = 'purchase'; }
    for( var k in vals[keyWord] ) {
      var purchase_num = k.substr(k.length -1 );
      if( (currentTab === 'Ascension' && vals.loss >= vals[keyWord][k].unlock_rps) || (currentTab==='Conversion' && vals.prod >= vals[keyWord][k].unlock_rps) ) {
        vals[keyWord][k].unlocked = true;
        //dynammically create divs as needed, saves creating all in the html file.
         if( !document.getElementById( title + '_' + purchase_num) && !document.getElementById('new_' + title) && k != (title + "1") ){
              var clonedDiv_id = $('#' + title+ '_' + purchase_num + '_' + purchase_num);
              
              var html_to_append = '<div id="new_purchase" class="tab_div"> ' +
                '<h3 id="purchase_head_temp" class="header_1">This is the field for upgrade for option one.' +
                '<label id=purchase_lbl_ class="align_right">0</label></h3><p>' +
                '<b><span id="purchase_cost_">10</span></b> - <em id="purchase_text_"> Text placeholder</em></p>' +
                '<p class = "align_right">Creates <b><span id="purchase_out_">0.1</span></b> per tick';

                if( currentTab != 'Conversion' ) html_to_append += '<br>Costs <b><span id="ascend_out__2">0.1</span></b>per tick';

                html_to_append += ' </p><button id="purchase_btn_" class="purchase" disabled="disabled">Purchase</button> '+
                '<button id="purchase_sell_btn_" class="sell" data-balloon="Sells for 50% original value." data-balloon-pos="right" '+
                'disabled="disabled" >Sell</button></div>';
                $(html_to_append).prependTo('#' + currentTab);
              //now fix the fields
              $("#new_purchase").find('#purchase_lbl_').attr('id', title + "_lbl_" + purchase_num);
              $("#new_purchase").find('#purchase_text_').attr('id', title + "_text_" + purchase_num);
              $("#new_purchase").find('#purchase_btn_').attr('id', title + "_btn_" + purchase_num);
              $("#new_purchase").find('#purchase_sell_btn_').attr('id',title + "_sell_btn_" + purchase_num);
              $("#new_purchase").find('#purchase_out_').attr('id', title + "_out_" + purchase_num);
              $("#new_purchase").find('#purchase_cost_').attr('id', title + "_cost_" + purchase_num);
              $("#new_purchase").find('#purchase_head_temp').attr('id',title + "_header_" + purchase_num);
              if( currentTab != 'Conversion' ) $("#new_purchase").find('#ascend_out__2').attr('id', "ascend_out_" + purchase_num + '_' + purchase_num);
              $('#new_purchase').attr('id', title + '_' + purchase_num);
           }
        $('#' + title + '_' + purchase_num).css("display", "block");
        $('#'+ title + "_header_" + purchase_num).contents().filter(function(){ return this.nodeType == 3; }).first().replaceWith(vals[keyWord][k].label);
        $('#'+title + '_lbl_' + purchase_num).text(vals[keyWord][k].amount);
        var cost = 1;
        if( vals.god_status.current > 1 ) cost = vals.god_status[vals.god_status.current].mul * 0.80;
        $('#'+title + '_cost_' + purchase_num).text( '[ ' + truncate_bigint(Math.round( vals.god_status[vals.god_status.current].mul * vals[keyWord][k].cost)) + ' energy ]');
        $('#'+title + '_text_' + purchase_num).text(vals[keyWord][k].description);
        $('#'+ title + '_out_' + purchase_num).text( truncate_bigint(Math.round(cost * vals[keyWord][k].output *10)/10)+ " followers ");
        if( currentTab != 'Conversion' ) {
          $('#'+ title + '_out_' + purchase_num).text( truncate_bigint(Math.round(cost  * vals[keyWord][k].output*10)/10) + " energy ");
          $('#ascend_out_' + purchase_num + '_' + purchase_num).text(truncate_bigint(Math.round(cost  * vals.ascend[k].output*10)/10) + " followers ");
        }
    }
    else {
      $('#'+ title + '_' + purchase_num).css("display", "none");
    }
  }
}
//fix all the upgrades
function fix_upgrades(vals) {
  if( vals.current_tab === 'Upgrades'){
   for( var k in vals.upgrades ) {
      var purchase_num = k.substr(k.length-1);

      for( var i in vals.upgrades[k] ) {
        if( i != "type") {
          //set up new div for same challenge unlock
        if( (i.substr(i.indexOf('e') + 1) === '1') || 
          (vals.upgrades[k]["upgrade" + (String(parseInt(i.substr(i.indexOf('e') + 1)) -1))].unlocked && i.substr(i.indexOf('e') + 1) != '1') )  {
          if( !document.getElementById('upgrade_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)) && !document.getElementById('new_upgrade') && i != "upgrade1" ){
                var clonedDiv_id = $('#upgrade_' + purchase_num + '_' + i);
                $('<div id="new_upgrade" class="tab_div"> ' +
                '<h3 id="upgrade_head_temp" class="header_1">This is the field for upgrade for option one.' +
                '<label id=upgrade_lbl_ class="glyphicon glyphicon-remove align_right"></label></h3><p>' +
                '<b><span id="upgrade_cost__">10</span></b> - <em id="upgrade_text">Text placeholder</em> </p><button id="upgrade_btn__" class="purchase" ' +
                ' data-balloon="Tick length - 20%" data-balloon-pos="right" disabled="disabled">Purchase</button></div>').prependTo($('#upgrade_' + purchase_num));

                $('#new_upgrade').find('#upgrade_btn__').attr('id', "upgrade_btn_"+ purchase_num + "_" + i.substr(i.indexOf('e') + 1));
                $("#new_upgrade").find('#upgrade_head_temp').attr('id', "upgrade_header_"+ purchase_num + "_" + i.substr(i.indexOf('e') + 1));
                $("#new_upgrade").find('#upgrade_lbl_').attr('id', "upgrade_lbl_" + purchase_num + "_" + i.substr(i.indexOf('e') + 1));
                $("#new_upgrade").find('#upgrade_text').attr('id', "upgrade_text_" + purchase_num + "_" + i.substr(i.indexOf('e') + 1));
                $('#new_upgrade').find('#upgrade_cost__').attr('id', 'upgrade_cost_' + purchase_num + '_' + i.substr(i.indexOf('e') + 1));
                $('#new_upgrade').attr('id','upgrade_' + purchase_num + '_' + i.substr(i.indexOf('e') + 1));
                vals.upgrades[k][i].visible = true;
            }
        $('#upgrade_btn_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).attr('data-balloon', vals.upgrades[k].type + ' x' + vals.upgrades[k][i].mul); 
        $('#upgrade_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).css("display", "block");
        $("#upgrade_header_" + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).contents().filter(function(){ return this.nodeType == 3; }).first().replaceWith(vals.upgrades[k][i].label);
        var cost = 1;
        if( vals.god_status.current > 1 ) cost = vals.god_status[vals.god_status.current].mul * 0.67;
        $('#upgrade_cost_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).text('[ ' + truncate_bigint(cost * vals.upgrades[k][i].cost) + ' energy ]');
        $('#upgrade_text_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).text(vals.upgrades[k][i].description);
        if( vals.upgrades[k][i].unlocked) {
          $('#upgrade_lbl_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).attr('class','glyphicon glyphicon-ok align_right');
          $('#upgrade_btn_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).remove();
          $('#upgrade_cost_'+purchase_num + "_" + i.substr(i.indexOf('e') + 1)).remove();
          $('#upgrade_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).css('background-color', '#212121');
          $('#upgrade_' +purchase_num + "_" + i.substr(i.indexOf('e') + 1)).css('color', '#fff');
          $('#upgrade_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).css('border', '2px solid #fff');
          $('#upgrade_' + purchase_num + '_' + i.substr(i.indexOf('e') + 1)).detach().appendTo('#bought_upgrades');
         }
        }
       }
     }
    }
  }
}
  //fix all challenge names if you're on the correct page
function fix_challenges(vals) {
    if( vals.current_tab === 'Challenges') {
      var num_unlocked = 0;
    for( var k in vals.challenges) {
      var challenge_num = k.substr(k.length-1);
      for( var i in vals.challenges[k] ) {
         if( vals.challenges[k][i] != vals.challenges[k].required_type) {
         if( !document.getElementById('challenges_' + challenge_num + '_' + i) && !document.getElementById('new_challenge') && i.substr(i.length-1) != "1" ){
          var can_clone = false;
          //check for click challenges - go through each group
          switch( vals.challenges[k].required_type) {
            case 'click_m' : case 'click_a' :
              if( ( vals.challenges[k][i].type === 'quantity' ) ){
                if( vals.challenges[k][(String(parseInt(i) -1))].unlocked) can_clone = true;
              } 
              else if ( vals.challenges[k][i].type === 'total' ) {
                if( vals.challenges[k][ String(parseInt(i.substr(i.length-1)) -1) + '_' + String(parseInt(i.substr(i.length-1)) -1)].unlocked ) can_clone = true;
              } 
            break;
            case 'conv' : case 'asc' :
              var keyWord;
              if(vals.challenges[k].required_type ==='conv' && 
                vals.miracle['purchase' + vals.challenges[k][String(parseInt(i)-1)].req_tier].amount >= vals.challenges[k][String(parseInt(i)-1)].req_num) 
                can_clone = true;
              else {
                if( vals.ascend['ascend' + vals.challenges[k][String(parseInt(i)-1)].req_tier].amount >= vals.challenges[k][String(parseInt(i)-1)].req_num) 
                  can_clone = true;
              }
            break;
            case 'sac' :
              if( vals.challenges[k][String(parseInt(i)-1)].unlocked) can_clone = true;
            break;
            case 'panth' :
              if( vals.challenges[k][String(parseInt(i)-1)].unlocked ) can_clone = true;
            break;
          }
          if( can_clone) {
              var clonedDiv_id = $('#challenges_' + challenge_num + '_' + i);
              $('<div id="new_challenge" class="tab_div"> ' +
                '<h3 id="challenge_head_temp" class="header_1">This is the field for upgrade for option one.' +
                '<label id=challenges_lbl_ class="glyphicon glyphicon-remove align_right"></label></h3><p>' +
                '<em id="challenges_text">Text placeholder</em> </p></div>').prependTo($('#challenge' + challenge_num));
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
          $('#challenges_' + challenge_num + "_" + i).detach().appendTo('#completed_challenges');
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
}
function doLeap(vals) {
  //reset all the stats, buildings etc - will need to alter json file

      var selected = vals.leap.selected.substr(0, vals.leap.selected.indexOf('_'));
      var chosen = vals.leap[$('.wrap-nav').attr('id').substr($('.wrap-nav').attr('id').length -1)][selected];
      chosen.amount ++;

      var total_click_mul = 0;
      for( var k in vals.leap ) {
        if( k != 'unlocked' && k!='selected') {
          total_click_mul += (vals.leap[k]['click'].mul * vals.leap[k]['click'].amount);
        }
      }
      var total_damage_mul = 0;
       for( var k in vals.leap ) {
        if( k != 'unlocked' && k!='selected') {
          total_damage_mul += (vals.leap[k]['boss'].mul * vals.leap[k]['boss'].amount);
        }
      }
      var tier = 1;
      for( var k in vals.leap ) {
        if( k != 'unlocked' && k!='selected') {
          tier += (vals.leap[k]['tier'].mul * vals.leap[k]['tier'].amount);
        }
      }
      var temp_s = {
          't':vals.stats.time_played.toString(16),
          't_e':Math.round(vals.stats.total_energy).toString(16),
          't_f':Math.round(vals.stats.total_followers).toString(16),
          'm_p':vals.stats.max_prod,
          'm_l':vals.stats.max_loss,
          'm_c':vals.stats.miracle_clicks.toString(16),
          'a_c':vals.stats.ascension_clicks.toString(16),
          'mc_e':Math.round(vals.stats.miracle_click_energy).toString(16),
          'ac_e':Math.round(vals.stats.ascension_click_energy).toString(16)
      };
      var save = {
        'e':0,
        'p':0,
        'cl':Math.pow(2, total_click_mul).toString(16),
        'f':0,
        'l':0,
        'c':0,
        'ac':1,
        't':(500).toString(16),
        'fl':0,
        'dam':Math.pow(3, total_damage_mul).toString(16),
        "tier":(tier).toString(16)
      };
      save['s'] = temp_s;
        for(var k in vals.leap) { 
            var items = vals.leap[k];
            var temp_a = [];
              for(var i in items) { 
                if(items[i].amount > 0) {
                    temp_a.push([i] + ":" +items[i].amount.toString(16));
                  }
              }
            if( k != 'selected' && k != 'unlocked') save['leap' + k] = temp_a.join('|');
        }
        localStorage.sv1 = btoa(JSON.stringify(save));
  }
$(document).on("click", ".reset", function() {
  if( confirm("Are you sure you want to Quantum leap?") ) {
    doLeap(vals);
    location.reload();
  }
});
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
    var id = btn.substr(0, btn.indexOf('_')) + btn.substr(btn.lastIndexOf('_')+1);
    switch( id.substr(0, id.search(/\d/))) {
      case 'purchase':
        if( vals.energy >= vals.miracle[id].cost ) {
          vals.energy-= vals.miracle[id].cost;
          vals.miracle[id].amount ++;
          vals.miracle[id].cost =  set_item_cost(vals.miracle[id]);
          vals.prod += vals.miracle[id].output;
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
      var purchase_type = btn.substr(btn.indexOf('_btn_') + 5,btn.indexOf('_btn_') + 5);
      if( vals.energy >= vals.upgrades[purchase_type[0]][id].cost) {
        vals.energy -= vals.upgrades[purchase_type[0]][id].cost;
        if( vals.upgrades[purchase_type[0]].type === "Click amount") {
          var origClick = vals.click;
          vals.click *= vals.upgrades[purchase_type[0]][id].mul;
          if( vals.pantheon.unlocked) vals.pantheon.damage += (vals.click - origClick );
        }
        else if( vals.upgrades[purchase_type[0]].type === 'Tick speed' )
          vals.tick *= vals.upgrades[purchase_type[0]][id].mul;
        else {
          vals.leap.unlocked = true;
          $.toaster({message:"Don't go quietly into the good night.",title:"Quantum leap unlocked"})
        }
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
        else $.toaster({message:"Your power is maxed.",title:"Sacrifice rejected"});
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
    case 'click' : case 'tier' : case 'boss' :
      if(  vals.leap.selected === (id.substr(0, id.search(/\d/)) + '_leap') ) {
          $('#' + vals.leap.selected ).css('background-color', '');
          $('#' + vals.leap.selected ).children().each(function() {
            $(this).css('color', '');
            $(this).children().each(function() {
              $(this).css('color', '');
            });
          });
          $('#' + vals.leap.selected ).css('border', '');
          $('#' + vals.leap.selected ).css('border-radius', '');
          vals.leap.selected = 0;
          $('.reset').prop('disabled', true);
      }
      else {
        $('#' + vals.leap.selected ).css('background-color', '');
          $('#' + vals.leap.selected ).children().each(function() {
            $(this).css('color', '');
            $(this).children().each(function() {
              $(this).css('color', '');
            });
          });
          $('#' + vals.leap.selected ).css('border', '');
          $('#' + vals.leap.selected ).css('border-radius', '');
        vals.leap.selected = (id.substr(0, id.search(/\d/)) + '_leap');
        $('.reset').prop('disabled', false); 
      }
    break;
  }
  fix_tab_buttons(vals);
  fix_names(vals);
  });
function gen_target_offset(id, target, event) {
  switch(id.substr(1,1)) {
    //generate offsets for miracle click animation
    case  'm' :
      if( $(window).width() > 1300 )  {
        //2nd miracle button
        if( id.substr(id.length-1) === 'd') target.offset({left: 1.2 * $(id).offset().left, top: event.pageY - 125  });
        //first miracle button
        else target.offset({left: 1.2 * $(id).offset().left, top:  event.pageY + 10 });
        }
        else if( $(window).width() <= 700) {
        if( id.substr(id.length-1) === 'd') target.offset({left: 1.2 * $(id).offset().left, top: event.pageY * 0.75});
        //first miracle button
        else target.offset({left: 1.2 * $(id).offset().left, top:event.pageY + 10});
      //want a less aggressive offset
      }
      else if(  $(window).width() <= 750) {
        if( id.substr(id.length-1) === 'd') target.offset({left: 1.2 * $(id).offset().left, top: event.pageY * 0.75});
        //first miracle button
        else target.offset({left: 1.2 * $(id).offset().left, top: event.pageY + 10});
      }
      else if( $(window).width() <= 1100) 
        if( id.substr(id.length-1) === 'd') target.offset({left: 1.2 * $(id).offset().left, top: event.pageY -100});
        //first miracle button
        else target.offset({left: 1.2 * $(id).offset().left, top: event.pageY + 10});
      else if( $(window).width() <= 1300) {
        //2nd miracle button
        if( id.substr(id.length-1) === 'd') target.offset({left: 1.2 * $(id).offset().left, top: event.pageY -110});
        //first miracle button
        else target.offset({left: 1.2 * $(id).offset().left, top: event.pageY + 10});
      }
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
  animate_attack(vals.pantheon.damage, $(this).attr('id'));
});

function animate_attack(damage, id) {  
  var btn = id;
  var divToAppend, target, offset;
  target = $('.miracle_click:first').clone();
  target.html( '-' + truncate_bigint(damage));
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
  target.animate({ 'top': '+=15', 'opacity':0.1, 'left':  '+=15'}, 250, function() {  
    target.remove(); 
  });
  var boss_num = btn.substr(btn.length-1);
  for( var k in vals.pantheon.bosses) {
    if( vals.pantheon.bosses[k].current) {
      vals.pantheon.bosses[k].current_hp -= damage;
  //process reward for defeating boss
    if( vals.pantheon.bosses[k].current_hp <= 0 ) {
      vals.flame+=vals.pantheon.bosses[k].reward;
      //if the boss is defeated for the first time, change the params for when user fights again
      if( vals.pantheon.bosses[k].defeated  != true) {
        vals.pantheon.bosses[k].defeated = true;
        vals.pantheon.bosses[k].max_hp *= 10;
        vals.pantheon.bosses[k].regen *= 25;
        vals.pantheon.bosses[k].reward /= 5;
      }
      else {
        vals.pantheon.bosses[k].max_hp *= 1.5;
        vals.pantheon.bosses[k].regen *= 4;
      }
      vals.pantheon.bosses[k].current_hp = vals.pantheon.bosses[k].max_hp;
      fix_pantheon(vals);
      break;
    }
    }
  } 
  fix_names(vals);
}
$(document).on("click", ".sell", function() {
    var btn = $(this).attr('id');
    var id = btn.substr(0, btn.indexOf('_')) + btn.substr(btn.length-1);
    switch( id.substr(0, id.length-1)) {
      case 'purchase' :
        if( vals.miracle[id].amount > 0 ) {
          vals.miracle[id].amount --;
          if( vals.miracle[id].amount === 0 ) vals.miracle[id].cost = vals.miracle[id].base_cost;
          else vals.miracle[id].cost =  set_item_cost(vals.miracle[id]);
          vals.prod -= vals.miracle[id].output;
          vals.energy += (vals.miracle[id].cost * 0.5);
          vals.stats.total_energy += (vals.miracle[id].cost * 0.5);
        }
      break;
    case 'ascend' :
      if( vals.ascend[id].amount > 0 ) {
          vals.ascend[id].amount --;
          if( vals.ascend[id].amount === 0 ) vals.ascend[id].cost = vals.ascend[id].base_cost;
          else vals.ascend[id].cost =  set_item_cost(vals.ascend[id]);
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
$(document).on("click", "#leap-tab-btn", function(event) {
  openTab(event, 'Leap');
});
$(document).on("click", "#prev_boss", function(event) {
  if( vals.pantheon.stage > 0 ) {
    vals.pantheon.bosses['boss' + vals.pantheon.stage].current = true;
    vals.pantheon.bosses['boss' + String(parseInt(vals.pantheon.stage) +1)].current = false;
    vals.pantheon.stage--;
  }
});
$(document).on("click", "#next_boss", function(event) {
  if( vals.pantheon.stage <= 2 ) {
    vals.pantheon.stage++;
    vals.pantheon.bosses['boss' + vals.pantheon.stage].current = false;
    vals.pantheon.bosses['boss' + String(parseInt(vals.pantheon.stage) +1)].current = true;
  }
});
$(document).on("click", "#boss_upgrades", function(event) {
      $(".overlay").fadeToggle(50);
      $('.boss_img').fadeToggle(50);
      $('.traverse_bosses').fadeToggle(50);
      $(this).toggleClass('btn-open').toggleClass('btn-close');
      $(this).toggleIcon('<span style="font-size:1.5em;" class="glyphicon glyphicon-remove" id="achievements_shown">' ,
        '<span style="font-size:1.5em;" class="glyphicon glyphicon-ok" id="achievements_shown">');
      $(this).toggleBalloon('Upgrade menu', 'Boss fight');
      $('#boss_num').toggleText(': Boss ' + String(parseInt(vals.pantheon.stage) + 1 ), ": Upgrades");
});
$(document).on("click", "#upgrades_shown", function(event) {
      $("#bought_upgrades").fadeToggle(50);
      $('#uncompleted').fadeToggle(50);
      $(this).toggleClass('btn-open').toggleClass('btn-close');
      $(this).toggleIcon('<span style="font-size:1.5em;" class="glyphicon glyphicon-remove"></span>', 
        '<span style="font-size:1.5em;" class="glyphicon glyphicon-ok"></span>');
      $(this).toggleBalloon('See Purchased', 'See Available');
});
$(document).on("click", "#achievements_shown", function(event) {
      $("#completed_challenges").fadeToggle(50);
      $('#uncompleted').fadeToggle(50);
      $(this).toggleClass('btn-open').toggleClass('btn-close');
      $(this).toggleIcon('<span style="font-size:1.5em;" class="glyphicon glyphicon-remove"></span>', 
        '<span style="font-size:1.5em;" class="glyphicon glyphicon-ok"></span>');
      $(this).toggleBalloon('See Completed', 'See Incomplete');
});
$.fn.extend({
    toggleIcon: function(a, b){
        return this.html(this.html() == b ? a : b);
    },
    toggleBalloon: function(a, b) {
      return this.attr('data-balloon', (this.attr('data-balloon') == b ? a : b ) );
    },
    toggleText: function(a, b) {
      return this.text(this.text() == b ? a : b);
    }
});
//check if followers >= click amount and > 0
function can_click(superclick) {
  var click = vals.click;
  if( superclick ) click *= vals.events.superclick.mul;
  if( vals.followers >= 1 && vals.followers >= click ) return true;
  return false;
}
//this performs a miracle
var perform_miracle = function(superclick) {
  var click = vals.click;
  if( superclick ) click *= vals.events.superclick.mul;

  vals.followers += click;
  vals.stats.total_followers += click;
  vals.stats.miracle_clicks++;
  vals.stats.miracle_click_energy += click;

  return click
}
//this transfers followers into energy
var perform_trans = function(superclick) {
  click = vals.click;
  if( superclick ) click *= vals.events.superclick.mul;

    if( vals.followers >= click ) {
      vals.energy += click;
      vals.stats.total_energy += click;
      vals.followers -= click;
      vals.stats.ascension_click_energy += click;
      click_amount = click;
      vals.stats.ascension_clicks++;
    }
  return click;
}
$(document).on("click", '.boss_upgrade', function(event) { 
  var id= $(this).attr('id');
  var type = id.substr(0, id.search(/\d/) -1);
  var tier = id.substr(id.search(/\d/));
  if( type === 'regen' || type === 'max_hp') upg = vals.pantheon.upgrades['1'][type];
  else upg = vals.pantheon.upgrades[tier][type + id.substr(id.search(/\d/))];
  switch( type ) {
    case "click":
      if( tier === '1' && upg.amount < upg.max_amount && vals.flame >= upg.cost ) {
        upg.amount++;
        vals.flame-=upg.cost; 
        vals.pantheon.damage *= upg.mul;
        upg.cost = set_item_cost(upg);
      }
      else if( tier === '2' && upg.amount < upg.max_amount && vals.flame >= upg.cost) {
        console.log('hre');
        upg.amount++;
        vals.flame-=upg.cost; 
        vals.pantheon.dps += (vals.click * upg.mul);
        upg.cost = set_item_cost(upg);
      }
    break;
    case "prod":
      if( tier === '1' && upg.amount < upg.max_amount && vals.flame >= upg.cost) {
        upg.amount++;
        vals.flame-=upg.cost; 
        vals.pantheon.damage += (vals.loss * upg.mul);
        upg.cost = set_item_cost(upg);
      }
      else if( tier === '2' && upg.amount < upg.max_amount && vals.flame >= upg.cost) {
        upg.amount++;
        vals.flame-=upg.cost; 
        vals.pantheon.dps += (vals.loss * upg.mul);
        upg.cost = set_item_cost(upg);
      }
    break;
    case 'max_hp':
      if( upg.amount < upg.max_amount && vals.flame >= upg.cost) {
        upg.amount++;
        vals.flame-=upg.cost; 
        for( var k in vals.pantheon.bosses ) {
          var boss = vals.pantheon.bosses[k];
          boss.max_hp *= upg.mul;
          if( boss.current_hp > boss.max_hp ) boss.current_hp = boss.max_hp;
        }
        upg.cost = set_item_cost(upg);
      }
    break;
    case 'regen':
      if( upg.amount < upg.max_amount && vals.flame >= upg.cost) {
        upg.amount++;
        vals.flame-=upg.cost; 
        for( var k in vals.pantheon.bosses ) {
          var boss = vals.pantheon.bosses[k];
          boss.regen *= upg.mul;
        }
         upg.cost = set_item_cost(upg);
      }
    break;
  }
    $(this).html('Purchase ' + upg.cost + '<span class="glyphicon glyphicon-fire"></span>');
});
//TODO - fix this for when you scroll down screen on achievements etc.
$(document).on("click", '.miracle', function(event) { 
          var used_id = $(this).attr('id').substr($(this).attr('id').indexOf('_') + 1);
          var divToAppend, target, offset, color = '#212121';

          if( vals.events.superclick.click_num < 100 && !vals.events.superclick.active) {
            vals.events.superclick.click_num++;
            $('#superclick_bar').css('width', vals.events.superclick.click_num + '%'); 
          }
          else if( vals.events.superclick.click_num === 100 && !vals.events.superclick.active) {
            $('#superclick_bar').css('background-color', '#FFC400');
            process_superclick(vals, 0);
          } 
          if( vals.events.superclick.active) color = '#FFC400';
          if( used_id === 'button') {
            target = $('.miracle_click:first').clone();
            target.html( '+' + truncate_bigint(perform_miracle(vals.events.superclick.active)));
            divToAppend = '#miracle_div';
            offset = $(window).height()/4;
          }else {
            if( can_click(vals.events.superclick.active) ) {
              divToAppend = '#miracle2_div'; 
              target = $('.transcend_click:first').clone();
              target.html( '-' + truncate_bigint(perform_trans(vals.events.superclick.active)) ); 
              offset = $(window).height()/4;
            }else return;
          }
          target.css('color', color);
          $(divToAppend).append(target);
          target.show();
          //handle unique animations for each click
          gen_target_offset( '#' + $(this).attr('id'), target, event); 
          target.css('opacity',100);
          if( used_id === 'button') 
            { target.animate({ 'top': '+=' + $('#miracle_div').height()/2, 'opacity':0.1, 'left':target.offset.left+ 'px'}, 750, function() { 
            $(this).remove();
          });
          }
          else {target.animate({ 'top': '-=' + $('#miracle_div').height()/2, 'opacity':0.1, 'left': '-=10'}, 750, function() { 
            $(this).remove();
          });
          }

});

var bar_timer;

function process_superclick(vals, iterations) {
    
    if( iterations === 9 ) {
      $('#superclick_bar').css('background-color', '');
      vals.events.superclick.click_num = 0;
      $('#superclick_bar').css('width', vals.events.superclick.click_num + '%'); 
      vals.events.superclick.active = false;
      return;
    }
    clearTimeout(bar_timer);
    $('#superclick_bar').css('width', (100 - 10 * (iterations) )+ '%');
    vals.events.superclick.active = true;
    if( iterations < 9 ) {
      bar_timer = setTimeout(function() {
        process_superclick(vals,iterations);
      }, vals.tick);
      iterations++;
    }
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
    vals.current_tab = tabName;
    if( upgrade_box_size != 0 ) 
      $('#upgrades-box').css("height", upgrade_box_size);
    fix_names(vals);
}


})(jQuery);

$
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

