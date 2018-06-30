//usaremos el texture atlas para mostrar imagenes
//alias de los objetos
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    Sprite = PIXI.Sprite;

//generamos el contenedor
var stage = new Container(),
    renderer = autoDetectRenderer(512, 512);
document.body.appendChild(renderer.view);

//Set the canvas's border style and background color
renderer.view.style.border = "1px dashed black";
renderer.backgroundColor = "0xFFFFFF";

loader
    .add("image/atlasdungeon.json")
    .load(setup);
//definimos variables para cada cosa que usaremos en mas de una funcion
var dungeon = undefined,
    explorer = undefined,
    treasure = undefined,
    door = undefined,
    id = undefined;

function setup() {
    //Son dos maneras basicas de crear sprites apartir de loaded texture
    //atlases:
    //1. Access the `TextureCache` directly
    var dungeonTexture = TextureCache["dungeon.png"];
    dungeon = new Sprite(dungeonTexture);
    stage.addChild(dungeon);


    //2. Access the texture using throuhg the loader's `resources`:
    explorer = new Sprite(resources["image/atlasdungeon.json"].textures["explorer.png"]);
    explorer.x = 68;

    //Center the explorer vertically
    explorer.y = stage.height / 2 - explorer.height / 2;
    stage.addChild(explorer);

    //Create an optional alias called `id` for all the texture atlas frame id
    //textures.
    //se sugiere generar esta linea que apunta a las texturas atlas de los objetos textura
    let id = PIXI.loader.resources["image/atlasdungeon.json"].textures;

    //Make the treasure box using the alias
    treasure = new Sprite(id["treasure.png"]);
    stage.addChild(treasure);

    //Position the treasure next to the right edge of the canvas
    treasure.x = stage.width - treasure.width - 48;
    treasure.y = stage.height / 2 - treasure.height / 2;
    stage.addChild(treasure);

    //Make the exit door
    door = new Sprite(id["door.png"]);
    door.position.set(32, 0);
    stage.addChild(door);

    //Make the blobs
    let numberOfBlobs = 6,
        spacing = 48,
        xOffset = 150;

    //Make as many blobs as there are `numberOfBlobs`
    for (let i = 0; i < numberOfBlobs; i++) {

        //Make a blob
        let blob = new Sprite(id["blob.png"]);

        //Space each blob horizontally according to the `spacing` value.
        //`xOffset` determina el punto desde la izquierda de la pantalla
        //en el que debe agregarse el primer blob.
        let x = spacing * i + xOffset;

        //Give the blob a random y position
        //(`randomInt` is a custom function - see below)
        let y = randomInt(0, stage.height - blob.height);

        //Set the blob's position
        blob.x = x;
        blob.y = y;

        //Add the blob sprite to the stage
        stage.addChild(blob);
    }

    //Render the stage   
    renderer.render(stage);
}

//The `randomInt` helper function
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}