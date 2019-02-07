class Perk {
	
	constructor(type, level) {
		this.type = type;
		this.level = level;
	}

	apply() {
		alert('Triggered perk: ' + this.type + ' and level: ' + this.level);
	}
}

class PowerPerk extends Perk {
	
	constructor(type, level) {
		super(type, level);
	}

	apply() {
		alert('You triggered a ');
	}
}

class PassivePerk extends Perk {
	
	constructor(type, level) {
		super(type, level);
	}

	apply() {
		alert('You triggered a passive perk.');
	}
}

class FocusPerk extends Perk {
	
	constructor(type, level) {
		super(type, level);
	}

	apply() {
		alert('You triggered a focus perk');
	}
}

class PerkEvent {

	constructor(type, level) {
		this.perk = determinePerkVarietyFrom(type);
	}

	determinePerkVarietyFrom(type, level) {
		return type === 'focus' ? new FocusPerk(type, level) : new Perk(type, level);
	}
}