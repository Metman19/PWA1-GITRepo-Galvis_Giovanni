alert(2);
/**
 Giovanni Galvis  //Added my nmae and info for this assignment.
 04/24/2015
Week #3 :: { Homework } - DEVELOP Duel #2 
*/

// self-executing function
/*alert(function(){

    console.log("FIGHT!!!");

    //created an array with fighters data.
    var playerOne = {name:"Spiderman", damage:20, health:100};
    var playerTwo = {name:"Batman",damage:20, health:100};
    var fighters = [playerOne, playerTwo];

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
/*    var round=0;            //replaced all the names, damages, and health's with their place in the array's.

var kabal = document.getElementById("kabal");
kabal.innerHTML = "New Table";
function myFunction() {
    document.querySelector(".example").style.backgroundColor = "red";
}



    function fight(){
       (fighters[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]); // alerts new array information.
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5; // damage var has been replaced with array info.
            var minDamage2 = playerTwo[1] * .5;
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1); //player damage has been included in this formula with info from array.
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            //inflict damage
            playerOne[2]-=f1;  //replaced the inflicted damage 
            playerTwo[2]-=f2;

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]); // console.log will display all the actions.

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
             alert   (playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

            } else{
              alert  (result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOne[2]<1 && playerTwo[2]<1)
        {
           alert result = "You Both Die";
        } else if(playerOne[2]<1){
          alert result =playerTwo[0]+" WINS!!!"
        } else if (playerTwo[2]<1)
        {
            result = playerOne[0]+" WINS!!!"
        };
       return result;
    };
    function myFunction() {
    document.getElementById("fightBox").innerHTML = "";
}

    /*******  The program gets started below *******/
  //  fight();

})();