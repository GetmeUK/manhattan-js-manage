import * as $ from 'manhattan-essentials'


// -- Handlers --

function toogleChangeDetails(event) {
    event.preventDefault()

    let changeElm = $.closest(event.target, '.change')

    if (changeElm.classList.contains('change--expanded')) {
        changeElm.classList.remove('change--expanded')
    } else {
        changeElm.classList.add('change--expanded')
    }
}


// -- Initializer --

export function init() {

    // Enable expand/collapse of change log details
    for (let changeFieldElm of $.many('.change__field')) {
        $.listen(changeFieldElm, {'click': toogleChangeDetails})
    }
}
