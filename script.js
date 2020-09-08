var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
var wrapperEle = document.body.querySelector(".wrapper");
for(var i=0; i<animals.length; i++){
createANI(animals[i]);
 
  
}

function createANI(str){
    var ele = document.createElement("div");
  if(str=="dog"){
  ele.innerHTML= "Borf Borf";
  }
    else if(str=="cat"){
    ele.innerHTML = "I am a cat";
  }
  else{
    ele.innerHTML = "I am an animal";
  }
  wrapperEle.appendChild(ele);
  
}