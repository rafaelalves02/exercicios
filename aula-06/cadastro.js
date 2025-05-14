window.onload = function (e) {

    var btnCadastrar = document.getElementById("btnCadastrar");
    var txtNome = document.getElementById("txtNome");
    var txtSobrenome = document.getElementById("txtSobrenome");
    var txtEmail = document.getElementById("txtEmail");
    var txtTel = document.getElementById("txtTel");
    var txtGenero = document.getElementById("txtGenero");
    var txtSenha = document.getElementById("txtSenha");

    btnCadastrar.onclick = function(e){

        e.preventDefault();
        
        var nome = txtNome.value;
        var sobrenome = txtSobrenome.value;
        var email = txtEmail.value;
        var telefone = txtTel.value;
        var Genero = txtGenero.value;
        var senha = txtSenha.value;

        if(nome == ""){
            mensagemErro("informe o nome");
        }
        else if(sobrenome == ""){
            mensagemErro("informe o sobrenome");
        }
        else if(email == ""){
            mensagemErro("informe o email");
        }
        else if(telefone == ""){
            mensagemErro("informe o telefone");
        }
        else if(senha == ""){
            mensagemErro("informe a senha");
        }
    };

    function mensagemErro(mensagem) {
        var spanErro = document.getElementById("spnErro");
        spanErro.innerText = mensagem
        spanErro.style.display = "block";

        setTimeout(function(){
            spanErro.style.display = "none";
        }, 5000)
    }
}