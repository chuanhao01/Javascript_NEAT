// Getting a population object
const population = new Population();

function setup(){
    // Initalise population object with the configs
    population.init(NEAT_CONFIGS);
    population.initPopulation();
}

function draw(){
    // Here you can access each player in the population in population.population
    let players = population.population;
    const game_inputs = [];
    // The for each player, you can get them to play
    for(let player of players){
        let player_output = player.player(game_inputs);
        // Calculate something
        let score = player_output;
        // If the player dies
        player.setScore(score);
    }
    // Once all players die, you can get a new population
    const all_players_died = true;
    if(all_players_died){
        population.getNewPopulation();
    }
    // Repeat from the start
}

