


let form = document.getElementById("form-contato");

if (form.addEventListener) {                   
    form.addEventListener("submit", validaFormulario);
} else if (form.attachEvent) {                  
    form.attachEvent("onsubmit", validaFormulario);
}

function validaFormulario(evt){
  let nome = document.getElementById('nome');
  let telefone = document.getElementById('telefone');
  let email = document.getElementById('email');
  let sexo = document.getElementById('sexo');
  let check = document.getElementById('checkbox');
  let filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  let contErro = 0;


  /* Validação do campo nome */
  campo_nome = document.querySelector('.msg-nome');
  if(nome.value == ""){
    campo_nome.innerHTML = "Digite seu nome corretamente";
    campo_nome.style.display = 'block';
    contErro += 1;
  }else{
    campo_nome.style.display = 'none';
  }
  /* validaçao campo telefone */

  campo_telefone = document.querySelector('.msg-telefone');
  if(telefone.value == ""){
    campo_telefone.innerHTML = "Por favor, preencha com seu numero";
    campo_telefone.style.display = 'block';
    contErro += 1;
 }
  /* Validação do campo email */
  campo_email = document.querySelector('.msg-email');
  if(email.value == ""){
    campo_email.innerHTML = "Por favor, preencha com email";
    campo_email.style.display = 'block';
    contErro += 1;
  }else if(filtro.test(email.value)){
    campo_email.style.display = 'none';
  }else{
    campo_email.innerHTML = "Formato do E-mail inválido";
    campo_email.style.display = 'block';
    contErro += 1;
  }

  /* Validação do campo sexo */
  campo_sexo = document.querySelector('.msg-sexo');
  if(sexo.value == ""){
    campo_sexo.innerHTML = "Escolha o sexo";
    campo_sexo.style.display = 'block';
    contErro += 1;
  }else{
    campo_sexo.style.display = 'none';
  }

  if(contErro > 0){
    evt.preventDefault();
  }
}

function tudocerto(){
  validaFormulario();
  alert("Mensagem enviada com sucesso!");
}




function checkedOrUnCheckedAll(field) {             
    if (field.checked){//se o checkbox estiver checkado eh true
        //"input[type=checkbox]" eh o seletor do jquery, diz pro jquery procurar campos de input aonde o type eh checkbox
        $("input[type=checkbox]").attr('checked', true);//marca all check
    }else {
        $("input[type=checkbox]").attr('checked', false);//desmarca all check
    }
}


