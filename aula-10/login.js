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
    
    function realizarLogin(email, senha){
        var data = JSON.stringify({
            "email": email,
            "senha": senha
        });
        
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                var loginResult = JSON.parse(this.responseText);

                if (loginResult.sucesso){    
                    alert("login realizdo!");
                }
                else {
                    mensagemErro(loginResult.mensagem);
                }
            }
        });
        
        xhr.open("POST", "http://localhost:5281/api/usuario/login");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.send(data);
    }

    function mensagemErro(mensagem){
        var spanErro = document.getElementById("spnErro");
        spanErro.innerText = mensagem;
        spanErro.style.display = "block";  

        setTimeout(function(){
            spanErro.style.display = "none";
        }, 5000)
    }

    
}