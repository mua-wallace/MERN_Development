const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}));


require('./config/mongoose.config')
require('./routes/person .routes')(app);


// const personRoute = require('./routes/person .routes');
// personRoute(app);

app.listen(port, () => console.log(`The server is up and running on port: ${port}`));