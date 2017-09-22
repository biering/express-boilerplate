import express from 'express'
import chalk   from 'chalk'
import path    from 'path'

import config  from './config'

const app = express()

app.use('/', express.static(path.resolve(__dirname, '/../public')))

app.get('/', (req, res) => {
  res.send({
    message: 'I am a server route and can also be hot reloaded!'
  })
})

app.get('/hello', (req, res) => {
  return res.send('Can you hear me?')
})

app.listen(config.PORT, () => {
  const log = console.log
  log('\n')
  log(chalk.bgGreen.black(`Server listening on http://localhost:${config.PORT}/ ..`))
  log('\n')

  log(`${chalk.blue('Much fun! :)')}`)
  log('\n')
})

export default app
