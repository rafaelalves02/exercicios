window.onload = function (e) {

    var btnRecuperar = document.getElementById("btnRecuperar");
    var txtEmail = document.getElementById("txtEmail");

    btnRecuperar.onclick = function(e){
        var email = txtEmail.value;

        if (email == ""){
            exibirErro("informe o email")
        }
        else {

        }
    };

    function exibirErro(mensagem){
        var spanErro = document.getElementById("spanErro");

        spanErro.innerText = mensagem;
        spanErro.style.display = "block";

        setTimeout(function() {
            spanErro.style.display = "none";
        }, 5000);
    }

}