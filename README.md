# Javascript_NEAT

Hi again, this was a project I embarked on because I was interested in because I was interested in genetic algorithms.  
More specifically, I was interested in seeing how this specific genetic algorithm, the NeuroEvolution of Augmenting Topologies(NEAT) would do.  
I'm not going to lie, I started on this as a joke to see if I could code something as complicated as this. Welp after a few months and many lost hours, a stable version of the library is done.  

**Side note**: For this library to work for now, `p5.js` is needed. I will be changing it such that in `native_base` version of NEAT, `p5.js` is not needed.

### Special mention
For this I would like to give a special mention to my friend [@David-The-Programmer](https://github.com/David-The-Programmer) for helping me in some parts of trying to code this library for NEAT in `Javascript and p5.js` with me.

### Acknowledgements
The actual research paper I followed: [Link](http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf)  
The website of the guy that made NEAT: [Link](http://www.cs.ucf.edu/~kstanley/)  
Code Bullet's code that I looked at for even more confusion: [Link](https://github.com/Code-Bullet/NEAT-Template-JavaScript)  

## Projects I made using this library  
1. [NEAT Playing Flappy Bird](https://github.com/chuanhao01/Flappy_Bird_NEAT_JS)
2. [NEAT Playing Pac-Man](https://github.com/chuanhao01/Pacman_NEAT_JS)
    1. This was a project I worked with [@David-The-Programmer](https://github.com/David-The-Programmer) as well.

## Quick Start guide  
Sadly, due to time I probably will not be writing a documentation for this library code, but here is a quick guide on how to use the library.  

A quick look at the directory of the library

```bash
├── index.html
├── LICENSE
├── main.js
├── NEAT
│   ├── native_base
│   │   ├── add_node_mutation.js
│   │   ├── connection_gene.js
│   │   ├── connection_history.js
│   │   ├── genome.js
│   │   ├── math.js
│   │   ├── NEATConfigs.js
│   │   ├── node_gene.js
│   │   ├── node_history.js
│   │   ├── player.js
│   │   ├── population.js
│   │   └── species.js
│   └── p5_visuals
│       ├── layer.js
│       ├── model.js
│       └── model_visual.js
└── README.md
```

To use this library in your project, you can just import all the files in the `native_base` just for the NEAT code. The `p5_visuals` are just for visualising the structure of the model in a player.

### Some quick notes  
Here `players` can be seen as the artifical player that would be 'playing' your games.  
The `player` then has a `brain` which is also its `genome`.  
The `genome` has the both the technical aspects of the neural network(NNW) like feed forward as well as the genatic aspects like mutations and genetic information.  
The `population` acts as both a class with population functions as well as a data strucutre, containing all the data needed for the population.  
Finally the `NEAT_CONFIG.js` file has all the configs required for the NEAT to function.  

### Looking at main.js and index.html  
An example of how to set up NEAT can be seen in `main.js` and `index.html`.  

Breifly, what you should look out for is:  
In `main.js`
```Javascript
/*--- main.js ---*/
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
```  

Then in `index.html`  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Loading p5 -->
    <script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js"></script>
    <title>Document</title>
</head>
<body>
    <!-- NEAT native_base -->
    <script src="NEAT/native_base/math.js"></script>
    <script src="NEAT/native_base/NEATConfigs.js"></script>
    <script src="NEAT/native_base/population.js"></script>
    <script src="NEAT/native_base/species.js"></script>
    <script src="NEAT/native_base/player.js"></script>
    <script src="NEAT/native_base/genome.js"></script>
    <script src="NEAT/native_base/node_history.js"></script>
    <script src="NEAT/native_base/connection_history.js"></script>
    <script src="NEAT/native_base/node_gene.js"></script>
    <script src="NEAT/native_base/connection_gene.js"></script>
    <script src="NEAT/native_base/add_node_mutation.js"></script>

    <!-- NEAT p5_visuals -->
    <script src="NEAT/p5_visuals/model.js"></script>
    <script src="NEAT/p5_visuals/layer.js"></script>
    <script src="NEAT/p5_visuals/model_visual.js"></script>

    <!-- Loading quick start template -->
    <script src="main.js"></script>
</body>
</html>
```

# License

MIT License

Copyright (c) 2019 Lim Chuan Hao

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

