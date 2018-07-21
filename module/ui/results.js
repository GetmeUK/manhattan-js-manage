import * as $ from 'manhattan-essentials'


// -- Handlers --

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
    for (let row of $.many('tr[data-mh-url]')) {
        $.listen(row, {'click': rowLink})
    }

}
