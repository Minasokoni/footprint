var _fp = _fp || (function($){

  var trackData = []; // 

  var init = function(params){
    this.params = params;
    console.log(params);
    _user.isUser(params);
    track.page();
  };

  var track = {
    page: function(){
      var title = document.title;
      trackData.push('_page:',[title]);
      track._add();
    },
    event: function(category, action, label, opt1, opt2){
      // 'books', 'click', 'Batman - Eating Kids', 'optional', optional
      trackData.push('_event:',[category, action, label, opt1, opt2]);
      track._add();
    },

    _add: function(){
      console.log(trackData);
      // $.post('/user/add/', {information}, function(data){
      //  if(data.success){
      //    // post data to server
      //  }
      // });
    }

  };

  var _user = {
    isUser: function(params){
      // $.get('/user/'+params.userid, function(data){
      //   if(data.success){
      //     // do work!
      //   }
      // });
    }
  };


  return {
    init: init,
    trackPage:track.page,
    trackEvent:track.event
  };
})(jQuery);
