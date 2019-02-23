import * as content from './content'

import * as changeLog from './ui/change-log'
import * as forms from './ui/forms'
import * as navigation from './ui/navigation'
import * as ordering from './ui/ordering'
import * as results from './ui/results'


// -- Initializer --

export function init(updateContentSignalKey=null) {

    // Content (editing environment)
    if (updateContentSignalKey) {
        content.init(updateContentSignalKey)
    }

    // UI
    changeLog.init()
    forms.init()
    navigation.init()
    ordering.init()
    results.init()

    // Enable transition
    document.body.classList.remove('mh-body--no-transitions')
}
