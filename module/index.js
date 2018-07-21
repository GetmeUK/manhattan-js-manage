import * as changeLog from './ui/change-log'
import * as ordering from './ui/ordering'
import * as results from './ui/results'


// -- Initializer --

export function init() {

    // UI
    changeLog.init()
    ordering.init()
    results.init()

    // Enable transition
    document.body.classList.remove('mh-body--no-transitions')
}
