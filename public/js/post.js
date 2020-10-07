function handleSubmit(e) {
  e.preventDefault();
  let originalUrl = document.querySelector('#urlInput').value;
  console.log("urlInput: "+originalUrl);

  let data = {
    url: originalUrl
  };
  console.log(JSON.stringify(data));
  fetch('/portfolio/linkshortener/api/shorturl/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
        if (json.error != undefined){
          document.querySelector("#shortUrl").innerHTML = "Error: " + json.error;
        } else {
          document.querySelector('#shortUrl').innerHTML = "https://www.lukapondreeve.com/portfolio/linkshortener/api/shorturl/"+json.short_url;
          document.querySelector('#testUrl').innerHTML = '<a href="https://www.lukapondreeve.com/portfolio/linkshortener/api/shorturl/'+json.short_url+'" target="_blank">Test me!</a>';
          document.querySelector('#comment').innerHTML = "Wooow! Didn't you say the link will be shorter? There is no cake!";
        }
      })
    .catch(error => showResult(error));
}
