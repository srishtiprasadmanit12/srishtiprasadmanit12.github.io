var randomNumber1=Math.floor(Math.random()*6)+1 ;
var randomDiceImage= "dice"+randomNumber1+".jpg";
var randomImageSource="image/"+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "image/dice"+randomNumber2 +".jpg";
 document.querySelectorAll("img")[1].setAttribute("src" ,randomImageSource2);

 //winner declaration

 if(randomNumber1>randomNumber2){
   document.querySelector("h1").innerHTML ="Player 1 wins";
 }

else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML ="Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
