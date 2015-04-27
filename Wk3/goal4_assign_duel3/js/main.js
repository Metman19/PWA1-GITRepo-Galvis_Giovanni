/**
 Giovanni Galvis  //Added my nmae and info for this assignment.
 04/26/2015
Week #3 :: { Homework } - DEVELOP Duel #4 
*/

// self-executing function


(function(){

    console.log("FIGHT!!!");

    //created an array with fighters data.
    var playerOne = {name:"Spiderman", damage:20, health:100};  //object for playerOne
    var playerTwo = {name:"Batman",damage:20, health:100};    //object for playerTwo
    var fighters = [playerOne,playerTwo];   //The array with the objects.
/*
    //player name
    var playerOneName = "Spiderman";    //the variables are blocked out
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
*/
    //initiate round
    var round=0;            //replaced all the names, damages, and health's with their place in the array's.
    var a = document.getElementById("kabal");
    console.log(a);
    var b = document.getElementById("kratos"); 
    console.log(b);
    function fight(){
         a.innerHTML = playerOne.name+":"+playerOne.health;
         "  *START*  "
         b.innerHTML = playerTwo.name+":"+playerTwo.health; // alerts new array information.
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne.damage * .5; // damage var has been replaced with array info.
            var minDamage2 = playerTwo.damage * .5;
            var f1 = Math.floor(Math.random()*(playerOne.damage-minDamage1)+minDamage1); //player damage has been included in this formula with info from array.
            var f2 = Math.floor(Math.random()*(playerTwo.damage-minDamage2)+minDamage2);
           

            //inflict damage
             playerOne.health-=f1;  //replaced the inflicted damage 
             playerTwo.health-=f2;
             a.innerHTML = playerOne.health;
             b.innerHTML = playerTwo.health;

            a.innerHTML = playerOne.name+": "+playerOne.health;
            b.innerHTML = playerTwo.name+":"+playerTwo.health; // console.log will display all the actions.

            //check for the victor
            var result = winnerCheck();
            console.log(result);

            if (result==="no winner")
            {
                document.getElementById("round_number").innerHTML = "<h2>Round " + round++ +" Complete</h2> ";
                function myFunction(){
                var div = document.querySelector(".buttonblue");
                playerOne.name+":"+playerOne.health;
                 "  *ROUND "+round+" OVER"+"*  "
                playerTwo.name+":"+playerTwo.health;
            };
            } else{
                document.querySelector(".clear").innerHTML = result;
                break;
            };

          };
    };
var div = function myFunction(){
    document.querySelector(".buttonblue").innerHTML;
}
var complete = document.querySelector(".buttonblue").innerHTML = "Done!!!";
    function winnerCheck(){
        var result="no winner";
        if (playerOne.health<1 && playerTwo.health<1)
        {  
            result = "You Both Die";
            complete
        } else if(playerOne.health<1){
            result =playerTwo.name+" WINS!!!"
            complete
        } else if (playerTwo.health<1)
        {
            result = playerOne.name+" WINS!!!"
            complete
        };
       return result;

    };

    /*******  The program gets started below *******/

   fight();

})();