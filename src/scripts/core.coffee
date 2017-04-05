$ = require 'manhattan-essentials'


enableCSSTransitions = () ->
    # Enable CSS transitions
    elm = $.one('.mh-body--no-transitions')
    if elm
        elm.classList.remove('mh-body--no-transitions')

init = () ->
    # Enable CSS transitions (which are disabled initially)
    enableCSSTransitions()


module.exports = {init: init}
