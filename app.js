    //const express = require('express');
    //const path = require('path');
    //const app = express();
    //app.listen(3030);
    //app.get('/archivo_Jero', (req, res) => {
      //  res.sendFile(path.join(__dirname, 'views/index.html'));
    //})
const express = require ("express");
const path = require("path");
const app = express();
/*app.listen(3000);*/
app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo");
})
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views/index.html')));
