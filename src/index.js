const express = require('express')
const hdbs = require("express-handlebars");
const path = require('path');
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname,"public")))
app.engine('.hbs', hdbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname,"resources","views"));
app.get('/', (req, res) => {
  res.render("home");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})