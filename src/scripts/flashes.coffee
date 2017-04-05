$ = require 'manhattan-essentials'


handleFlashClose = () ->
    # Listen for close event against flashes
    for closeFlash in $.many('.mh-flash__close')
        $.listen closeFlash, 'click', (ev) ->
            # Remove the flash when the user clicks the close handle
            @remove()


init = () ->
    
    handleFlashClose()


module.exports = {init: init}
