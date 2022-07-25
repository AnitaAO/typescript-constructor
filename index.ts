// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>TypeScript Constructor</h1>
  <p>Constructors can be added to the class just like functions, filters and variables</p>
  <p>Parameters in the constructor can be made optional with "?"</p>
  <p>The constructor uses "this" to concatenate and add values to an object's element</p>
  <p>If "?" => optional in a constructor, all other parameter must be assigned same.</p>
  <p>So, this.x = x, and this.y = y used declared inside the object earlier is declared now in the constructor</P>
  <p>While the object is only assigned the class name of the parent constructor being referenced</p>
`

class Point {
  x: any;
  y: any;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  
  draw() {
    console.log('X: ' + this.x + ', ' + 'Y: ' + this.y)
  }
}

let point = new Point();
point.draw();