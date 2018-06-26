//mostrar un sprite
//import * as PIXI from './../js/version3/pixi';
//creamos el stage y el renderer
let stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//usamos el objeto pixi buil-it loader para cargar la imagen
PIXI.loader.add("image/pixie96x48.png").load(setup);
// esta funcion setup va acorrer cuando la imagen esta cargada
function setup() {
    //crearemos el sprite desde las texturas
    let pixie = new PIXI.Sprite(
        PIXI.loader.resources["image/pixie96x48.png"].texture
    );
    //añadimos el sprite al stage
    stage.addChild(pixie);

    //renderizamos el stage
    renderer.render(stage);
}