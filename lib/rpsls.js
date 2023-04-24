export { rps, rpsls }

function rps(shot) {
    let x = Math.floor(Math.random() * 3);
    let auto;
    let res;

    if (x === 0) { auto = "rock"; }
    if (x === 1) { auto = "paper"; }
    if (x === 2) { auto = "scissors"; }

    console.log(shot);

    if (shot === undefined) { 
        return {player: auto};
    }

    if (shot !== "rock" && shot !== "paper" && shot !== "scissors") {
        throw new Error();
    }

    if (shot === "rock") {
        if (auto === "rock") { res = "tie"; } 
        if (auto === "paper") { res = "lose"; }
        if (auto === "scissors") { res = "win"; }
    } else if (shot === "paper") {
        if (auto === "rock") { res = "win"; } 
        if (auto === "paper") { res = "tie"; }
        if (auto === "scissors") { res = "lose"; }
    } else if (shot === "scissors") {
        if (auto === "rock") { res = "loss"; } 
        if (auto === "paper") { res = "win"; }
        if (auto === "scissors") { res = "tie"; }
    } 

    return {player:shot,opponent:auto,result:res};
}

function rpsls(shot) {
    let x = Math.floor(Math.random() * 5);
    let auto;
    let res;
    

    if (x === 0) { auto = "rock"; }
    if (x === 1) { auto = "paper"; }
    if (x === 2) { auto = "scissors"; }
    if (x === 3) { auto = "lizard"; }
    if (x === 4) { auto = "spock"; }

    if (shot === undefined) { 
        return {player: auto};
    }

    if (shot !== "rock" && shot !== "paper" && shot !== "scissors" && shot !== "lizard" && shot !== "spock") {
        throw new Error();
    }

    if (shot === "rock") {
        if (auto === "rock") { res = "tie"; } 
        if (auto === "paper") { res = "loss"; }
        if (auto === "scissors") { res = "win"; }
        if (auto === "lizard") {res = "win"; }
        if (auto === "spock") { res = "loss"; }
    } else if (shot === "paper") {
        if (auto === "rock") { res = "win"; } 
        if (auto === "paper") { res = "tie"; }
        if (auto === "scissors") { res = "loss"; }
        if (auto === "lizard") { res = "loss"; }
        if (auto === "spock") { res = "win"; }
    } else if (shot === "scissors") {
        if (auto === "rock") { res = "loss"; } 
        if (auto === "paper") { res = "win"; }
        if (auto === "scissors") { res = "tie"; }
        if (auto === "lizard") { res = "win"; }
        if (auto === "spock") { res = "loss"; }
    } else if (shot === "lizard") {
        if (auto === "rock") { res = "loss"; } 
        if (auto === "paper") { res = "win"; }
        if (auto === "scissors") { res = "loss"; }
        if (auto === "lizard") { res = "tie"; }
        if (auto === "spock") { res = "win"; }
    } else if (shot === "scissors") {
        if (auto === "rock") { res = "win"; } 
        if (auto === "paper") { res = "loss"; }
        if (auto === "scissors") { res = "win"; }
        if (auto === "lizard") { res = "loss"; }
        if (auto === "spock") { res = "tie"; }
    } 

    return {player:shot,opponent:auto,result:res};
}
