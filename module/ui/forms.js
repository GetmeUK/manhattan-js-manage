import * as $ from 'manhattan-essentials'
import {datePicker} from 'manhattan-date-picker'
import {addFilled} from 'manhattan-field-filled'


// -- Initializer --

export function init() {

    let inputElm = null

    // Squeeze labels
    const inputsSelector
        = '.mh-field__text, .mh-field__textarea, .mh-field__select'

    for (inputElm of $.many(inputsSelector)) {
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
    for (inputElm of $.many('[data-mh-date-picker]')) {
        let picker = new datePicker.DatePicker(inputElm)
        picker.init()
    }

    // @@ Map fields???

    // @@ Typeaheads

    // @@ Tokenizers

    // @@ Assets fields

    // @@ Galleries

}
