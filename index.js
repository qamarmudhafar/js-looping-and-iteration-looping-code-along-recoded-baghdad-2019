const gifts = ['Lisa', 'Kaitlin', 'Jan'];
 
function writeCards(gifts) {
  let i = 0; // the initialization moved OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log();
    gifts[i]=`Thank you, ${gifts[i]}, for the wonderful surprise gift!`;
    i++; // the iteration moves INSIDE the body of the loop!
  }
 
  return gifts;
}
 
writeCards(gifts);


function countdown(number) {
 for(let i =number;i>=0;i--){
    console.log(number);  
    number-=1;
 }
 
  }



countdown(5);