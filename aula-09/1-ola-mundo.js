window.onload = function(e){
    var btn = document.getElementById("btn");

    btn.onclick = function(e){
        olaMundo()
    }

    function olaMundo(){
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            var mensagem = this.responseText;
            alert(mensagem);
        }
        });

        xhr.open("GET", "http://localhost:5269/api/aula/olaMundo");

        xhr.send();
    }
}