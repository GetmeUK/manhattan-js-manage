import * as $ from 'manhattan-essentials'
import {Sortable} from 'manhattan-sortable'


// -- Handlers --

function sorted(event) {

    let inputElm = $.one(
        'input[name="ordered_ids"]',
        $.closest(event.currentTarget, 'form')
    )

    // Build a list of sorted child Ids based on the order of
    // the sortable elements.
    const ids = event.children.map((c) => {
        return c.dataset.id
    })

    // Update the input value in-line with the new order
    inputElm.value = JSON.stringify(ids)
}


// -- Initializer --

export function init() {

    // Set up sorting behaviour on orderable elements
    for (let orderableElm of $.many('.mh-orderable')) {

        let inputElm = $.one(
            'input[name="ordered_ids"]',
            $.closest(orderableElm, 'form')
        )

        const sortable = new Sortable(orderableElm)
        sortable.init()

        $.listen(orderableElm, {sorted})

    }
}
