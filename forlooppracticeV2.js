var num = 60;

while (num >= 0) {
    if (num === 50) {
        console.log("Orbiter transfers from ground to internal power" + "T-" + num + " seconds");
    }

    else if (num === 31) {
        console.log("Ground launch sequencer is go for auto sequence start" + "T-" + num + " seconds");
    }

    else if (num === 16) {
        console.log("Activate launch pad sound suppression system " + "T-" + num + "seconds");
    }

    else if (num === 10) {
        console.log("Activate main engine hydrogen burnoff system" + "T-" + num + "seconds");
    }

    else if (num === 6) {
        console.log("Main engine start " + "T-" + num + "seconds");
    }

    else if (num === 0){
        console.log("Solid rocket booster ignition and liftoff! " + "T-" + num + "seconds");
    }

    else {
        console.log("T-" + num + "seconds");
    }
    num--;
}

 
