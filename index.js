// Code your solutions in this file
function writeCards(array,eventname){
  let thankYou=[];
  for(let i=0;i<array.length;i++){
    thankYou.push(`Thank you, ${array[i]}, for the wonderful ${eventname} gift!`)
  }
  return thankYou;
}

function countdown(count){
  while(count>=0){
    console.log(count);
    count=count-1;
  }
  
}
const names = ["ahmed", "noor", "muna"];
console.log(writeCards(names,"birthday"));