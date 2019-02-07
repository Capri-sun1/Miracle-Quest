class Perk {
	
	constructor(type) {
		this.type = type;
	}

	apply() {
		console.log('Attempting to process Perk..');
	}
}

class PowerPerk extends Perk {
	
	constructor(type) {
		super(type);
		this.name = "power";
		this.level = vals.perks[this.name].level;
		this.cost = (parseInt(this.level) + 0.5) * 2;
	}

	canPurchase() {
		if (vals.perks.currency.amount >= this.cost) {
			return true;
		} else {
			return false;
		}
	}

	apply() {
		if (this.canPurchase()) {
			super.apply();
			vals.perks[this.name].level++;
			vals.perks[this.name].mul *= 1.5;
			vals.perks.currency.amount -= this.cost;
			this.switchImage();
		} else {
			alert("You cannot yet purchase this.");
		}
	}

	switchImage() {
		if (parseInt(this.level)+2 <= 3) {
			$('#' + this.type + ' img').attr('src', 'data/' + this.name + '_' + (this.level+2) + '.png');
		} else {
			console.log("Maximum number of upgrades reached.");
		}
	}
}

class PassivePerk extends Perk {
	
	constructor(type) {
		super(type);
	}

	apply() {
		alert('You triggered a passive perk.');
	}
}

class FocusPerk extends Perk {
	
	constructor(type) {
		super(type);
	}

	apply() {
		alert('You triggered a focus perk');
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

$(document).on("click", ".perk_btn", function() {
	const id = $(this).attr('id');
	let perkEvent = new PerkEvent(id);
	let perk = perkEvent.getPerk();
	perk.apply();
});


