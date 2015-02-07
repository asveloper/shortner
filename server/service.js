if (Meteor.isServer) {
	Meteor.methods({
		shortenUrl: function(longUrl) {
			var url = "https://www.googleapis.com/urlshortener/v1/url";
			var data = {"longUrl": longUrl};
			var result = HTTP.call("POST", url, {content: "application/json", data: data, timeout: 3000});
      if(result.statusCode == 200) {
        console.log("response received.");
        return result.data;
      } else {
        console.log("Response issue: ", result.statusCode);
        throw new Meteor.Error(result.statusCode, result.content.error);
      }
    }
  });
}