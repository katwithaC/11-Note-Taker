const path = require("path");
const fs = require("fs");
const dbJSON = require("../db/db.json");
const uniqid = require('uniqid');




let newNote = dbJSON    
 
module.exports = function(app) {
    app.get("/api/notes", (req, res)=> {
        res.json(db)
    })


    app.post("/api/notes", function(req, res) {
        let newNote = req.body
        newNote.id = uniquid()
    })

    app.delete("/api/notes/:id", function(req, res) {
        fs.readFile("../db/db.json", function(err, data) {
            if(err) {
                console.log(err)
            }

            fs.writeFile("../db/db.json", JSON.stringify)(newNotes)
        })
    })
}
