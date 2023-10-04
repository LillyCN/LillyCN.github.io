// function sayHello() {
//     const name = prompt("What is your name?");
//     alert("Hello, " + name + "! Welcome to my website.")
// }

// sayHello();

// function rollDice() {
//     let dice = Math.floor(Math.random() * 6) + 1;
//     alert("You have rolled a " + dice + "!");
// }

// rollDice();

// function jobSearch() {
//     let months = 0;
//     let dice = Math.floor(Math.random() * 6) + 1;
//     months += dice;
//     alert("It will take you " + months + " months to get your first job as a developer!")
// }

// jobSearch()

// function comfortLevel(html, css, js) {
//     const average = (html + css + js) / 3;
//     if (average >= 7){
//         console.log("You are a pro!");
//     } 
//     else if (average >= 4){
//         console.log("Don't worry, you're nearly there!");
//     }
//     else {
//         console.log("If you keep trying you will get there!");
//     }
// }

// comfortLevel(9, 7, 9)

// for(i=10; i>=0; i--){
//     console.log(i);
//     if (i==0) {
//         console.log("The loop is finished!");
//     }
// }

// let myMovie = {
//     title: "Avatar 2",
//     length: 190,
//     releaseDate: "2022-12-16",
//     seriesDetails: {
//         isSeries: true,
//         seriesType: "Unknown",
//         universeName: "Avatar Universe",
//         numberInSeries: 2
//     },
//     watchedStatus: false,
//     rating: function(rating) {
//         return `${rating}/5`;
//     }

// }

// console.log(myMovie.title + " is " + myMovie["length"] + " minutes long");
// console.log(`Movie #${myMovie["seriesDetails"]["numberInSeries"]} of the ${myMovie.seriesDetails.universeName}`)
// console.log("I rate it " + myMovie.rating(5))

// Use DOM to create dark mode in website

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.Color = "White";
    document.body.style.backgroundImage = "none";
    document.getElementById("#").style.color = "White";
}



