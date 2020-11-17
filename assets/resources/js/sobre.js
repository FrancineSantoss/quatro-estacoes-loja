




let posicao = 0;
       let mensagem = "Bem vindo á quatro estações, cadastre-se para receber todas as novidades... ";  //Esse texto

         function rola() {
         document.getElementsByName("lugar")[0].innerHTML = 
           mensagem.substring(posicao,mensagem,length);
             posicao++;
           if (posicao == mensagem.length) {
                posicao = 0;
               }
           setTimeout("rola()", 100); 
      }


      let rel = setInterval(relogio, 5000);

function relogio() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
} 



