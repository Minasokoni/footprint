var _fp = _fp || (function($){ // namespace _fp

  var trackData = []; //empty array

  var init = function(params){
    this.params = params;
    console.log(params);
    _user.isUser(params);
    track.page();
  };

  var track = {
    page: function(){
      var title = document.title,
      d         = new Date(),
      datetime  = d.toISOString();

      trackData.push('_page:',[title, datetime]);
      track._add();
    },
    event: function(category, action, label, opt1, opt2){
      // 'books', 'click', 'Batman - Eating Kids', 'optional', optional
      trackData.push('_event:',[category, action, label, opt1, opt2]);
      track._add();
    },
    _add: function(){ // private function

      console.log(trackData);
      // if the user is verified you can push data to the account
      // $.post('/user/add/', {trackData}, function(data){
      //  if(data.success){
      //    // post data to server
      //  }
      // });
    }

  };

  var _user = { // private methods
    isUser: function(params){
      // check to see if the user account exists before trying to push data to the account
      // $.get('/user/'+params.userid, function(data){
      //   if(data.success){
      //     // do work!
      //   }
      // });
    }
  };


  return { // Public functions
    init: init,
    trackPage:track.page,
    trackEvent:track.event
  };
})(jQuery); // self invoking module 
