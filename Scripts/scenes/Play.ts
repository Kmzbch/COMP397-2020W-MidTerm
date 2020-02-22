// Author: Kei Mizubuchi(30093630)
// Date: Feb 22, 2020
// Description: 
// COMP397 Web Game Programming Mid-term test.
// Player rolls two dice with the roll button and get the result on the Play scene

module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS

        private _firstDiceLabel: objects.Label
        private _secondDiceLabel: objects.Label
        private _firstDice: objects.Dice;
        private _secondDice: objects.Dice;

        private _rollButton: objects.Button;


        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void {

            // buttons
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);

            // dice
            this._firstDice = new objects.Dice(config.Game.ASSETS.getResult("blank"), 200, 180, true);
            this._secondDice = new objects.Dice(config.Game.ASSETS.getResult("blank"), 450, 180, true);

            // labels
            this._firstDiceLabel = new objects.Label('?', "25px", "Verdana", "red", 200, 310, true);
            this._secondDiceLabel = new objects.Label('?', "25px", "Verdana", "red", 450, 310, true);

            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {

            this.addChild(this._rollButton);
            this.addChild(this._firstDice);
            this.addChild(this._secondDice);
            this.addChild(this._firstDiceLabel);
            this.addChild(this._secondDiceLabel);

            this._rollButton.on("click", () => {
                this._rollDice()
            });

        }

        /**
         * _rollDice function
         * removes dice objects from the play scene and attach
         * new dice objects according to the random numbers generated 
         * @private
         * @memberof Play
         */
        private _rollDice(): void {
            let outcome: objects.Dice[] = [];
            let outcomeNumber: number[] = [];

            // for (let spin: number = 0; spin < 3; spin++) {
            for (let roll: number = 0; roll < 2; roll++) {
                let result: number = Math.floor(util.Mathf.RandomRange(1, 6));

                // determine symbols
                switch (result) {
                    case 0:
                        outcome[roll] = new objects.Dice(config.Game.ASSETS.getResult("blank"), 0, 180, true);
                        break;
                    case 1:
                        outcome[roll] = new objects.Dice(config.Game.ASSETS.getResult("1"), 0, 180, true);
                        break;
                    case 2:
                        outcome[roll] = new objects.Dice(config.Game.ASSETS.getResult("2"), 0, 180, true);
                        break;
                    case 3:
                        outcome[roll] = new objects.Dice(config.Game.ASSETS.getResult("3"), 0, 180, true);
                        break;
                    case 4:
                        outcome[roll] = new objects.Dice(config.Game.ASSETS.getResult("4"), 0, 180, true);
                        break;
                    case 5:
                        outcome[roll] = new objects.Dice(config.Game.ASSETS.getResult("5"), 0, 180, true);
                        break;
                    case 6:
                        outcome[roll] = new objects.Dice(config.Game.ASSETS.getResult("6"), 0, 180, true);
                        break;
                    default:
                        outcome[roll] = new objects.Dice(config.Game.ASSETS.getResult("blank"), 0, 180, true);
                }
                outcomeNumber[roll] = result;
            }

            // reset symbols
            this.removeChild(this._firstDice);
            this.removeChild(this._secondDice);

            this._firstDice = outcome[0];
            this._firstDice.x = 200;
            this._firstDiceLabel.text = outcomeNumber[0].toString();

            this._secondDice = outcome[1];
            this._secondDice.x = 450;
            this._secondDiceLabel.text = outcomeNumber[1].toString();

            this.addChild(this._firstDice);
            this.addChild(this._secondDice);

        }

    }

}