import * as changeLog from './ui/change-log'
import * as navigation from './ui/navigation'
import * as ordering from './ui/ordering'
import * as results from './ui/results'


// -- Initializer --

export function init() {

    // UI
    changeLog.init()
    navigation.init()
    ordering.init()
    results.init()

    // Enable transition
    document.body.classList.remove('mh-body--no-transitions')
}
