var fs = require('fs');

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let rawdata = fs.readFileSync('students.json');
    let jsonData = JSON.parse(rawdata);
    
    let jsonTxt = JSON.stringify(jsonData,null, 3);

    res.render('pages/index',{jsonTxt: jsonTxt});

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
