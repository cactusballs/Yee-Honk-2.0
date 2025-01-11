// using getBounding to understand where the duck is 

let elem = document.getElementById('duck') 
let rect = elem.getBoundingClientRect();
for(const key in rect){
  if (typeof rect[key] !== "function"){
    let result = `${key} : ${rect[key]}`;
    return result;
  }
}

function collisionDetection(hat, duck){
    if(hat.x + hat.width >= duck.x && hat.x <= duck.x + duck.width)
      return true 
};    