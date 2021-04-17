class Musician {
    constructor(name, genre, yearCreated, numOfAlbums){
        this.name = name;
        this.genre = genre;
        this.yearCreated = yearCreated;
        this.numOfAlbums = numOfAlbums;
    }
    getName(){
        return `Hello, ${this.name}` 
    }
    getType(){
        return "Musician"
    }
}

module.exports = Musician