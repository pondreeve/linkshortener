# Link shortener
Make a `POST` request to `/api/shorturl/new` with a body parameter named `url` (https://www.example.com) which will be your original link you want to shorten.
API will check if this url is actually url and make a DNS lookup if target is up. 
If both conditions are satisfied, API will return `{"original_url": "https://www.example.com","short_url": "weofj23"}`.
If not, API will return `{"error":"invalid url"}`.

_This app was made to excercise the Express Routes :-)_
