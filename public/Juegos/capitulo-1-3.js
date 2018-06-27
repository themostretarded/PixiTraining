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
    .add("image/cat64x64.png")
    .load(setup);

function setup() {
    //crearemo el sprite y añadiremos este al stage y lo rendereamos
    let cat = new Sprite(resources["image/cat64x64.png"].texture);

    //cambiamos la posicion del sprite
    /*cat.x = 96;
    cat.y = 128;*/
    cat.position.set(96,126);
    //cambiar tamaño
    cat.width = 80;
    cat.height = 120;

    //en una sola linea scalo
    cat.scale.set(0.5,0.5);
    /*
    cat.scale.x = 0.5;
    cat.scale.y = 0.5;
    */

    
    //añadir el gato al stage
    stage.addChild(cat);

    renderer.render(stage);
}