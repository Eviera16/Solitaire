const express = require('express');
    app = express();
    port = 8000;
    cors = require('cors');
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

const cookieParser = require('cookie-parser');

// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.urlencoded({extended: true}));




require('dotenv').config();
require('./server/config/config.database');
require('./server/routes/user.routes')(app);


// require('dotenv').config();

// const express = require('express'),
//     app = express(),
//     cors = require('cors'),
//     cookieParser = require('cookie-parser'),
//     port = process.env.PORT,
//     server = app.listen(port, () => console.log(`Listening on port ${port}.`));
// // io = require('socket.io')(server);

// app.use(cookieParser());
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));