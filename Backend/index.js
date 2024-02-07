const express = require('express');
const rootRouter = require('./routes/index')
const cors = require('cors');
const PORT = 3000;

const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/v1", rootRouter)


app.listen(4000,()=>{
    console.log(`Server listening on 4000 `);
})