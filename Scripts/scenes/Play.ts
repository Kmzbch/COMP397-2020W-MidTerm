// Author: Kei Mizubuchi(30093630)
// Date: Feb 22, 2020
// Description: 
// COMP397 Web Game Programming Mid-term test.
// Player rolls two dice with the roll button and get the result on the Play scene

module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS

        private _firstDieLabel: objects.Label
        private _secondDieLabel: objects.Label
        private _firstDie: objects.Die;
        private _secondDie: objects.Die;

        private _rollButton: objects.Button;

        private _nextButton: objects.Button;


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
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 400, 430, true);
            this._nextButton = new objects.Button(config.Game.ASSETS.getResult("nextButton"), 580, 430, true);

            // dice
            this._firstDie = new objects.Die(config.Game.ASSETS.getResult("blank"), 360, 180, true);
            this._secondDie = new objects.Die(config.Game.ASSETS.getResult("blank"), 600, 180, true);

            // labels
            this._firstDieLabel = new objects.Label('?', "25px", "Verdana", "red", 370, 310, true);
            this._secondDieLabel = new objects.Label('?', "25px", "Verdana", "red", 600, 310, true);

            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {

            this.addChild(this._rollButton);
            this.addChild(this._firstDie);
            this.addChild(this._secondDie);
            this.addChild(this._firstDieLabel);
            this.addChild(this._secondDieLabel);

            this._rollButton.on("click", () => {
                this._rollDice()
            });

            // for bonus
            this.addChild(this._nextButton);
            this._nextButton.on("click", () => {
                config.Game.SCENE = scenes.State.NEXT;
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
            let outcome: objects.Die[] = [];
            let outcomeNumber: number[] = [];

            // for (let spin: number = 0; spin < 3; spin++) {
            for (let roll: number = 0; roll < 2; roll++) {
                let result: number = Math.floor(util.Mathf.RandomRange(1, 6));

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

            this._firstDie = outcome[0];
            this._firstDie.x = 360;
            this._firstDieLabel.text = outcomeNumber[0].toString();

            this._secondDie = outcome[1];
            this._secondDie.x = 600;
            this._secondDieLabel.text = outcomeNumber[1].toString();

            this.addChild(this._firstDie);
            this.addChild(this._secondDie);


        }

    }

}