import { expect } from "chai";
import { before, beforeEach, describe } from "mocha";
import * as sinon from "sinon";
import * as robotjs from "robotjs";
import { Keyboard } from "../src/keyboard";

describe("Keyboard", () => {
  let sandbox: sinon.SinonSandbox;
  let keyToggle: sinon.SinonStub;
  let keyTab: sinon.SinonSpy;
  let typeString: sinon.SinonSpy;

  let toggleValue: {[key: string]: string } = {};
  function keyToggleMock(key: string, value: string) {
    toggleValue[key] = value;
  }


  before(() => {
    sandbox = sinon.createSandbox();
    keyToggle = sandbox.stub(robotjs, "keyToggle");
    keyToggle.callsFake(keyToggleMock);
    keyTab = sandbox.stub(robotjs, "keyTap");
    typeString = sandbox.stub(robotjs, "typeStringDelayed");
  });

  beforeEach(() => {
    sandbox.reset();
    keyToggle.callsFake(keyToggleMock);
    toggleValue = {};
  });

  after(() => {
    sandbox.restore();
  });

  describe("pressKey", () => {
    it("should press a 'shift' key", () => {
      Keyboard.pressKey('shift');

      expect(keyTab.callCount).is.equal(1);
      expect(keyTab.args).is.eqls([["shift"]]);
    })
  })

  describe("pressKeyDown", () => {
    it("should press down a 'shift' key", () => {
      Keyboard.pressKeyDown('shift');

      expect(keyToggle.callCount).is.equal(1);
      expect(keyToggle.args).is.eqls([["shift", "down"]]);
      expect(toggleValue["shift"]).is.equal('down');
    })

    it("shouldn't change key state if it is already pressed", () => {
      Keyboard.pressKeyDown('shift');
      Keyboard.pressKeyDown('shift');
      Keyboard.pressKeyDown('shift');
      Keyboard.pressKeyDown('shift');

      expect(keyToggle.callCount).is.equal(4);
      expect(keyToggle.args).is.eqls([["shift", "down"], ["shift", "down"], ["shift", "down"], ["shift", "down"]]);
      expect(toggleValue["shift"]).is.equal('down');
    })
  })

  describe("pressKeyUp", () => {
    it("should press up a 'e' key", () => {
      Keyboard.pressKeyDown('e');

      expect(toggleValue["e"]).is.equal('down');
      Keyboard.pressKeyUp('e');

      expect(keyToggle.callCount).is.equal(2);
      expect(keyToggle.args).is.eqls([["e", "down"], ["e", "up"]]);
      expect(toggleValue["e"]).is.equal('up');
    })

    it("shouldn't change key state if it is already released", () => {
      Keyboard.pressKeyUp('a');
      Keyboard.pressKeyUp('a');
      Keyboard.pressKeyUp('a');
      Keyboard.pressKeyUp('a');

      expect(keyToggle.callCount).is.equal(4);
      expect(keyToggle.args).is.eqls([["a", "up"], ["a", "up"], ["a", "up"], ["a", "up"]]);
      expect(toggleValue["a"]).is.equal('up');
    })
  })

  describe("typeText", () => {
    it("should type a text", () => {
      Keyboard.typeText('I am an example text');

      expect(typeString.callCount).is.equal(1);
      expect(typeString.args).is.eqls([["I am an example text", 90]]);
    })
  })
})
