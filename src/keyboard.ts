import { keyTap, keyToggle, typeStringDelayed } from "robotjs";

export namespace Keyboard {
  /**
   * 
   * @param key 
   * See http://robotjs.io/docs/syntax#keys
   */
  export function pressKey(key: string) {
    keyTap(key);
  }

  /**
   * 
   * @param key 
   * See http://robotjs.io/docs/syntax#keys
   */
  export function pressKeyDown(key: string) {
    keyToggle(key, "down");
  }

  /**
   * 
   * @param key 
   * See http://robotjs.io/docs/syntax#keys
   */
  export function pressKeyUp(key: string) {
    keyToggle(key, "up");
  }

  /**
   * Emulate typing text on keyboard with speed of 90cpm
   */
  export function typeText(text: string) {
    typeStringDelayed(text, 90)
  }
}