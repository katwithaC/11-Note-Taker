var express = require("express");

var app = express();

var PORT = process.env.PORT || 3001;

app.listen(PORT, function() {

})

app.get("/", function (req, res) {
    res.json(path.join(__dirname, "public/index.html"));
});



app.get('/notes', function (req, res) {
    res.send('GET request to the homepage')
})

app.get('*', function (req, res) {
    res.send('GET request to the homepage')
})

app.get('/api/notes', function (req,res) {
    return res.json('GET all saved notes on JSON')
})

app.post('/api.notes', function (req, res) {
    res.send('POST new note')
})

app.delete('/api/notes/:id', (req, res, next) => {
    const notes = getNotesByID(req.params.id);
    res.send(notes);
});