import { CanvasView } from "../view/canvas.view";
import { ICommand } from "../models/command.interface";

export class PaintController {
  private commandShapes: ICommand;

  constructor(private canvasView: CanvasView) {
    this.commandShapes  = {
      Square: this.canvasView.drawSquare,
      Circle: this.canvasView.drawCircle,
      Triangle: this.canvasView.drawTriangle,

      execute: function(action) {
        this[action]();
      }
    };

    this.canvasView.canvasClick(this.commandShapes);
  }
  }

  

