class ElectricalDevice {
    constructor(name) {
        this.device = 'household electrical appliance',
            this.name = name;

    }
    getPowerExpense(power, t, on) {
        let turnOn = on;
        if (on === 1) {
            turnOn = 'Вкл';
        } else {
            turnOn = 'Выкл';
        };


        console.log(`Расход электроэнергии ${this.name} за ${t} час(а) = ${power * t}Вт. ${this.name}: ${turnOn}`);
    }
}


class Features extends ElectricalDevice {
	constructor (name, color) {
		super(name);
		this.color = color;
	}
}


const computer = new Features ('computer', 'blue');
const luminaire = new Features ('Luminaire', 'red');

console.log(computer, luminaire);

computer.getPowerExpense(150, 2, 1);
luminaire.getPowerExpense(50, 3, 0);