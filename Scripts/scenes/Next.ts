module scenes {
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
    export class Next extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        // labels
        private _titleLabel: objects.Label
        private _resultLabel: objects.Label
        // dice labels
        private _firstDieLabel: objects.Label
        private _secondDieLabel: objects.Label
        private _thirdDieLabel: objects.Label
        private _fourthDieLabel: objects.Label
        // dice
        private _firstDie: objects.Die;
        private _secondDie: objects.Die;
        private _thirdDie: objects.Die;
        private _fourthDie: objects.Die;

        private _rollButton: objects.Button;
        private _backButton: objects.Button;


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
        }

        public Update(): void {

        }

        public Main(): void {

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

            this._rollButton.on("click", () => {
                this._rollDice()
            });

            // for bonus
            this.addChild(this._backButton);
            this._backButton.on("click", () => {
                config.Game.SCENE = scenes.State.PLAY;
            });


        }

        /**
         * _rollDice function
         * removes dice objects from the play scene and attach
         * new dice objects according to the random numbers generated 
         * @private
         * @memberof Next
         */
        private _rollDice(): void {
            let outcome: objects.Die[] = [];
            let outcomeNumber: number[] = [];

            // for (let spin: number = 0; spin < 3; spin++) {
            for (let roll: number = 0; roll < 4; roll++) {
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

            let sum = outcomeNumber.reduce((a, c) => a + c).toString();

            this._resultLabel.text = "Result: " + sum;

        }

    }

}