import * as $ from 'manhattan-essentials'


// -- Handlers --

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

    // Implent linking behavior
    if (event.buttons === 0) {
        if (event.shifyKey || event.ctrlKey || event.metaKey) {
            window.open(url, '_blank')
        } else {
            window.location = url
        }
    } else if (event.buttons === 1) {
        window.open(url, '_blank')
    }
}


// -- Initializer --

export function init() {

    // Make rows within the results table behave as links
    for (let rowElm of $.many('tr[data-mh-url]')) {
        $.listen(rowElm, {'click': rowLink})
    }

    // Prevent submission of 'jump to' page form if page value is empty
    for (let formElm of $.many('.mh-paging__jump')) {
        $.listen(formElm, {'submit': noEmptyJumps})
    }
}
