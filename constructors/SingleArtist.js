const Musician = require("./Musician")

class SingleArtist extends Musician {
    constructor(name, genre, yearCreated, numOfAlbums, collaborations){
       super(name, genre, yearCreated, numOfAlbums)
       this.collaborations = collaborations
    }
    getCollaborations(){
        return this.collaborations;
    }
    getType(){
        return "Single Artist"
    }
}

module.exports = SingleArtist