"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    /**
     *
     * Author: Kei Mizubuchi(30093630)
     * Date: Feb 22, 2020
     * Description:
     * COMP397 Web Game Programming Mid-term test.
     * Scene of 4d6
     *
     * @export
     * @class Next
     * @extends {objects.Scene}
     */
    var Next = /** @class */ (function (_super) {
        __extends(Next, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Next() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Next.prototype.Start = function () {
            // buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 400, 450, true);
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 580, 450, true);
            // dice
            this._firstDie = new objects.Die(config.Game.ASSETS.getResult("blank"), 120, 180, true);
            this._secondDie = new objects.Die(config.Game.ASSETS.getResult("blank"), 350, 180, true);
            this._thirdDie = new objects.Die(config.Game.ASSETS.getResult("blank"), 580, 180, true);
            this._fourthDie = new objects.Die(config.Game.ASSETS.getResult("blank"), 820, 180, true);
            // labels
            this._titleLabel = new objects.Label('Roll 4d6', "25px", "Verdana", "black", 460, 50, true);
            this._resultLabel = new objects.Label('Result: 0', "25px", "Verdana", "black", 460, 380, true);
            this._firstDieLabel = new objects.Label('!', "25px", "Verdana", "red", 120, 310, true);
            this._secondDieLabel = new objects.Label('!', "25px", "Verdana", "red", 350, 310, true);
            this._thirdDieLabel = new objects.Label('!', "25px", "Verdana", "red", 580, 310, true);
            this._fourthDieLabel = new objects.Label('!', "25px", "Verdana", "red", 820, 310, true);
            this.Main();
        };
        Next.prototype.Update = function () {
        };
        Next.prototype.Main = function () {
            var _this = this;
            this.addChild(this._rollButton);
            this.addChild(this._firstDie);
            this.addChild(this._secondDie);
            this.addChild(this._thirdDie);
            this.addChild(this._fourthDie);
            this.addChild(this._titleLabel);
            this.addChild(this._resultLabel);
            this.addChild(this._firstDieLabel);
            this.addChild(this._secondDieLabel);
            this.addChild(this._thirdDieLabel);
            this.addChild(this._fourthDieLabel);
            this._rollButton.on("click", function () {
                _this._rollDice();
            });
            // for bonus
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
        };
        /**
         * _rollDice function
         * removes dice objects from the play scene and attach
         * new dice objects according to the random numbers generated
         * @private
         * @memberof Next
         */
        Next.prototype._rollDice = function () {
            var outcome = [];
            var outcomeNumber = [];
            // for (let spin: number = 0; spin < 3; spin++) {
            for (var roll = 0; roll < 4; roll++) {
                var result = Math.floor(util.Mathf.RandomRange(1, 6));
                // determine symbols
                switch (result) {
                    case 0:
                        outcome[roll] = new objects.Die(config.Game.ASSETS.getResult("blank"), 0, 180, true);
                        break;
                    case 1:
                        outcome[roll] = new objects.Die(config.Game.ASSETS.getResult("1"), 0, 180, true);
                        break;
                    case 2:
                        outcome[roll] = new objects.Die(config.Game.ASSETS.getResult("2"), 0, 180, true);
                        break;
                    case 3:
                        outcome[roll] = new objects.Die(config.Game.ASSETS.getResult("3"), 0, 180, true);
                        break;
                    case 4:
                        outcome[roll] = new objects.Die(config.Game.ASSETS.getResult("4"), 0, 180, true);
                        break;
                    case 5:
                        outcome[roll] = new objects.Die(config.Game.ASSETS.getResult("5"), 0, 180, true);
                        break;
                    case 6:
                        outcome[roll] = new objects.Die(config.Game.ASSETS.getResult("6"), 0, 180, true);
                        break;
                    default:
                        outcome[roll] = new objects.Die(config.Game.ASSETS.getResult("blank"), 0, 180, true);
                }
                outcomeNumber[roll] = result;
            }
            // reset symbols
            this.removeChild(this._firstDie);
            this.removeChild(this._secondDie);
            this.removeChild(this._thirdDie);
            this.removeChild(this._fourthDie);
            this._firstDie = outcome[0];
            this._firstDie.x = 120;
            this._firstDieLabel.text = outcomeNumber[0].toString();
            this._secondDie = outcome[1];
            this._secondDie.x = 350;
            this._secondDieLabel.text = outcomeNumber[1].toString();
            this._thirdDie = outcome[2];
            this._thirdDie.x = 580;
            this._thirdDieLabel.text = outcomeNumber[2].toString();
            this._fourthDie = outcome[3];
            this._fourthDie.x = 820;
            this._fourthDieLabel.text = outcomeNumber[3].toString();
            this.addChild(this._firstDie);
            this.addChild(this._secondDie);
            this.addChild(this._thirdDie);
            this.addChild(this._fourthDie);
            outcomeNumber = outcomeNumber.sort().reverse();
            outcomeNumber.pop();
            var sum = outcomeNumber.reduce(function (a, c) { return a + c; }).toString();
            this._resultLabel.text = "Result: " + sum;
        };
        return Next;
    }(objects.Scene));
    scenes.Next = Next;
})(scenes || (scenes = {}));
//# sourceMappingURL=Next.js.map