var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-react-templates');
var fileMetadata = require('metalsmith-filemetadata');
var dateInFile = require('metalsmith-date-in-filename');
var branch = require('metalsmith-branch');

var metalsmith = Metalsmith(__dirname)
  .source('./content')
  //.use(function(files, metalsmith, done) {
  //  console.log(files);
  //})
  .clean(false)
  .destination('./public')
  .use(branch('**/*.md')
    .use(markdown())
  )
  .use(branch('**/*.{md,html}')
    .use(dateInFile())
    //.use(permalinks({
    //  pattern: ':date/:title',
    //  date: 'YYYY'
    //}))
    .use(fileMetadata([
      {
        pattern: '**/*.{md,html}',
        preserve: true,
        metadata: {
          section: 'blog',
          rtemplate: 'post.jsx'
        }
      }
    ]))
    .use(templates({
      isStatic: false,
      directory: './src/templates',
      babel: true
    }))
  )
  .build(function (err, files) {
    if (err) {
      console.log('Error!');
      console.log(err);
      console.log(files);
      throw err;
    }
  });
