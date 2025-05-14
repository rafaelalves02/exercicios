window.onload = function(e){
    var btn = document.getElementById("btn");

    btn.onclick = function(e){
        var valor1 = parseFloat(document.getElementById("txt1").value);
        var valor2 = parseFloat(document.getElementById("txt2").value);

        media(valor1, valor2);
    }

    function media(valor1, valor2){
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            var mensagem = this.responseText;
            alert(mensagem);
        }
        });

        xhr.open("GET", "http://localhost:5281/api/aula/media?valor1=" + valor1 + "&valor2=" + valor2);

        xhr.send();
    }
}