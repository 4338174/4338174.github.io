var fetchproducts = (kategori) => {
    fetch("http://localhost:1337/produkt/" + kategori)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        
        //Insert data into index.html
        var index = () => {
            var content = document.getElementsByClassName('products');
            content.innerHTML = '';
            for (var i = 0; i < 5; i++){
                content[0].innerHTML += '<div class="prod"><img src="img/products/'+ data[i].fk_kategori + 'e/' + data[i].image + '" alt=""/></div>';
            }
        }
        
        //Insert data into products.html
        var products = () => {
            var content = document.getElementById('products');
            content.innerHTML = '';
            for (var i = 0; i < data.length; i++){
                content.innerHTML += `<div class="item  col-xs-4 col-lg-4 list-group-item" onclick="productdetail(`
                    + data[i].id
                    + `)">
                <div class="thumbnail">
                <img class="group list-group-image" src="img/products/`
                    + data[i].fk_kategori
                    + 'e/' 
                    + data[i].image
                    + `" alt="" />
                <div class="caption"><h4 class="group inner list-group-item-heading">`
                    + data[i].navn
                    + `</h4>
                <p class="group inner list-group-item-text">Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><div class="row"><div class="col-xs-12 col-md-6"><p class="lead">`
                    + data[i].pris 
                    + ` €</p>
                </div><div class="col-xs-12 col-md-6"><a class="btn btn-success" href="">Add to cart</a></div></div></div></div></div>`;
            }
        }
        
        //Insert data into product-view.html
        var productview = () => {
            var content = document.getElementById('products');
            content.innerHTML = '';
            for (var i = 0; i < data.length; i++){
                content.innerHTML += ``;
            }
        }
        var forside = document.getElementById('forside');
        var produktside = document.getElementById('produktside');
        var productview = document.getElementById('productview');
        if (forside != null) index();
        if (produktside != null) products();
        if (productview != null) console.log('productview');
    })
}
fetchproducts("");

var selectkategori = () => {
    var select = document.getElementById('whichcategory');
    var selectvalue = select.options[select.selectedIndex].value;
    fetchproducts(selectvalue);
}

var productdetail = (id) => {
    
}