module objects {
    export class Dice extends GameObject {
        // PRIVATE INSTANCE MEMBERS


        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor(
            x: number = 0, y: number = 0, public isCentered: boolean = false
        ) {
            super(config.Game.ASSETS.getResult("blank"), x, y, isCentered);

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {
        }


        // PUBLIC METHODS
        public Start(): void {

        }

        public Update(): void {
        }

        public Reset(): void {

        }


    }
}