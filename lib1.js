function isTouching(fixrect,moverect){
    if(moverect.x-fixrect.x<moverect.width/2+fixrect.width/2 &&
      fixrect.x-moverect.x<moverect.width/2+fixrect.width/2 &&
      moverect.y-fixrect.y<moverect.height/2+fixrect.height/2 &&
      fixrect.y-moverect.y<moverect.height/2+fixrect.height/2 ) {
      return true;  
   
     
    }
    else{
     return false;
    }
   
  
  }