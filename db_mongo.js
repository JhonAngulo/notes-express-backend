const mongoose = require('mongoose')

const { db } = require('./config/variables')

mongoose.connect(`
mongodb+srv://<username>:<password>@cluster0.bgomw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
 {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);