window.onload = function (e) {

    var btnRecuperar = document.getElementById("btnRecuperar");
    var txtEmail = document.getElementById("txtEmail");

    btnRecuperar.onclick = function(e){
        var email = txtEmail.value;

        if (email == ""){
            exibirErro("informe o email")
        }
        else {
            enviarEmail(email);
        }
    };

    function enviarEmail(email){
        // WARNING: For POST requests, body is set to null by browsers.
        var data = JSON.stringify({
            "email": email
        });
        
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                var result = JSON.parse(this.responseText);
                if(result.sucesso){
                    alert("E-mail enviado!");
                }
                else{
                    exibirErro(result.mensagem);
                }
            }
        });
        
        xhr.open("POST", "http://localhost:5281/api/usuario/esqueceuSenha");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.send(data);
    }

    function exibirErro(mensagem){
        var spanErro = document.getElementById("spanErro");

        spanErro.innerText = mensagem;
        spanErro.style.display = "block";

        setTimeout(function() {
            spanErro.style.display = "none";
        }, 5000);
    }

}