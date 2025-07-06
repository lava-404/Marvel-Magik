const express = require('express')
const app = express();
const cors = require('cors')
const questionsRoute = require('./routes/questionsRoute')
const SignupRoute = require('./routes/SignupRoute')
const SummaryRoute = require('./routes/SummaryRoute.js')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));


app.use(cors());
app.use(express.json())

app.use('/questions', questionsRoute )
app.use('/signup', SignupRoute )
app.use('/summary', SummaryRoute )

app.get('/' ,(req, res)=>{
  res.send("home")
})

app.listen(5667, ()=>{
  console.log("App listening on port 5667");
})