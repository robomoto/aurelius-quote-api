# aurelius-quote-api
Did you ever want a random quote of Marcus Aurelius? Well...here's an API that will give you that!

This is a Node.js app built on express with Mongoose for connecting to a MongoDB database.
At it's earliest iteration, it a RESTFUL API with full CRUD support, but once it's all done, the options to create, update, and destroy entries in the database will be commented out.
Also, the default route will return a random quote, rather than an index of all 496 quotes.  

Usage:
<path_to>/api/quote/

Returns something like: 
{"_id":"605843c554849c0f25832ea6",
"notes":[],
"quotation":"Constantly and, if it be possible, on the occasion of every impression on the soul, apply to it the principles of Physic, of Ethic, and of Dialectic. ",
"author":"Marcus Aurelius",
"reference":"Meditations: Book 8",
"language":"english",
"original_language":"greek",
"translator":"George Long",
"__v":0}
