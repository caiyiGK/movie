var express = require('express'),
    path    = require('path'),
    app     = express();

app.use(express.static(path.join(__dirname, 'public')));


var server = app.listen(3000, function() {
    var host = 'location',
        port = 3000;
    console.log("Example app listening at http://%s:%s", host, port);
});