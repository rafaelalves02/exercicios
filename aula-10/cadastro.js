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
        var genero = txtGenero.value;
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
        else{
            realizarCadastro(nome, sobrenome, email, telefone, genero, senha)
        }
            
    };

    function realizarCadastro(nome, sobrenome, email, telefone, genero, senha){
        // WARNING: For POST requests, body is set to null by browsers.
        var data = JSON.stringify({
            "nome": nome,
            "sobrenome": sobrenome,
            "email": email,
            "telefone": telefone,
            "senha": senha,
            "genero": genero
        });
        
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                var cadastroResult = JSON.parse(this.responseText);

                if(cadastroResult.sucesso){
                   alert("o cadastro foi realizado!"); 
                }
                else{
                    mensagemErro(cadastroResult.mensagem);
                }
            }
        });
        
        xhr.open("POST", "http://localhost:5281/api/usuario/cadastro");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.send(data);
    }

    function mensagemErro(mensagem) {
        var spanErro = document.getElementById("spnErro");
        spanErro.innerText = mensagem
        spanErro.style.display = "block";

        setTimeout(function(){
            spanErro.style.display = "none";
        }, 5000)
    }
}