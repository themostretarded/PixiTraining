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
    //crearemos el sprite y añadiremos este al stage y lo rendereamos
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
   rotacion se hace con la siguiente linea
   cat.rotation = 0.5;
   en la esquina superior izquierda se encuentran el punto llamado anchor point
   es ahi partir de este que se hace el giro, para cambiar el punto de rotacion
   se usa lo siguente
   cat.anchor.x = 0.5;
   cat.anchor.y = 0.5;
   Pero esto solo cambia el posicionamiento de la textura no cambias en si el lugar
   del anchor
   podemos poner el anchor en una sola linea de codigo
   sprite.anchor.set(x,y);
   El pivote es una propiedad que trabaja igual que el anchor
   este se coloca asi
   cat.pivot.set(32,32);
   la unica diferencia entre estos dos es como se posicionas anchor lo hace con datos
   normalizados(0 a 1) y pivot lo hace con pixeles
   */

    
    //añadir el gato al stage
    stage.addChild(cat);

    renderer.render(stage);
}