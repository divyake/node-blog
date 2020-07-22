const express = require('express');
const app = express();
const articleRouter = require('./routes/articles')

app.set('view engine', 'ejs');

app.use('/articles', articleRouter)

app.get('/', (req,res) => {
    console.log('connected to server');
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