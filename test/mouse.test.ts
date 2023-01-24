import { expect } from "chai";
import { before, beforeEach, describe } from "mocha";
import * as sinon from "sinon";
import * as robotjs from "robotjs";
import { Mouse } from "../src/mouse";

describe("Mouse", () => {
  let sandbox: sinon.SinonSandbox;
  let moveSpy: sinon.SinonSpy;
  let clickSpy: sinon.SinonSpy;
  
  before(() => {
    sandbox = sinon.createSandbox();
    moveSpy = sandbox.stub(robotjs, "moveMouse");
    clickSpy = sandbox.stub(robotjs, "mouseClick");
  });

  beforeEach(() => {
    sandbox.reset();
  });

  after(() => {
    sandbox.restore();
  });

  describe("click", () => {
    it("should move mouse to 10 10", () => {
      Mouse.move(10, 10);

      expect(moveSpy.callCount).is.equal(1);
      expect(moveSpy.args).is.eqls([[10, 10]]);
    })
  })

  describe("leftClick", () => {
    it("should emulate mouse left click", () => {
      Mouse.leftClick();

      expect(clickSpy.callCount).is.equal(1);
      expect(clickSpy.args).is.eqls([["left", false]]);
    })
  })

  describe("rightClick", () => {
    it("should emulate mouse right click", () => {
      Mouse.rightClick();

      expect(clickSpy.callCount).is.equal(1);
      expect(clickSpy.args).is.eqls([["right", false]]);
    })
  })

  describe("leftDBClick", () => {
    it("should emulate mouse double click", () => {
      Mouse.leftDBClick();

      expect(clickSpy.callCount).is.equal(1);
      expect(clickSpy.args).is.eqls([["left", true]]);
    })
  })

  describe("rightDBClick", () => {
    it("should emulate mouse double click", () => {
      Mouse.rightDBClick();

      expect(clickSpy.callCount).is.equal(1);
      expect(clickSpy.args).is.eqls([["right", true]]);
    })
  })

})
