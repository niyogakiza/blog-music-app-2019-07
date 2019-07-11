import express from 'express'
import devBundle from './devBundle'
import path from 'path'
import template from '../../template'

const app = express()
devBundle.compile(app)
const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.use('/', (req, res) => {
  res.status(200).send(template())
})

const port = process.env.PORT || 3000
app.listen(port, (err, callback) => {
  if (err) {
    callback(404, { error: 'Something went wrong!' })
  }
  console.info(`Server is started on port`, port)
})
