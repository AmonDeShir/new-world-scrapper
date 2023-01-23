import { expect } from "chai";
import { before, beforeEach, describe } from "mocha";
import * as sinon from "sinon";
import * as robotjs from "robotjs";
import { Mouse } from "../src/mouse";

describe("Mouse", () => {
  let sandbox: sinon.SinonSandbox;
  let moveSpy: sinon.SinonSpy;
  
  before(() => {
    sandbox = sinon.createSandbox();
    moveSpy = sandbox.spy(robotjs, "moveMouse");
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
})
