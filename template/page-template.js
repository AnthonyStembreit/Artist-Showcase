let musicians = require("../index")
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const generateMusicians = musicians => {
    let html = []
    const generateBand = band => {
        html.push( `
        <section class="band" id=${band.getName}>
        <h1>${band.getName()}</h1>
        <br>
        <ul>
        ${band.getMembers()}
        </ul>
        </section>`)
    };
    
    const generateSingleArtist = artist => {
        html.push(`
        <section>
        <h1>${artist.getName()}</h1>
        <br>
        <ul>
        ${artist.getCollaborations()}
        </ul>
        </section>`)
    };
    for(i=0; i<musicians.length; i++){
        if(musicians[i].getType() === "Band"){
            generateBand(musicians[i])
        }
        else if(musicians[i].getType() === "Single Artist"){
            generateSingleArtist(musicians[i])
        }
        else{
            console.log(musicians[i].getType())
        }
    }
  
    return html.join("")
}



writeFileAsync('../client/musicians.html',  `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
${generateMusicians(musicians)}
</body>
</html>`)
