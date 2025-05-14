window.onload = function(e){
    var btnCalcular = document.getElementById("btnCalcular");

    btnCalcular.onclick = function(e) {
        var valor1 = parseFloat(document.getElementById("num1").value);
        var valor2 = parseFloat(document.getElementById("num2").value);
        
        somar(valor1,valor2);
    }

    function somar(valor1,valor2){
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            var mensagem = this.responseText;
            alert(mensagem);
        }
        });

        xhr.open("GET", "http://localhost:5269/api/aula/soma?valor1=" + valor1 + "&valor2=" + valor2);

        xhr.send();
    }
}