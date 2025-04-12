const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const PORT = process.env.PORT || 8000;

//Initialize middleware
//We use to have to install body-parser, but express has it built in middleware
//Function of express. It parses incoming JSON payload
app.use(express.json({extended: false}));

const withDB = async (operations, res) => {
    try {
        //MongoClient is a class that allows us to connect to the database
        const client = await MongoClient.connect('mongodb://localhost:27017');
        //Connect to the database called blog_mern
        const db = client.db('blog_mern');
        await operations(db);
        client.close();
    } catch (error) {
        res.status(500).json({message: 'Error connecting to DB', error: error.message});
    }
}
//just a test route for now
app.get('/api/articles/:name', async (req, res) => {
    withDB(async (db) => {
        //Get the article name from the request params
        //req.params is an object that contains the route parameters
        const articleName = req.params.name;
        //Find the article in the database by name
        //db.collection('articles') is a reference to the articles collection in the database
        const articleInfo = await db.collection('articles').findOne({name: articleName});
        //If the article is not found, return a 404 error
        if (!articleInfo) {
            res.status(404).json({message: 'Article not found'});
            return;
        }
        //If the article is found, return it as a JSON response
        res.status(200).json(articleInfo);
    }, res);
    

});
app.post('/api/articles/:name/add-comments', (req, res) => {
    withDB(async (db) => {
        //Get the article name from the request params
        //req.params is an object that contains the route parameters
        const articleName = req.params.name;
        //Get the comment from the request body
        const {username, text} = req.body;
        //Find the article in the database by name
        //db.collection('articles') is a reference to the articles collection in the database
        const articleInfo = await db.collection('articles').findOne({name: articleName});
        //If the article is not found, return a 404 error
        if (!articleInfo) {
            res.status(404).json({message: 'Article not found'});
            return;
        }
        //Add the comment to the article's comments array
        await db.collection('articles').updateOne(
            {name: articleName},
            {$set: {
                comments: articleInfo.comments.concat({username, text})
            }}
        );
        const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});
        //If the article is found, return it as a JSON response
        res.status(200).json(updatedArticleInfo);
    }, res);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));