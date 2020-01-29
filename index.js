// Code your solutions in this file
function writeCards(arr,event){
  let msg=[];
  for(let i=0;i<arr.length;i++){
    msg[i]=(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
 console.log()
  }
   return msg;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countdown (num){
  while (num >= 0){
   console.log(num --);
  }
 
}
countdown(10);