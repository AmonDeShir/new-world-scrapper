import { moveMouse, mouseClick } from "robotjs";

export namespace Mouse {
  export function move(x: number, y: number) {
    moveMouse(x, y);
  }

  export function leftClick() {
    mouseClick("left", false);
  }

  export function rightClick() {
    mouseClick("right", false);
  }

  export function leftDBClick() {
    mouseClick("left", true);
  }

  export function rightDBClick() {
    mouseClick("right", true);
  }
}