
jQuery Action adds a new event to jQuery called "action", which is simply the equivalent of either a mouse click or pressing the enter key on a given element.

# Demos and docs
[http://enideo.com/#jquery-events-action][http://enideo.com/#jquery-events-action]

# Future work

## handler return value
Unfortunately, if the action event is triggered by a click, the return value of the handler is ignored.
This is due to the fact that two mouse events are used, mousedown and mouseup.
I tried to catch the click and feed it the return value from mouseup (using .data() ) but this didn't work.
Any ideas would be appreciated.

## Removing autotab
Not sure how to identify at teardown if the tabindex was set by this plugin or otherwise (no data object).
Could use .data() during setup but not sure how useful this is.

## Namespaces
I'm not 100% sure how to use the namespaces given by the user in jQuery's Special Event API.