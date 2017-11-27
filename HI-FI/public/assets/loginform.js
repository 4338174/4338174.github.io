(() => {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.loginForm button').addEventListener("click", function (event) {
          event.preventDefault();
const form = document.querySelector('.loginForm')
              const data = JSON.stringify({
                  'username': form.username.value,
                  'password': form.password.value
              });

              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");

              var myInit = { method: 'POST',
                             headers: myHeaders,
                             mode: 'cors',
                             cache: 'default',
                             body: data
                           };

              var myRequest = new Request('http://localhost:1337/login', myInit);


              fetch(myRequest)
                  .then((result) => result.json())
                  .then((data) => {
                      localStorage.setItem('token', data.AccessToken);
                      localStorage.setItem('userid', data.ID);
                      document.getElementById('status').innerHTML = "Du er nu logget ind ...";
                  })
                  .catch((err) => {
                      console.log(err);
                  });

        });


    });
})();

document.getElementById('logud').addEventListener('click', () => {
    if (confirm('Vil du logge af?')) {
        localStorage.clear();
    }
})
