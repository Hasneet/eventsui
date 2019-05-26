const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const path = require('path');
const port = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//production mode
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    //
    app.get('*', (req, res) => {
      res.sendfile('./client/build/index.html');
    })
  }

app.get('*', (req,res) => {

    res.send('Welcome TO server');
    
    //res.sendFile(path.resolve('../client/public/index.html'));
})

app.post('/serverBase/signUp', async(req, res, next) => {
    try{
        console.log('server base route was hit');
    console.log(req.body.userPayload);
    let token = jwt.sign(req.body.userPayload, 'my-secret');
    console.log(token, '---token---')
    let config = {
        headers: {
            'Content-Length': 0,
            'Content-Type': 'text/plain'
        },
        // responseType: 'text'
    };

    let result = await axios.post('https://dynamic-bongo-236518.appspot.com/rest/signUp', token, config);
    console.log(result,'---result---');
    res.json(result.data);
    }
    catch(err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
