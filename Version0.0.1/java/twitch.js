var user_id = 'zero';

if(window.Twitch.ext) {

  window.Twitch.ext.onAuthorized(function(auth) {
    //console.log(auth);
	//console.log(window.Twitch.ext.viewer.id);
	
    //window.Twitch.ext.actions.requestIdShare();
	//user_id = auth['userId'];
  });

  window.Twitch.ext.onContext(function(context, contextFields) {
    //console.log(context);
    //console.log(contextFields);
  });
  
  window.Twitch.ext.onError(function(err) {
    console.error(err);
  });
  
}