let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

let stage = new Container(),
    renderer = autoDetectRenderer(256,256);
document.body.appendChild(renderer.view);

//Set the canvas's border style and background color
renderer.view.style.border = "1px dashed black";
renderer.backgroundColor = "0xFFFFFF";

loader
    .add("image/tileset.png")
    .load(setup);

function setup(){
    //creamos el tileset desde las textura
    let texture = TextureCache["image/tileset.png"];

    /*
    creamos un rectangulos que definimos la posicion
     y tamaño de la sub-imagen que quieres sacar
     */
    let rectangle = new Rectangle(160,256,32,32);

    /*
    dile a la texture que use ese rectangulo para cortar
    ya que eso lo hace frame
    */
    texture.frame = rectangle;

    texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    //creamos el sprite desde la textura
    let adventuress = new Sprite(texture);

    //posicionamos el sprite
    adventuress.x = 64;
    adventuress.y = 64;

    //lo escalamos a 3 veces su tamaño
    adventuress.scale.set(3,3);

    //ahora ya configurado lo añadimos al stage
    stage.addChild(adventuress);
    //y lo rendereamos
    renderer.render(stage);
}

/*
el objeto rectangulo es un objeto para referencias la parte que queremos de una imagen
el objeto pixi texture tiene un propiedad llamada frame que puede ser añadida en cada
objeto rectangulo, el frame puede cortar la textura de las dimensiones del rectangulo

Como crear una sub imagen es una tarea comun nos recomiendan usar la siguiente funcion frame para
ayudarnos a automatizar esto
esta es un modo para usar la funcion frame para automatizar esto
function frame(source,x,y,width,height){
    let texture,imageFrame;
    //si la fuente es un string y es cualquer textura en el cache o una archivo de imagen
    if(typeof source === "string"){
        if(TextureCache[source]){
            texture = new Texture(TextureCache[source])
        }
    }
    //si la fuente es una textura usamos esto
    else if(source instanceof Texture){
        texture = new Texture(source);
    }
    if(!texture){
        console.log('Please load the ${source} texture into the cache');
    } else {
        // haz un rectangulo del tamaño de una sub imagen
        imageFrame = new Rectangle(x,y,witdh,height);
        texture.frame = imageFrame;
    }
}
Ya con esa funcion podemos usar el sprite de la siguiente forma
let adventuress = new Sprite(
    frame("image/tileset.png",360,252,32,32);
);
Algunas ocaciones el gpu no siempre le atina donde termina un pixel y comienza el otro
a esto se le llama texture bleed. Esto se muestra que nuestra imagen trae consigo otra
porcion de otra imagen vecina consigo
para arrlegar eso se usa esta linea de codigo
texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
*/