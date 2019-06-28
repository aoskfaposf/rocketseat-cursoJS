var promises = function() {
    return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('https://api.github.com/users/aoskfaposf');
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
        if(xhr.status === 200){
         resolve(JSON.parse(xhr.responseText)); 
        }else
        reject('Erro na requisição');
     }
    }
  }
 });
}

var resultado = minhaPromise();
console.log(resultado);