/**
 * Common UI interactions for manage applications.
 */

import * as $ from 'manhattan-essentials'
import * as interactions from 'manhattan-interactions'


// -- Initializer --

export function init() {

    // Set up copy to clipboard behaviour
    for (const copyElement of $.many('[data-mh-copy-to-clipboard]')) {
        $.listen(copyElement, {'click': interactions.copyToClipboard.onCopy()})
    }

    // Set up submit by proxy interactions
    for (const submitElement of $.many('[data-mh-submit-by-proxy]')) {
        $.listen(
            submitElement,
            {'click': interactions.submitByProxy.onSubmit()}
        )
    }

}
