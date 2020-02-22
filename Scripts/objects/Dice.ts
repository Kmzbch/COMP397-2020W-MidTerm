// Author: Kei Mizubuchi(30093630)
// Date: Feb 22, 2020
// Description: 
// COMP397 Web Game Programming Mid-term test.
// Player rolls two dice with the roll button and get the result on the Play scene
module objects {
    export class Dice extends GameObject {
        // PRIVATE INSTANCE MEMBERS

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor(imageOrUri: string | Object,
            x: number = 0, y: number = 0, public isCentered: boolean = false
        ) {
            super(imageOrUri, x, y, isCentered);

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