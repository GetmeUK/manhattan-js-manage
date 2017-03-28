$ = require 'manhattan-essentials'


makeLink = (element, url) ->
    # Assign a URL to an element so that it acts like a link (e.g you can click
    # a table row to visit the URL).
    $.listen element, 'click', (ev) ->

        if ev.button is 0
            # If a modifier key is held down the URL is opened a new window
            if ev.shiftKey or ev.ctrlKey or ev.metaKey
                window.open url, '_blank'
            else
                window.location = url

        # If the middle mouse button was used the URL is opened in a new window
        if ev.button is 1
            window.open url, '_blank'

makeSorter = (element, form, sortWith, sortDirection) ->


init = () ->

    # Make table rows behave as links
    for tableRow in $.many('tr[data-mh-url]')
        makeLink(tableRow, tableRow.getAttribute('data-mh-url'))

    # Make table headers behave as column sorters


    # Jump to forms

{
    init: init,
    makeLink: makeLink,
    makeSorter: makeSorter
}