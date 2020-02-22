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
var objects;
(function (objects) {
    /**
     * Author: Kei Mizubuchi(30093630)
     * Date: Feb 22, 2020
     * Description:
     * COMP397 Web Game Programming Mid-term test.
     * Player rolls two dice with the roll button and get the result on the Play scene
     *
     * @export
     * @class Dice
     * @extends {GameObject}
     */
    var Die = /** @class */ (function (_super) {
        __extends(Die, _super);
        // PRIVATE INSTANCE MEMBERS
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Die(imageOrUri, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, imageOrUri, x, y, isCentered) || this;
            _this.isCentered = isCentered;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Die.prototype._checkBounds = function () {
        };
        // PUBLIC METHODS
        Die.prototype.Start = function () {
        };
        Die.prototype.Update = function () {
        };
        Die.prototype.Reset = function () {
        };
        return Die;
    }(objects.GameObject));
    objects.Die = Die;
})(objects || (objects = {}));
//# sourceMappingURL=Die.js.map