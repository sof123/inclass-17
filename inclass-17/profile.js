
const index = (req, res) => {
    console.log(req.params.user)
    res.send({ hello: 'world' })
}

const putHeadline = (req, res) => {
  console.log(req.params.user)
  res.send({headlines: [{
          username: 'sep1',
          headline: req.body.headline || 'could not be displayed',
  }]})
}

const getHeadlineUser = (req, res) => {
  console.log(req.params.user)
  res.send({username: 'Scott', status: 'Happy' })
}

const getEmailUser = (req, res) => {
  console.log(req.params.user)
  res.send({username: 'Scott', email: 'scott@rice.edu' })
}

const putEmail = (req, res) => {
  console.log(req.params.user)
  res.send({headlines: [{
          username: 'sep1',
          email: req.body.email || 'could not be displayed',
  }]})
}



module.exports = app => {
     app.get('/:user?', index)
     app.put('/headline', putHeadline)
     app.get('/headlines/:user?', getHeadlineUser)
     app.get('/email/:user?', getEmailUser)
     app.put('/email', putEmail)
}
