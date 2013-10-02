var _fp = _fp || (function($){

  var information = [];

  var init = function(params){
    this.params = params;
    console.log(params);
    _user.isUser(params);
  };

  var track = {
    page: function(){
      var title = document.title;
      information.push(title);
      track._add();
    },
    click: function(){
      information.push('whatever was clicked');
      track._add();
    },
    event: function(eventType){
      information.push('video play');
      track._add();
    },

    _add: function(){
      console.log(information);
      // $.post('/user/add/', {information}, function(data){

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
    trackClick:track.click,
    trackPage:track.page,
    trackEvent:track.event
  };
})(jQuery);
