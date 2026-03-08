const express = require("express")
const app = express()

app.get("/", (req, res) => {
  var msg = "Bienvenue sur mon application Express!"
  res.send(msg)
})

app.listen(3000, () => {
 console.log("Serveur démarré sur http://localhost:3000")
})
