window.onload = function(e){
    var btn = document.getElementById("btn");
    var txtNome = document.getElementById("txt1");

    btn.onclick = function(e){
        var nome = txtNome.value;

        olaMundoPersonalizado(nome);
    }

    function olaMundoPersonalizado(nome){
        // WARNING: For GET requests, body is set to null by browsers.

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            var mensagem = this.responseText;
            alert(mensagem);
        }
        });

        xhr.open("GET", "http://localhost:5269/api/aula/olaMundoPersonalizado?nome=" + nome);

        xhr.send();
    }
}