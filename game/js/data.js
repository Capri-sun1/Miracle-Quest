var data = {
  "energy":0,"prod":0, "click":1, "followers":0, "loss":0, "corruption":0, "achievement_multiplier":1.00, "current_tab":"Conversion","tick":500,"flame":0,
  "events": {
    "superclick": {
      "click_num":0,
      "active":false,
      "mul": 2,
      "max_clicks":100
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
      "label": "Monk",
      "mul": 1,
      "boss_label": "",
      "max_tier":3
    },
    "2":{
      "label": "Alchemist",
      "mul": 2,
      "boss_label": "Angry",
      "max_tier": 5
    }, 
    "3":{
      "label": "Sorceror",
      "mul": 4,
      "boss_label": "Furious",
      "max_tier": 6
    },
    "4":{
      "label": "Arch Mage",
      "mul": 7,
      "boss_label": "Star venturer",
      "max_tier": 7
    },
    "5":{
      "label": "Phantasm",
      "mul": 12,
      "boss_label": "Cruel",
      "max_tier": 8
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
        "req": 0
      },
      "boss":{
        "label":"Boss Killer",
        "description":"You do increased damage to bosses.",
        "amount":0,
        "mul": 4,
        "max": 5,
        "req": 0
      },
      "tier":{
        "label":"True Ascension",
        "description":"You Ascend to a new God status, with new unlocks but increased difficulty.",
        "cost": 0,
        "amount": 0,
        "mul": 1,
        "req": 0,
        "max": 5
      }
    }
  },
  "miracle":{
        "numSelected":1,
            "purchase1":{
                "label":"Online Blogger",
                "description":"An inspired teenager to spread the word.",
                "amount":0,
                "output":0.2,
                "base_output":0.2,
                "base_cost":15,
                "cost":15,
                "sell_cost":7.5, 
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
                "sell_cost":80,   
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
                "sell_cost":500, 
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
                "sell_cost":5000, 
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
                "sell_cost":11250,  
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
                "sell_cost":62500,  
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
                "sell_cost":400000, 
                "unlock_rps":1400.0,
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
                "sell_cost":2500000, 
                "unlock_rps":10000.0,
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
                "sell_cost":40000000,  
                "unlock_rps":40000.0,
                "unlocked":false,
            },
            "purchasea":{
                "label":"Planet of the apes",
                "description":"Influence an entire planet's population.",
                "amount":0,
                "output":200000000,
                "base_output":200000000,
                "base_cost":6000000000,
                "cost":6000000000,
                "sell_cost":3000000000, 
                "unlock_rps":200000.0,
                "unlocked":false,
            }
         },  
         "ascend":{
           "numSelected":1,
            "ascend1":{
                "label":"Step-in-booth",
                "description":"An univiting small booth to slowly process followers.",
                "amount":0,
                "output":0.2,
                "base_output":0.2,
                "base_cost":25,
                "cost":25,
                "sell_cost":12.5, 
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
                "sell_cost":112.5,  
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
                "sell_cost":625, 
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
                "sell_cost":4000,  
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
                "sell_cost":1500,
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
                "sell_cost":80000,  
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
                "sell_cost":500000, 
                "unlock_rps":1400.0,
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
                "sell_cost":3000000,
                "unlock_rps":10000.0,
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
                "sell_cost":500000000,
                "unlock_rps":40000.0,
                "unlocked":false
            },
            "ascenda":{
                "label":"Staff of destiny",
                "description":"Staff which grants the wielder full control over the minds of mortals.",
                "amount":0,
                "output":250000000,
                "base_output":250000000,
                "base_cost":8000000000,
                "cost":8000000000,
                "sell_cost":4000000000,
                "unlock_rps":225000.0,
                "unlocked":false,
            }
  },
    "upgrades": {
        "1" : {
          "type":"Click amount",
            "upgrade1":{
              "label":"Basic telekinetics",
              "description":"Control of Earthly forces increases your power.",
              "unlocked":false,
              "cost":75,
              "mul":1.6
            },
            "upgrade2":{
              "label":"Matter Manipulation",
              "description":"Control over matter makes your Power swell.",
              "unlocked":false,
              "cost":400,
              "mul":2
            },
            "upgrade3":{
              "label":"Transmogrification",
              "description":"Convert entities to enhances your power.",
              "unlocked":false,
              "cost":2750,
              "mul":2.4
            },
            "upgrade4":{
              "label":"Elementary conjuring",
              "description":"Fledgling control of elements increases power.",
              "unlocked":false,
              "cost":12500,
              "mul":2.8
            },
             "upgrade5":{
              "label":"Studying Holy texts",
              "description":"Interpreting these ancient writings increases your mystic Power by even more.",
              "unlocked":false,
              "cost":80000,
              "mul":3.2
            },
             "upgrade6":{
              "label":"Burning the Holy texts",
              "description":"Read them, have you? Page-turners they were not.",
              "unlocked":false,
              "cost":500000,
              "mul":3.6
            },
            "upgrade7":{
              "label":"Astral projection",
              "description":"A double of yourself to act on your command.",
              "unlocked":false,
              "cost":3000000,
              "mul":4.2
            },
            "upgrade8":{
              "label":"Benign possession",
              "description":"Controlling some of your followers' forms to further your purpose.",
              "unlocked":false,
              "cost":20000000,
              "mul":5
            },
            "upgrade9":{
              "label":"Power siphoning",
              "description":"Enhancing your power by extracting it from the World.",
              "unlocked":false,
              "cost":130000000,
              "mul":5.8
            },
            "upgrade10":{
              "label":"Void gathering",
              "description":"Retrieving power from the void of space.",
              "unlocked":false,
              "cost":1000000000,
              "mul":6.75
            },
            "upgrade11":{
              "label":"Chaotic ritual",
              "description":"Harnessing chaos energy to increase your power.",
              "unlocked":false,
              "cost":9000000000,
              "mul":8
            },
            "upgrade12":{
              "label":"Deal with the devil",
              "description":"Sacrifice some of your divinity for greater control over space.",
              "unlocked":false,
              "cost":120000000000,
              "mul":10
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
              "cost":21000000,
              "mul":0.87
            },
            "upgrade8":{
               "label":"Keys to the car",
              "description":"Stolen keys to a working time machine.",
              "unlocked":false,
              "cost":1000000000,
              "mul":0.87
            },
            "upgrade9":{
               "label":"Demon's paw",
              "description":"A monkey's paw - but far more potent.",
              "unlocked":false,
              "cost":50000000000,
              "mul":0.85
            }
          },
          "3" : {
            "type": "Quantum Leap",
            "upgrade1":{
              "label":"Unlock Quantum Leap",
              "description":"To infinity and beyond",
              "unlocked":false,
              "cost":100000,
              "mul":"1337"
            }
          },
          "4" : {
            "type":"superclick_mul",
            "upgrade1":{
              "label":"Morning Coffee",
              "description":"You feel adrenaline surging through you as you click.",
              "unlocked":false,
              "cost":20000,
              "mul":1.5
            },
            "upgrade2":{
              "label":"Toughened leather",
              "description":"Fire resistant gloves allow you to click faster.",
              "unlocked":false,
              "cost":7500000,
              "mul":1.75
            },
            "upgrade3":{
              "label":"A gift from Zeus",
              "description":"Power over lightning for a brief time.",
              "unlocked":false,
              "cost":250000000,
              "mul":2.0
            },
            "upgrade4":{
              "label":"Dark matter gauntlets",
              "description":"They come in any colour - as long as they're dark.",
              "unlocked":false,
              "cost":55000000000,
              "mul":2.5
            }
          },
            "5" : {
              "type":"superclick_length",
              "upgrade1": {
                "label":"Star visor",
                "description":"Glasses that change your perception of the World.",
                "unlocked":false,
                "cost":625000,
                "mul":1.5
              },

              "upgrade2": {
                "label":"Gravitational filaments",
                "description":"Bend space-time, but just for a short time.",
                "unlocked":false,
                "cost":1150000000,
                "mul":2
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
              "description":"Surrender some of your mystic essence to increase your sanctity.",
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
                  "label":"Deal +0.025x mystic Power/Tick",
                  "amount":0,
                  "base_cost":2,
                  "cost":2,
                  "mul":0.025,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.1x Energy Prod/Tick",
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
                  "label":"Deal +0.01x mystic Power/Tick",
                  "amount":0,
                  "base_cost":2.75,
                  "cost":2.75,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05x Energy Prod/Tick",
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
                  "label":"Deal +0.01x mystic Power/Tick",
                  "amount":0,
                  "base_cost":2.5,
                  "cost":2.5,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05x Energy Prod/Tick",
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
                  "label":"Deal +0.01x mystic Power/Tick",
                  "amount":0,
                  "base_cost":2.75,
                  "cost":2.75,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05x Energy Prod/Tick",
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
                  "label":"Deal +0.01x mystic Power/Tick",
                  "amount":0,
                  "base_cost":3.5,
                  "cost":3.5,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05x Energy Prod/Tick",
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
                "regen":200,
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
              "label":"First Miracle",
              "description":"You carried out your first miracle.",
              "click_req":1,
              },
              "1_1": {
              "type":"total",
              "visible":true,  
              "unlocked":false,
              "label":"Starting small.",
              "description":"Gained 10 followers from miracles.",
              "val_req":10
              },
              "2" : {
              "type":"quantity",
              "visible":false,  
              "unlocked":false,
              "label":"Miracle happy",
              "description":"You've now performed 100 miracles.",
              "click_req":100
              },
              "2_2" : {
                "type":"total",
              "visible":false,  
              "unlocked":false,
              "label":"It's a miracle!",
              "description":"Gained 500 followers from miracles.",
              "val_req":500
              },
              "3" : {
              "type":"quantity",
              "visible":false,  
              "unlocked":false,
              "label":"These miracles are making me thirsty!",
              "description":"You have performed 1000 miracles.",
              "click_req":1000
              },
              "3_3" : {
                "type":"total",
              "visible":false,  
              "unlocked":false,
              "label":"Ten thousand strong at least!",
              "description":"Gained 10000 followers from miracles.",
              "val_req":10000
              },
              "4" : {
              "type":"quantity",
              "visible":false,  
              "unlocked":false,
              "label":"Carpal tunnel",
              "description":"You made it to a whole 15000 miracles!",
              "click_req":15000
              },
              "4_4" : {
                "type":"total",
              "visible":false,  
              "unlocked":false,
              "label":"Six figures",
              "description":"Gained 1M followers from miracles.",
              "val_req":1000000
              },
            },
             "challenge2":{
              "required_type":'click_a',
              "1":{
                "type":"quantity",
                "visible":true,
                "unlocked":false,
                "label":"Beginning",
                "description":"First follower was transformed to energy.", 
                "click_req":1
              },
                "1_1": {
              "type":"total",
              "visible":true,  
              "unlocked":false,
              "label":"Fast-tracking",
              "description":"Gained 10 mystic Energy from conversion.",
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
              "description":"You've gained 10000 mystic Energy through Conversions.",
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
                "label":"Autopilot",
                "description":"Your followers have begun to start converting others.",
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
                "description":"Sacrificed followers to enhance your power.. at what cost?",
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

var vals = {
  "energy":0,"prod":0, "click":1, "followers":0, "loss":0, "corruption":0, "achievement_multiplier":1.00, "current_tab":"Conversion","tick":500,"flame":0,
  "events": {
    "superclick": {
      "click_num":0,
      "active":false,
      "mul": 2,
      "max_clicks":100
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
      "label": "Monk",
      "mul": 1,
      "boss_label": "",
      "max_tier":3
    },
    "2":{
      "label": "Alchemist",
      "mul": 2,
      "boss_label": "Angry",
      "max_tier": 5
    }, 
    "3":{
      "label": "Sorceror",
      "mul": 4,
      "boss_label": "Furious",
      "max_tier": 6
    },
    "4":{
      "label": "Arch Mage",
      "mul": 7,
      "boss_label": "Star venturer",
      "max_tier": 7
    },
    "5":{
      "label": "Phantasm",
      "mul": 12,
      "boss_label": "Cruel",
      "max_tier": 8
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
        "req": 0
      },
      "boss":{
        "label":"Boss Killer",
        "description":"You do increased damage to bosses.",
        "amount":0,
        "mul": 4,
        "max": 5,
        "req": 0
      },
      "tier":{
        "label":"True Ascension",
        "description":"You Ascend to a new God status, with new unlocks but increased difficulty.",
        "cost": 0,
        "amount": 0,
        "mul": 1,
        "req": 0,
        "max": 5
      }
    }
  },
  "miracle":{
        "numSelected":1,
            "purchase1":{
                "label":"Online Blogger",
                "description":"An inspired teenager to spread the word.",
                "amount":0,
                "output":0.2,
                "base_output":0.2,
                "base_cost":15,
                "cost":15,
                "sell_cost":7.5, 
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
                "sell_cost":80,   
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
                "sell_cost":500, 
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
                "sell_cost":5000, 
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
                "sell_cost":11250,  
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
                "sell_cost":62500,  
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
                "sell_cost":400000, 
                "unlock_rps":1400.0,
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
                "sell_cost":2500000, 
                "unlock_rps":10000.0,
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
                "sell_cost":40000000,  
                "unlock_rps":40000.0,
                "unlocked":false,
            },
            "purchasea":{
                "label":"Planet of the apes",
                "description":"Influence an entire planet's population.",
                "amount":0,
                "output":200000000,
                "base_output":200000000,
                "base_cost":6000000000,
                "cost":6000000000,
                "sell_cost":3000000000, 
                "unlock_rps":200000.0,
                "unlocked":false,
            }
         },  
         "ascend":{
           "numSelected":1,
            "ascend1":{
                "label":"Step-in-booth",
                "description":"An univiting small booth to slowly process followers.",
                "amount":0,
                "output":0.2,
                "base_output":0.2,
                "base_cost":25,
                "cost":25,
                "sell_cost":12.5, 
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
                "sell_cost":112.5,  
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
                "sell_cost":625, 
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
                "sell_cost":4000,  
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
                "sell_cost":1500,
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
                "sell_cost":80000,  
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
                "sell_cost":500000, 
                "unlock_rps":1400.0,
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
                "sell_cost":3000000,
                "unlock_rps":10000.0,
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
                "sell_cost":500000000,
                "unlock_rps":40000.0,
                "unlocked":false
            },
            "ascenda":{
                "label":"Staff of destiny",
                "description":"Staff which grants the wielder full control over the minds of mortals.",
                "amount":0,
                "output":250000000,
                "base_output":250000000,
                "base_cost":8000000000,
                "cost":8000000000,
                "sell_cost":4000000000,
                "unlock_rps":225000.0,
                "unlocked":false,
            }
  },
    "upgrades": {
        "1" : {
          "type":"Click amount",
            "upgrade1":{
              "label":"Basic telekinetics",
              "description":"Control of Earthly forces increases your power.",
              "unlocked":false,
              "cost":75,
              "mul":1.6
            },
            "upgrade2":{
              "label":"Matter Manipulation",
              "description":"Control over matter makes your Power swell.",
              "unlocked":false,
              "cost":400,
              "mul":2
            },
            "upgrade3":{
              "label":"Transmogrification",
              "description":"Convert entities to enhances your power.",
              "unlocked":false,
              "cost":2750,
              "mul":2.4
            },
            "upgrade4":{
              "label":"Elementary conjuring",
              "description":"Fledgling control of elements increases power.",
              "unlocked":false,
              "cost":12500,
              "mul":2.8
            },
             "upgrade5":{
              "label":"Studying Holy texts",
              "description":"Interpreting these ancient writings increases your mystic Power by even more.",
              "unlocked":false,
              "cost":80000,
              "mul":3.2
            },
             "upgrade6":{
              "label":"Burning the Holy texts",
              "description":"Read them, have you? Page-turners they were not.",
              "unlocked":false,
              "cost":500000,
              "mul":3.6
            },
            "upgrade7":{
              "label":"Astral projection",
              "description":"A double of yourself to act on your command.",
              "unlocked":false,
              "cost":3000000,
              "mul":4.2
            },
            "upgrade8":{
              "label":"Benign possession",
              "description":"Controlling some of your followers' forms to further your purpose.",
              "unlocked":false,
              "cost":20000000,
              "mul":5
            },
            "upgrade9":{
              "label":"Power siphoning",
              "description":"Enhancing your power by extracting it from the World.",
              "unlocked":false,
              "cost":130000000,
              "mul":5.8
            },
            "upgrade10":{
              "label":"Void gathering",
              "description":"Retrieving power from the void of space.",
              "unlocked":false,
              "cost":1000000000,
              "mul":6.75
            },
            "upgrade11":{
              "label":"Chaotic ritual",
              "description":"Harnessing chaos energy to increase your power.",
              "unlocked":false,
              "cost":9000000000,
              "mul":8
            },
            "upgrade12":{
              "label":"Deal with the devil",
              "description":"Sacrifice some of your divinity for greater control over space.",
              "unlocked":false,
              "cost":120000000000,
              "mul":10
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
              "cost":21000000,
              "mul":0.87
            },
            "upgrade8":{
               "label":"Keys to the car",
              "description":"Stolen keys to a working time machine.",
              "unlocked":false,
              "cost":1000000000,
              "mul":0.87
            },
            "upgrade9":{
               "label":"Demon's paw",
              "description":"A monkey's paw - but far more potent.",
              "unlocked":false,
              "cost":50000000000,
              "mul":0.85
            }
          },
          "3" : {
            "type": "Quantum Leap",
            "upgrade1":{
              "label":"Unlock Quantum Leap",
              "description":"To infinity and beyond",
              "unlocked":false,
              "cost":100000,
              "mul":" infinity"
            }
          },
          "4" : {
            "type":"superclick_mul",
            "upgrade1":{
              "label":"Morning Coffee",
              "description":"You feel adrenaline surging through you as you click.",
              "unlocked":false,
              "cost":20000,
              "mul":1.5
            },
            "upgrade2":{
              "label":"Toughened leather",
              "description":"Fire resistant gloves allow you to click faster.",
              "unlocked":false,
              "cost":7500000,
              "mul":1.75
            },
            "upgrade3":{
              "label":"A gift from Zeus",
              "description":"Power over lightning for a brief time.",
              "unlocked":false,
              "cost":250000000,
              "mul":2.0
            },
            "upgrade4":{
              "label":"Dark matter gauntlets",
              "description":"They come in any colour - as long as they're dark.",
              "unlocked":false,
              "cost":55000000000,
              "mul":2.5
            }
          },
            "5" : {
              "type":"superclick_length",
              "upgrade1": {
                "label":"Star visor",
                "description":"Glasses that change your perception of the World.",
                "unlocked":false,
                "cost":625000,
                "mul":1.5
              },

              "upgrade2": {
                "label":"Gravitational filaments",
                "description":"Bend space-time, but just for a short time.",
                "unlocked":false,
                "cost":1150000000,
                "mul":2
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
              "description":"Surrender some of your mystic essence to increase your sanctity.",
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
                  "label":"Deal +0.025x mystic Power/Tick",
                  "amount":0,
                  "base_cost":2,
                  "cost":2,
                  "mul":0.025,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.1x Energy Prod/Tick",
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
                  "label":"Deal +0.01x mystic Power/Tick",
                  "amount":0,
                  "base_cost":2.75,
                  "cost":2.75,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05x Energy Prod/Tick",
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
                  "label":"Deal +0.01x mystic Power/Tick",
                  "amount":0,
                  "base_cost":2.5,
                  "cost":2.5,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05x Energy Prod/Tick",
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
                  "label":"Deal +0.01x mystic Power/Tick",
                  "amount":0,
                  "base_cost":2.75,
                  "cost":2.75,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05x Energy Prod/Tick",
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
                  "label":"Deal +0.01x mystic Power/Tick",
                  "amount":0,
                  "base_cost":3.5,
                  "cost":3.5,
                  "mul":0.01,
                  "max_amount":8
                },
                "prod2":{
                  "label":"Deal +0.05x Energy Prod/Tick",
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
                "regen":200,
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
              "label":"First Miracle",
              "description":"You carried out your first miracle.",
              "click_req":1,
              },
              "1_1": {
              "type":"total",
              "visible":true,  
              "unlocked":false,
              "label":"Starting small.",
              "description":"Gained 10 followers from miracles.",
              "val_req":10
              },
              "2" : {
              "type":"quantity",
              "visible":false,  
              "unlocked":false,
              "label":"Miracle happy",
              "description":"You've now performed 100 miracles.",
              "click_req":100
              },
              "2_2" : {
                "type":"total",
              "visible":false,  
              "unlocked":false,
              "label":"It's a miracle!",
              "description":"Gained 500 followers from miracles.",
              "val_req":500
              },
              "3" : {
              "type":"quantity",
              "visible":false,  
              "unlocked":false,
              "label":"These miracles are making me thirsty!",
              "description":"You have performed 1000 miracles.",
              "click_req":1000
              },
              "3_3" : {
                "type":"total",
              "visible":false,  
              "unlocked":false,
              "label":"Ten thousand strong at least!",
              "description":"Gained 10000 followers from miracles.",
              "val_req":10000
              },
              "4" : {
              "type":"quantity",
              "visible":false,  
              "unlocked":false,
              "label":"Carpal tunnel",
              "description":"You made it to a whole 15000 miracles!",
              "click_req":15000
              },
              "4_4" : {
                "type":"total",
              "visible":false,  
              "unlocked":false,
              "label":"Six figures",
              "description":"Gained 1M followers from miracles.",
              "val_req":1000000
              },
            },
             "challenge2":{
              "required_type":'click_a',
              "1":{
                "type":"quantity",
                "visible":true,
                "unlocked":false,
                "label":"Beginning",
                "description":"First follower was transformed to energy.", 
                "click_req":1
              },
                "1_1": {
              "type":"total",
              "visible":true,  
              "unlocked":false,
              "label":"Fast-tracking",
              "description":"Gained 10 mystic Energy from conversion.",
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
              "description":"You've gained 10000 mystic Energy through Conversions.",
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
                "label":"Autopilot",
                "description":"Your followers have begun to start converting others.",
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
                "description":"Sacrificed followers to enhance your power.. at what cost?",
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