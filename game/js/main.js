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
    }, 
    "3":{
      "label":"Apparition",
      "mul": 4,
      "boss_label":"Furious",
      "max_tier":4
    },
    "4":{
      "label":"Phantom",
      "mul": 7,
      "boss_label":"Incandescent",
      "max_tier":4
    },
    "5":{
      "label":"Deity",
      "mul": 12,
      "boss_label":"Cruel",
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
        "description":"Your clicks are more powerful.",
        "amount":0,
        "mul": 2,
        "max": 3,
        "req":0
      },
      "boss":{
        "label":"Boss Killer",
        "description":"You do increased damage to bosses.",
        "amount":0,
        "mul": 4,
        "max":5,
        "req":0
      },
      "tier":{
        "label":"True Ascension",
        "description":"You Ascend to a new God status, with new unlocks but increased difficulty.",
        "cost":35,
        "amount":0,
        "mul":1,
        "req":25,
        "max":5
      }
    }
  },
  "miracle":{
            "purchase1":{
                "label":"Online Blogger",
                "description":"An inspired teenager to spread the word.",
                "amount":0,
                "output":0.2,
                "base_output":0.2,
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
                "base_output":1,
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
                "base_output":5,
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
                "base_output":25,
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
                "base_output":150,
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
                "base_output":1000,
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
                "base_output":7500,
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
                "base_output":30000,
                "base_cost":5000000,
                "cost":5000000,
                "unlock_rps":8500.0,
                "unlocked":false,
            },
            "purchase9":{
                "label":"Bible of the bacterium",
                "description":"Begin to bring microbial life itself into the fold.",
                "amount":0,
                "output":160000,
                "base_output":160000,
                "base_cost":80000000,
                "cost":80000000,
                "unlock_rps":40000.0,
                "unlocked":false,
            },
            "purchasea":{
                "label":"Planet of the apes",
                "description":"Influence an entire planet's population.",
                "amount":0,
                "output":2000000,
                "base_output":2000000,
                "base_cost":6000000000,
                "cost":6000000000,
                "unlock_rps":160000.0,
                "unlocked":false,
            }
    },  "ascend":{
            "ascend1":{
                "label":"Step-in-booth",
                "description":"An univiting small booth to slowly process followers.",
                "amount":0,
                "output":0.2,
                "base_output":0.2,
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
                "base_output":1,
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
                "base_output":5,
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
                "base_output":25,
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
                "base_output":150,
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
                "base_output":1000,
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
                "base_output":7500,
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
                "base_output":30000,
                "base_cost":6000000,
                "cost":6000000,
                "unlock_rps":8500.0,
                "unlocked":false,
            }, 
            "ascend9":{
                "label":"Astral reactor",
                "description":"A place where followers can be converted directly to essence.",
                "amount":0,
                "output":200000,
                "base_output":200000,
                "base_cost":100000000,
                "cost":100000000,
                "unlock_rps":40000.0,
                "unlocked":false
            },
            "ascenda":{
                "label":"Staff of destiny",
                "description":"Staff which grants the wielder full control over the minds of mortals.",
                "amount":0,
                "output":2500000,
                "base_output":2500000,
                "base_cost":8000000000,
                "cost":8000000000,
                "unlock_rps":210000.0,
                "unlocked":false,
            }
  },
    "upgrades": {
        "1" : {
          "type":"Click amount",
            "upgrade1":{
              "label":"Basic telekinetics",
              "description":"Limited control of Earthly forces increases your Divine Power.",
              "unlocked":false,
              "cost":25,
              "mul":1.4
            },
            "upgrade2":{
              "label":"Matter Manipulation",
              "description":"A small amount of control over matter makes your Power swell.",
              "unlocked":false,
              "cost":150,
              "mul":1.8
            },
            "upgrade3":{
              "label":"Transmogrification",
              "description":"Convert entities into a form that enhances your Divine Power.",
              "unlocked":false,
              "cost":750,
              "mul":2.2
            },
            "upgrade4":{
              "label":"Elementary conjuring",
              "description":"Fledgling control of the elements doubles your Divine power.",
              "unlocked":false,
              "cost":3500,
              "mul":2.6
            },
             "upgrade5":{
              "label":"Studying Holy texts",
              "description":"Interpreting these ancient writings increases your Divine Power by even more.",
              "unlocked":false,
              "cost":18500,
              "mul":3
            },
             "upgrade6":{
              "label":"Burning the Holy texts",
              "description":"Read them, have you? Page-turners they were not.",
              "unlocked":false,
              "cost":80000,
              "mul":3.4
            },
            "upgrade7":{
              "label":"Astral projection",
              "description":"A double of yourself to act on your command.",
              "unlocked":false,
              "cost":375000,
              "mul":3.8
            },
            "upgrade8":{
              "label":"Benign possession",
              "description":"Controlling some of your followers' forms to further your purpose.",
              "unlocked":false,
              "cost":1000000,
              "mul":4.2
            },
            "upgrade9":{
              "label":"Power siphoning",
              "description":"Enhancing your power by extracting it from the World.",
              "unlocked":false,
              "cost":9000000,
              "mul":4.6
            },
            "upgrade10":{
              "label":"Void gathering",
              "description":"Retrieving power from the void of space.",
              "unlocked":false,
              "cost":70000000,
              "mul":5
            },
            "upgrade11":{
              "label":"Chaotic ritual",
              "description":"Harnessing chaos energy to increase your power.",
              "unlocked":false,
              "cost":800000000,
              "mul":6
            },
            "upgrade11":{
              "label":"Deal with the devil",
              "description":"Sacrifice some of your divinity for greater control over space.",
              "unlocked":false,
              "cost":9000000000,
              "mul":8
            }
          },
          "2": {
            "type":"Tick speed",
            "upgrade1":{
               "label":"Improved reflexes",
              "description":"Training speeds up your perception of time passing.",
              "unlocked":false,
              "cost":500,
              "mul":0.9
            },
            "upgrade2":{
               "label":"Mastered reflexes",
              "description":"Mastering your form speeds up your perception of time passing futher.",
              "unlocked":false,
              "cost":7500,
              "mul":0.9
            },
            "upgrade3":{
               "label":"Shapeshifting",
              "description":"Transformation allows your perception of time passing to speed up futher.",
              "unlocked":false,
              "cost":50000,
              "mul":0.9
            },
            "upgrade4":{
               "label":"Mind Control",
              "description":"Convincing your followers that time is passing at a faster rate.",
              "unlocked":false,
              "cost":125000,
              "mul":0.9
            },
            "upgrade5":{
               "label":"Gravity bending",
              "description":"Using gravity to change how time flows.",
              "unlocked":false,
              "cost":1600000,
              "mul":0.88
            },
            "upgrade6":{
               "label":"God's stopwatch",
              "description":"Your newest toy new from the box.",
              "unlocked":false,
              "cost":20000000,
              "mul":0.88
            },
            "upgrade7":{
               "label":"The Mandela Effect",
              "description":"Reverse time and change what you wish - but only something small.",
              "unlocked":false,
              "cost":250000000,
              "mul":0.87
            },
            "upgrade8":{
               "label":"Keys to the car",
              "description":"Stolen keys to a working time machine.",
              "unlocked":false,
              "cost":1000000000,
              "mul":0.87
            },
            "upgrade8":{
               "label":"Demon's paw",
              "description":"A monkey's paw - but far more potent.",
              "unlocked":false,
              "cost":50000000000,
              "mul":0.85
            }
          },
          "3" : {
            "upgrade1":{
              "label":"Unlock Quantum Leap",
              "description":"To infinity and beyond",
              "unlocked":false,
              "cost":15000000000
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
                  "base_cost":1.5,
                  "cost":1.5,
                  "mul":1.5,
                  "max_amount":8
                },
                "prod1":{
                  "label":"Damage +0.15x energy prod",
                  "amount":0,
                  "base_cost":2,
                  "cost":2,
                  "mul":0.15,
                  "max_amount":8
                },
                "click2":{
                  "label":"Deal +0.025x Divine Power/Tick",
                  "amount":0,
                  "base_cost":2,
                  "cost":2,
                  "mul":0.025,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.1 Energy Prod/Tick",
                  "amount":0,
                  "base_cost":2,
                  "cost":2,
                  "mul":0.1,
                  "max_amount":8
                },
                "max_hp":{
                  "label":"Boss Max Hp &darr;10%",
                  "amount":0,
                  "base_cost":2.5,
                  "cost":2.5,
                  "mul":0.8,
                  "max_amount":6
                },
                "regen":{
                  "label":"Boss Regen &darr;20%",
                  "amount":0,
                  "base_cost":2.5,
                  "cost":1,
                  "mul":0.8,
                  "max_amount":5
                }
              },
              //tier 2 upgrades
              "2":{
                "click1":{
                  "label":"Damage x1.75/click",
                  "amount":0,
                  "base_cost":1.75,
                  "cost":1.75,
                  "mul":1.75,
                  "max_amount":8
                },
                "prod1":{
                  "label":"Damage +0.05x energy prod",
                  "amount":0,
                  "base_cost":2.25,
                  "cost":2.25,
                  "mul":0.05,
                  "max_amount":8
                },
                "click2":{
                  "label":"Deal +0.01x Divine Power/Tick",
                  "amount":0,
                  "base_cost":2.75,
                  "cost":2.75,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05 Energy Prod/Tick",
                  "amount":0,
                  "base_cost":2.75,
                  "cost":2.75,
                  "mul":0.05,
                  "max_amount":8
                },
                "max_hp":{
                  "label":"Boss Max Hp &darr;15%",
                  "amount":0,
                  "base_cost":3,
                  "cost":3,
                  "mul":0.85,
                  "max_amount":6
                },
                "regen":{
                  "label":"Boss Regen &darr;25%",
                  "amount":0,
                  "base_cost":1.25,
                  "cost":1.25,
                  "mul":0.75,
                  "max_amount":5
                }
              },
              "3":{
                "click1":{
                  "label":"Damage x2/click",
                  "amount":0,
                  "base_cost":2,
                  "cost":2,
                  "mul":2,
                  "max_amount":8
                },
                "prod1":{
                  "label":"Damage +0.05x energy prod",
                  "amount":0,
                  "base_cost":2.5,
                  "cost":2.5,
                  "mul":0.05,
                  "max_amount":8
                },
                "click2":{
                  "label":"Deal +0.01x Divine Power/Tick",
                  "amount":0,
                  "base_cost":2.5,
                  "cost":2.5,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05 Energy Prod/Tick",
                  "amount":0,
                  "base_cost":2.5,
                  "cost":2.5,
                  "mul":0.05,
                  "max_amount":8
                },
                "max_hp":{
                  "label":"Boss Max Hp &darr;20%",
                  "amount":0,
                  "base_cost":3.5,
                  "cost":3.5,
                  "mul":0.8,
                  "max_amount":6
                },
                "regen":{
                  "label":"Boss Regen &darr;30%",
                  "amount":0,
                  "base_cost":1.5,
                  "cost":1.5,
                  "mul":0.7,
                  "max_amount":5
                }
              },
              "4":{
                "click1":{
                  "label":"Damage x2.5/click",
                  "amount":0,
                  "base_cost":2.25,
                  "cost":2.25,
                  "mul":2.5,
                  "max_amount":8
                },
                "prod1":{
                  "label":"Damage +0.05x energy prod",
                  "amount":0,
                  "base_cost":2.75,
                  "cost":2.75,
                  "mul":0.05,
                  "max_amount":8
                },
                "click2":{
                  "label":"Deal +0.01x Divine Power/Tick",
                  "amount":0,
                  "base_cost":2.75,
                  "cost":2.75,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05 Energy Prod/Tick",
                  "amount":0,
                  "base_cost":2.75,
                  "cost":2.75,
                  "mul":0.05,
                  "max_amount":8
                },
                "max_hp":{
                  "label":"Boss Max Hp &darr;25%",
                  "amount":0,
                  "base_cost":4,
                  "cost":4,
                  "mul":0.75,
                  "max_amount":6
                },
                "regen":{
                  "label":"Boss Regen &darr;35%",
                  "amount":0,
                  "base_cost":1.75,
                  "cost":1.75,
                  "mul":0.65,
                  "max_amount":5
                }
              },
              "5":{
                "click1":{
                  "label":"Damage x3/click",
                  "amount":0,
                  "base_cost":3,
                  "cost":3,
                  "mul":3,
                  "max_amount":8
                },
                "prod1":{
                  "label":"Damage +0.05x energy prod",
                  "amount":0,
                  "base_cost":3.5,
                  "cost":3.5,
                  "mul":0.05,
                  "max_amount":8
                },
                "click2":{
                  "label":"Deal +0.01x Divine Power/Tick",
                  "amount":0,
                  "base_cost":3.5,
                  "cost":3.5,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05 Energy Prod/Tick",
                  "amount":0,
                  "base_cost":3.5,
                  "cost":3.5,
                  "mul":0.05,
                  "max_amount":8
                },
                "max_hp":{
                  "label":"Boss Max Hp &darr;30%",
                  "amount":0,
                  "base_cost":5,
                  "cost":5,
                  "mul":0.7,
                  "max_amount":6
                },
                "regen":{
                  "label":"Boss Regen &darr;40%",
                  "amount":0,
                  "base_cost":2,
                  "cost":2,
                  "mul":0.6,
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
                "name":"Temporal aberration",
                "reward":1,
                "defeated":false
              },
              "boss2":{
                "max_hp": 125000000,
                "current_hp":125000000,
                "regen":10000,
                "reward":50000000,
                "current":false,
                "name":"Banshee",
                "reward":2.5,
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
                "max_hp": 35000000000,
                "current_hp":35000000000,
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
           }

};
 //global variable
var upgrade_box_size = 0;

(function($) {

  $(window).resize(function() {
    setupContainers();
    if($(window).width() < 700) {
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
    loadBackgroundImage();
    loadData();

    lastTime = resolveLastTime();
    handleTimeSinceLastVisit();

    setupAudio();
    setupContainers();
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
    start_game();
  });

function loadBackgroundImage() {
  var objects = document.getElementsByClassName('asyncImage');

  Array.from(objects).map((item) => {
    const img = new Image();
    img.src = item.dataset.src;

    img.onload = () => {
      item.classList.remove('asyncImage');
      if (item.nodeName === 'IMG') {
        $("html").css("background-image", `url(${item.dataset.src})`);
      }
    };
  });

  document.getElementById('background-async').remove();
}

function resolveLastTime() {
  try {
    return new Date(lastTime);
  } catch(NoTimeDataException) {
    return new Date();
  }
}

function handleTimeSinceLastVisit() {
  if(lastTime !== undefined) {
    let timeNow = new Date();
    let diffInDays = dateDiffInDays(lastTime, timeNow);
    let diffInSeconds = diffInDays >= 1 ? diffInDays * 86400 : (timeNow.getTime() - lastTime.getTime()) / 1000;
    handleSecondsIdle(diffInSeconds);
  }
}

function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / 86400000);
}

function handleSecondsIdle(diffInSeconds) {
  var cost = adjustForGodStatus(vals.god_status[vals.god_status.current].mul);
  var corrected_prod = adjustProduction(cost);
  var total_loss = adjustLoss(cost);
  //offline production much slower - hardcoded for now.
  if(isNaN(diffInSeconds) === false) {
    const values = [Math.round((diffInSeconds * corrected_prod)/2), Math.round((diffInSeconds * total_loss)/2)];
    const choice = Math.floor(Math.random() * (2));
    let diff = values
      .filter(arr => arr !== 0)
      .map((arr) => arr/=7.5)
      .reduce((a, b) => a + b, 0);
    addIdleValueTo(choice, diff);
  }
}

function addIdleValueTo(index, diff) {
  let message = "";
  if (index === 0) {
    vals.followers += diff;
    message += " followers,\n";
  } else {
    vals.energy += diff;
    message += " energy,\n";
  }

  generateToastMessage("\nYou were granted " + truncate_bigint(diff) + message + " upon visiting!", "Welcome Present");
}

function setupAudio() {
  tabSound = new Audio("data/tabsound.mp3");
  purchaseSound = new Audio("data/purchasesound.mp3");
  saveSound = new Audio("data/save.mp3");
  bgm = new Audio('data/bgm.mp3');
  bgm.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  playAudio(bgm);
}

function playAudio(bgm) {
  const play = bgm.play();

  if(play !== undefined) {
    play.then(() => {
      return;
    }).catch(function(NoAudioException) {
      handleAudioFailure(bgm);
    });
  }
}

function handleAudioFailure(bgm) {
    console.log('Audio Failed to play, retrying..');
    document.body.click();
    setTimeout(() => {
        playAudio(bgm);
    }, 1500);  
}

$(document).on('click','#playing', function(event) {
  const offHtml = '<span class="glyphicon glyphicon-volume-off"></span>';
  if($('#playing').html() === offHtml) {
    bgm.pause();
  } else {
    playAudio(bgm);
  }
  $('#playing').toggleIcon('<span class="glyphicon glyphicon-volume-up"></span>', offHtml);
});

function setupContainers() {
  const width = $(window).width();
  const height = $(window).height();
  $('#miracle_lbl').text("Divine energy ");
  $('#upgrades-box').css("height", height * 0.8);
  $('#upgrades-box').css("margin-right", width * 0.25);
  $('#upgrades-box').css("width", width * 0.65);
  upgrade_box_size = $('#upgrades-box').css('height');
  $('.reset').prop('disabled', true);
  $('#tier_btn_1').prop('disabled', true);
}

function start_game() {
  fix_names(vals);
  game_engine(0, 0);
}

function set_item_cost(item) {
  let amount_multiplier = 2.0;

  if (item.amount >= 1) {
    let multiplier = 1;
    const values = [[0, 10, 5], [10, 25, 2.5], [25, 50, 1], [50, 75, 0.5], 
                  [75, 100, 0.25], [100, 200, 0.1], [200, 350, 0.04], [350, 500, 0.01]];
    for (let i = 0; i < values.length; i++) {
      const lowerBound = values[i][0];
      const upperBound = values[i][1];
      const divisor = values[i][2];
      if (item.amount >= lowerBound && item.amount < upperBound) {
        amount_multiplier += item.amount * (item.amount*0.15);  
        if (item.amount === lowerBound && lowerBound !== 0) {
          generateToastMessage("Further purchases of this item are more valuable.", "Milestone reached!");
        }
        if (lowerBound !== 0) {
          multiplier *= (lowerBound/3);
          amount_multiplier *= (1 + lowerBound/40);
        }
        multiplier += item.amount / divisor;
        break; 
      }
    }
    item.output = item.base_output * multiplier;
  }

  const status_multiplier = vals.god_status[vals.god_status.current].mul;
  const newCost = amount_multiplier * (status_multiplier * item.base_cost);

  return Math.round(newCost * 0.9);
}

  function game_engine(iterations, cycles) {
    var mul = vals.god_status[vals.god_status.current].mul;
    var cost = adjustForGodStatus(mul);
    var corrected_prod = adjustProduction(cost);
    var total_loss = adjustLoss(cost);
    
    handleNegativeValues();
    handleUiUpdate([corrected_prod, total_loss, cost]);

    setTimeout(function() {
      checkAchievements(vals);
      setButtonAvailability(vals);  

      handlePantheon(mul);
      handleStats();
      cycles = handleSaveData(cycles, false);
      handleGameLoop(iterations, cycles);
      handleGameLogic(corrected_prod, cost);

    }, vals.tick);
  }

  function adjustForGodStatus(mul) {
    return mul > 1 ? mul * 0.8 : 1;
  }

  function adjustProduction(costMultiplier) {
    let initialCost =  ((vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100))) - ((1+(vals.corruption/100))*vals.loss);

    return initialCost * costMultiplier;
  }

  function adjustLoss(costMultiplier) {
    let initialCost = (vals.loss * (1+(vals.corruption/100)));

    return initialCost * costMultiplier;
  }

  function handleNegativeValues() {
    vals.followers = handleNegative(vals.followers);
    vals.prod = handleNegative(vals.prod);
    vals.loss = handleNegative(vals.loss);
  }

  function handleNegative(value) {
    if(value <= 0) return 0;
    return value;
  }

  function handleUiUpdate(values) {
    const corrected_prod = values[0];
    const total_loss = values[1];
    const cost = values[2];

    $('#click_amount').text('[ ' + truncate_bigint(vals.click) + ' ]');
    $('#counter').text(truncate_bigint(Math.floor(vals.followers)));
    
    if( $('#last_saved').text() != "" )  {
      $('#last_saved').text(Math.round(last_saved) + ' seconds ago.');
    }

    $('#power').text(truncate_bigint(vals.energy));
    //production of followers is (production*achievement_multipler) divided by the corruption factor.
    $('#production_net').text(truncate_bigint(corrected_prod));
    $('#production_gross').text(truncate_bigint(((vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100)))));
    
    let netLoss = 0;
    if( corrected_prod >= 0.0 || vals.followers >= total_loss )  {
      netLoss = total_loss;
    } else {
      netLoss = cost * (vals.achievement_multiplier*vals.prod)/(1+(vals.corruption/100));
    }
    $('#prod_energy').text(truncate_bigint(netLoss));
  }

  function handlePantheon(mul) {
    if(vals.current_tab === "Pantheon" && vals.pantheon.unlocked === true) {
      for(const k in vals.pantheon.bosses ) {
        if(vals.pantheon.bosses[k].current ) {
          handleCurrentBoss(mul, k);
          break;
        }
      }
    } else if(vals.pantheon.unlocked === false && vals.upgrades['1']['upgrade6'].unlocked) {
      vals.pantheon.unlocked = true; 
      fix_names(vals); 
    }
  }

  function handleCurrentBoss(mul, boss) {
    let currentBoss = vals.pantheon.bosses[boss];
    const bossHpPlusRegen = (mul * currentBoss.current_hp) + (mul * currentBoss.regen);
    const bossHpMax = mul * currentBoss.max_hp;
    handleBossMovement(boss);
    if(bossHpPlusRegen <= bossHpMax) {
      currentBoss.current_hp += (mul * currentBoss.regen);
    } else {
      currentBoss.current_hp = currentBoss.max_hp;
    }
    if (vals.pantheon.dps > 0 ) {
      currentBoss.current_hp -= vals.pantheon.dps;
      attack('#battle' + (vals.pantheon.stage+1), vals.pantheon.dps);
    }
  }

  function handleBossMovement(currentBoss) {
    if(currentBoss === 'boss1') {
      $('#battle_1').css('-webkit-animation', 'rotation 10s infinite linear');
    } else {
      $('#battleitem.amount_1').css('-webkit-animation', 'none');
    }
  }

  function handleStats() {
    if( vals.current_tab==="Stats") fix_stats(vals);
    vals.stats.time_played = (vals.tick + vals.stats.time_played * 1000)/1000;
    last_saved = (vals.tick + last_saved * 1000)/1000;
  }

  function handleSaveData(cycles, override) {
    if( (cycles * ( vals.tick * 30 ) >= 30000 ) || override) {
      $('#save_title').html("Last saved ");
      $('#last_saved').text("0 seconds ago.");
      localStorage.sv1 = btoa(JSON.stringify(valsToJSON()));
      last_saved = 0;
      cycles = 0;
    }
    return cycles;
  }

  function handleGameLoop(iterations, cycles) {
    if (iterations >= 30) {
      game_engine(0, ++cycles);
    } else {
      game_engine(++iterations, cycles);
    }
  }

  function handleGameLogic(corrected_prod, cost) {
      if( vals.followers >= vals.loss || corrected_prod > 0)  {
        vals.followers += corrected_prod;
        vals.stats.total_followers += corrected_prod;
        vals.energy += ( ( 1+(vals.corruption/100) ) * vals.loss);
        vals.stats.total_energy += ( ( 1+(vals.corruption/100) ) * vals.loss);
      } else {
        vals.energy += (cost * (vals.achievement_multiplier*vals.prod))/(1+(vals.corruption/100));
        vals.stats.total_energy += (cost *(vals.achievement_multiplier*vals.prod))/(1+(vals.corruption/100));
      }
  }

var valsToJSON = function() {
    var save = staticValuesToJson();
    purchasesToJson(save);
    leapToJson(save);
    upgradesAndAchievementsToJson(save);
    statsToJson(save);
    pantheonToJson(save);
    return save;
}

function staticValuesToJson() {
  let save = {
  		'e':Math.round(vals.energy).toString(16),
        'p':vals.prod,
        'cl':vals.click,
        'f':(Math.round(vals.followers)).toString(16),
        'l':vals.loss,
        'c':vals.corruption.toString(16),
        'ac':vals.achievement_multiplier,
        't':(Math.round(vals.tick)).toString(16),
        'fl':vals.flame,
        'dam':vals.pantheon.damage.toString(16),
        "tier":vals.god_status.current.toString(16),
        "sac":vals.sacrifice.unlocked,
        'dps':vals.pantheon.dps,
        "stage":vals.pantheon.stage.toString(16),
        "asc":vals.leap.unlocked,
        "time":new Date()
  };
 	return save;
}

  function purchasesToJson(save) {
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
  }

  function leapToJson(save) {
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
  }

  function upgradesAndAchievementsToJson(save) {
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
  }

  function statsToJson(save) {
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
  }

function pantheonToJson(save) {
  let pantheon = [];
  for (let k in vals.pantheon.bosses) { 
    const items = vals.pantheon.bosses[k];
    let temp_a = [];
    temp_a.push('max_hp' + ":" +items.max_hp.toString(16));
    temp_a.push('current_hp' + ":" +items.current_hp.toString(16));
    temp_a.push('regen' + ":" +items.regen.toString(16));
    temp_a.push('defeated' + ":" + items.defeated.toString().toLowerCase());
    temp_a.push('reward' + ":" + items.reward.toString(16));    
    pantheon.push(temp_a);
  }

  for (let i in vals.pantheon.upgrades) {
    if (i != vals.god_status.current) continue;
    const items = vals.pantheon.upgrades[i];
    let temp_b = [];
    for (let j in items) {
      temp_b.push(j + ":" + items[j].amount.toString(16));
    }
    pantheon.push(temp_b);
  }

  save['pantheon'] = pantheon; 
}


/**
* Really bad code starts here, please refactor me.
*/
function get_valsFromJSON(save) {
        vals.energy = parseInt(save.e,16);
        vals.prod = save.p;
        vals.click = save.cl;
        vals.followers = parseInt(save.f, 16);
        vals.loss = save.l;
        vals.corruption = parseInt(save.c, 16);
        vals.achievement_multiplier = save.ac;
        vals.tick = parseInt(save.t, 16);
        vals.flame = save.fl;
        vals.pantheon.damage = parseInt(save.dam,16);
        vals.sacrifice.unlocked = save.sac;
        vals.pantheon.dps = save.dps;
        vals.pantheon.stage = parseInt(save.stage, 16);
        vals.leap.unlocked = save.asc;
        if( save.tier ) vals.god_status.current = parseInt(save.tier,16);
        lastTime = save.time;

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
                      if(x === item_num[0]) {
                        vals[k][x].amount = parseInt(item_num[1],16);
                        if(vals[k][x].amount >= 1) vals[k][x].cost = set_item_cost(vals[k][x]);
                        if(x.substr(x.length-1) < Object.keys(vals[k]).length) {
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
        if (save['pantheon']) {
            const items = save['pantheon'];
            for (let i=0; i < items.length; i++) {
              for (let k in items[i]) {
                if (i === (items.length-1)) {
                  let type = items[i][k].split(':')[0];
                  let amount = parseInt(items[i][k].split(':')[1], 16);
                  applyBossUpgrades(type, vals.god_status.current, amount);
                } else {
                  let currentBoss = 'boss' + (i+1);
                  vals.pantheon.bosses[currentBoss].max_hp = parseInt(items[i][0].split(':')[1], 16);
                  vals.pantheon.bosses[currentBoss].current_hp = parseInt(items[i][1].split(':')[1], 16);
                  vals.pantheon.bosses[currentBoss].regen = parseInt(items[i][2].split(':')[1], 16);
                  vals.pantheon.bosses[currentBoss].defeated = (items[i][3].split(':')[1].toString().toLowerCase() == 'true');
                  vals.pantheon.bosses[currentBoss].reward = parseInt(items[i][4].split(':')[1], 16);
                }
              }
            }
        }

        //load data for statistics 
        if (save.s) {
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

function applyBossUpgrades(bossUpgrade, tier, amount) {
  let isElligible = isNaN(parseInt(bossUpgrade.substr(bossUpgrade.length-1, bossUpgrade.length), 10));
  let type = isElligible ? bossUpgrade : bossUpgrade.substr(0, bossUpgrade.length-1);
  let upg = vals.pantheon.upgrades[vals.god_status.current][bossUpgrade];
  for (let i = 0; i < amount; i++) {
    vals.pantheon.upgrades[vals.god_status.current][bossUpgrade].amount++;
    vals.pantheon.upgrades[vals.god_status.current][bossUpgrade].cost = set_item_cost(upg);
  }
}

function loadData() {
  try {
      get_valsFromJSON(JSON.parse(atob(localStorage.sv1)));
  } catch(NoSuchSaveException) { 
    console.log("No saved data to load: " + NoSuchSaveException);
  }
  fix_tab_buttons(vals);
  fix_names(vals);
}

function deleteSave() {
  localStorage.removeItem("sv1");
  location.reload();
}

  function set_achievement_multiplier(vals) {
    var multiplier = 1.00;
    for (const challengeType in vals.challenges ) {
      for (const challengeNumber in vals.challenges[challengeType]) {
        let challenge = vals.challenges[challengeType][challengeNumber];

        if (challenge.unlocked) {
          multiplier += 0.02;
        }
      }
    }

    vals.achievement_multiplier = multiplier;
    $('#prod_mul').text(Math.round(vals.achievement_multiplier * 100)/100 + 'x');
    fix_tab_buttons(vals);
  }

  //TODO:- fix this disgusting mess => extract into objects & use polymorphism.
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
              if( i === '1') {
                vals.pantheon.damage *= vals.click; 
              }
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
      const leapUpgrades = ['click', 'boss', 'tier'];
      for (upg in leapUpgrades) {
        let leapUpgrade = leapUpgrades[upg];
        const id = $('.wrap-nav').attr('id');
        const tier = id.substr(id.length-1);
        if (vals.flame >= vals.leap[tier][leapUpgrade].req 
          && vals.leap[tier][leapUpgrade].amount < (vals.leap[tier][leapUpgrade].max + (parseInt(vals.god_status.current)-1))) {
          $('#' + leapUpgrade + '_btn_' + tier).prop('disabled', false);  
          if (leapUpgrades !== 'tier') {
            $('#' + leapUpgrade + '_btn_' + tier).attr('data-balloon', leapUpgrade + " potency increase");
          }
        } else {
          $('#' + leapUpgrade + '_btn_' + tier).prop('disabled', true); 
          $('#' + leapUpgrade + '_btn_' + tier).attr('data-balloon', "Max number purchased.");
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
    fix_corruption_bar(vals.corruption);
    fix_corruption_text(vals.corruption);
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
  let mul = vals.god_status[vals.god_status.current].mul;
  if( vals.pantheon.unlocked && vals.current_tab === 'Pantheon') {
    $('#pantheon_div_1').css('display', 'none');
    $('#pantheon_unlocked').css('display','block');
    $('#essence_amount').text( Math.round( vals.flame * 10) /10 );
    for (let k in vals.pantheon.bosses) {
      let id = k.substr(k.length-1);
      if (vals.pantheon.bosses[k].current) {
        if( $('#boss_num').text() != ': Upgrades') {
          $('#boss_num').text(': ' + vals.god_status[vals.god_status.current].boss_label + ' Boss ' + id);
        }
        $('#battle_1').attr('src', 'data/battle_' + id + '.png');
        $('#battle_1_hp').text( truncate_bigint( mul * vals.pantheon.bosses[k].current_hp));
        $('#max_hp').text( truncate_bigint(mul * vals.pantheon.bosses[k].max_hp));
        $('#boss_hp_bar').css('width', 100 * ( (mul*vals.pantheon.bosses[k].current_hp)/(mul*vals.pantheon.bosses[k].max_hp) ) + '%');
        $('#regen').text(mul*vals.pantheon.bosses[k].regen);
        $('#boss_name').text(vals.pantheon.bosses[k].name + ':');
        break;
      }
    }
    for (let k in vals.pantheon.upgrades) {
      for (let i in vals.pantheon.upgrades[k]) {
        let item = vals.pantheon.upgrades[k][i];
        if(!i.includes('hp') && !i.includes('regen')) {
          if( $('#shop_' + i.substr(0, i.length-1) + '_' + i.substr(i.length-1)).text() === '' )
            $('#shop_' + i.substr(0, i.length-1) + '_' + i.substr(i.length-1)).text(item.label);
        } else {
          if( $('#shop_' + i).html() === '' ) {
            $('#shop_' + i).html(item.label);
          }
        }
      }
    }
  }
}

function fix_corruption_bar(cor) {
  let desiredColor = '#B0BEC5';
  
  if (cor >= -100 && cor < -80) desiredColor = '#0D47A1';
  else if (cor >= -80 && cor < -60) desiredColor = '#1976D2';
  else if (cor >= -60 && cor < -40) desiredColor = '#42A5F5';
  else if (cor >= -40 && cor < -20) desiredColor = '#90CAF9';
  else if (cor >= -20 && cor < 0) desiredColor = '#BBDEFB';
  else if (cor <= 20 && cor > 0) desiredColor = '#EF9A9A';
  else if (cor <= 40 && cor > 20) desiredColor = '#E57373';
  else if (cor <= 60 && cor > 40) desiredColor = '#F44336';
  else if (cor <= 80 && cor > 60) desiredColor = '#D32F2F';
  else if (cor <= 100 && cor > 80) desiredColor = '#B71C1C';
  
  set_corruption_color(desiredColor);
}

function set_corruption_color(desiredColor) {
  $('#corruption_bar').css('background-color', desiredColor);
}

function fix_corruption_text(corruption) {
  let alignment = ' - Neutral';

  if (corruption < 0) {
    alignment = " Good";
    corruption *= -1
  } else if (corruption > 0) {
    alignment = " Evil";
  }

  $('#corruption_amount').text(corruption + '%' + alignment);
}

//generalised function that handles both asc and conv tabs.
function fix_conv_asc(vals) {
  const currentTab = vals.current_tab;
  if( currentTab != 'Conversion' && currentTab != 'Ascension' ) return;
  let keyWord, title;
  if( currentTab === 'Ascension') { 
    keyWord = 'ascend'; 
    title = 'ascend'; 
  } else { 
    keyWord = 'miracle'; 
    title = 'purchase'; 
  }

  for (let k in vals[keyWord]) {
      var purchase_num = k.substr(k.length-1);
      if ((currentTab === 'Ascension' && vals.loss >= vals[keyWord][k].unlock_rps) || (currentTab === 'Conversion' && (vals.prod >= vals[keyWord][k].unlock_rps))) {
        vals[keyWord][k].unlocked = true;
        //dynammically create divs as needed, saves creating all in the html file.
         if (!document.getElementById( title + '_' + purchase_num) && !document.getElementById('new_' + title) && k != (title + "1")) {
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
        $('#'+ title + "_header_" + purchase_num).contents().filter(function() { return this.nodeType == 3; }).first().replaceWith(vals[keyWord][k].label);
        $('#'+title + '_lbl_' + purchase_num).text(vals[keyWord][k].amount);
        let cost = 1;
        if (vals.god_status.current > 1) cost = vals.god_status[vals.god_status.current].mul * 0.80;
        $('#'+title + '_cost_' + purchase_num).text('[ ' + truncate_bigint(Math.round( vals.god_status[vals.god_status.current].mul * vals[keyWord][k].cost)) + ' energy ]');
        $('#'+title + '_text_' + purchase_num).text(vals[keyWord][k].description);
        $('#'+ title + '_out_' + purchase_num).text(truncate_bigint(Math.round(cost * vals[keyWord][k].output *10)/10)+ " followers ");
        if( currentTab != 'Conversion' ) {
          $('#'+ title + '_out_' + purchase_num).text(truncate_bigint(Math.round(cost  * vals[keyWord][k].output*10)/10) + " energy ");
          $('#ascend_out_' + purchase_num + '_' + purchase_num).text(truncate_bigint(Math.round(cost  * vals.ascend[k].output*10)/10) + " followers ");
        }
    } else {
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
          if(!document.getElementById('upgrade_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)) && !document.getElementById('new_upgrade') && i != "upgrade1"){
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
        if( vals.god_status.current > 1 ) {
          cost = vals.god_status[vals.god_status.current].mul * 0.67;
        }
        $('#upgrade_cost_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).text('[ ' + truncate_bigint(cost * vals.upgrades[k][i].cost) + ' energy ]');
        $('#upgrade_text_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).text(vals.upgrades[k][i].description);
        if( vals.upgrades[k][i].unlocked) {
          $('#upgrade_lbl_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).attr('class','glyphicon glyphicon-ok align_right');
          $('#upgrade_btn_' + purchase_num + "_" + i.substr(i.indexOf('e') + 1)).remove();
          $('#upgrade_cost_'+purchase_num + "_" + i.substr(i.indexOf('e') + 1)).remove();
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
          $('#challenges_text_'+challenge_num + '_' + i).text(vals.challenges[k][i].description);
        
        if( vals.challenges[k][i].unlocked) {
          $('#challenges_lbl_' + challenge_num + '_' + i).attr('class','glyphicon glyphicon-ok align_right');
          $('#challenges_' + challenge_num + '_' + i).css('color', '#fff');
          $('#challenges_' + challenge_num + '_' + i).css('border', '2px solid #fff');
          $('#challenges_' + challenge_num + "_" + i).detach().appendTo('#completed_challenges');
         }
         else {
          $('#challenges_lbl_' + challenge_num + '_' + i).attr('class','glyphicon glyphicon-remove align_right');
          $('#challenges_' + challenge_num + '_' + i).css('color', '#fff');
          $('#challenges_' + challenge_num + '_' + i).css('border', '2px solid #fff');
         }
        }
        }
       }
    }
}

  /**
   * (more) bad code ends.
   */

function doLeap(vals) {
  const upgradeSelected = vals.leap.selected.substr(0, vals.leap.selected.indexOf('_'));
  const upgradeTier = $('.wrap-nav').attr('id').substr($('.wrap-nav').attr('id').length -1);
  
  let chosen = vals.leap[upgradeTier][upgradeSelected];
  if (upgradeSelected === 'tier') {
    vals.god_status.current++;
  } else {
    chosen.amount++;
  } 

  const save = saveForLeap();
  localStorage.sv1 = btoa(JSON.stringify(save));
}

function saveForLeap() {
	let save = staticLeapValuesToJson();
	save['s'] = leapStatsToJson();
	leapToJson(save);

	return save;
}

function staticLeapValuesToJson() {
    const tierMul = generateLeapOffset(vals.god_status.current);
    const totalClickMul = generateTotalValueFor('click', 1) * tierMul;
    const totalDamageMul = generateTotalValueFor('boss', 1) * tierMul; + totalClickMul;

    let save = {
        'e':0,
        'p':0,
        'cl':totalClickMul.toString(16),
        'f':0,
        'l':0,
        'c':0,
        'ac':1,
        't':(500).toString(16),
        'fl':0,
        'dam':totalDamageMul.toString(16),
        "tier":vals.god_status.current.toString(16),
        "stage":0
    };	

    return save;	
}

function generateLeapOffset(tier) {
  let totalMultiplier = 1;
  for (let i = parseInt(tier); i > 1; i--) {
    totalMultiplier *= vals.god_status[i.toString()].mul;
  }

  return totalMultiplier;
}

function generateTotalValueFor(type, startValue) {
    let totalValue = startValue;

    for (var k in vals.leap) {
        if(k != 'unlocked' && k!='selected') {
          totalValue = Math.pow(vals.leap[k][type].mul, vals.leap[k][type].amount);
        }
    }

	return totalValue;
}

function leapStatsToJson() {
      const temp_s = {
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

      return temp_s;
}

$(document).on("click", ".reset", function() {
  saveSound.play();
  if( confirm("Are you sure you want to Quantum leap?") ) {
    doLeap(vals);
    location.reload();
  }
});

$(document).on("click", ".purchase", function() {
    var btn = $(this).attr('id');
    let event = resolveClass(btn);
    handleSound(btn);
    try {
    	event.action();
    } catch(EventActionEcception) {
      console.log(EventActionEcception);
    	console.log('Error occured while processing event triggered by:- ' + btn);
    }

  	fix_tab_buttons(vals);
  	fix_names(vals);
  });

function handleSound(id) {
  if(id.includes('save')) {
    saveSound.play();
  } else {
    purchaseSound.play();
  }
}

class Action {

  constructor(id) {
    this.id = id;
  }

  action() {
    console.log("Super class should never be instantiated!");
  }
}

class Deleter extends Action {

  action() {
    if(confirm("Are you sure you want to delete your save?")) deleteSave();
  }
}

class Saver extends Action {

  action() {
    handleSaveData(0, true);
    $.toaster({message:"Successfully saved game.", title:"Saved"});  
  }
}

class Producer extends Action {

  constructor(id) {
    super(id);
    this.object = generateUseableId(id) === 'purchase' ? vals.miracle[id] : vals.ascend[id];
  }

  action() {
    if(vals.energy >= this.object.cost) {
      vals.energy -= this.object.cost;
      this.object.amount ++;
      this.object.cost =  set_item_cost(this.object);
      this.handleProduction();
    }
  }

  handleProduction() {
    if(generateUseableId(this.id) === 'purchase') {
        vals.prod += this.object.output;
      } else {
        vals.loss += this.object.output;
    }
  }
}

class Upgrader extends Action {
      
  constructor(id) {
    super(id);
    this.type = this.generateUpgradeOfType(id);
  }
  
  action() {
    if(this.type.canUpgrade()){
      this.type.action();
    }
  }

  generateUpgradeOfType(btn) {
    const purchase = btn.substr(btn.indexOf('_btn_') + 5, btn.indexOf('_btn_') + 5);
    const purchaseType = vals.upgrades[purchase[0]].type;

    if(purchaseType === "Click amount") return new ClickUpgrade(btn, purchase);
    else if(purchaseType === "Tick speed") return new TickUpgrade(btn, purchase);
    else return new LeapUpgrade(btn, purchase);
  }
}

class Upgrade {

  constructor(id, purchaseType) {
    let btn = id.substr(0, id.indexOf('_')) + id.substr(id.lastIndexOf('_') + 1);
    this.upgrade = vals.upgrades[purchaseType[0]][btn];
  }

  action() {
    vals.energy -= this.upgrade.cost;
    this.upgrade.unlocked = true;
  }

  canUpgrade() {
    return vals.energy >= this.upgrade.cost;
  }
}

class ClickUpgrade extends Upgrade {

 action() {
    super.action();
    var origClick = vals.click;
    vals.click *= this.upgrade.mul;
    if(vals.pantheon.unlocked) {
      vals.pantheon.damage += (vals.click - origClick);
    }
  }
}

class TickUpgrade extends Upgrade {

  action() {
    super.action();
    vals.tick *= this.upgrade.mul;
  }
}

class LeapUpgrade extends Upgrade {

  action() {
    super.action();
    vals.leap.unlocked = true;
    $.toaster({message:"Don't go quietly into the good night.",title:"Quantum leap unlocked"})
  }
}

class Sacrificer extends Action {

	constructor(id) {
		super(id);
		this.sacrifice = this.generateSacrificeOfType(id);
	}

	action() {
		const corruptionOffset = this.sacrifice.offset;
		if(this.sacrifice.canSacrifice(corruptionOffset)) {
			this.sacrifice.action();
		} else {
			this.sacrifice.handleCorruptionMessage();
		}
	}

	generateSacrificeOfType(id) {
		return id.includes('entry') ? new EntrySacrifice(id) : new Sacrifice(id).getClass();
	}
}

class Sacrifice {

	constructor(id) {
		this.id = id;
	}
	
	action() {
	  const type = 'sacrifice' + this.id.substr(this.id.length-1);
	  vals.sacrifice[type].amount++;
      vals.sacrifice[type].cost = set_item_cost(vals.sacrifice[type]);
	}

	canSacrifice(corruptionOffset) {
		return Math.abs(vals.corruption) <= corruptionOffset;
	}

	getClass() {

		const type = this.id.substr(this.id.length-1); 
		if(type === '1') return new FollowerSacrifice(this.id);
		else if (type === '2') return new MixedSacrifice(this.id);
		else return new EnergySacrifice(this.id);
	}

	handleCorruptionMessage() {
		console.log('Abstract superclass method.');
	}
}
class EntrySacrifice extends Sacrifice {

	constructor(id) {
		super(id);
		this.offset = 100000000;
	}
	action() {
      vals.sacrifice.unlocked = true;
      vals.corruption += 5;
      vals.followers -= 1000000;
      generateToastMessage("Sacrifice tab unlocked!","Dark path");
	}

	handleCorruptionMessage() {
		super.handleCorruptionMessage();
	}
}

class FollowerSacrifice extends Sacrifice {

	constructor(id) {
		super(id);
		this.offset = 95;
	}

	action() {
		vals.followers -= vals.sacrifice['sacrifice1'].cost;
		vals.corruption +=5;
        generateToastMessage("Your power has grown.","Sacrifice");
        super.action();
	}

	handleCorruptionMessage() {
		generateToastMessage("Your power is maxed.","Sacrifice rejected");
	}
}

class MixedSacrifice extends Sacrifice {

	constructor(id) {
		super(id);
		this.offset = 85;
	}

	action() {
        vals.followers-= vals.sacrifice['sacrifice2'].cost;
        vals.energy-= vals.sacrifice['sacrifice2'].cost;
        vals.corruption +=15;
        generateToastMessage("Your power has intensified.","Sacrifice")
        super.action();
	}

	handleCorruptionMessage() {
		generateToastMessage("Corruption Overflowing.","Sacrifice rejected");
	}
}

class EnergySacrifice extends Sacrifice {
	
	constructor(id) {
		super(id);
		this.offset = -95;
	}

	action() {
	    vals.energy-= vals.sacrifice['sacrifice3'].cost;
        vals.corruption -=5;
        generateToastMessage("Your sanctity increased.","Sacrifice");
        super.action();
	}

	handleCorruptionMessage() {
		generateToastMessage("Your sanctity is maxed.","Sacrifice rejected");
	}	

	canSacrifice(corruptionOffset) {
		return Math.abs(vals.corruption) >= corruptionOffset;
	}
}

function generateToastMessage(toast, heading) {
	$.toaster({message:toast,title:heading});
}

class Clicker extends Action {

  constructor(btn) {
    super(btn.substr(0, btn.indexOf('_')) + btn.substr(btn.lastIndexOf('_') + 1));
    this.type = this.uiElementOfType(this.id);
  }

  uiElementOfType(id) {
    return vals.leap.selected === (id.substr(0, id.search(/\d/)) + '_leap') ? new LeapElement(id) : new ClickElement(id);
  }

  action() {
    this.type.action();
  }
}

class UiElement {

  constructor(id) {
    this.id = id;
  }

  action() {
    this.handleBackground();
  }

  handleBackground() {
    $('#' + vals.leap.selected ).css('background-color', '');
    $('#' + vals.leap.selected ).children().each(function() {
      $(this).css('color', '');
      $(this).children().each(function() {
        $(this).css('color', '');
      });
    });
    $('#' + vals.leap.selected ).css('border', '');
    $('#' + vals.leap.selected ).css('border-radius', '');
  }
}

class LeapElement extends UiElement {

  action() {
    super.action();
    vals.leap.selected = 0;
    $('.reset').prop('disabled', true);
  }
}

class ClickElement extends UiElement {

  action() {
    super.action();
    vals.leap.selected = (this.id.substr(0, this.id.search(/\d/)) + '_leap');
    $('.reset').prop('disabled', false);
  }
}

function resolveClass(btn) {
  if(btn === 'delete_save') return new Deleter(btn);
  if(btn === 'make_save') return new Saver(btn);
  const valsEntry = btn.substr(0, btn.indexOf('_')) + btn.substr(btn.lastIndexOf('_')+1);
  const id = generateUseableId(valsEntry);

  switch(id) {
    case 'purchase' : case 'ascend' : return new Producer(valsEntry); 
    case 'upgrade' : return new Upgrader(btn);
    case 'entry' : return new Sacrificer(btn);
    case 'sacrifice' : return new Sacrificer(btn);
    case 'click' : case 'tier' : case 'boss' : return new Clicker(btn);
  }
}

function generateUseableId(id) {
    const value = id.substr(0, id.search(/\d/));
    if (id.length !== 1) {
      if (id.includes('purchase') || id.includes('ascend')) {
        return id.substr(0, id.length-1);
      }
    }

    return value;
}

$(document).on("click", ".sell", function() {
  const btn = $(this).attr('id');
  const id = btn.substr(0, btn.indexOf('_')) + btn.substr(btn.length-1);

  let valsType = deriveType(id);
  if(canSell(valsType) === true){
    sell(id);  
    fix_tab_buttons(vals);
    fix_names(vals);
  }
});

function deriveType(id) {
  const type = id.substr(0, id.length-1);
  let valsType;

  if(type === 'purchase') {
    valsType = vals.miracle[id];
  } else {
    valsType = vals.ascend[id];
  }
  return valsType;
}

function canSell(valsType) {
  return valsType.amount >= 1;
}

function sell(id) {
  let valsType = deriveType(id);
  //consider disabling ui sounds
  purchaseSound.play();
  console.log(valsType.output);
  valsType.amount--;
  const valueReturn = valsType.cost * 0.5;

  if (valsType.amount === 0) {
    valsType.cost = valsType.base_cost;
    valsType.output = valsType.base_output;
  } else {
    valsType.cost =  set_item_cost(valsType);
  }
  let output = valsType.output;
  if (id.includes('purchase')) {
    vals.prod -= valsType.output;
  } else {
    vals.prod += valsType.output;
    vals.loss -= valsType.output;
  }
  vals.energy += valueReturn;
}

$(document).on("click", '#tab_btns .button', function(event) {
  playAudio(tabSound);
  var id = $(this).attr('id');
  var tabName = resolveTabName(id);

  openTab(event, tabName);
});

function resolveTabName(id) {
   var tabName = id[0].toUpperCase() + id.substr(1, id.indexOf('-') -1);
   if(id==='upgrade-tab-btn') {
     tabName += 's';
   }
   else if (id==='ascend-tab-btn' || id==='convert-tab-btn') {
      tabName = tabName.substr(0,tabName.length-1) + 'sion';
   }
   return tabName;
}

$(document).on("click", "#prev_boss", function(event) {
  tabSound.play();
  if( vals.pantheon.stage > 0 ) {
    vals.pantheon.bosses['boss' + vals.pantheon.stage].current = true;
    vals.pantheon.bosses['boss' + String(parseInt(vals.pantheon.stage) +1)].current = false;
    vals.pantheon.stage--;
  }
});

$(document).on("click", "#next_boss", function(event) {
  tabSound.play();
  if( vals.pantheon.stage <= 2 ) {
    vals.pantheon.stage++;
    vals.pantheon.bosses['boss' + vals.pantheon.stage].current = false;
    vals.pantheon.bosses['boss' + String(parseInt(vals.pantheon.stage) +1)].current = true;
  }
});

$(document).on("click", "#boss_upgrades", function(event) {
  if(isTab('Pantheon')) {
    tabSound.play();
    fixBossUpgrades();
    toggleElements(["#pantheon_unlocked .overlay", ".boss_img", ".traverse_bosses"]);
    toggleUi('#' + $(this).attr('id'), ['Upgrade menu', 'Boss fight']);
    $('#boss_num').toggleText(': Boss ' + String(parseInt(vals.pantheon.stage) + 1 ), ": Upgrades");
  }
});

$(document).on("click", "#upgrades_shown", function(event) {
  if(isTab("Upgrades")) {
    tabSound.play();
    toggleElements(["#bought_upgrades", "#uncompleted"]);
    toggleUi('#' + $(this).attr('id'), ['See Purchased', 'See Available']);
  }
});

$(document).on("click", "#achievements_shown", function(event) {
  if(isTab('Challenges')) {
    tabSound.play();
    toggleElements(["#completed_challenges", "#incomplete"]);
    toggleUi('#' + $(this).attr('id'), ['See Completed', 'See Incomplete']);
  }
});

function isTab(tab) {
  return vals.current_tab === tab;
}

function toggleElements(elements) {
  for(let index = 0; index < elements.length; index++) {
    let element = elements[index];

    $(element).fadeToggle(50);
  }
}

function toggleUi(element, toggles) {
    toggleButton(element);
    toggleIcon(element);
    toggleBalloon(element, toggles);
}

function toggleButton(element) {
  $(element).toggleClass('btn-open').toggleClass('btn-close');
}

function toggleIcon(element) {
  let html = "<span style='font-size:1.5em;' class=";
  html += handleBossUpgrade(element);
  
  $(element).toggleIcon(html, '<span style="font-size:1.5em;" class="glyphicon glyphicon-ok"></span>');
}

function handleBossUpgrade(element) {
  return element === "#boss_upgrades" ? '"glyphicon glyphicon-circle-arrow-up" id="achievements_shown">' : '"glyphicon glyphicon-remove">';
}

function toggleBalloon(id, toggles) {
  $(id).toggleBalloon(toggles[0], toggles[1]);
}

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

var perform_miracle = function(superclick) {
  var click = vals.click;
  if(superclick) {
    click *= vals.events.superclick.mul;
  }
  vals.followers += click;
  vals.stats.total_followers += click;
  vals.stats.miracle_clicks++;
  vals.stats.miracle_click_energy += click;

  return click;
}

var perform_trans = function(superclick) {
  click = vals.click;
  if(superclick) click *= vals.events.superclick.mul;

    if(vals.followers >= click) {
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
  tabSound.play();
  var id = $(this).attr('id');
  processBossUpgrade(id);
  fixBossUpgrades();
});


function fixBossUpgrades() {
  let upg = vals.pantheon.upgrades[vals.god_status.current];
  const buttons = ["click_1", "prod_1", "click_2", "prod_2", "max_hp", "regen"];
  for (let i = 0; i < buttons.length; i++) {
    let id = buttons[i];
    if (i > 3) choice = id;
    else choice = id.substr(0, id.search(/\d/) -1) + id.substr(id.search(/\d/));
    $('#' + id).html('Purchase ' + upg[choice].cost + '<span class="glyphicon glyphicon-fire"></span>');
  }
}

function processBossUpgrade(id) {
  var bossUpgrade = id.substr(0, id.search(/\d/) -1);
  var tier = id.substr(id.search(/\d/));
  let type = bossUpgrade;
  if (bossUpgrade === 'click' || bossUpgrade === 'prod') type += tier;
  if(isUpgradeAvailable(bossUpgrade, tier)) {
    vals.pantheon.upgrades[vals.god_status.current][type].amount++;
    vals.flame -= vals.pantheon.upgrades[vals.god_status.current][type].cost; 
    processHealthUpgrade(bossUpgrade);
    processDamageUpgrade(bossUpgrade, tier);
    vals.pantheon.upgrades[vals.god_status.current][type].cost = set_item_cost(vals.pantheon.upgrades[vals.god_status.current][type]);
  }
}

function processHealthUpgrade(bossUpgrade) {
  let upg = vals.pantheon.upgrades[vals.god_status.current][bossUpgrade];

  for (let k in vals.pantheon.bosses) {
    const boss = vals.pantheon.bosses[k];

    if (bossUpgrade === 'max_hp') {
      boss.max_hp *= upg.mul;

      if( boss.current_hp > boss.max_hp ) {
        boss.current_hp = boss.max_hp;
      }
    } else if (bossUpgrade === 'regen') {
        boss.regen *= upg.mul;
    }
  }
}

function processDamageUpgrade(type, tier) {
  let upg = vals.pantheon.upgrades[vals.god_status.current][type + tier];
  if (type === "click") {
    //process upgrades for tick based dmg upgrades
    if (tier === '2') {
      vals.pantheon.dps += (vals.click * upg.mul);
    } else {
      vals.pantheon.damage *= upg.mul;
    }
  } else if (type === "prod") {
    if (tier === '2') {
      vals.pantheon.dps += (vals.loss * upg.mul);
    } else {
      vals.pantheon.damage += (vals.loss * upg.mul);
    }
  }
}

function isUpgradeAvailable(bossUpgrade, tier) {
    let upg = vals.pantheon.upgrades[vals.god_status.current][bossUpgrade + tier];
    if (bossUpgrade === 'regen' || bossUpgrade === 'max_hp') {
      upg = vals.pantheon.upgrades[vals.god_status.current][bossUpgrade];
      return upg.amount < upg.max_amount && vals.flame >= upg.cost;
    } else {
      return tier === '1' && upg.amount < upg.max_amount && vals.flame >= upg.cost
          || tier === '2' && upg.amount < upg.max_amount && vals.flame >= upg.cost;
    }
}

$(document).on('contextmenu', '.miracle', function(event) {
  event.preventDefault();
  $(this).click();
});

//TODO - fix this for when you scroll down screen on achievements etc.
$(document).on("click", '.miracle', function(event) { 
  var used_id = $(this).attr('id').substr($(this).attr('id').indexOf('_') + 1);

  try {
    handleMiracleClick(used_id, event);
  } catch(cannotClickException) {
    handleError();
  }
});

function handleMiracleClick(used_id, event) {
  var miracle = used_id === 'button';
  var click = resolveClick(miracle, event);
  if(click.canClick()) {
    new Audio('data/clicksound.mp3').play();
    var divToAppend = resolveDivFor(miracle); 
    processSuperClick();
    click.setTargetColor(resolveColor(['#FFC400','#00FFFF']));
    click.revealTarget(divToAppend);
    click.generateOffset(divToAppend);
    click.animate();
  }
  else {
    handleError();
  }
}

class Click {

  constructor(event, target) {
    this.event = event;
    this.target = target;
  }

  setTargetColor(color) {
    this.target.css('color', color);
  }

  revealTarget(divToAppend) {
    this.target.css('opacity', 100);
    $(divToAppend).append(this.target);
    this.target.show();
  }

  resolveVerticalOffset() {
    var width = $(window).width();

    if(width > 1300)  {
        return this.event.pageY + 40;
    } else if(width <= 700) {
        return this.event.pageY * 1.1;
    } else if(width <= 1100) {
        return this.event.pageY + 25;
    } else if(width <= 1300) {
        return this.event.pageY + 25;
    }
  }

generateOffset(id) {
    var yOffset = this.resolveVerticalOffset();
    if(id === '#miracle2_div') {
      yOffset *= 0.75;
    }
    var xOffset = 5 * $(id).offset().left;
    this.target.offset({left: xOffset, top: yOffset});
  }
}

$(document).on('contextmenu', '.battle', function(event) {
  event.preventDefault();
  $(this).click();
});

$(document).on("click", ".battle", function() {
  new Audio('data/clicksound.mp3').play();
  const hit = 'battle_' + (vals.pantheon.stage+1) + '_hit';
  const id = $(this).attr('id');

  $(this).attr('src', 'data/' + hit + ".png");
  processSuperClick();
  attack(id, vals.pantheon.damage);
});

function attack(id, dam) {  
  const btn = id, divToAppend = '.boss_img';
  const damage = generateDamage(dam);
  let bossClick = new BossClick({}, setAttackTarget(damage));

  bossClick.revealTarget(divToAppend);
  bossClick.setTargetColor(resolveColor(["#FFC400",'#00FFFF']));
  bossClick.generateOffset(divToAppend);
  bossClick.animate();

  handleBossLogic(damage);
}

function generateDamage(damage) {
  return vals.events.superclick.active === true ? damage *= vals.events.superclick.mul : damage;
}

class BossClick extends Click {

  generateOffset(divToAppend) {
    gen_boss_offset(divToAppend, this.target);
  }

  animate() {
    this.target.animate({ 'top': '-=25', 'opacity':0.8, 'left': '+=4' }, 250);
    this.target.animate({ 'top': '+=15', 'opacity':0.1, 'left':  '+=15'}, 250, function() {  
      $(this).remove(); 
    });
  }
}

function setAttackTarget(damage) {
  let target = $('.miracle_click:first').clone();
  target.html( '-' + truncate_bigint(damage));

  return target;
}

function handleBossLogic(damage) {
    for(const k in vals.pantheon.bosses) {
      if(vals.pantheon.bosses[k].current) {
        let currentBoss = vals.pantheon.bosses[k];
        currentBoss.current_hp -= damage;

        if(bossIsDefeated(currentBoss)) {
          handleVictory(currentBoss);
          fix_pantheon(vals);
          break;
        }
      }
    } 
}

function bossIsDefeated(current) {
  return current.current_hp <= 0 ? true : false;
}

function handleVictory(boss) {
  updatePlayerStats(boss);
  updateBossStats(boss);
}

function updatePlayerStats(boss) {
   vals.flame += boss.reward;
}

function updateBossStats(boss) {
  const firstVictory = boss.defeated != true;
  boss.defeated = true;
  let generalMultiplier = handleBossMultiplier(firstVictory);

  boss.max_hp *= generalMultiplier;
  boss.current_hp = boss.max_hp;
  boss.regen *= (generalMultiplier + 0.5);
}

function handleBossMultiplier(firstVictory) {
  let generalMultiplier = firstVictory === true ? 2.5 : 1.5;
  generalMultiplier += 0.5 + vals.god_status.current/5.0;

  return generalMultiplier;
}

class MiracleClick extends Click {

  canClick() {
    return true;
  }

  animate() {
      this.target.animate({ 'top': '+=' + $('#miracle_div').height()/2, 'opacity':0.1, 'left': this.target.offset.left+ 'px'}, 750,
       function() { 
        $(this).remove();
      });
    }
}

class TranscendClick extends Click {

  canClick() {
    return can_click(false);
  }

  animate() {
    this.target.animate({'top': '-=' + $('#miracle_div').height()/2, 'opacity':0.1, 'left': '-=10'}, 750, 
      function() { 
        $(this).remove();
      });
  }
}

function handleError() {
  if(last_saved % 5 === 0) {
      $.toaster( {message: "Insufficient followers to convert!", title:"Can't convert." } );
  }
}

function gen_boss_offset(id, target) {
    var width = $(window).width();
    if( width <= 700) 
      target.offset( {'top': $(id).offset().top* 1.05, 'left': $(window).width()/ 2});
    else if( width <= 750) 
      target.offset( {'top': $(id).offset().top*1.15, 'left': $(window).width()});
    else if( width <= 1100) 
      target.offset( {left: 2 *  $(id).offset().left, 'top': $(id).offset().top*1.1});
    else if( width <= 1300) 
      target.offset( {left: 2 * $(id).offset().left, 'top': $(id).offset().top*1.2});
    else if( width <= 1600) 
      target.offset( {left: 2.05 * $(id).offset().left, 'top': $(id).offset().top*1.2});
    else if( width <= 1900)  
      target.offset({left: 2.2 * $(id).offset().left, top: $(id).offset().top * 1.5});
    else if(width > 1900) {
      target.offset({left: 2.4 * $(id).offset().left, top: $(id).offset().top * 1.5});
    }
}

function resolveClick(miracle, event) {
  var target = resolveTargetFor(miracle);

  return miracle === true ? new MiracleClick(event, target) : new TranscendClick(event, target);
}

function resolveTargetFor(miracle) {
  var target, html;

  if(miracle === true) {
    target = $('.miracle_click:first').clone();
    html = '+' + truncate_bigint(perform_miracle(vals.events.superclick.active));
  } else if(can_click(vals.events.superclick.active)) {
    target = $('.transcend_click:first').clone();
    html = '-' + truncate_bigint(perform_trans(vals.events.superclick.active)); 
  } else {
    return;
  }
  target.html(html);

  return target;
}

function resolveDivFor(miracle) {
  return miracle === true ? '#miracle_div' : '#miracle2_div';  
}

function processSuperClick() {
  if(vals.events.superclick.click_num < 100 && !vals.events.superclick.active) {
    vals.events.superclick.click_num++;
    $('#superclick_bar').css('width', vals.events.superclick.click_num + '%'); 
  } else if(vals.events.superclick.click_num === 100 && !vals.events.superclick.active) {
    $('#superclick_bar').css('background-color', '#FFC400');
    process_superclick(vals, 0);
  } 
}

function resolveColor(colors) {
  return vals.events.superclick.active === true ? colors[0] : colors[1];
}

var bar_timer;

function process_superclick(vals, iterations) {
    
    if (iterations === 9) {
      $('#superclick_bar').css('background-color', '');
      vals.events.superclick.click_num = 0;
      $('#superclick_bar').css('width', vals.events.superclick.click_num + '%'); 
      vals.events.superclick.active = false;
      
      return;
    }
    clearTimeout(bar_timer);

    $('#superclick_bar').css('width', (100 - 10 * (iterations) )+ '%');
    vals.events.superclick.active = true;

    if (iterations < 9) {
      bar_timer = setTimeout(function() {
        process_superclick(vals,iterations);
      }, vals.tick);
      iterations++;
    }
}

//check if followers >= click amount and > 0
function can_click(superclick) {
  var click = vals.click;
  if(superclick) {
    click *= vals.events.superclick.mul;
  }

  if( vals.followers >= 1 && vals.followers >= click ) {
    return true;
  }
  return false;
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
    if( upgrade_box_size != 0 ) {
      $('#upgrades-box').css("height", upgrade_box_size);
    }
    fix_names(vals);
}


})(jQuery);

function truncate_time(num) {
    var output_string = '';
    var remainder = Math.floor(num / 86400);
    num -= (86400 * remainder);
    if( remainder >= 1 )
      output_string = output_string + remainder + ' days, ';
    if( remainder == 1 ) output_string = output_string.substr(0,output_string.length-3) + ', ';
    return output_string + truncate_hours(num);
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

function truncate_minutes(num) {
    var output_string = '';
    var remainder = Math.floor(num / 60);
    num -= (60 * remainder);
    if( remainder >= 1 )
      output_string = output_string + remainder + ' minutes, ';
    if( remainder == 1 ) output_string = output_string.substr(0,output_string.length-3) +', ';
    return output_string + truncate_seconds(num);
}

function truncate_seconds(num) {
    var message = " seconds";
    if( num == 1 ) message = message.substr(0,message.length-1);
    return num + message + '.';
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
