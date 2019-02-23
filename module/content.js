import * as $ from 'manhattan-essentials'


// -- Initializer --

export function init(updateSignalKey) {

    // Listen for change signals from the content editing environment and
    // trigger a page reload if relevant.
    $.listen(
        window,
        {
            'storage': (event) => {
                if (event.key === updateSignalKey) {
                    location.reload()
                }
            }
        }
    )
}
