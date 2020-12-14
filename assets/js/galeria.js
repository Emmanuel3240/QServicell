var imagenes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24];
var galeria = document.getElementById('galeria');

for (imagen of imagenes) {
    galeria.innerHTML += `
    <div class="card">
<a href="#" data-toggle="modal" data-target="#id${imagen}">
    <img id="imgGal" class="card-img-top" src="../gal/${imagen}.jpg" alt="">
</a>
</div>

<!-- Modal -->
<div class="modal" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
aria-hidden="true">

<button type="button" class="close mr-2" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
</button>

<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <img src="../gal/${imagen}.jpg" alt="" class="img-fluid rounded">
</div>
</div>`
}