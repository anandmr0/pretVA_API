const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const DB = 'mongodb+srv://anand:prN5ycTsOj359ZCn@cluster0-qbafj.mongodb.net/pretva?retryWrites=true&w=majority';



const app = require('./app');
mongoose.connect(DB).then(()=>
console.log('Database connected'));


const server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });