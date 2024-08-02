// diff b/w type and interfaces

interface Circle {
    radius: number;
}

interface Rectangle {
    height: number;
    width: number;
}

interface Square {
    side: number;
}

// types let you do ORing and ANDing.

type Shape =  Circle | Rectangle | Square

function drawShape(shape: Shape) {
    console.log("rendered the shape");
}

// based on the parameters we pass the actual shape gets called.
drawShape({
    radius: 10
})
