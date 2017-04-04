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

makeSorter = (element) ->
    # Add support for ordering a table of results using the given element.

    # Find the form containing the element
    form = $.closest('.mh-form', element)

    # Determine how the results are currently sorted
    sortByField = $.one('[name="sort_by"]', form)
    sortedBy = sortByField.value

    # If the results are currently being sorted by this element then set the
    # direction against the element.
    sortWith = element.getAttribute('data-sort-with')
    if sortedBy == sortWith
        element.setAttribute('data-sort-direction', 'DESC')
    else if sortedBy == "-#{sortWith}"
        element.setAttribute('data-sort-direction', 'ASC')

    # Implement the sort behaviour for the element
    $.listen element, 'click': (ev) ->
        if sortWith == sortedBy
            sortByField.value = "-#{sortWith}"
        else
            sortByField.value = sortWith

    # Submit the filter form to sort the results
    form.submit()

init = () ->
    # Make table rows behave as links
    for tableRow in $.many('tr[data-mh-url]')
        makeLink(tableRow, tableRow.getAttribute('data-mh-url'))

    # Make table headers behave as column sorters
    for tableHeader in $.many('th[data-mh-sort-with]')
        makeSorter(tableHeader)

    # Prevent submission of the jump to page form if the page field is empty
    for form in $.many('.mh-paging__jump')
        $.listen form, 'submit': (ev) ->
            pageNo = $.one('[name="page"]')
            unless pageNo.value.trim()
                ev.preventDefault()
                pageNo.focus()


module.exports = {
    init: init,
    makeLink: makeLink,
    makeSorter: makeSorter
}
