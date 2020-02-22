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
            this._firstDice = new objects.Dice(200, 180, true);
            this._secondDice = new objects.Dice(450, 180, true);

            // labels
            this._firstDiceLabel = new objects.Label('Dice 1', "25px", "Verdana", "red", 205, 310, true);
            this._secondDiceLabel = new objects.Label('Dice 2', "25px", "Verdana", "red", 450, 310, true);

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
                //                config.Game.SCENE = scenes.State.PLAY;
            });

        }


    }
}