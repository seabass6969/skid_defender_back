import express from 'express';
import {connectionString} from './settings'
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('the skid defender api!')
})

app.get('/api', (req, res) => {
  res.send('api key is ' + connectionString)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
