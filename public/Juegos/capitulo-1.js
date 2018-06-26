//test that pixi is working-- console.log(PIXI);

//crer el renderizador
let renderer = PIXI.autoDetectRenderer(256,256);

/*para forzar canvas drawingapi sobre opengl usa
let renderer = new PIXI.CanvasRenderer(256,256);
y esto es para forzar la otra manera
let renderer = new PIXI.WebGLRenderer(256,256);
*/

//añadir canvas al documento html
document.body.appendChild(renderer.view);

//crear el contener un objeto llamado stage(escenario)
let stage = new PIXI.Container();

renderer.render(stage);

/*
una imagen en el formato para webgl se le llama textura
el texture cache almacena y referencia todas las texturas de los sprites
los nombres de textura son string de la direccion de donde salio
puedes encontrar tus texturas asi
PIXI.utils.TexturaCache["image/anyImage.png"];
de la siguiente manera es el modo en el que podemos convertir una imagen en textura
para que el pixirenderer pueda ser mas eficiente
let texture = PIXI.utils.TextureCache["image/anyImage.png"];
let sprite = new PIXI.Sprite(texture);
*/
/*como cargar las texturas o imagenes

PIXI.loader
    .add("laimagn.png")
    .load(setup);
function setup(){

}
el equipo de pixi recomienda crear el sprite refieriendo a la textura del objeto loader
let sprite = new PIXI.Sprite(PIXI.loader.resources("laimagen").texture)

PIXI.loader
    .add("image.png")
    .load(setup);
function setup(){
    let sprite = new PIXI.Sprite(PIXI.loader.resources("image.png").texture);
}

tambien se puede encadenar varias imagenes
PIXI.loader
    .add("imagen")
    .add("imagen")
    .add("imagen")
    .add("imagen")
    .load(setup);
    segun esto tambien se puede encadenar metodos y se ejecutaran por metodos

O puedes enlistar todos los archivos que quieres descargar en un solo metodo add
PIXI.loader
    .add([
        "images/imagen.png",
        "images/imagen.png",
        "images/imagen.png"
    ])
    .load(setup);
*/