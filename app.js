const express = require('express');
const app = express();

const router = require('./routers/router');
const PORT = process.env.PORT || 5000;

app.use(router);

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})