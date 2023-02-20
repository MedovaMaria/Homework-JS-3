function ElectricalDevice(name) {
	this.device = 'household electrical appliance',
	this.name = name

}

ElectricalDevice.prototype.getPowerExpense = function (power, t, on) {
	let turnOn = on;
	if (on === 1) {
		turnOn = 'Вкл';
	} else {
		turnOn = 'Выкл';
	};


	console.log(`Расход электроэнергии ${this.name} за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
};

function Features(name, color) {
	this.name = name,
	this.color = color
}

Features.prototype = new ElectricalDevice();


const computer = new Features ('computer', 'blue');
const luminaire = new Features ('Luminaire', 'red');

console.log(computer, luminaire);

computer.getPowerExpense(150, 2, 1);
luminaire.getPowerExpense(50, 3, 0);