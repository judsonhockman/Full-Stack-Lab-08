// These are the variable labels for the input buttons
var inputSquareSide = document.getElementById('input-square-side');
var inputRectangleWidth = document.getElementById('input-rectangle-width');
var inputRectangleHeight = document.getElementById('input-rectangle-height');
var inputTriangleHeight = document.getElementById('input-triangle-height');
var inputCircleRadius = document.getElementById('input-circle-radius');

// These are the variable labels for the <span> IDs
var shapeNameLabel = document.getElementById('shape-name');
var shapeWidthLabel = document.getElementById('shape-width');
var shapeHeightLabel = document.getElementById('shape-height');
var shapeRadiusLabel = document.getElementById('shape-radius');
var shapeAreaLabel = document.getElementById('shape-area');
var shapePerimterLabel = document.getElementById('shape-perimeter');


var canvas = document.getElementById('canvas');

document.getElementById('square-button').addEventListener('click', createSquare);
document.getElementById('rectangle-button').addEventListener('click', createRectangle);
document.getElementById('triangle-button').addEventListener('click', createTriangle);
document.getElementById('circle-button').addEventListener('click', createCircle);

function createCircle() {
    var inputRadius = inputCircleRadius.value;
    new Circle(inputRadius);
}
function createTriangle() {
    new Triangle(inputTriangleHeight.value);
}
function createRectangle() {
    new Rectangle(inputRectangleWidth.value, inputRectangleHeight.value);
}
function createSquare() {
    new Square(inputSquareSide.value);
}
function Shape(width, height) {
    this.width = width;
    this.height = height;
}
Shape.prototype.draw = function() {
    this.div = document.createElement('div');
    this.div.className = 'shape ' + this.cssClass;

var x = Math.floor(Math.random() * (600 - this.width));
var y = Math.floor(Math.random() * (600 -this.height));

this.div.style.width = this.width + 'px';
this.div.style.height = this.height + 'px';

this.div.style.top = y + 'px';
this.div.style.left = x + 'px';
this.div.style.width = this.width + 'px';
this.div.style.height = this.height + 'px';

this.div.addEventListener('click', this.describe.bind(this));

canvas.appendChild(this.div);
}

Shape.prototype.describe = function() {
    shapeNameLabel.innerHTML = this.constructor.name;
    shapeWidthLabel.innerHTML = this.width;
    shapeHeightLabel.innerHTML = this.height;
    shapeRadiusLabel.innerHTML = this.radius;
    shapeAreaLabel.innerHTML = this.area();
    shapePerimeterLabel.innerHTML = this.perimeter();
}
function Circle(radius) {
    Shape.call(this, 2 * radius, 2 * radius);
    this.radius = radius;
    this.cssClass = 'circle';
    this.draw();
}


Circle.prototype = Object.create(Shape.prototype); // has to be first
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius;
    // or return Math.PI * Math.pow(this.radius, 2);
}

Circle.prototype.perimeter = function() {
    return 2 * Math.PI * this.radius
}


function Triangle(height) {
 Shape.call(this, height, height);
 this.cssClass = 'triangle';
 this.draw();
 this.div.style.width = '0';
 this.div.style.height = '0';
 this.style.borderRightWidth = height + 'px';
 this.style.borderBottomWidth = height + 'px';
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype .constructor = Triangle;

Triangle.prototype.area = function () {
    return 0.5 * this.height * this.height;
}
Triangle.prototype.perimeter = function() {
    return 2 * this.height + Math.sqrt(2 * Math.pow(this.height, 2));
}
function Rectangle(width, height) {
    Shape.call(this, width, height);
    this.cssClass = 'rectangle';
    this.draw();
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return this.width * this.height;
}

Rectangle.prototype.perimeter = function() {
    return 2 * this.width + 2 * this.height;
}

function Square(side) {
    Rectangle.call(this, side, side);
    this.cssClass = 'square';
    this.div.classList.remove('rectangle');
    this.div.classList.add(this.cssClass);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;





















function Square(side) {
    Rectangle.call(this, side, side);
    this.cssClass = 'square';
    this.div.classList.remove('rectangle');
    this.div.classList.add(this.cssClass);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;