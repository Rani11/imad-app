var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
   'article-one': {
    title: 'Article One | Jhansi Rani',
    heading: 'Article One',
    date: 'August 19 2017',
    content: `<p>
                        This is my first content for article one. This training is a bit complicated and fast. What do you say guys??...
                        </p>
                         <p>
                        This is my first content for article one. This training is a bit complicated and fast. What do you say guys??...
                        </p>
                         <p>
                        This is my first content for article one. This training is a bit complicated and fast. What do you say guys??...
                        </p>`
    
},
   'article-two': {title: 'Article Two | Jhansi Rani',
    heading: 'Article Two',
    date: 'August 19 2017',
    content: `<p>
                        This is my first content for article Two. This training is a bit complicated and fast. What do you say guys??...
                        </p>
                         <p>
                        This is my first content for article Two. This training is a bit complicated and fast. What do you say guys??...
                        </p>
                         <p>
                        This is my first content for article Two. This training is a bit complicated and fast. What do you say guys??...
                        </p>`},
   'article-three': {title: 'Article Three | Jhansi Rani',
    heading: 'Article Three',
    date: 'August 19 2017',
    content: `<p>
                        This is my first content for article Three. This training is a bit complicated and fast. What do you say guys??...
                        </p>
                         <p>
                        This is my first content for article Three. This training is a bit complicated and fast. What do you say guys??...
                        </p>
                         <p>
                        This is my first content for article Three. This training is a bit complicated and fast. What do you say guys??...
                        </p>`}
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
<html>
<head>
    <title>
        ${title}
        </title>
        <meta name ="viewport" content= "width-device-width, initial-scale-1" />
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class ="container">
        <div>
            <a href='/'>Home</a>
            </div>
            <h3>
                ${heading}
                </h3>
                
                <div>
                    ${date}
                    </div>
                    <div>
                   ${content}
                        </div>
                        </div>
        </body>

</html>
`;
      return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
    //articleName == article-one
    //article[articleName] == {} content object for article one 
    var articleName = req.params.artcileName; 
    res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
