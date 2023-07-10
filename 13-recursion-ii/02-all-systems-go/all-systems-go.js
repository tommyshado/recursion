// YOUR CODE BELOW:

function allSystemsGo(systems) {
    let systemsValues = Object.values(systems);

    return systemsValues.every(function(boolOrSytem) {
        if (typeof boolOrSytem === "object") {
            return allSystemsGo(boolOrSytem);
        } else {
            return boolOrSytem;
        };
    });
};

let systemsObject = {
    power: {
        batteries: true,
        solarCells: true,
        generator: true,
        fuelCells: true
    },
    telecoms: {
        antennas: {
        highGain: true,
        mediumGain: true,
        lowGain: true
        },
        transmitter: true,
        receiver: true
    },
    attitudeControl: {
        stabilization: {
        spin: true,
        threeAxis: true
        }
    },
    propulsion: {
        engines: {
        engine1: true,
        engine2: true,
        engine3: false
        },
        thrusters: true,
        propellant: true
    },
    environment: {
        cooling: true,
        heating: true,
        lifeSupport: true
    },
};

console.log(allSystemsGo(systemsObject));