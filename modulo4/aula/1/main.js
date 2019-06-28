var promises = function() {
    return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('https://api.github.com/users/aoskfaposf');
    xhr.send(null);

    xhr.onreadystatechange = function () {
        
    }
    });
}