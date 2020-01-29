// Code your solutions in this file
function writeCards(arr, event_name){
  const msgs = [];
  
  for (let i=0; i < arr.length; i++){
    msgs.push(`Thank you, ${arr[i]}, for the wonderful ${event_name} gift!`)
  }
  
  return msgs;
}

function countdown(input){
  while (input>=0) {
    console.log(input);
    input--;
  }
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surpsrise");