var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/aoskfaposf')
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4)
}