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