let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

if(sum < 21)
{
    console.log("Do you wanna draw a new card ")
}
else if(sum === 21)
{
    console.log("You won a blackjack")
}
else if (sum>21)
{
    console.log("You are out of the game")
}
