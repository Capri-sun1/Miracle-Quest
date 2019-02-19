var last_saved = 0;
var toPlay = false;

function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / 86400000);
}

const defaultValue = (x, y) => {return (x !== null || x == undefined) ? x : y};

var upgrade_box_size = 0;
var animationFrame;

(function($) {
  $(document).ready(() => {
    window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60 
 
window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame
    || function(requestID){clearTimeout(requestID)} //fall back
  
    let canvas, ctx, particles, amount;
      canvas = document.querySelector("#scene");
      ctx = canvas.getContext("2d");
      particles = [];
      amount = 0;
  
    var colors = ["#fff","#880e4f", "#016FF9","#34B484", "#f0f0f0"];
    var windowWidth = canvas.width = window.innerWidth;
    var windowHeight = canvas.height = window.innerHeight;
  
    function Particle(x,y) {
      this.x =  Math.random() * windowWidth;
      this.y =  Math.random() * windowHeight;
      this.dest = {
        x : x,
        y: y
      };
      this.r =  window.innerWidth/250;
      this.vx = (Math.random() -0.5) * 25;
      this.vy = (Math.random() -0.5) * 25;
      this.accX = 0;
      this.accY = 0;
      this.friction = Math.random() * 0.02 + 0.94;
  
      this.color = colors[Math.floor(Math.random() * 6)];
    }
  
    Particle.prototype.render = function() {
      this.accX = (this.dest.x - this.x)/400;
      this.accY = (this.dest.y - this.y)/400;
      this.vx += this.accX;
      this.vy += this.accY;
      this.vx *= this.friction;
      this.vy *= this.friction;
  
      this.x += this.vx;
      this.y +=  this.vy;
  
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
      ctx.fill();
    }
  
    function initScene() {
      windowWidth = canvas.width = window.innerWidth;
      windowHeight = canvas.height = window.innerHeight;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.font = "bold "+ (windowWidth/10) +"px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Miracle Quest", windowWidth/2, windowHeight/2);
  
      let data  = ctx.getImageData(0, 0, windowWidth, windowHeight).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";
  
      particles = [];
      for (let i=0;i < windowWidth; i += Math.round(windowWidth/100)){
        for (let j=0;j < windowHeight; j += Math.round(windowWidth/100)){
          if (data[((i + j * windowWidth) * 4) + 3] > 150){
            particles.push(new Particle(i,j));
          }
        }
      }
      amount = particles.length;
    }
  
    function render() {
      animationFrame = window.requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < amount; i++) {
        particles[i].render();
      }
    } 
  
    initScene();
    animationFrame = window.requestAnimationFrame(render);

  loadData();
  loadBackgroundImage();
  showBackground().then(() => {
    fix_tab_buttons(vals);
    fix_names(vals);
    fix_corruption_bar(vals.corruption);
    fix_corruption_text(vals.corruption);
    fixPerks();
    lastTime = resolveLastTime();
    handleTimeSinceLastVisit();

    setupAudio();
    setupContainers();
    $.toaster(
      {
        settings:{
          toast:{
            css:{
              'background-color':'#212121',
              'color':'#fff'
            }
          },
          toaster:{
            css:{
              'width':'30%',
            }
          },
          timeout:'2500'
        }
      } 
    );
    $('#1').click();    
    $('#stats-tab-btn').click();
    start_game();
  });
});

$(window).resize(function() {
  setupContainers();
  if($(window).width() < 700) {
    $.toaster({ 
      settings: {
        toaster : {
          css : {
            'width' : '40%',
          }
        }
      }
    });
    fix_names(vals);
  }
});

async function showBackground() {
  let shouldLoad = false;
  await scanJsonFile(vals, data);
  try {
    let time = new Date(lastTime);
    let timeNow = new Date();
    let diffInDays = dateDiffInDays(time, timeNow);
    let diffInSeconds = diffInDays >= 1 ? diffInDays * 86400 : (timeNow.getTime() - time.getTime()) / 1000;
    if (diffInSeconds > 300) shouldLoad = true;
  } catch (NoSuchDateException) {
    console.log("Error occured resolving last visit: \n" + NoSuchDateException);
    shouldLoad = true;
  }
  if (shouldLoad === true) {
    $("#scene").delay(7000).fadeOut(1500);
    $("#background-fill").delay(8750).fadeOut(3000);
    $('#loading-screen').delay(11750).fadeOut(() => { 
    $('#loading-screen').empty();     
    $('#1').click(); 
    }).promise().then(() => {
      window.cancelAnimationFrame(animationFrame);
      return $('.trigger').click().promise();
    });
  } else {
      $("#scene").fadeOut(500);
      $("#background-fill").fadeOut(2000);
      $('#loading-screen').delay(1000).fadeOut(() => { 
      $('#loading-screen').empty();     
      $('#1').click(); 
    }).promise().then(() => {
      window.cancelAnimationFrame(animationFrame);
      return null;
    });
  }
}

async function scanJsonFile(file, backup) {
  await traverse(file, backup, 1);
}

async function traverse(x, backup, level) {
  if (isArray(x)) {
    traverseArray(x, backup, level);
  } else if ((typeof x === 'object') && (x !== null)) {
    await traverseObject(x, backup, level);
  } 
}
 
function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}
 
function traverseArray(arr, backup, level) {
  for (let i = 0; i < backup.length; i++) {
    traverse(arr[i], backup[i], level + "  ");
  }
}
 
async function traverseObject(obj, backup, level) {
  for (let key in backup) {
    if (backup.hasOwnProperty(key)) {
      if (obj[key] === undefined || obj[key] === null || obj[key] !== obj[key]) {
        obj[key] = backup[key];
        console.log("No save data found for: " + key + "\nAttempting to remedy..");
      }
      await traverse(obj[key], backup[key], level + "    ");
    }
  }
}

//placeholder for async loading - will be used in background loading section for lazy loading
function loadBackgroundImage() {
  var objects = document.getElementsByClassName('asyncImage');

  Array.from(objects).map((item) => {
    const img = new Image();
    img.src = item.dataset.src;

    img.onload = () => {
      item.classList.remove('asyncImage');
      if (item.nodeName === 'IMG') {
        $("html").css("background-image", `url(data/background_async.jpg)`);
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

function handleSecondsIdle(diffInSeconds) {
  var corrected_prod = adjustProduction();
  var total_loss = adjustLoss();
  //offline production much slower - hardcoded to only add to one value for now.
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
  bgm = new Audio('data/scifi.mp3');
  bgm.volume = 0.;
  bgm.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
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

function handleVisibilityChange() {
  try {
    if (document.hidden){
        bgm.pause();
    }
  } catch (NoSuchAudioException) {
    console.log("Unable to change state of audio.");
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);

$(document).on('click','#playing', () => {
  if(bgm.ended !== true && bgm.paused !== true) {
    //set global flag here
    bgm.pause();
    toPlay = false;
  } else if (bgm.paused === true) {
    playAudio(bgm);
    toPlay = true;
  }
});

function setupContainers() {
  const width = $(window).width();
  const height = $(window).height();
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
  const nextItem = resolveItemCost(item.amount, item.base_cost);
  item.output = item.base_output * nextItem[1];
  return nextItem[0];
}

function resolveItemCost(index, base) {
  let amount_multiplier = 1.8;
  let multiplier = 1.0;

  if (index >= 1) {
    const values = [[0, 10, 5], [10, 25, 2.5], [25, 50, 1], [50, 75, 0.5], [75, 100, 0.25], [100, 200, 0.1], [200, 350, 0.04], [350, 500, 0.01], [500, 10000, 0.004]];

    for (let i = 0; i < values.length; i++) {
      const lowerBound = values[i][0];
      const upperBound = values[i][1];
      const divisor = values[i][2];

      if (index >= lowerBound && index < upperBound) {
        amount_multiplier += index * (index * 0.2);  
        if (lowerBound !== 0) {
          multiplier *= (lowerBound/2.85);
          amount_multiplier *= (1 + lowerBound/40);
        }
        multiplier += index / divisor;
        break; 
      }
    }
  } else {
    return [base, multiplier];
  }

  const newCost = amount_multiplier * base;
  return [Math.round(newCost * 0.9), multiplier];
}

function game_engine(iterations, cycles) {
  const corrected_prod = adjustProduction();
  const total_loss = adjustLoss();
  
  handleNegativeValues();
  handleUiUpdate([corrected_prod, total_loss]);

  setTimeout(() => {
    checkAchievements(vals);
    setButtonAvailability(vals);  

    handlePantheon();
    handleScroller();
    handleStats();
    cycles = handleSaveData(cycles, false);
    handleGameLoop(iterations, cycles);
    handleGameLogic(corrected_prod);
    if (bgm.volume < 0.45) {
      bgm.volume += 0.01;
    }
  }, vals.tick);
}

function adjustForGodStatus(mul, multiplier) {
  return mul > 1 ? mul * multiplier : 1;
}

function adjustProduction() {
  let passiveMul = vals.perks["passive"].mul; 
  let achieveMul = vals.achievement_multiplier;
  let corruptMul = 1 + (vals.corruption/100);
  let runMul = vals.god_status.current >= 2 ? (vals.god_status.current - 1) * vals.stats.runner_multiplier : 1.0;
  return ((passiveMul * achieveMul * vals.prod * runMul) / (corruptMul)) - (corruptMul * runMul * vals.loss);
}

function adjustLoss() {
  let runMul = vals.god_status.current >= 2 ? (vals.god_status.current - 1) * vals.stats.runner_multiplier : 1.0;
  return vals.loss * (1+(vals.corruption/100)) * vals.perks["passive"].mul * runMul;
}

function handleNegativeValues() {
  vals.followers = handleNegative(vals.followers);
  vals.prod = handleNegative(vals.prod);
  vals.loss = handleNegative(vals.loss);
}

function handleNegative(value) {
  return value <= 0 ? 0 : value;
}

function handleUiUpdate(values) {
  const corrected_prod = values[0];
  const total_loss = values[1];

  $('#click_amount').text('[ ' + truncate_bigint(vals.click) + ' ]');
  $('#counter').text(truncate_bigint(Math.floor(vals.followers)));
  $('#power').text(truncate_bigint(vals.energy));
  $('#production_net').text(truncate_bigint(corrected_prod));
  $('#production_gross').text(truncate_bigint(((vals.achievement_multiplier * vals.prod) / (1 + (vals.corruption / 100)))));
    
  let netLoss = 0;
  if (corrected_prod >= 0.0 || vals.followers >= total_loss)  {
    netLoss = total_loss;
  } else {
    netLoss = (vals.achievement_multiplier * vals.prod) / (1 + (vals.corruption / 100));
  }
  $('#prod_energy').text(truncate_bigint(netLoss));
}

function handlePantheon() {
  let adjustedMultiplier = vals.god_status[vals.god_status.current].mul * 0.6;
  if (vals.current_tab === "Pantheon" && vals.pantheon.unlocked === true) {
    for (let k in vals.pantheon.bosses) {
      if (vals.pantheon.bosses[k].current) {
        handleCurrentBoss(adjustedMultiplier, k);
        break;
      }
    }
  } else if (vals.pantheon.unlocked === false && vals.upgrades['1']['upgrade5'].unlocked) {
    vals.pantheon.unlocked = true; 
    fix_names(vals); 
  }
}

var hasStarted = false;

function handleScroller() {
  if (vals.current_tab === "Runner" && hasStarted !== true) {
    hasStarted = true;
  } else if (vals.current_tab !== "Runner" && hasStarted === true) {
    hasStarted = false;
    try {
      if (runnerAnimation !== null) window.cancelAnimationFrame(getAnimationFrame());
    } catch (NoSuchAnimationException) {
    }
  } else if (hasStarted === true) {
    vals.stats.runner_multiplier = parseFloat($("#runner_multiplier").text());
  }
}

$(document).on("click", "#start_runner_btn", () => {
  $("#runner_container").css("display", "block");
  $("#runner_before").css("display", "none");
  startRunner();
  hasStarted = true;
});

function handleCurrentBoss(mul, boss) {
  let currentBoss = vals.pantheon.bosses[boss];
  const bossHpPlusRegen = (mul * currentBoss.current_hp) + (mul * currentBoss.regen);
  const bossHpMax = mul * currentBoss.max_hp;
  if (bossHpPlusRegen <= bossHpMax) {
    currentBoss.current_hp += (mul * currentBoss.regen);
  } else {
    currentBoss.current_hp = currentBoss.max_hp;
  }
  if (vals.pantheon.dps > 0) {
    currentBoss.current_hp -= vals.pantheon.dps;
    attack('#battle' + (vals.pantheon.stage + 1), vals.pantheon.dps);
  }
}
  
function handleStats() {
  if (vals.current_tab === "Stats") fix_stats(vals);
  vals.stats.time_played = (vals.tick + vals.stats.time_played * 1000) / 1000;
  last_saved = (vals.tick + last_saved * 1000) / 1000;
}

function handleSaveData(cycles, override) {
  if ((cycles * (vals.tick * 30) >= 30000) || override) {
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

function handleGameLogic(corrected_prod) {
  if( vals.followers >= vals.loss || corrected_prod > 0) {
    vals.followers += corrected_prod;
    vals.stats.total_followers += corrected_prod;
    vals.energy += ((1+ (vals.corruption / 100)) * vals.loss);
    vals.stats.total_energy += ((1 + (vals.corruption / 100)) * vals.loss);
  } else {
    vals.energy += (vals.achievement_multiplier*vals.prod) / (1 + (vals.corruption / 100));
    vals.stats.total_energy += (vals.achievement_multiplier * vals.prod) / (1 + (vals.corruption / 100));
  }
}

const valsToJSON = () => {
  var save = staticValuesToJson();
  purchasesToJson(save);
  leapToJson(save);
  upgradesAndAchievementsToJson(save);
  statsToJson(save);
  pantheonToJson(save);
  savePerks(save);

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
    "time":new Date(),
    "sc":vals.events.superclick.mul,
    "sm":vals.events.superclick.max_clicks,
    "lc":Math.round(vals.upgrades["3"]["upgrade1"].cost).toString(16),
    "cst":vals.leap["1"].tier.cost.toString(16),
    "stc":vals.start_click
  };
 	return save;
}

function purchasesToJson(save) {
  var unlocks = {
    "miracle":"cl",
    "ascend":"asc"
  };
  for (let k in unlocks) { 
    const items = vals[k];
    const temp_a = [];
    for (let i in items) { 
      if (i === 'numSelected') continue;
      try {
        temp_a.push([i] + ":" + items[i].amount.toString(16)); 
        temp_a.push([i] + ":" + items[i].unlocked);         
        temp_a.push([i] + ":" + items[i].base_cost.toString(16));
        temp_a.push([i] + ":" + items[i].base_output);
      } catch (NoSuchItemException) {
        console.log("Could not save item: " + item + "\n" + NoSuchItemException);
      }
    }
    save[k] = temp_a.join('|');
  }
}

function leapToJson(save) {
  for (let k in vals.leap) { 
    let items = vals.leap[k];
    let temp_a = [];
    for (let i in items) { 
      if (items[i].amount > 0) {
        temp_a.push([i] + ":" + items[i].amount.toString(16));
      }
    }
    if (k != 'selected' && k != 'unlocked') save['leap' + k] = temp_a.join('|');
  }
}

function upgradesAndAchievementsToJson(save) {
  let tiered = {
    "upgrades":"up",
    "challenges":"ch"
  }

  for (let k in tiered) { 
    var items_generic = vals[k];
    var temp_t = [];
    var temp_arr = [];
    for (let i in items_generic) {
      for (let j in items_generic[i]) {
        if (items_generic[i][j].unlocked) temp_t.push(items_generic[i][j].label);
        if (k === 'upgrades' && j !== 'type') {
          temp_t.push(i + ':' + j + ":" + items_generic[i][j].cost);
          temp_t.push(i + ':' + j + ":" + items_generic[i][j].mul);          
        }
      }
    }
    save[k] = temp_t.join('|');
  }  	
}

function statsToJson(save) {
  let temp_s = {
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
    temp_a.push('max_hp' + ":" + items.max_hp.toString(16));
    temp_a.push('current_hp' + ":" + items.current_hp.toString(16));
    temp_a.push('base_hp' + ":" + items.base_hp.toString(16));
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

function loadData() {
  try {
      get_valsFromJSON(JSON.parse(atob(localStorage.sv1)));
  } catch(NoSuchSaveException) { 
    console.log("No saved data to load: " + NoSuchSaveException);
  }
}

function get_valsFromJSON(save) {
        vals.energy = parseInt(save.e,16);
        vals.prod = save.p;
        vals.click = parseFloat(save.cl);
        vals.followers = parseInt(save.f, 16);
        vals.loss = save.l;
        vals.corruption = parseInt(save.c, 16);
        vals.achievement_multiplier = save.ac;
        vals.tick = parseInt(save.t, 16);
        vals.flame = parseInt(save.fl);
        vals.pantheon.damage = parseInt(save.dam,16);
        vals.sacrifice.unlocked = save.sac;
        vals.pantheon.dps = save.dps;
        vals.pantheon.stage = parseInt(save.stage, 16);
        vals.leap.unlocked = save.asc;
        vals.events.superclick.mul = parseInt(save.sc);
        vals.start_click = parseFloat(save.stc);
        vals.events.superclick.max_clicks = parseInt(save.sm);
        vals.leap["1"].tier.cost = parseInt(save.cst, 16);
        vals.upgrades["3"]["upgrade1"].cost = parseInt(save.lc, 16);
        if (save.tier) vals.god_status.current = parseInt(save.tier,16);
        if (vals.upgrades["3"]["upgrade1"].cost <= 100000 && vals.god_status.current > 1) 
          vals.upgrades["3"]["upgrade1"].cost = vals.upgrades["3"]["upgrade1"].cost * (vals.god_status[vals.god_status.current].mul * 1.1 * 10);
        lastTime = save.time;

        for (let k in vals.pantheon.bosses) {
          let boss = vals.pantheon.bosses[k];
          if (boss.current && parseInt(k.substr(k.length-1)) != (parseInt(vals.pantheon.stage) +1)) boss.current = false;
          else if (parseInt(k.substr(k.length-1)) === (parseInt(vals.pantheon.stage) +1)) boss.current = true;
        }
        var purchases = {
            "miracle":"cl",
            "ascend":"asc"
        }; 
        for (let k in purchases) {
          if (save[k]) {
            let t_items = save[k].split('|');
            for (let i = 0; i < t_items.length - 3; i+=4) {
              const firstItem = t_items[i].split(':');
              const secondItem = t_items[i+1].split(':');
              const thirdItem = t_items[i+2].split(':');
              const fourthItem = t_items[i+3].split(':');         
              for (let x in vals[k]) {
                if (x === firstItem[0]) {
                  vals[k][x].amount = parseInt(firstItem[1], 16);
                  vals[k][x].unlocked = secondItem[1];
                  vals[k][x].base_cost = parseInt(thirdItem[1], 16);
                  vals[k][x].base_output = parseFloat(fourthItem[1]);                                    
                  vals[k][x].cost = set_item_cost(vals[k][x]);
                  determineSellPrice(k, x);
                }
              }
            }
          }
        }
        for (let k in vals.leap) { 
          if (save['leap' + k]) {
          if (k !== 'unlocked' && k !== 'selected') {
            const t_items = save['leap' + k].split('|');
            for (let i = 0; i < t_items.length; i++) {
              const item_num = t_items[i].split(':');
              for (let x in vals.leap[k] ) {
                if (x === item_num[0]) {
                  vals.leap[k][x].amount = parseInt(item_num[1], 16);
                }
              }
            }
          }
        }
      }
        var tiered = {
          "upgrades":"up",
          "challenges":"ch"
        }

        //load challenges and upgrades
        for (let k in tiered) {
          if (save[k]) {
            let t_items = save[k].split('|');
            t_items += '';
            let item = t_items.split(",");
            let textSaves = [];

            item.forEach((element) => {
              for (let x in vals[k]) {
                for (let y in vals[k][x]) {
                  if (vals[k][x][y].label === element) {
                    vals[k][x][y].unlocked = true;    
                    textSaves.push(element);
                  }
                }
              }
            }); 

            let upgs = item.filter((elem) => {
              return !textSaves.includes(elem);
            });
            if (k === "upgrades") {
              for (let i = 0; i < upgs.length-2; i+=2) {
                let cst = upgs[i].split(':');
                let ml = upgs[i+1].split(':');
                if (cst.length !== 3 || ml.length !== 3 || cst[0] === "3") continue;
                vals.upgrades[cst[0]][cst[1]].cost = parseFloat(cst[2], 16);
                vals.upgrades[ml[0]][ml[1]].mul = parseFloat(ml[2], 16);
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
                  vals.pantheon.bosses[currentBoss].base_hp = parseInt(items[i][2].split(':')[1], 16);
                  vals.pantheon.bosses[currentBoss].regen = parseInt(items[i][3].split(':')[1], 16);
                  vals.pantheon.bosses[currentBoss].defeated = (items[i][4].split(':')[1].toString().toLowerCase() == 'true');
                  vals.pantheon.bosses[currentBoss].reward = parseInt(items[i][5].split(':')[1], 16);
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

      loadPerks(save);
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

//TODO:- refactor this => extract into own class, determine appropriate pattern.
function checkAchievements(vals) {
    for (let k in vals.challenges) {
      switch (vals.challenges[k].required_type) {

        case "click_m":
        for (let i in vals.challenges[k]) {
          if (vals.challenges[k][i] != vals.challenges[k].required_type) {
            var has_unlocked = false;
            if( vals.challenges[k][i].type === "total") {if( vals.stats.miracle_click_energy >= vals.challenges[k][i].val_req ) has_unlocked = true; }
            else {if( vals.stats.miracle_clicks >= vals.challenges[k][i].click_req) has_unlocked = true; }
            //we don't want achievment messages to show unless the user actually unlocks them => not on startup every time.
            if (has_unlocked) {
              if (!vals.challenges[k][i].unlocked && ($('#save_title').text() != "Nothing saved yet." || last_saved > 2))
                $.toaster( {message: vals.challenges[k][i].label, title:"Achievement Unlocked" } );
              vals.challenges[k][i].unlocked = true;
            }
            fix_names(vals);
          }
        }
        break;
        case "click_a":
        for (let i in vals.challenges[k]) {
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
        for (let i in vals.challenges[k]) {
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
        for (let i in vals.challenges[k]) {
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
          for (let i in vals.challenges[k]) {
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
          for (let i in vals.challenges[k]) {
          if( vals.challenges[k][i] != vals.challenges[k].required_type) {
          if( vals.pantheon.stage == vals.challenges[k][i].req_stage && vals.pantheon.unlocked ) {
            if( !vals.challenges[k][i].unlocked && ($('#save_title').text() != "Nothing saved yet." || last_saved >= 1)) {
              $.toaster( {message: vals.challenges[k][i].label, title:"Achievement Unlocked" } );
              if( i === '1') {
                vals.pantheon.damage *= (vals.click / parseFloat(vals.start_click)); 
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
  setPurchaseAvailability();
  if (vals.current_tab === 'Upgrades') {
    for (let k in vals.upgrades) {
      const purchase_num = k.substr(k.length -1 );
      for (let i in vals.upgrades[k]) {
        if (i === 'type') continue;
        if (vals.upgrades[k][i].unlocked === true) {
            $('#upgrade_btn_' + purchase_num + "_1").prop('disabled', true);
            continue;
        } else if (vals.upgrades[k][i].unlocked != true) {
          if (vals.energy >= (vals.upgrades[k][i].cost) && vals.upgrades[k][i].cost < (vals.upgrades["3"]["upgrade1"].cost/3)) {
            $('#upgrade_btn_' + purchase_num + "_1").prop('disabled', false);
            $('#upgrade_btn_' + purchase_num + "_1").parent().css("display", "block");
          } else {
            $('#upgrade_btn_' + purchase_num + "_1").prop('disabled', true);
            $('#upgrade_btn_' + purchase_num + "_1").parent().css("display", "none");
          }
          break;
        }
      }
    }
  }
  if (vals.current_tab === 'Sacrifice') {
    //locked screen
    if (vals.followers >= 1000000 && !vals.sacrifice.unlocked) $('#entry_sacrifice_btn_1').prop('disabled', false);
    else if (!vals.sacrifice.unlocked && vals.followers < 1000000) $('#entry_sacrifice_btn_1').prop('disabled', true);
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
   if (vals.current_tab === 'Pantheon') {
    if (!vals.pantheon.unlocked) return;
      let boss_num = parseInt(vals.pantheon.stage) + 1;
      if(boss_num > 1) {
        $('#prev_boss').prop('disabled', false);
        $('#prev_boss').css('display', "inline-block");  
      } else {
        $('#prev_boss').prop('disabled', true);
        $('#prev_boss').css('display', "none");  
      }

      let defeated = vals.pantheon.bosses['boss' + String(boss_num)].defeated;
      let maxTier = parseInt(vals.god_status[vals.god_status.current].max_tier - 4);
      if (boss_num >= maxTier || defeated != true) {
        $('#next_boss').prop('disabled', true);
        $('#next_boss').css('display', "none");  
      } else {
        $('#next_boss').prop('disabled', false);
        $('#next_boss').css('display', "inline-block");  
      }
       for (let k in vals.pantheon.upgrades) {
           for (let i in vals.pantheon.upgrades[k]) {
              let item = vals.pantheon.upgrades[vals.god_status.current][i];
              var id = '#';
              if (i.includes('hp') || i.includes('regen')) {
                id += i + '_' + k.substr(k.length-1);
              } else {
                id += i.substr(0, i.length-1) + '_' + i.substr(i.length-1);
              }
              if (vals.flame >= item.cost && item.amount < item.max_amount) {
                  $(id).prop('disabled', false);
              } else {
                $(id).prop('disabled', true);
              }
          }
        }
    }
    if (vals.current_tab === 'Leap') {
      const leapUpgrades = ['click', 'boss', 'tier'];
      for (let upg in leapUpgrades) {
        let leapUpgrade = leapUpgrades[upg];
        const id = $('.wrap-nav').attr('id');
        const tier = id.substr(id.length-1);
        if (leapUpgrade !== 'tier' && vals.god_status.current === 1) {
          $('#' + leapUpgrade + '_btn_' + tier).prop('disabled', true); 
          $('#' + leapUpgrade + '_btn_' + tier).attr('data-balloon', "Currently unavailable.");
          continue;
        } 

        let maxNumber = 1;
        if (vals.god_status.current >= 5) maxNumber++;
        if (vals.flame >= vals.leap[tier][leapUpgrade].cost 
          && vals.leap[tier][leapUpgrade].amount < (maxNumber)) {
          $('#' + leapUpgrade + '_btn_' + tier).prop('disabled', false);  
          if (leapUpgrade !== 'tier') {
            $('#' + leapUpgrade + '_btn_' + tier).attr('data-balloon', leapUpgrade.charAt(0).toUpperCase() + leapUpgrade.slice(1) + " potency increase");
          } else {
              if (vals.god_status.current >= 7) {
                $('#' + leapUpgrade + '_btn_' + tier).prop('disabled', true); 
                $('#' + leapUpgrade + '_btn_' + tier).attr('data-balloon', "Max divinity attained.");
              } else $('#' + leapUpgrade + '_btn_' + tier).attr('data-balloon', "Ascend your divinity.");
          }
        } else {
          $('#' + leapUpgrade + '_btn_' + tier).prop('disabled', true); 
          if (leapUpgrade !== 'tier') {
            $('#' + leapUpgrade + '_btn_' + tier).attr('data-balloon', "Max number purchased.");
          } else {
            $('#' + leapUpgrade + '_btn_' + tier).attr('data-balloon', "Insufficent essence.");
          }
        }   
      }
    }
  }

function setPurchaseAvailability() {
  //TODO - consider extracting this map to its own method for use elsewhere
  let myMap = new Map();
  myMap.set("Conversion", ["purchase", vals.miracle]);
  myMap.set("Ascension", ["ascend", vals.ascend]);

  for (const entry of myMap.entries()) {
    if (vals.current_tab !== entry[0]) continue;
    Object.values(entry[1][1]).forEach((element, idx) => {
      let btnId = idx;
      if (idx >= 10) {
        btnId = String.fromCharCode(97 + (idx - 10));
      }
      let canBuy = vals.energy >= element.cost ? false : true;
      $('#' + entry[1][0] + '_btn_' + btnId).prop('disabled', canBuy);
      let canSell = element.amount > 0 ? false : true;
      $('#' + entry[1][0] + '_sell_btn_' + btnId).prop('disabled', canSell);    
    });
  }
}

function fix_tab_buttons(vals) {
  let unlock_conv = 0, unlock_ascend = 0, unlock_aug = 0;
  let total_conv = 0, total_ascend = 0, total_aug = 0;
    for (let k in vals.upgrades) {
      for (let i in vals.upgrades[k]) {

        if (i === "type") continue;
        try {
          if (vals.upgrades[k][i].unlocked === true) unlock_aug++;
        } catch (NoSuchUpgradeException) {
          console.log("Could not find upgrade for " + vals.upgrades[k] + " \n" + NoSuchUpgradeException);
        }
      }
    }
    for (let k in vals.miracle) {                                                                                
      if (vals.miracle[k].unlocked === true) unlock_conv++;
      total_conv++;
    }
    for (let k in vals.ascend) {
      if (vals.ascend[k].unlocked === true) unlock_ascend++;
      total_ascend ++;
    }
  $('#challenges-tab-text').text("Challenges " + Math.floor((vals.achievement_multiplier - 1) * 50) + "/26");
  $('#convert-tab-text').text("Create " + unlock_conv + "/" + total_conv);
  $('#ascend-tab-text').text("Convert " + unlock_ascend + "/" + total_ascend);
  if (!vals.leap.unlocked) $('#leap-tab-btn').css('display', 'none');
  else $('#leap-tab-btn').css('display', 'inline-block');
  let hiddenTabs = ["pantheon", "perk", "runner", "sacrifice"];
  hiddenTabs.forEach((element) => {
    let display = determineTabAvailability(element) === true ? 'inline-block' : 'none';
    $('#' + element + '-tab-btn').css('display', display);
  });
}

function determineTabAvailability(tab) {
  let level = vals.god_status.current;
  if (tab === "pantheon" && level >= 2) return true;
  else if (tab === "runner" && level >= 2) return true;
  else if (tab === "perk" && level >= 3) return true
  else if (tab === "sacrifice" && level >= 5) return true;
  else return false;
}

function fix_stats(vals) {
  let mul = vals.god_status[vals.god_status.current].mul;
  let corrected_prod = (vals.achievement_multiplier * vals.prod) / (1 + (vals.corruption / 100));
  let corrected_loss = (1 + (vals.corruption / 100)) * vals.loss;
  corrected_prod *= (0.8 * mul);
  corrected_loss *= (0.8 * mul);
  if (corrected_prod > vals.stats.max_prod) vals.stats.max_prod = corrected_prod;
  if (corrected_loss > vals.stats.max_loss) vals.stats.max_loss = corrected_loss;
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

  let cent = vals.stats.total_energy / vals.upgrades["3"]["upgrade1"].cost * 100;
  let percentage = cent > 100 ? 100 : cent;
  if (percentage === 100 && vals.leap.unlocked !== true) {
    vals.upgrades["3"]["upgrade1"].unlocked = true;
    vals.leap.unlocked = true;
  }
  percentage = percentage < 1 ? 0 : percentage;
  let diff = vals.upgrades["3"]["upgrade1"].cost - vals.stats.total_energy;
  diff = diff < 0 ? 0 : diff;

  $('#energy_to_next').text(truncate_bigint(Math.floor(diff)));
  $('.pro-bar').css('width', percentage + '%');
}

//TODO - remove this method and call each method individually when required
function fix_names (vals) {
  fix_conv_asc(vals);
  $('#god_status').text(vals.god_status[vals.god_status.current].label);
  fix_upgrades(vals);
  fix_sacrifice(vals);
  fix_challenges(vals);
  fix_pantheon(vals);
  fix_leap(vals);
}

function fix_sacrifice(vals) {
  if (vals.sacrifice.unlocked && vals.current_tab === 'Sacrifice') {
    let tooltip = $(window).width() > 750 ? "\u2191 Energy prod, \u2193 Follower prod" : "\u2191 En. prod, \u2193 Fol. prod";
    $(".dotted").attr('data-balloon', tooltip);
    $('#sacrifice_locked').css('display', 'none');
    $('.sacrifice_unlocked').css('display', 'block');
      
    for (let k in vals.sacrifice) {
      const sacrifice_num = k.substr(k.length-1); 
      $('#sacrifice_desc_'+ sacrifice_num).text(vals.sacrifice[k].description);
      $('#sacrifice_cost_'+ sacrifice_num).text(truncate_bigint(vals.sacrifice[k].cost));
      if (k ==='sacrifice2') {
        $('#sacrifice_cost_2_2').text(truncate_bigint(vals.sacrifice[k].cost));
      }
    }
  }  
}

function fix_leap(vals) {
  if (vals.current_tab === 'Leap' && vals.leap.unlocked) {
    var id = $('.wrap-nav').attr('id');
    var tier = id.substr(id.length-1);
    $('#flame').text(vals.flame);
    for (let k in vals.leap[tier]) {
      $('#' + k + '_lbl_' + tier).text(vals.leap[tier][k].label);
      $('#' + k + '_desc_' + tier).text(vals.leap[tier][k].description);
      if (k === 'tier') $('#' + k+ '_cost_' + tier).html('Costs ' + vals.leap[tier][k].cost + '<span class="glyphicon glyphicon-fire"></span>');

      if (vals.leap.selected !== 0) {
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

function fix_pantheon(vals) {
  let mul = vals.god_status[vals.god_status.current].mul;
  if( vals.pantheon.unlocked && vals.current_tab === 'Pantheon') {
    $('#pantheon_div_1').css('display', 'none');
    $('#pantheon_unlocked').css('display','block');
    $('#essence_amount').text(Math.round(vals.flame * 10)/10);
    for (let k in vals.pantheon.bosses) {
      let id = k.substr(k.length-1);
      if (vals.pantheon.bosses[k].current) {
        if( $('#boss_num').text() != ': Upgrades') {
          $('#boss_num').text(': ' + vals.god_status[vals.god_status.current].boss_label + ' Boss ' + id);
        }
        $('#battle_1').attr('src', 'data/battle_' + id + '.png');
        $('#battle_1_hp').text(truncate_bigint(vals.pantheon.bosses[k].current_hp));
        $('#max_hp').text(truncate_bigint(vals.pantheon.bosses[k].max_hp));
        $('#boss_hp_bar').css('width', 100 * ((vals.pantheon.bosses[k].current_hp)/(vals.pantheon.bosses[k].max_hp)) + '%');
        $('#regen').text(truncate_bigint(vals.pantheon.bosses[k].regen));
        $('#boss_name').text(vals.god_status[vals.god_status.current].boss_label + " " + vals.pantheon.bosses[k].name);
        break;
      }
    }
    if ($('#boss_num').text() != ': Upgrades') {
      for (let k in vals.pantheon.upgrades) {
        for (let i in vals.pantheon.upgrades[k]) {
          let item = vals.pantheon.upgrades[k][i];
          if(!i.includes('hp') && !i.includes('regen')) {
            if($('#shop_' + i.substr(0, i.length-1) + '_' + i.substr(i.length-1)).text() === '')
              $('#shop_' + i.substr(0, i.length-1) + '_' + i.substr(i.length-1)).text(item.label);
          } else {
            if ($('#shop_' + i).html() === '') {
              $('#shop_' + i).html(item.label);
            }
          }
        }
      }
    }
  }
}

//TODO - update these to fit more with colour scheme.
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
    if (corruption - 0.01 > 98) corruption = 100;
  } else if (corruption > 0) {
    alignment = " Evil";
  }

  $('#corruption_amount').text(corruption + '%' + alignment);
}

//generalised function that handles both asc and conv tabs.
function fix_conv_asc(vals) {
  const currentTab = vals.current_tab;
  if (currentTab != 'Conversion' && currentTab != 'Ascension') return;
  let keyWord, title;
  if (currentTab === 'Ascension') { 
    keyWord = 'ascend'; 
    title = 'ascend'; 
  } else { 
    keyWord = 'miracle'; 
    title = 'purchase'; 
  }

  for (let k in vals[keyWord]) {
      var purchase_num = k.substr(k.length-1);
      if (purchase_num > vals.god_status[vals.god_status.current].max_tier || vals[keyWord][k].cost >= (vals.upgrades["3"]["upgrade1"].cost/3)) break;
      if ((currentTab === 'Ascension' && vals.loss >= vals[keyWord][k].unlock_rps) || (currentTab === 'Conversion' && (vals.prod >= vals[keyWord][k].unlock_rps))) {
        vals[keyWord][k].unlocked = true;
        //dynamically create divs as needed, saves creating all in the html file.
         if (!document.getElementById( title + '_' + purchase_num) && !document.getElementById('new_' + title) && k != (title + "1")) {
              var clonedDiv_id = $('#' + title+ '_' + purchase_num + '_' + purchase_num);
              
              var html_to_append = '<div id="new_purchase" class="tab_div"> ' +
                '<h3 id="purchase_head_temp" class="header_1">This is the field for upgrade for option one.' +
                '<label id=purchase_lbl_ class="align_right">0</label></h3><p>' +
                '<em id="purchase_text_"> Text placeholder</em></p>' +
                '<p class = "align_right">Creates <b><span id="purchase_out_">0.1</span></b> per tick';

                if( currentTab != 'Conversion' ) html_to_append += '<br>Costs <b><span id="ascend_out__2">0.1</span></b>per tick';

                html_to_append += ' </p><button id="purchase_btn_" class="purchase" disabled="disabled">Buy <b><span id="purchase_cost_">10</span>' +
                "<span class='glyphicon glyphicon-flash' style='color: #880E4F'></span></b></button> " +
                '<button id="purchase_sell_btn_" class="sell" data-balloon="Sells for 50% original value." data-balloon-pos="right"' +
                'disabled="disabled" >Sell <b><span id="purchase_sell_">10</span>' +
                "<span class='glyphicon glyphicon-flash' style='color: #880E4F'></span></b></button></b></button></div>";
                $(html_to_append).prependTo('#' + keyWord);
              //now fix the fields
              $("#new_purchase").find('#purchase_lbl_').attr('id', title + "_lbl_" + purchase_num);
              $("#new_purchase").find('#purchase_text_').attr('id', title + "_text_" + purchase_num);
              $("#new_purchase").find('#purchase_btn_').attr('id', title + "_btn_" + purchase_num);
              $("#new_purchase").find('#purchase_sell_btn_').attr('id',title + "_sell_btn_" + purchase_num);
              $("#new_purchase").find('#purchase_out_').attr('id', title + "_out_" + purchase_num);
              $("#new_purchase").find('#purchase_cost_').attr('id', title + "_cost_" + purchase_num);
              $("#new_purchase").find('#purchase_sell_').attr('id', title + "_sell_" + purchase_num);
              $("#new_purchase").find('#purchase_head_temp').attr('id',title + "_header_" + purchase_num);
              if (currentTab != 'Conversion') $("#new_purchase").find('#ascend_out__2').attr('id', "ascend_out_" + purchase_num + '_' + purchase_num);
              $('#new_purchase').attr('id', title + '_' + purchase_num);
           }

        $('#' + title + '_' + purchase_num).css("display", "block");
        $('#' + title + "_header_" + purchase_num).contents().filter(function() { return this.nodeType == 3; }).first().replaceWith(vals[keyWord][k].label);
        $('#' + title + '_lbl_' + purchase_num).text(vals[keyWord][k].amount);
        $('#' + title + '_cost_' + purchase_num).text(truncate_bigint(Math.round(vals[keyWord][k].cost)));
        $('#' + title + '_sell_' + purchase_num).text(truncate_bigint(Math.round(vals[keyWord][k].sell_cost)));
        $('#' + title + '_text_' + purchase_num).text(vals[keyWord][k].description);
        $('#' + title + '_out_' + purchase_num).text(truncate_bigint(Math.round(vals[keyWord][k].output * 10) / 10) + " followers ");
        if (currentTab != 'Conversion') {
          $('#'+ title + '_out_' + purchase_num).text(truncate_bigint(Math.round(vals[keyWord][k].output*10)/10) + " energy ");
          $('#ascend_out_' + purchase_num + '_' + purchase_num).text(truncate_bigint(Math.round(vals.ascend[k].output*10) / 10) + " followers ");
        }
    } else {
      $('#'+ title + '_' + purchase_num).css("display", "none");
    }
  }
}

$(document).on("click", ".trigger", () => {
  var modal = document.querySelector(".modal");
  modal.classList.toggle("show-modal");
});

$(document).on("click", ".close-button", () => {
  var modal = document.querySelector(".modal");
  modal.classList.toggle("show-modal");
  $('#instructions_1').slideToggle();
  $('.next-button').toggle();
});

$(document).on("click", ".next-button", () => {
  $('#instructions_1').animate({width: 'toggle'});
  $('.next-button').toggle();
});

$(document).on("click", ".amount", function() {
  const tab = vals.current_tab;
  const numberToPurchase = parseInt(this.id);
  let keyWord, title;
  if (tab === 'Ascension') { 
    keyWord = 'ascend'; 
    title = 'ascend'; 
  } else { 
    keyWord = 'miracle'; 
    title = 'purchase'; 
  }

  vals[keyWord].numSelected = numberToPurchase;
  for (let k in vals[keyWord]) {
    if (vals[keyWord][k].unlocked === true) {
        assignValues([keyWord, k], [numberToPurchase, "buy"]).then(result => { vals[keyWord][k].cost = result; });
        determineSellPrice(keyWord, k);
    }
  }
  let thisDiv = $("#" + tab).children().first().children().first().children().last();
  $(thisDiv).children().first().children().each((value, element) => {
   let thisElement = $(element).children().first();
    $(thisElement).children().each((val, elem) => {
     if (parseInt(thisElement.attr('id')) === numberToPurchase) {
        $(elem).first().css('color', '#67c5ff');
      } else {
        $(elem).first().css('color', '#fff');
      }
    });
  });
});

async function assignValues(keywords, choice) {
    let key = keywords[0];
    let index = keywords[1];
    let purchase_num = index.substr(index.length-1);
    return await determineValueOfNext(choice, vals[key][index])
}

function determineValueOfNext(loopValues, valsType) {
  const toBuy = loopValues[1] === "buy";
  let numberToCalculate = loopValues[0] + 1;
  let startingValue = 1;
  let increment = 1;
  if (toBuy !== true) {
    increment = -1;
    startingValue--;
    numberToCalculate--;
  }

  let totalValue = 0.0;
  for (let i = startingValue; i < numberToCalculate; i++) {
    const itemCost = resolveItemCost((valsType.amount-1) + (i * increment), valsType.base_cost)[0];
    totalValue += (toBuy === true) ? itemCost : itemCost / 2;
  }

  return totalValue;
}

function determineSellPrice(key, index) {
  let values = [1, 5, 10, 25, 50, 100];
  if (vals[key].numSelected === 1 || (vals[key][index].amount < 5 && vals[key].numSelected > 1)) {
    vals[key][index].sell_cost = resolveItemCost(vals[key][index].amount-1, vals[key][index].base_cost)[0]/2;
  } else {
    let trueValue = vals[key].numSelected;
    let numberSelected = values.filter((value) => {
      if (value <= vals[key][index].amount && value <= vals[key].numSelected) {
        return value;
      } 
    });
    assignValues([key, index], [numberSelected[numberSelected.length-1], "sell"]).then(result => { vals[key][index].sell_cost = result; });
  }
}

const itemBarClick = $(() => {
    var buttonWrapper = $(".share-button"),
        button = $(".share-button > a"),
        icons = $(".share-button > .icon-wrapper"),
        close = $(".close-social-icons");
    
    let init = () => {
        button.on("click", toggle);
        close.on("click", closeIcons);
    }
    
    let toggle = e => {
        if (buttonWrapper.hasClass("active")) {
            closeIcons();
        } else{
            openIcons();
        }

        e.preventDefault();
    }
    
    let openIcons = () => {
        buttonWrapper.addClass("active");
        button.addClass("hidden");
        buttonWrapper.animate({width: ((buttonWrapper.width()/$(".slider-wrapper").width()) * 100) + "%"}, 500);
        icons.animate({left: "0"}, 500);
    }
    
    let closeIcons = () => {
        buttonWrapper.removeClass("active");
        button.removeClass("hidden");
        icons.animate({left: "-127.5%"}, 0);
        buttonWrapper.animate({width: ((buttonWrapper.width()/$(".slider-wrapper").width()) * 100) + "%"}, 400);
    }
    init();
});

//TODO - determine why this function causes UI flickering..

//fix all the upgrades
function fix_upgrades(vals) {
  if (vals.current_tab === 'Upgrades') {
   for (let k in vals.upgrades) {
      var purchase_num = k.substr(k.length-1);
      let hasDisplayed = false;
      for (let i in vals.upgrades[k]) {
        if (vals.upgrades[k][i].cost >= vals.upgrades["3"]["upgrade1"].cost/3) {
            $("#upg_text_" + purchase_num).text("Cannot Purchase");
            $('#upgrade_cost_' + purchase_num + '_1').text('[ NaN ');
            $('#upgrade_text_' + purchase_num + '_1').text("You cannot yet handle this immense power.");
            $('#upgrade_lbl_' + purchase_num + '_1').text("Unavailable");
            hasDisplayed = true;
          break;
        } else if (i != "type") {
          //set up new div for same challenge unlock
          if (vals.upgrades[k][i].unlocked != true) {
            let cost = 1;
            let percentage = vals.upgrades[k][i].mul * 100;
            let usedValue = percentage - 100;
            if (purchase_num === '2') {
              usedValue = (100 - percentage) * -1;
            }
            let nextUpgrade = i;
            $("#upgrade_mul_" + purchase_num + "_1").text(Math.floor(usedValue) + '%');
            $('#upgrade_cost_' + purchase_num + '_1').text('[ ' + truncate_bigint(cost * vals.upgrades[k][nextUpgrade].cost) + ' ');
            $('#upgrade_text_' + purchase_num + '_1').text(vals.upgrades[k][nextUpgrade].description);
            $('#upgrade_lbl_' + purchase_num + '_1').text(vals.upgrades[k][nextUpgrade].label);
            hasDisplayed = true;
            break;
          }
        }
      }
      if (hasDisplayed !== true) {
        $("#upgrade_mul_" + purchase_num + "_1").text('1337%');
        $('#upgrade_cost_' + purchase_num + '_1').text('[ NaN');
        $('#upgrade_text_' + purchase_num + '_1').text('You cannot progress this any further.');
        $('#upgrade_lbl_' + purchase_num + '_1').text('Power maxed.');  
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
          switch (vals.challenges[k].required_type) {
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
          if (can_clone) {
              var clonedDiv_id = $('#challenges_' + challenge_num + '_' + i);
              $('<div id="new_challenge" class="tab_div"> ' +
                '<h3 id="challenge_head_temp" class="header_1">This is the field for upgrade for option one.' +
                '<label id=challenges_lbl_ class="glyphicon glyphicon-remove align_right"></label></h3><p>' +
                '<em id="challenges_text">Text placeholder</em> </p></div>').prependTo($('#challenge' + challenge_num));
              $("#new_challenge").find('#challenges_lbl_').attr('id', "challenges_lbl_" + challenge_num + '_' + i);
              $("#new_challenge").find('#challenges_text').attr('id', "challenges_text_" + challenge_num + '_' + i);
              $('#new_challenge').children().each(cloneChallenge(this.id, challenge_num, i));
              $('#new_challenge').attr('id', 'challenges_' + challenge_num + '_' + i);
              vals.challenges[k][i].visible = true;
          }
        }
      }
        if (vals.challenges[k][i].visible) {
          $('#challenges_header_'+ challenge_num + '_' + i).css('padding-left', '2.5%');
          $('#challenges_header_' + challenge_num + '_' + i).contents().filter(function(){ return this.nodeType == 3; }).first().replaceWith(vals.challenges[k][i].label);
          $('#challenges_text_' + challenge_num + '_' + i).css('padding-left', '1%');
          $('#challenges_text_' + challenge_num + '_' + i).text(vals.challenges[k][i].description);
          $('#challenges_' + challenge_num + '_' + i).css('color', '#fff');
          $('#challenges_' + challenge_num + '_' + i).css('display', 'inline-block');
          if (challenge_num < 3 || vals.challenges[k][i].unlocked) {
            $('#challenges_' + challenge_num + '_' + i).css('width', '90%');
          } else if (vals.challenges[k][i].unlocked !== true) {
            $('#challenges_' + challenge_num + '_' + i).css('width', '100%');
          }
          $('#challenges_' + challenge_num + '_' + i).css('border', '2px solid #fff');
        if (vals.challenges[k][i].unlocked) {
          $('#challenges_lbl_' + challenge_num + '_' + i).attr('class','glyphicon glyphicon-ok align_right');
          $('#challenges_' + challenge_num + "_" + i).detach().appendTo('#completed_challenges');
         } else {
          $('#challenges_lbl_' + challenge_num + '_' + i).attr('class','glyphicon glyphicon-remove align_right');
          $('#challenges_' + challenge_num + '_' + i).css('color', '#fff');
          $('#challenges_' + challenge_num + '_' + i).css('border', '2px solid #fff');
         }
        }
        }
       }
    }
}

function cloneChallenge(id, challenge_num, i) {
  if (id === 'challenge_head_temp')
  id = "challenges_header_" + challenge_num + '_' + i;
};

  /**
   * (more) bad code ends.
   */

function doLeap(vals) {
  const upgradeSelected = vals.leap.selected.substr(0, vals.leap.selected.indexOf('_'));
  const upgradeTier = $('.wrap-nav').attr('id').substr($('.wrap-nav').attr('id').length -1);
  
  let chosen = vals.leap[upgradeTier][upgradeSelected];
  if (upgradeSelected === 'tier') {
    vals.god_status.current++;
    if (vals.god_status.current >= 3) {
      vals.perks.currency.amount += Math.floor(vals.god_status.current/2);
    }
  } else {
    chosen.amount++;
  } 

  const save = saveForLeap();
  localStorage.sv1 = btoa(JSON.stringify(save));
}

function saveForLeap() {
	let save = staticLeapValuesToJson();

	save['s'] = leapStatsToJson();
  save['pantheon'] = adjustedBossToJson();
	leapToJson(save);
  adjustedPurchasesToJson(save);
  upgradesAndChallengesForLeap(save);
  savePerks(save);

	return save;
}

function staticLeapValuesToJson() {
    const tierMul = generateLeapOffset(vals.god_status.current);
    const totalClickMul = generateTotalValueFor('click', 1) * tierMul;
    const totalDamageMul = generateTotalValueFor('boss', 1) * tierMul * totalClickMul;
    const newLeapUpgradeCost = vals.upgrades["3"]["upgrade1"].cost * (vals.god_status[vals.god_status.current].mul * 1.1 * 15);
    const nextLeapCost = vals.god_status.current > 2 ? (vals.god_status[vals.god_status.current].mul * vals.god_status.current) : 1;

    let save = {
        'e':0,
        'p':0,
        'cl':totalClickMul,
        'f':0,
        'l':0,
        'c':0,
        'ac':1,
        't':(500).toString(16),
        'fl':0,
        'dam':totalDamageMul.toString(16),
        "dps":0,
        "tier":vals.god_status.current.toString(16),
        "stage":0,
        "sc":2,
        "sm":100,
        'lc':newLeapUpgradeCost.toString(16),
        "cst":nextLeapCost.toString(16),
        "stc":totalClickMul
    };  

    return save;  
}

function leapStatsToJson() {
  const temp_s = {
    't':vals.stats.time_played.toString(16),
    't_e':0,
    't_f':0,
    'm_p':vals.stats.max_prod,
    'm_l':vals.stats.max_loss,
    'm_c':vals.stats.miracle_clicks.toString(16),
    'a_c':vals.stats.ascension_clicks.toString(16),
    'mc_e':Math.round(vals.stats.miracle_click_energy).toString(16),
    'ac_e':Math.round(vals.stats.ascension_click_energy).toString(16)
  };

  return temp_s;
}

function adjustedBossToJson() {
  let pantheon = [];
  let index = 0;
  for (let k in vals.pantheon.bosses) { 
    if (++index < vals.god_status[vals.god_status.current] - 4) break;
    const items = vals.pantheon.bosses[k];
    let temp_a = [];
    let mul = vals.god_status.current <= 2 ? 1 : 1 + adjustForGodStatus(vals.god_status[vals.god_status.current].mul, 0.3);
    let reward = generateRewardFor(items, index);
    temp_a.push('max_hp' + ":" + (mul * items.base_hp).toString(16));
    temp_a.push('current_hp' + ":" + (mul * items.base_hp).toString(16));
    temp_a.push('base_hp' + ":" + (mul * items.base_hp).toString(16));
    temp_a.push('regen' + ":" + (mul * (items.base_hp / 2500)).toString(16));
    temp_a.push('defeated' + ":" + (false).toString().toLowerCase());
    temp_a.push('reward' + ":" + Math.ceil(mul * 0.67 * reward).toString(16));    
    pantheon.push(temp_a);
  }

  for (let i in vals.pantheon.upgrades) {
    if (i != vals.god_status.current) continue;
    const items = vals.pantheon.upgrades[i];
    let temp_b = [];
    for (let j in items) {
      let amt = 0;
      temp_b.push(j + ":" + amt.toString(16));
    }
    pantheon.push(temp_b);
  }

  return pantheon; 
}

function generateRewardFor(item, index) {
  let reward = 0;
  
  if (item.reward <= 0.5) {
    reward += index;
  } else {
    reward += item.reward;
  }

  return reward;
}

function generateLeapOffset(tier) {
  let totalMultiplier = 1;
  for (let i = parseInt(tier); i > 1; i--) {
    totalMultiplier *= vals.god_status[i.toString()].mul * 0.85;
  }

  return totalMultiplier;
}

function generateTotalValueFor(type, startValue) {
    let totalValue = startValue;

    for (let k in vals.leap) {
        if (k != 'unlocked' && k != 'selected') {
          totalValue = Math.pow(vals.leap[k][type].mul, vals.leap[k][type].amount);
        }
    }

	return totalValue;
}

function adjustedPurchasesToJson(save) {
  let mul = adjustForGodStatus(vals.god_status.current, 0.55);  
  const unlocks = {
    "miracle":"cl",
    "ascend":"asc"
  };
  for (let k in unlocks) { 
    const items = vals[k];
    const temp_a = [];
    for (let i in items) { 
      if (i === 'numSelected') continue;
      temp_a.push([i] + ":" + 0); 
      temp_a.push([i] + ":" + false);        
      temp_a.push([i] + ":" + (mul * items[i].base_cost).toString(16));
      temp_a.push([i] + ":" + mul * 1.2 * items[i].base_output);
    }
    save[k] = temp_a.join('|');
  }
}

function upgradesAndChallengesForLeap(save) {
  let tiered = {
    "upgrades":"up",
    "challenges":"ch"
  }
  let mul = adjustForGodStatus(vals.god_status[vals.god_status.current].mul, 0.6);
  for (let k in tiered) { 
    var items_generic = vals[k];
    var temp_t = [];
    for (let i in items_generic) {
      for (let j in items_generic[i]) {
        if (k === "achievements" && items_generic[i][j].unlocked) temp_t.push(items_generic[i][j].label);
        else if (k === 'upgrades' && j !== 'type') {
          temp_t.push(i + ':' + j + ":" + mul * items_generic[i][j].cost);
          temp_t.push(i + ':' + j + ":" + determineMultiplier(items_generic[i].type) * items_generic[i][j].mul);          
        }
      }
    }
    save[k] = temp_t.join('|');
  }   
}

function determineMultiplier(type) {
  if (type === "Tick speed") {
    return 0.98;
  } else {
    return 1.02;
  }
}

$(document).on("click", ".reset", function() {
  saveSound.play();
  if (confirm("Are you sure you want to Quantum leap?")) {
    doLeap(vals);
    location.reload();
  }
});

$(document).on("click", ".purchase", function() {
  var btn = $(this).attr('id');
  if (btn === "start_runner_btn") return;
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
  if (toPlay == true) {
    if(id.includes('save')) {
      saveSound.play();
    } else {
      purchaseSound.play();
    }
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

function deleteSave() {
  localStorage.removeItem("sv1");
  location.reload();
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
    this.purchaseNum = id;
    this.id = generateUseableId(id) === 'purchase' ? 'miracle' : 'ascend';
    this.object = generateUseableId(id) === 'purchase' ? vals.miracle[id] : vals.ascend[id];
  }

  action() {
    if (vals.energy >= this.object.cost) {
      vals.energy -= this.object.cost;
      for (let i = 0; i < vals[this.id].numSelected; i++) {
          this.object.amount++;
          this.handleProduction();
          this.object.cost = set_item_cost(this.object);
        }
      determineSellPrice(this.id, this.purchaseNum);
      assignValues([this.id, this.purchaseNum], [vals[this.id].numSelected, "buy"]).then(result => { vals[this.id][this.purchaseNum].cost = result; });
    }
  }

  handleProduction() {
    if(this.id === 'miracle') {
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
    if (purchaseType === "Click amount") return new ClickUpgrade(btn, purchase);
    else if (purchaseType === "Tick speed") return new TickUpgrade(btn, purchase);
    else if (purchaseType === "superclick_mul" || purchaseType === "superclick_length") return new SuperclickUpgrade(btn, purchase);
    else return new LeapUpgrade(btn, purchase);
  }
}

class Upgrade {

  constructor(id, purchaseType) {
    let btn = this.determineCurrentUpgrade(id, purchaseType);
    this.upgrade = vals.upgrades[purchaseType[0]][btn];
  }

  action() {
    vals.energy -= this.upgrade.cost;
    this.upgrade.unlocked = true;
  }

  canUpgrade() {
    return vals.energy >= this.upgrade.cost;
  }

  determineCurrentUpgrade(id, purchaseType) {
     let upgradeNum = id.substr(-1);
     let upgrade = 'upgrade';
     for (let i = parseInt(upgradeNum); i < 13; i++) {
       if (vals.upgrades[String(purchaseType[0])][upgrade + String(i)].unlocked !== true) {
        upgrade += i;
        break;
       } 
     }
     return upgrade;
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
    $.toaster({message:"Don't go quietly into the good night.", title:"Quantum leap unlocked"})
  }
}

class SuperclickUpgrade extends Upgrade {
  
  constructor(id, purchaseType) {
    super(id, purchaseType);
    this.type = purchaseType;
  }

  action() {
    super.action();
    if (this.type.startsWith('4')) {
      vals.events.superclick.mul *= this.upgrade.mul;
    } else {
      vals.events.superclick.max_clicks *= this.upgrade.mul;
    }
  }
}

class Sacrificer extends Action {

	constructor(id) {
		super(id);
		this.sacrifice = this.generateSacrificeOfType(id);
	}

	action() {
		const corruptionOffset = this.sacrifice.offset;
		if (this.sacrifice.canSacrifice(corruptionOffset)) {
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
    fix_corruption_bar(vals.corruption);
    fix_corruption_text(vals.corruption);
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
      fix_corruption_bar(vals.corruption);
      fix_corruption_text(vals.corruption);
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
        vals.corruption += 15;
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
    if (this.canSacrifice(this.offset)) {
	      vals.energy -= vals.sacrifice['sacrifice3'].cost;
        vals.corruption -= vals.corruption === -95 ? 4.99 : 5;
        generateToastMessage("Your sanctity increased.","Sacrifice");
        super.action();
    } else {
      handleCorruptionMessage();
    }
  }

  canSacrifice(corruptionOffset) {
    return vals.corruption >= corruptionOffset;
  }

	handleCorruptionMessage() {
		generateToastMessage("Your sanctity is maxed.","Sacrifice rejected");
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
  let purchaseType = generateUseableId(id) === 'purchase' ? 'miracle' : 'ascend';
  for (let i = 0; i < vals[purchaseType].numSelected; i++) {
    if(canSell(valsType) === true) {
      sell(id);  
      fix_tab_buttons(vals);
      fix_names(vals);
    }
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
  let purchaseType = generateUseableId(id) === 'purchase' ? 'miracle' : 'ascend';
  purchaseSound.play();
  valsType.amount--;
  let valueReturn = valsType.base_cost;
  vals.energy += valsType.sell_cost;

  if (valsType.amount < 1) valsType.output = valsType.base_output;
  else {
    let nextItem = resolveItemCost((valsType.amount), valsType.base_cost);
    valueReturn = nextItem[0];
    valsType.output = valsType.base_output * nextItem[1];
  }
  if (id.includes('purchase')) {
    vals.prod -= valsType.output;
  } else {
    vals.prod += valsType.output;
    vals.loss -= valsType.output;
  }
  determineSellPrice(purchaseType, id);
  assignValues([purchaseType, id], [vals[purchaseType].numSelected, "buy"]).then(result => { vals[purchaseType][id].cost = result; });
}

$(document).on("click", '#tab_btns .button', function(event) {
  if (toPlay == true) playAudio(tabSound);
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
  if (vals.pantheon.stage > 0) {
    vals.pantheon.bosses['boss' + vals.pantheon.stage].current = true;
    vals.pantheon.bosses['boss' + String(parseInt(vals.pantheon.stage) +1)].current = false;
    vals.pantheon.stage--;
  }
});

$(document).on("click", "#next_boss", function(event) {
  if (toPlay == true) tabSound.play();
  if (vals.pantheon.stage <= 4) {
    vals.pantheon.stage++;
    vals.pantheon.bosses['boss' + vals.pantheon.stage].current = false;
    vals.pantheon.bosses['boss' + String(parseInt(vals.pantheon.stage) +1)].current = true;
  }
});

$(document).on("click", "#boss_upgrades", function(event) {
  if(isTab('Pantheon')) {
    if (toPlay == true) tabSound.play();
    fixBossUpgrades();
    toggleElements(["#pantheon_unlocked .overlay", ".boss_img", ".traverse_bosses"]);
    toggleUi('#' + $(this).attr('id'), ['Upgrade menu', 'Boss fight']);
    $('#boss_num').toggleText(': Boss ' + String(parseInt(vals.pantheon.stage) + 1 ), ": Upgrades");
  }
});

$(document).on("click", "#upgrades_shown", function(event) {
  if(isTab("Upgrades")) {
    if (toPlay == true) tabSound.play();
    toggleElements(["#bought_upgrades", "#uncompleted"]);
    toggleUi('#' + $(this).attr('id'), ['See Purchased', 'See Available']);
  }
});

$(document).on("click", "#achievements_shown", function(event) {
  if(isTab('Challenges')) {
    if (toPlay == true) tabSound.play();
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
  if (toPlay == true) tabSound.play();
  var id = $(this).attr('id');
  processBossUpgrade(id);
  fixBossUpgrades();
});


function fixBossUpgrades() {
  let upg = vals.pantheon.upgrades[vals.god_status.current];
  const buttons = ["click_1", "prod_1", "click_2", "prod_2", "max_hp", "regen"];
  for (let i = 0; i < buttons.length; i++) {
    let id = buttons[i];
    if (i > 3) {
      choice = id;
      $('#' + id + '_1').html('Purchase ' + upg[choice].cost + '<span class="glyphicon glyphicon-fire"></span>');
    } else {
      choice = id.substr(0, id.search(/\d/) -1) + id.substr(id.search(/\d/));
      $('#' + id).html('Purchase ' + upg[choice].cost + '<span class="glyphicon glyphicon-fire"></span>');
    }
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

var timeoutId;

$(document).on('mousedown touchstart', ".miracle", function(event) {
  setTimeout(autoClick(this), 0);
}).on("mouseup mouseleave touchend touchcancel", ".miracle", function(event) {
  clearTimeout(timeoutId);  
});

function autoClick(miracle) {
  timeoutId = setTimeout(() => {
    $(miracle).click()
    autoClick(miracle);
  }, 250);
}

$(document).on("click", '.miracle', function(event) { 
  var used_id = $(this).attr('id').substr($(this).attr('id').indexOf('_') + 1);
  try {
    handleMiracleClick(used_id, event);
  } catch(cannotClickException) {
    console.log(cannotClickException);
    handleError();
  }
});

function handleMiracleClick(used_id, event) {
  var miracle = used_id === 'button';
  var click = resolveClick(miracle, event);
  if (click.canClick()) {
    //todo - extract this object creation to global, or cache
    if (toPlay == true) new Audio('data/clicksound.mp3').play();
    var divToAppend = resolveDivFor(miracle); 
    processSuperClick();
    click.setTargetColor(resolveColor(["#FFC400",'#1E90FF']));
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

generateOffset(id) {
    let yOffset = this.resolveVerticalOffset();
    let xOffset = $(id).offset().right;
    if (id === '#miracle2_div') {
      yOffset *= 0.75;
      xOffset *= 0.8;
    }
    xOffset += generateRandomOffset();
    this.target.offset({left: xOffset, top: yOffset});
  }

  resolveVerticalOffset() {
    var width = $(window).width();

    if (width > 1300)  {
        return this.event.pageY + 40;
    } else if (width <= 700) {
        return this.event.pageY * 1.1;
    } else if (width <= 1100) {
        return this.event.pageY + 25;
    } else if (width <= 1300) {
        return this.event.pageY + 25;
    }
  }  
}

function generateRandomOffset() {
    const randomNumber = Math.random();
    let direction = randomNumber > 0.5 ? 1 : -1;
    return direction * (randomNumber * 12.5);
}

$(document).on('contextmenu', '.battle', function(event) {
  event.preventDefault();
  $(this).click();
});

$(document).on("click", ".battle", function() {
  if (toPlay == true) new Audio('data/clicksound.mp3').play();
  const hit = 'battle_' + (vals.pantheon.stage+1) + '_hit';
  const id = $(this).attr('id');

  if ((vals.pantheon.stage+1) > 1 && (vals.pantheon.stage+1) < 6) $(this).attr('src', 'data/' + hit + ".png");
  processSuperClick();
  attack(id, vals.pantheon.damage);
});

function attack(id, dam) {  
  const divToAppend = '.boss_img';
  const damage = generateDamage(dam);
  let bossClick = new BossClick({}, setAttackTarget(damage));

  bossClick.revealTarget(divToAppend);
  bossClick.setTargetColor(resolveColor(["#FFC400",'#1E90FF']));
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
  target.html('-' + truncate_bigint(damage));

  return target;
}

function handleBossLogic(damage) {
    for(const k in vals.pantheon.bosses) {
      if(vals.pantheon.bosses[k].current) {
        let currentBoss = vals.pantheon.bosses[k];
        currentBoss.current_hp -= damage;

        if (bossIsDefeated(currentBoss)) {
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
   vals.flame += generateRewardFor(boss, 1);
}

function updateBossStats(boss) {
  const firstVictory = boss.defeated != true;
  boss.defeated = true;
  let generalMultiplier = handleBossMultiplier(firstVictory);

  boss.max_hp *= generalMultiplier;
  boss.current_hp = boss.max_hp;
  boss.regen *= (generalMultiplier + 0.2);
}

function handleBossMultiplier(firstVictory) {
  let generalMultiplier = firstVictory === true ? 2.5 : 1.5;
  generalMultiplier += 0.4 + vals.god_status.current/10.0;

  return generalMultiplier;
}

class MiracleClick extends Click {

  canClick() {
    return true;
  }

  //extract all this setup to some global holder, to prevent calculations on each click
  animate() {
    clickAnimation("#miracle_div", this.target);
  }
}

class TranscendClick extends Click {

  canClick() {
    return can_click(false);
  }

  animate() {
    clickAnimation("#miracle2_div", this.target);
  }
}

function clickAnimation(parentDiv, target) {
  let xOffset = '+=' + generateRandomOffset();
  let yOffset = $(parentDiv).height()/2;
  let parentOffset = $(parentDiv).offset();
  let parentTop = parentOffset.top;
  if (parentDiv === "#miracle_div") {
    yOffset = $("#miracle2_div").offset().top * 1.2;
    parentTop += $(parentDiv).height()/2;
  }
  target.offset({'left': (4 * generateRandomOffset()) + parentOffset.left, 'top': parentTop});
  if (($(window).width() < 1100 && $(window).width() > 600) || ($(window).height() <= 800 && $(window).width() > 600)) {
    yOffset = 2 * generateRandomOffset() + (parentOffset.top);
    if (parentDiv === "#miracle2_div") xOffset = 4 * generateRandomOffset() + $(window).width()/3;
    else {
      xOffset = 4 * generateRandomOffset() + $(window).width()/2;
      target.offset({'left': (4 * generateRandomOffset()) + parentOffset.left + $(window).width()/5, 'top': parentOffset.top });
    }
  }
  target.animate({'top': yOffset, 'opacity':0.1, 'left': xOffset + 'px'}, 750, 
    function() { 
      $(this).remove();
  });
}

function handleError() {
  if(last_saved % 5 === 0) {
      $.toaster( {message: "Insufficient followers to convert!", title:"Can't convert." } );
  }
}

function gen_boss_offset(id, target) {
    var width = $(window).width();
    if (width <= 750) 
      target.offset({'left': width/2, 'top': $(id).offset().top * 1.05});
    else if (width <= 1100) 
      target.offset( {'left': width/2, 'top': $(id).offset().top * 1.1});
    else if (width <= 1300) 
      target.offset( {'left': width/1.8, 'top': $(id).offset().top * 1.2});
    else if (width <= 1600) 
      target.offset( {'left': width/1.7, 'top': $(id).offset().top * 1.2});
    else if (width <= 1900)  
      target.offset({'left': width/1.6, 'top': $(id).offset().top * 1.5});
    else if (width > 1900) {
      target.offset({'left': width/1.5, 'top': $(id).offset().top * 1.5});
    }

    if ($(window.height()) <= 800) {
      target.offset({'left': width/2});
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
  if (vals.events.superclick.click_num < 100 && !vals.events.superclick.active) {
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
    
    if (iterations === (vals.events.superclick.max_clicks/10 -1)) {
      $('#superclick_bar').css('background-color', '');
      vals.events.superclick.click_num = 0;
      $('#superclick_bar').css('width', vals.events.superclick.click_num + '%'); 
      vals.events.superclick.active = false;
      
      return;
    }
    clearTimeout(bar_timer);

    $('#superclick_bar').css('width', (100 - (100/((vals.events.superclick.max_clicks/10)-1)) * iterations + '%'));
    vals.events.superclick.active = true;

    if (iterations < ((vals.events.superclick.max_clicks/10) -1)) {
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
    if (upgrade_box_size != 0) {
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
    if (remainder >= 1)
      output_string = output_string + remainder + ' minutes ';
    if (remainder == 1) output_string = output_string.substr(0,output_string.length-2) + ' ';
    return output_string  === '' ? output_string + truncate_seconds(num) : output_string;
}

function truncate_seconds(num) {
    var message = " seconds";
    if (num == 1) message = message.substr(0,message.length-1);
    return num + message;
}

function truncate_bigint(num) { 
    var sn = '';
    if (num >= 1000000000000000000000000) { 
        return truncate_int(num)
    }    
    if (num >= 1000000000000000000000) { 
        sn = Math.round((num / 1000000000000000000000) * 100) / 100;
        return sn + 'S';
    }
    if (num >= 1000000000000000000) { 
        sn = Math.round((num / 1000000000000000000) * 100) / 100;
        return sn + 'Qt';
    }
    if (num >= 1000000000000000) { 
        sn = Math.round((num / 1000000000000000)*100) / 100;
        return sn + 'Q';
    }
    if (num >= 1000000000000) { 
        sn = Math.round((num / 1000000000000) * 100) / 100;
        return sn + 'T';
    }
    if (num >= 1000000000) { 
        sn = Math.round((num / 1000000000) * 100) / 100;
        return sn + 'B';
    }
    if (num >= 1000000) { 
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

const debugPrint = args => args.forEach((element) => console.log(element + ' '));

$(document).ready(() => {
var quadrantItems = document.querySelectorAll('.quadrant__item');
var cube = document.querySelector('.cube');

var tl = new TimelineLite({paused: true});
tl.timeScale(1.6);

tl.to('.cube', 0.4, {rotation: 45, width: '120px', height: '120px', ease: Expo.easeOut}, 'first');
tl.to('.plus .plus-vertical', 0.3, {height: '0', backgroundColor: '#f45c41', ease: Power1.easeIn}, 'first');
tl.to('.cube', 0, {backgroundColor: 'transparent'});
tl.to(quadrantItems[0], 0.15, {x: -5, y: -5}, 'seperate');
tl.to('.arrow-up', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
tl.to(quadrantItems[1], 0.15, {x: 5, y: -5}, 'seperate');
tl.to('.arrow-right', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');
tl.to(quadrantItems[3], 0.15, {x: 5, y: 5}, 'seperate');
tl.to('.arrow-down', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
tl.to(quadrantItems[2], 0.15, {x: -5, y: 5}, 'seperate');
tl.to('.arrow-left', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');

cube.addEventListener('mouseenter', playTimeline);
cube.addEventListener('mouseleave', reverseTimeline);

function playTimeline(e) {
  e.stopPropagation();
  const btns = document.querySelectorAll('.quadrant__item button');
  btns.forEach((button) => {
    $(button).attr('style', "display: block !important");
    $(button).children().first().attr('style', "display: block !important");
  });
  tl.play();
}

function reverseTimeline(e) {
  e.stopPropagation();
  const btns = document.querySelectorAll('.quadrant__item button');
  btns.forEach((button) => {
    $(button).attr('style', "display: none !important");
    $(button).children().first().attr('style', "display: none !important");
  });
  tl.timeScale(1.8);
  tl.reverse();
}
});
