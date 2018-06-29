/*
//mostrar un sprite

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
*/

//Mismo codigo de load pero con Los alias
let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

//creamos el stage y el renderer
let stage = new Container(),
    renderer = autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//cargar imagenes y llamar la funcion setup
loader
    .add("image/pixie96x48.png")
    .load(setup);

function setup() {
    //crearemos el sprite y añadiremos este al stage y lo rendereamos
    let pixie = new Sprite(resources["image/pixie96x48.png"].texture);
    stage.addChild(pixie);
    renderer.render(stage);
}