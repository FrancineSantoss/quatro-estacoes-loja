//function promocao(x) {
  //var x = document.getElementById("promocao");
  //x.getElementsByTagName("*")[Math.random().style.backgroundColor = "yellow";

//}

$(document).ready(function(){
  $("#p1").mouseenter(function(){
   'use strict'
   
   let img01 = Math.round(Math.random()*4);
   

   let img02 = [
   'assets/resources/img/img17.jpg',
   'assets/resources/img/img18.jpg',
   'assets/resources/img/img19.jpg',
   'assets/resources/img/img20.jpg',
   'assets/resources/img/img16.jpg'
     ];
  
    document.getElementById('eximg').src = img02[img01];
  });
});


