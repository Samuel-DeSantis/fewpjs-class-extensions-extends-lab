class Polygon {
    constructor (sidesArray) {this.sidesArray = sidesArray}

    get countSides () {return this.sidesArray.length}

    get perimeter () {
        return this.sidesArray.reduce( (side,acc) => {
            return side + acc
        },0)
    }
}

class Triangle extends Polygon {
    get isValid () {
        if (this.countSides === 3) {
            let sortedSides = this.sidesArray.sort()
            return sortedSides[0] + sortedSides[1] > sortedSides[2]
        }
    }
}

class Square extends Polygon {
    get isValid () {
        if (this.countSides === 4) {
            let sample = this.sidesArray[0]
            return !Boolean(this.sidesArray.find( num => num != sample ))
        }
    }

    get area () {
        if (this.isValid) return this.sidesArray[0] ** 2
    }
}