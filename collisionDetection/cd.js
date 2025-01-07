function collisionDetection(hat, duck){
    if(hat.x + hat.width >= duck.x && hat.x <= duck.x + duck.width)
      return true 
};