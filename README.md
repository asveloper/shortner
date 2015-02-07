<h1>Shorten a long URL</h1><br>
<p>The Google URL Shortener API allows you to shorten URLs just as you would on goo.gl</p><br>

<p>This is Meteor code that you can use to shorten the url where "url" will be replaced with the actual url.</p><br>
<code>
  Meteor.call("shortenUrl", url, function(error, result){
    if(error){
      console.log(error);
    }else{
      console.log(result);
    }
  });
</code>
<br><br>
<h3>Output:</h3>
<br>
<code>
  {
   "kind": "urlshortener#url",
   "id": "http://goo.gl/kPDPmF",
   "longUrl": "http://www.asveloper.com/"
  }
</code>

<br><br>

<h2>Contributors</h2>
<a href="https://github.com/asveloper">Arslan Nasir</a>