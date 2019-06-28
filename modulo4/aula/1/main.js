api.get('https://api.github.com/users/aoskfaposf')
    .then(function(response) {
        console.log(response.data.avatar_url);
    })
    .catch(function(error) {})