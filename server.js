'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const app = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const bcrypt = require('bcrypt');

//START_ASYNC -do not remove notes, place code between correct pair of notes.
try {
    const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
    console.log(hash);

    const comparedHashTrue = bcrypt.compare(myPlaintextPassword, hash);
    console.log(comparedHashTrue);
    const comparedHashFalse = bcrypt.compare(someOtherPlaintextPassword, hash);
    console.log(comparedHashFalse);



} catch (error) { }



//END_ASYNC

//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 3000, () => { });
