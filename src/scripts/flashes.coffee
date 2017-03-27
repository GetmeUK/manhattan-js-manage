$ = require 'manhattan-essentials'


init = () ->

    # Listen for close event against flashes
    for closeFlash in $.many('.mh-flash__close')
        $.listen closeFlash, 'click', (ev) ->
            @remove()


{init: init}
