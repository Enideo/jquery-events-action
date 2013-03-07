/**
 * jQuery Action
 * Special event: action
 * @license Copyright 2013 Enideo. Released under dual MIT and GPL licenses.
*/


$.event.special.action = {
  setup: function(data, namespaces) {
    $(this).bind('mousedown.action keypress.action', $.event.special.action.handler);

    if( data && data.autotab && data.autotab===true){
      $(this).not('*[tabindex]').attr('tabindex',0);
    }
  },

  teardown: function(namespaces) {
    $(this).unbind('mousedown.action keypress.action', $.event.special.action.handler);
  },

  handler: function(event){

    var elem = this,
      secondaryKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

    if( event.type=='mousedown' ){
      if( event.which==1 || event.which==2 ){
        $(document).one('mouseup.action',function(ev){

          if( ev.target==elem || $.contains(elem,ev.target) ){
              event.type = 'action';
              event.currentTarget=elem;
              event.primary = !( secondaryKey || event.which==2 );

              ($.event.dispatch || $.event.handle).apply(elem, [event]);
          }

        });
      }
    }else if( event.type=='keypress' && event.which==13 ){
      event.type = 'action';
      event.primary = !secondaryKey;
      ($.event.dispatch || $.event.handle).apply(elem, [event]);
    }
  }
};
