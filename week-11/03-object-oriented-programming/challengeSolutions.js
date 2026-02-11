// //EJAY'S SOLUTION

// class Player{
//     constructor(name, health, att, def){
//         this.name = name;
//         this.health = health;
//         this.att = att;
//         this.def = def;
//     }

//     attacks(player2){
//         console.log(${this.name} attacks ${player2.name});
//         player2.health = player2.health - this.att;
//         this.health = this.health - player2.def;
//         console.log(this.health);
//         console.log(player2.health);
//     }
// }

// const red = new Player('RED', 6,3,2);
// const blue = new Player('BLUE', 9,2,4);
// red.attacks(blue);

// // ===========================================

// //LARA'S SOLUTION

// class Player {
//   constructor(playerName, playerHealth, playerAttack, playerDefense) {
//     ((this.name = playerName),
//       (this.health = playerHealth),
//       (this.defense = playerDefense),
//       (this.attack = playerAttack));
//   }
//   healthCheck() {
//     console.log(${this.name} has ${this.health}HP remaining);
//   }
//   battle(player2) {
//     player2.health -= this.attack;
//     this.health -= player2.defense;
//     console.log(${this.name} attacks ${player2.name});
//     console.log(
//       ${player2.name} loses ${this.attack} hp, ${player2.name} now has ${player2.health}HP,
//     );
//     console.log(
//       ${this.name} loses ${player2.defense} hp, ${this.name} now has ${this.health}HP,
//     );
//     if (this.health === 0) {
//       console.log(${this.name} defeated, ${player2.name} wins);
//     } else {
//       console.log(${player2.name} defeated, ${this.name} wins);
//     }
//   }
// }

// const RED = new Player("RED", 6, 3, 2);
// const BLUE = new Player("BLUE", 9, 2, 4);
// RED.healthCheck();
// BLUE.healthCheck();
// RED.battle(BLUE);
// BLUE.battle(RED);
