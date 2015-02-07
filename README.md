<h1>Shorten a long URL</h1><br>
<p>The Google URL Shortener API allows you to shorten URLs just as you would on goo.gl</p><br>

<p>This is Meteor code that you can use to shorten the url where "url" will be replaced with the actual url.</p>
<code>
  Meteor.call("shortenUrl", "http://www.asveloper.com", function(error, result){
    if(error){
      console.log(error);
    }else{
      console.log(result);
    }
  });
</code>

<h3>Output:</h3>
<p>
  {<br>
   "kind": "urlshortener#url",<br>
   "id": "http://goo.gl/kPDPmF",<br>
   "longUrl": "http://www.asveloper.com/"<br>
  }
</p>

<br>

<h2>Contributors</h2>
<a href="https://github.com/asveloper">Arslan Nasir</a>
