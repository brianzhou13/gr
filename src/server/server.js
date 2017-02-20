const express = require('express');
const app = express();

require('./config/middleware')(app, express);

require('./routes/routes')(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});