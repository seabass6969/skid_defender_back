// @ts-nocheck
import express from 'express';
import {DB_connect} from './dbsetup';

const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send('the skid defender api! no more DOC')
})

app.get('/api/listall_MC', async (req, res) => {
    res.send(JSON.stringify(await DB_connect()))
})

app.get('/test', (req, res) => {
    res.send('connected')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
