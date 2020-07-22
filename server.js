const express = require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true,useUnifiedTopology: true  } , (req,res) => {
    console.log('connected to db');
});

const articleRouter = require('./routes/articles')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))


app.use('/articles', articleRouter)

app.get('/', (req,res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Article description'
    },

    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Article 2 description'
    }

];
    res.render('articles/index' , {articles : articles})
})

app.listen(5000);