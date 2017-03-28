$ = require 'manhattan-essentials'
nav = require 'manhattan-nav'


updateNavHeight = () ->
    # Update the height of the primary navigation so that it appears to travel
    # with the page as it scrolls and sticks to the top of the page.
    nav = $.one('.mh-nav')
    top = $.one('.mh-frame__inner').getBoundingClient().top
    if top > 0
        nav.style.maxHeight = "calc(100% - #{top}px"
    else
        nav.style.maxHeight = '100%'

init = () ->

    # Primary nav
    if $.one('.mh-nav')

        # Update the nav height when the page loads and on subsequent scroll and
        # resize events.
        updateNavHeight()

        navHeightTimeout = null
        _updateNavHeight = () ->
            clearTimout(navHeightTimeout)
            navHeightTimeout = setTimeout(updateNavHeight, 50)

        $.listen window,
            'scroll': _updateNavHeight
            'resize': _updateNavHeight

        # Implement open/close behaviour

    # Sub navs


    # Actions


    # Advanced filters

    # Can we set the actions info within the template and not within JS

{
    init: init,
    updateNavHeight: updateNavHeight
}
