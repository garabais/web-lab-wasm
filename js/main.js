import init, {greet} from "../hello-wasm/pkg/hello_wasm.js";

document.querySelector("#wasmButton").addEventListener('click', () => {
    let nameInput = document.querySelector("#greetName")
    let name = nameInput.value != "" ? nameInput.value : "World"
    init()
    .then(() => {
        greet(name)
    });
})