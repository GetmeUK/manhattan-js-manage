import * as $ from 'manhattan-essentials'
import {addFilled} from 'manhattan-field-filled'


// -- Initializer --

export function init() {

    // Squeeze labels
    const inputsSelector
        = '.mh-field__text, .mh-field__textarea, .mh-field__select'

    for (let inputElm of $.many(inputsSelector)) {
        $.listen(
            inputElm,
            {
                'blur': (event) => {
                    $.closest(event.target, '.mh-field__control')
                        .classList.remove('mh-field__control--focused')
                },
                'empty': (event) => {
                    $.closest(event.target, '.mh-field__control')
                        .classList.remove('mh-field__control--filled')
                },
                'filled': (event) => {
                    $.closest(event.target, '.mh-field__control')
                        .classList.add('mh-field__control--filled')
                },
                'focus': (event) => {
                    $.closest(event.target, '.mh-field__control')
                        .classList.add('mh-field__control--focused')
                }
            }
        )
    }

    addFilled(inputsSelector)

    // @@ Character counters

    // Date pickers

    // @@ Map fields???

    // @@ Typeaheads

    // @@ Tokenizers

    // @@ Assets fields

    // @@ Galleries

}
