// functions/index.js
const admin = require('firebase-admin')
// const functions = require('firebase-functions')
const {config, https: {onRequest}} = require('firebase-functions')

admin.initializeApp(config().firebase)

exports.helloWorld = onRequest((req, res) => {
  res.status(200).send('Sup Bitches!!!')
})
