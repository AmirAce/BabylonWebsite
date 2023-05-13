import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";

class App {
    constructor() {
        // create the canvas html element and attach it to the webpage
        const canvas = document.createElement("canvas");
        //make the canvas fit the screen
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.position = 'fixed';
        canvas.style.bottom = '0';
        canvas.style.right = '0';
    
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        // initialize babylon scene and engine
        const engine = new Engine(canvas, true);
        const scene = new Scene(engine);

        const camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        const light1 = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        // const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
        // BABYLON.SceneLoader.Append("./public/textures/pizza", "scene.gltf", scene);
        // hide/show the Inspector
        // camera.target = result.meshes[0];
        const box = BABYLON.CreateBox("box", undefined, undefined);
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });

        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
        window.addEventListener("resize", function () {
            engine.resize();
          });
    }
}
new App();
