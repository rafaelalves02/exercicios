window.onload = function (e) {
    
    var btnEntrar = document.getElementById("btnEntrar");
    var txtEmail = document.getElementById("email");
    var txtSenha = document.getElementById("senha");

    txtEmail.focus();

    btnEntrar.onclick = function (e) {

        e.preventDefault;

        var email = txtEmail.value;
        var senha = txtSenha.value;

        if(email == ""){
            mensagemErro("por favor informe o seu email");
        }
        else if(senha == ""){
            mensagemErro("por favor informe a sua senha");
        }
        else {
            realizarLogin(email, senha);
        }
    };
    function mensagemErro(mensagem){
        var spanErro = document.getElementById("spnErro");
        spanErro.innerText = mensagem;
        spanErro.style.display = "block";

        
    }

    function realizarLogin(email, senha){
        alert("login realizado para o usuario " + email)
    }
}