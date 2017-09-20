import express from 'express'
import path    from 'path'

const app = express()
const port = 3000

app.use('/', express.static(path.resolve(__dirname, '/../public')))

app.get('/', (req, res) => {
  res.send({
    message: 'I am a server route and can also be hot reloaded!'
  })
})

app.get('/hello', (req, res) => {
  return res.send('Can you hear me?')
})

app.listen(port, () => {
  console.log('Hello World listening on port ' + port)
})

export default app
