const mongoose = require('mongoose')

// const connectionURL = 'mongodb+srv://Prateek:node123@cluster0.nwkre.mongodb.net/task-manager-api?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

