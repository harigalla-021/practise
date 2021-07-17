console.log('Inside script file');

function keydownHandler(event) {
    console.log('Inside keydownHandler', event);
    const { key, keyCode, target: { value } } = event;
    const keydownSpan = document.querySelector('div.keydown > span');
    const content = { key, keyCode, value };
    keydownSpan.innerText = JSON.stringify(content);
}

function keyupHandler(event) {
    console.log('Inside keyupHandler', event);
    const { key, keyCode, target: { value } } = event;
    const keyupSpan = document.querySelector('div.keyup > span');
    const content = { key, keyCode, value };
    keyupSpan.innerText = JSON.stringify(content);
}