import ICircle from "../models/shapes/circle";
import ISquare from "../models/shapes/square";

export class CanvasView{

    private shapesForm: HTMLElement;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(private view: Document){
        this.init();
    }

    init():void{

        this.shapesForm = this.view.getElementById('menu1');
        this.canvas= this.view.getElementById('mycanvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');


       this.draw();
       this.formValue();
    }

     draw() {
        this.canvas.addEventListener('click', (event)=> {
            const coordinates = this.getLocalClickCoords(event, this.canvas)
            const parameters={
                axisX: coordinates.x,
                axisY: coordinates.y,
                height: 100,
                width: 100
            }
            this.drawSquare(parameters)

        });
    }

    formValue(){
        this.shapesForm.addEventListener('click', 
        e => console.log((e.target as HTMLInputElement).value))
    }

     getLocalClickCoords = (event, parent) =>{
        return {
            
            x: event.clientX - parent.offsetLeft,
            y: event.clientY - parent.offsetLeft,
        }
    }
    

    

    drawSquare = (parameters: ISquare) => {

       
        const { axisX, axisY, height, width } = parameters
        
        
        this.context.fillRect(axisX, axisY, height, width)

    }

    drawCircle = (parameters: ICircle) => {

        const {  axisX, axisY, size } = parameters


        this.context.beginPath();
        this.context.arc(axisX, axisY, size, 0, 2 * Math.PI);
        this.context.stroke();
    }

    


}