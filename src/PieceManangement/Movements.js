// This class will contain the necessary information about whether a movement is legal or not for a piece.
// The directions array works the following way:
// north, east, south, west = 0,1,2,3
// north-west, north-east, south-east, south-west = 4,5,6,7

class Movements {
    constructor(straight, diagonal) {
        this.directions = new Array(8);

        this.straight(straight);
        this.diagonal(diagonal);
    }

    straight(straight) {
        for (let index = 0; index < 4; index++) {
            this.directions[index] = straight[index];
        }
    }

    diagonal(diagonal) {
        for (let index = 0; index < 4; index++) {
            this.directions[index] = diagonal[index];
        }
    }
}

export default Movements;