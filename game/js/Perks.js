class Perk {
	
	constructor(type) {
		this.type = type;
	}

	apply() {
		this.switchImage();
		this.fixPerk();
	}

	canPurchase(cost, level) {
		if (vals.perks.currency.amount >= cost && (parseInt(level) + 1) <= 3) {
			return true;
		} else {
			return false;
		}
	}

	switchImage() {
		if (parseInt(this.level) + 1 <= 3 && parseInt(this.level) > 0) {
			$('#' + this.type + ' img').attr('src', 'data/' + this.name + '_' + (this.level+1) + '.png');
		} else {
			console.log("Unable to switch images.");
		}
	}

	fixPerk() {
		if (parseInt(this.level) + 1 < 3) {
			$('#' + this.name + '_mul').text(String(resolvePercentageFrom(parseFloat(vals.perks[this.name].mul))));	
			$('#' + this.name + '_next_mul').text(String(resolvePercentageFrom(parseFloat(vals.perks[this.name].mul) * 1.5)));
			$('#' + this.name + '_cost').text(String(parseFloat(determinePerkCost(this.name))));
		} else {	
			$('#' + this.name + '_mul').text(String(resolvePercentageFrom(parseFloat(vals.perks[this.name].mul))));				
			$('#' + this.name + '_next_mul').text("MAXIMUM");
			$('#' + this.name + '_cost').text("NaN");						
		}
	}
}

class PowerPerk extends Perk {
	
	constructor(type) {
		super(type);
		this.name = "power";
		this.level = vals.perks[this.name].level;
		this.cost = parseFloat(determinePerkCost(this.name));
	}

	apply() {
		if (this.canPurchase(this.cost, this.level)) {
			this.level++;
			vals.perks[this.name].level = this.level;
			vals.perks[this.name].mul *= 1.5;
			vals.click *= 1.5;
			vals.perks.currency.amount -= this.cost;
			super.apply();
		} else {
			alert("You cannot yet purchase this.");
		}
	}
}

class PassivePerk extends Perk {
	
	constructor(type) {
		super(type);
		this.name = "passive";
		this.level = vals.perks[this.name].level;
		this.cost = parseFloat(determinePerkCost(this.name));
	}

	apply() {
		if (this.canPurchase(this.cost, this.level)) {
			this.level++;
			vals.perks[this.name].level = this.level;
			vals.perks[this.name].mul *= 1.5;
			vals.perks.currency.amount -= this.cost;
			super.apply();
		} else {
			alert("You cannot yet purchase this.");
		}
	}
}

class FocusPerk extends Perk {
	
	constructor(type) {
		super(type);
		this.name = "focus";
		this.level = vals.perks[this.name].level;
		this.cost = parseFloat(determinePerkCost(this.name));
	}

	apply() {
		if (this.canPurchase(this.cost, this.level)) {
			this.level++;
			vals.perks[this.name].level = this.level;
			vals.perks[this.name].mul *= 2;
			vals.pantheon.damage *= 2;
			vals.pantheon.dps *= 2;
			vals.perks.currency.amount -= this.cost;
			super.apply();
		} else {
			alert("You cannot yet purchase this.");
		}
	}
}

class PerkEvent {

	constructor(type) {
		this.perk = this.determinePerkVarietyFrom(type);
	}

	getPerk() {
		return this.perk;
	}

	determinePerkVarietyFrom(type) {
		if (type === 'perk_btn_1') {
			return new PowerPerk(type);
		} else if (type === 'perk_btn_2') {
			return new PassivePerk(type);
		} else {
			return new FocusPerk(type);
		}
	}
}

function resolvePercentageFrom(float) {
	if (float > 1) {
		return "+" + (float - 1) * 100;
	} else {
		return "-" + (1 - float) * 100;
	}
}

function determinePerkCost(name) {
	return (vals.perks[name].base_cost - 0.5) * (2 * (vals.perks[name].level + 1));		
}

function fixPerks() {
	const names = ["perk_btn_1", "perk_btn_2", "perk_btn_3"];
	names.forEach((element) => {
		let perkEvent = new PerkEvent(element);
		let perk = perkEvent.getPerk();
		perk.switchImage();
		perk.fixPerk();
	});
}

function savePerks(save) {
	let perks = [];

	for (let i in vals.perks) {
		const element = vals.perks[i];
		if (i === "currency") perks.push("currency:" + vals.perks.currency.amount.toString(16));
		else perks.push(i + ":" + element.mul + ":" + element.level.toString(16));
	}


	save['perks'] = perks.join("|");
}

function loadPerks(save) {
	if (save.perks) {
        let t_items = save.perks.split('|');
        t_items += '';
        let item = t_items.split(",");
        for (let i of item) {
        	let values = i.split(":");
        	if (values[0] === "currency") {
        		vals.perks.currency.amount = parseInt(values[1], 16);
        	} else {
        		vals.perks[values[0]].mul = parseFloat(values[1]);
        		vals.perks[values[0]].level = parseInt(values[2], 16);
        	}
        }
	}
}

$(document).on("click", ".perk_btn", function() {
	const id = $(this).attr('id');
	let perkEvent = new PerkEvent(id);
	let perk = perkEvent.getPerk();
	perk.apply();
});


