console.dir(document); //o/p: in console
console.dir(document.all); //o/p: in console
//
console.dir(document.all[7]);
document.all[7].innerText="hello everyone" 

//to get the image link(in console)
console.log(document.getElementById("image1"))

/*
document.getElementById("image1").id        o/p:'image1'
document.getElementById("image2").alt       o/p:'img'
document.getElementById("image2").tagName   o/p:'IMG'
document.getElementById("image1").src.      o/p:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCO_b_uAlpSrD_mNMd5O9daryvMzMGaYRYMQ&s'
*/