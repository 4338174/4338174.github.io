// fitty('.fitty-container');
document.getElementById("submit").addEventListener("click", function(){

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let navn = document.getElementById("navn").value;
  let pris = document.getElementById("pris").value;
  let kategori = document.getElementById("kategori").value;
  let producent = document.getElementById("producent").value;
  let image = document.getElementById("image").value;

  var myInit = { method: 'POST',
                 headers: myHeaders,
                 mode: 'cors',
                 cache: 'default',
                 body: JSON.stringify({navn: navn, pris: pris, kategori:  kategori, producent: producent, image: image})};

  var myRequest = new Request('http://localhost:1337/produkt', myInit);

  fetch(myRequest).then(function(response) {
    return response.blob();
  }).then(function(myBlob) {
    console.log("hi");
    var objectURL = URL.createObjectURL(myBlob);
    // myImage.src = objectURL;

  });
  fetchall();
});

$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});

var fetchall = () => {
  fetch("http://localhost:1337/produkt/")
      .then((response) => {
      return response.json();
  })
      .then((data) => {
          var content = document.getElementById('sortable');
          content.innerHTML = '';
          for (var i = 0; i < data.length; i++){
              content.innerHTML += `<li class="ui-state-default" id="produkt-${i}"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span><button type="button" class="slet-btn" data-id="${data[i].id}">slet</button>${data[i].navn}<img src="img/products/${data[i].fk_kategori}e/${data[i].image}"</li>`;
          }
          let deleteButtons = document.querySelectorAll('.slet-btn');
                   deleteButtons.forEach((button) => {
                      button.addEventListener('click', sletProdukt);
                   })

    });

}

document.addEventListener("DOMContentLoaded", fetchall());






// (slet funktionen, bindes til hver slet knap efter alle produkterne er hentet)
function sletProdukt(event) {
  event.preventDefault();
    if (confirm('Er du sikker på at du vil slette dette produkt?')) {
        let id = (isNaN(event.target.dataset['id']) ? 0 : event.target.dataset['id']);

      // let headers = new Headers();
      //   headers.append('Content-Type', 'application/json');

      let init = {
            method: 'delete',
            // headers: headers,
            mode: 'cors',
            cache: 'no-cache'
        };
        let request = new Request(`http://localhost:1337/produkt/delete/${id}`, init);

console.log(id);
      fetch(request)
            .then(response => {
                if (response.status == 204) {
                    // window.location.replace(`produkter.html`);
                    fetchall();
                } else {
                    throw new Error('Produkt blev ikke slettet');
                }
            }).catch(err => {
                console.log(err);
            });
    }
}
