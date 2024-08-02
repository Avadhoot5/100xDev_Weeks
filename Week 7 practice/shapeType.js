"use strict";
// diff b/w type and interfaces
function drawShape(shape) {
    console.log("rendered the shape");
}
// based on the parameters we pass the actual shape gets called.
drawShape({
    radius: 10
});
