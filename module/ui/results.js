import * as $ from 'manhattan-essentials'


// -- Handlers --

/**
 * Support for changing the number of results displayed per page.
 */
function changePerPage(event) {
    const formElm = $.closest(event.target, 'form')
    const perPage = event.target.value
    formElm.elements['page'].value = '1'
    formElm.submit()
}

/**
 * Prevent the 'jump to' page form from being submitted if no page value has
 * been set.
 */
function noEmptyJumps(event) {
    const pageNoElm = $.one('[name="page"]', event.currentTarget)
    if (!pageNoElm.value.trim()) {
        event.preventDefault()
        pageNoElm.focus()
    }
}

/**
 * Link to the URL associated with row within the results table.
 */
function rowLink(event) {
    // Get the URL associated with the row
    const url = event.currentTarget.dataset.mhUrl

    let clicked = null
    if ('button' in event) {
        clicked = event.button
    } else if ('buttons' in event) {
        clicked = event.buttons
    }

    // Implent linking behavior
    if (clicked === 0) {
        if (event.shifyKey || event.ctrlKey || event.metaKey) {
            window.open(url, '_blank')
        } else {
            window.location = url
        }
    } else if (clicked === 1) {
        window.open(url, '_blank')
    }
}

/**
 * Add sorting behaviour to a column header element.
 */
function sortWith(thElm, sortByElm, formElm) {
    $.listen(
        thElm,
        {
            'click': (event) => {
                if (event.buttons === 0) {

                    // Set the sort with field and direction
                    if (sortByElm.value === thElm.dataset.mhSortWith) {
                        sortByElm.value = `-${thElm.dataset.mhSortWith}`
                    } else {
                        sortByElm.value = thElm.dataset.mhSortWith
                    }

                    // Submit the results form
                    formElm.submit()
                }
            }
        }
    )
}


// -- Initializer --

export function init() {
    let formElm = null

    // Make rows within the results table behave as links
    for (let rowElm of $.many('tr[data-mh-url]')) {
        $.listen(rowElm, {'click auxclick': rowLink})
    }

    // Prevent submission of 'jump to' page form if page value is empty
    for (formElm of $.many('.mh-paging__jump')) {
        $.listen(formElm, {'submit': noEmptyJumps})
    }

    // Add support for changing the number of results displayed per page
    for (const perPageElm of $.many('.mh-paging__per-page-field')) {
        $.listen(perPageElm, {'change': changePerPage})
    }

    // Add support for sorting rows by applicable column headers
    for (let thElm of $.many('th[data-mh-sort-with]')) {

        // Find the form that contains the element
        formElm = $.one('.mh-filter', $.one('[data-mh-main-content]'))

        // If the results are currently being sorted by this column indicate
        // this through the elements data attributes.
        let sortByElm = $.one('[name="sort_by"]', formElm)

        if (sortByElm.value === thElm.dataset.mhSortWith) {
            thElm.dataset.mhSortDirection = 'DESC'
        } else if (sortByElm.value === `-${thElm.dataset.mhSortWith}`) {
            thElm.dataset.mhSortDirection = 'ASC'
        }

        // Add the sorting behaviour to the column header
        sortWith(thElm, sortByElm, formElm)
    }
}
