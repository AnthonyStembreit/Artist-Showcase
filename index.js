const inquirer = require("inquirer") 
const Band = require("./constructors/Band")
const SingleArtist = require("./constructors/SingleArtist")
const band1 = new Band("ModestMouse", "Punk", "1999", 2.5, `Drake: Singer <li>Joshua:Drummer</li>`)
const band2 = new Band("Gradueous Volcano", "Orchestral", "1972", 17, `Claudia: Violin <li>Xavior:Triangle</li>`)
const single1 = new SingleArtist("Sandra Owens", "Blues", "1923", 4, "Johnny Depp: on Song 'Pirates Life'")
const single2 = new SingleArtist("Mei", "indie", "2025", 175, "Poppy: on Song 'ladies of the future'")
const musicians = [band1, band2, single1, single2]


function MusicianType(){
    return inquirer.prompt({
        type:"list",
        choices: ["Band", "Single Artist"],
        name:"MusicianType"
    })
}
function MusicianInfo(){
    return inquirer.prompt([{
        type: "input",
        message: "Name:",
        name: "bandName"
    },
    {
        type: "input",
        message: "Genre:",
        name: "bandGenre"
    },
    {
        type: "input",
        message: "# of Albums:",
        name: "numOfAlbum"
    }
])
}
function MusicianDif(res){
    if(res.MusicianType ==="Band"){
     return   inquirer.prompt( {
            type: "input",
            message: "Members:",
            name: "members"
        })
    }
    else if(res.MusicianType ==="Single Artist"){
     return   inquirer.prompt( {
            type: "input",
            message: "Collaborations:",
            name: "collaborations"
        })
    }
    else{
     return   console.log(res.MusicianType)
    }
    
}
function AddMusician(){
    return inquirer.prompt(
        {
            type: "confirm",
            message: "Do you want to make another Musician?",
            name: "continue"
        }
    )
} 
InquireMusicianProccess()
function InquireMusicianProccess() {

    MusicianType().then(type => {
        MusicianDif(type).then(dif =>{
            MusicianInfo().then(res =>{
                const {name, genre, yearCreated, numOfAlbums} = res
                if(type.MusicianType === "Band"){
                    const band = new Band(name, genre, yearCreated, numOfAlbums, dif.members)
                    musicians.push(band)
                }
                else if(type.MusicianType === "Single Artist"){
                    const single = new SingleArtist(name, genre, yearCreated, numOfAlbums, dif.collaborations)
                    musicians.push(single)
                }
                else{
                    console.log(type.MusicianType)
                }
                AddMusician().then(res =>{
                
                    if(res.continue === true){
                        InquireMusicianProccess()
                    }
                    else if (res.continue === false){
                        return musicians
                    }
                    else{
                        console.log(res.continue)
                    }
                })
            })
        })
    })
}
module.exports = musicians