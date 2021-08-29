/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
// app.get('/', (req, res) => {
// 	// res.send('Hello remote world yoga!\n');
// });
app.get("/", function(req, res) {
    res.sendfile(__dirname + '/index.html', function(err) {
        if (err) res.send(404);
    });
});

app.get("/list_movies", (req, res) => {
	fs.readFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
		res.end(data);
	});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


// app = express.createServer(express.logger());
// port = process.env.PORT || 3000;
// app.listen(port, function() {
//     console.log("Listening on " + port);
// });
