/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */
'use strict';


function createRectangle (left, top, width, height, stylesMap) {
    var rectangle = createShape(left, top, width, height, stylesMap);
    rectangle.renderShape = function (canvasCtx) {
        canvasCtx.fillRect(left, top, width, height);
    };
    return rectangle;
}

registerPrototypalShape('rectangle', createRectangle);

function createCircle (left, top, width, height, stylesMap) {
    var circle = createShape(left, top, width, height, stylesMap);
    circle.renderShape = function (canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.arc(left, top, radius, 0, 2*Math.PI);
        canvasCtx.fill();
        canvasCtx.closePath();
    };
    return circle;
}

registerPrototypalShape('circle', createCircle);

function createPicture (left, top, width, height, stylesMap) {
    var picture = createShape(left, top, width, height, stylesMap);
    picture.renderShape = function (canvasCtx) {
        var img = document.getElementById("hulk");
        canvasCtx.drawImage(img, left, top, width, height);
    };
    return picture;
}

registerPrototypalShape('picture', createPicture);
