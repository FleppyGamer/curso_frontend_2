function greetings (){
    const name = prompt("Olá! Qual é o seu nome?");
    console.log(`Prazer te conhecer, ${name}!`);
    const wellBeing = prompt(`Como você está, ${name} (bem/mal)?`);
    if (wellBeing == "bem") {
        console.log(`Que maravilha! Tenha um ótimo dia, ${name}!`);
    } if (wellBeing == "mal") {
        console.log("Ah... Espero que você fique melhor :3");
    } else{
        const wellBeing = prompt("Não entendi. Você esta bem ou mal?");
    }
}