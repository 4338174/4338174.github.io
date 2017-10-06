var searched = false;
//var typing = false;
var detailproduct = false;

var fetchproducts = (kategori) => {
    fetch("http://localhost:1337/produkt/" + kategori)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        
        //Insert data into index.html
        var index = () => {
            var content = document.getElementById('products');
            content.innerHTML = '';
            for (var i = 0; i < 6; i++){
                content.innerHTML += `<div class="item  col-xs-4 col-lg-4 list-group-item" value="" onclick="productdetail(`
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
        


            var søg = () => {
            $('.text').remove();
            $('#box').remove();
            var content = document.getElementById('product_view');
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
                console.log(searched);
            }
            searched = false;
        }

        var søgpreview = () => {
            var content = document.getElementById('searchwords');
//            content.innerHTML = '';
            for (var i = 0; i < data.length; i++){
                content.innerHTML += `<option value="`+ data[i].navn +`" onclick="productdetail(`
                    + data[i].id
                    + `)">`;
            }
        }


        var detailpage = () => {
            $('.text').remove();
            $('#box').remove();
            var content = document.getElementById('product_view');
            content.innerHTML = '';
            for (var i = 0; i < data.length; i++){
                content.innerHTML += `
                <div id="productviewgrid">
                <img class="productimage" src="img/products/`
                    + data[i].fk_kategori
                    + 'e/'
                    + data[i].image
                    + `" alt="" />
                <h4 class="producttitle">`
                    + data[i].navn
                    + `</h4>
                <ul class="productdescription">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                <p class="productprice">
                <span class="left1">Pris:</span><span class="right1">`
                    + data[i].pris
                    + ` €</span>
                <span class="left2">Antal:</span><span class="right2"><input type="number" value="1" name="quantity" min="1" max="20" class="right2"></span>
                <button class="productbutton" type="button">Køb</button>
                </p>
            </div>
            `;
            }
            detailproduct = false;
        }

        var forside = document.getElementById('forside');
        var produktside = document.getElementById('produktside');
        if (forside != null && searched == false && detailproduct == false) {søgpreview(); index();}
        if (produktside != null && searched == false && detailproduct == false) {søgpreview(); products();}
        if (searched == true) søg();
//        if (typing == true) søgpreview();
        if (detailproduct == true) detailpage();
    })
}

//var fetchproductsrealtime = (s) => {
//    fetch("http://localhost:1337/produkt/" + s)
//        .then((response) => {
//        return response.json();
//    })
//        .then((data) => {
//        var content = document.getElementById('searchpreview');
//            content.innerHTML = '';
//            if (document.getElementById('search-bar').value == '') {content.innerHTML = ''} else {
//                content.innerHTML = '';
//                for (var i = 0; i < data.length; i++){
//                    content.innerHTML += `<li>`+ data[i].navn +`</li>`;
//                    console.log(typing);
//                }
//            }
//            typing = false;
//    })
//}
fetchproducts("");

var selectkategori = () => {
    var select = document.getElementById('whichcategory');
    var selectvalue = select.options[select.selectedIndex].value;
    fetchproducts(selectvalue);
}

var find = () => {
    searched = true;
    fetchproducts("search/" + document.getElementById('search-bar').value);
    $('.btn-navbar').click();
    $('.navbar-toggle').click()
}

//var searchpreview = () => {
//    typing = true;
//    fetchproductsrealtime("search/" + document.getElementById('search-bar').value);
//}

var productdetail = (id) => {
    detailproduct = true;
    fetchproducts("id/" + id);
}

var searchbar = document.getElementById('search-bar');
var searchbutton = document.getElementById('list');
searchbar.addEventListener("change", find);
//searchbar.addEventListener("keyup", searchpreview);
searchbutton.addEventListener("click", find);

$('.navbar-toggle').on("click", () => {setTimeout(function(){$("#search-bar").focus();}, 0)});
