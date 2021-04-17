const Musician = require("./Musician")

class Band extends Musician{
    constructor(name, genre, yearCreated, numOfAlbums, members){
        super(name, genre, yearCreated, numOfAlbums)
        this.members = members;
    }
    getMembers(){
        return this.members
    }
    getType(){
        return "Band"
    }
}

module.exports = Band