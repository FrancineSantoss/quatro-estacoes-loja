

         function gerarCaptcha()
         {
             var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
             var i;
             for (i=0;i<4;i++){
               var a = alpha[Math.floor(Math.random() * alpha.length)];
               var b = alpha[Math.floor(Math.random() * alpha.length)];
               var c = alpha[Math.floor(Math.random() * alpha.length)];
               var d = alpha[Math.floor(Math.random() * alpha.length)];
              }
            var codigo = a + '' + b + '' + '' + c + '' + d;
            document.getElementById("mainCaptcha").value = codigo
          }


    function CheckValideCaptcha(){
               var string1 = removeEspaco(document.getElementById('mainCaptcha').value);
              var string2 = removeEspaco(document.getElementById('txtInput').value);
      
    
              if (string1 == string2){
         document.getElementById('sucesso').innerHTML = alert("Mensagem enviada com sucesso! entraremos em contato");
         //alert("sucesso");
                return true;
              }
              else{       
         document.getElementById('erro').innerHTML = alert("Captcha inválido, tente novamente"); 
         //alert("erro");
                return false;
         
              }
          }
          function removeEspaco(string){
            return string.split(' ').join('');
          }