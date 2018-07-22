import * as $ from 'manhattan-essentials'
import {CharacterCount} from 'manhattan-character-count'
import {datePicker} from 'manhattan-date-picker'
import {addFilled} from 'manhattan-field-filled'
import {tokenizer, typeahead} from 'manhattan-typeahead'


// -- Initializer --

export function init() {

    let inputElm = null

    // Squeeze labels
    const inputsSelector
        = '.mh-field__text, .mh-field__textarea, .mh-field__select'

    for (inputElm of $.many(inputsSelector)) {

        if ($.closest(inputElm, '.mh-field__control')) {
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
    }

    addFilled(inputsSelector)

    // Character counters
    for(inputElm of $.many('[data-mh-character-count]')) {
        let characterCount = new CharacterCount(inputElm)
        characterCount.init()
    }

    // Date pickers
    for (inputElm of $.many('[data-mh-date-picker]')) {
        let picker = new datePicker.DatePicker(inputElm)
        picker.init()

        // Disable auto-complete as we're showing the picker
        inputElm.setAttribute('autocomplete', 'off')
    }

    // Typeaheads
    for (inputElm of $.many('[data-mh-typeahead]')) {
        let typeaheadInst = new typeahead.Typeahead(inputElm)
        typeaheadInst.init()
    }

    // Tokenizers
    for (inputElm of $.many('[data-mh-tokenizer]')) {
        let tokenizerInst = new tokenizer.Tokenizer(
            inputElm,
            {'store': 'json'}
        )
        let hiddenSelector = inputElm
            .getAttribute('data-mh-tokenizer--hidden-selector')
        let hiddenElm = $.one(hiddenSelector)
        let tokens = JSON.parse(hiddenElm.value || '[]')
        tokenizerInst.init(tokens)
    }

    // @@ Assets fields

    // @@ Galleries

    // @@ Handle errors

}
