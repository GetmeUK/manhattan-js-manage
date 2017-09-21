$ = require 'manhattan-essentials'


toggleChange = (elm) ->
    # Enable toggling (expanded/collapsed) of changes
    if elm.classList.contains('change--expanded')
        elm.classList.remove('change--expanded')
    else
        elm.classList.add('change--expanded')


init = () ->
    # Enable CSS transitions (which are disabled initially)
    for changeField in $.many('.change__field')
        $.listen changeField, 'click': (ev) ->
            ev.preventDefault()
            toggleChange($.closest(ev.target, '.change'))

module.exports = {init: init}
