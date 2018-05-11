var last_float = 10;
var vals = {
  "energy":0,"prod":0, "click":1, "followers":0, "loss":0,
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
                "description":"An attendant to speak in public places.",
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
                "label":"Acension suite",
                "description":"A small, plush lounge holding more followers at a time.",
                "amount":0,
                "risk":0.005,
                "output":1,
                "base_cost":500,
                "cost":500,
                "unlock_loss":0.2,
                "unlocked":false,
            },
            "ascend3":{
                "label":"Holy room",
                "description":"An entire room where your followers can ascend.",
                "amount":0,
                "risk":0.01,
                "output":5,
                "base_cost":1730,
                "cost":1730,
                "unlock_loss":1.2,
                "unlocked":false,
            },
            "ascend4":{
                "label":"Delapidated monastery",
                "description":"A repurposed Monastery for your followers.",
                "amount":0,
                "risk":0.01,
                "output":10,
                "base_cost":8120,
                "cost":8120,
                "unlock_loss":2.0,
                "unlocked":false,
            }
  },
  "upgrades": {

    //think about creating 'god-battle' mode!
  }

};

 //global variable
var upgrade_box_size = 0;

(function($) {


  $(window).resize(function() {
    set_up_containers();
  });

  $(document).ready(function() {
    set_up_containers();
    start_game("");
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

  function start_game(save_file) {
    fix_names(vals);
    game_engine(vals, 0);
  }

function set_item_cost(item) { 
        var cost = ((item.amount + 1) * item.base_cost) * (item.amount + 1);

        if((item.amount + 1) > 10) { 
            cost *= 2;
        }
        return cost;
    }

  function game_engine(vals, iterations) {
    $('#click_amount').text( '[ ' + vals.click + ' ]');
    $('#counter').text( truncate_bigint(vals.followers) );
    $('#power').text(truncate_bigint(vals.energy));
    $('#production_net').text(truncate_bigint(vals.prod - vals.loss));
    $('#production_gross').text(truncate_bigint(vals.prod));
    $('#prod_energy').text(truncate_bigint(vals.loss));
    setButtonAvailability(vals);
    setTimeout(function() {
    
    if( iterations > 30 ) {
        game_engine(vals, 0);
    }
    else {
      game_engine(vals, ++iterations);
      if( vals.followers > 0 || (vals.prod - vals.loss) > 0)  {
        vals.followers += ( vals.prod - vals.loss);
        vals.energy += vals.loss;
      }
    }
  
    }, 100);
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
  }
   function fix_names( vals ) {

    for( var k in vals.clickers ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.prod >= vals.clickers[k].unlock_rps ) {
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
    for( var k in vals.ascend ) {
      var purchase_num = k.substr(k.length -1 );
      if( vals.loss >= vals.ascend[k].unlock_loss ) {
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

   }
 }
}

$(document).on("click", ".purchase", function() {
    var btn = $(this).attr('id');
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
  }
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
        }
      break;
    case 'ascend' :
      if( vals.ascend[id].amount > 0 ) {
          vals.ascend[id].amount --;
          vals.ascend[id].cost =  set_item_cost(vals.ascend[id]);
          vals.prod -= vals.ascend[id].output;
          vals.loss -= vals.ascend[id].output;
          vals.energy += (vals.ascend[id].cost * 0.5);
        }
      break;
  }
  fix_names(vals);
});
$(document).on("click", "#convert-tab-btn", function(event) {
  openTab(event, 'Conversion');
});
$(document).on("click", "#ascend-tab-btn", function(event) {
  openTab(event, 'Acension');
});
$(document).on("click", "#upgrade-tab-btn", function(event) {
  openTab(event, 'Upgrades');
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
}
function perform_trans() {
  if( vals.followers > 0 ) {
    vals.energy += vals.click;
    vals.followers -= vals.click;
  }
  return;
}
$(document).on("click", '.miracle', function(event) { 
          var used_id = $(this).attr('id').substr($(this).attr('id').indexOf('_') + 1);
          var divToAppend, target, offset;
          if( used_id === 'button') {
            target = $('.miracle_click:first').clone();
            target.html( '+' + truncate_bigint(vals.click));
            divToAppend = '#miracle_div';
            perform_miracle();
            offset = $('#counter').offset();
          }else {
            divToAppend = '#miracle2_div'; 
            target = $('.transcend_click:first').clone();
            target.html( '-' + truncate_bigint(vals.click));
            offset = $('#power').offset();
            if( can_click() ) perform_trans();
            else return;
          }
          $(divToAppend).append(target);
          target.show();
          target.offset({left:event.pageX-30, top:event.pageY-50});
          var end_y = event.clientY-150;
          target.css('opacity',100);
          if(last_float === 1) { 
            var this_float = event.pageX;
            last_float = 0;
          } else { 
            var this_float = event.pageX - 60;
            last_float = 1; 
          }

          target.animate({ 'top':offset.top + 'px', 'opacity':0.1, 'left':offset.left+ 'px'}, 750, function() { 
            $(this).remove();
          });

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
      console.log(children[i].className);
        children[i].className = children[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    if( upgrade_box_size != 0 ) 
      $('#upgrades-box').css("height", upgrade_box_size);
    
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

