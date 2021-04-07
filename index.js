const express = require('express')
const app = express()

const PORT = 3001 
const notes = [
  {
    "id": 1,
    "content": "HTML is easy",
    "date": "2019-05-30T17:30:31.098Z",
    "important": true
  },
  {
    "id": 2,
    "content": "Browser can execute only JavaScript",
    "date": "2019-05-30T18:39:34.091Z",
    "important": false
  },
  {
    "id": 3,
    "content": "GET and POST are the most important methods of HTTP protocol",
    "date": "2019-05-30T19:20:14.298Z",
    "important": true
  }
]

app.get('/api', (req, res) => {
  res.send('hello world')
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find(note => note.id === id)
  
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }

})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})