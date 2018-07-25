import {field, gallery} from 'manhattan-assets'
import {CharacterCount} from 'manhattan-character-count'
import {datePicker} from 'manhattan-date-picker'
import * as $ from 'manhattan-essentials'
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

    // Assets

    function csrfFormData(inst, file) {
        const data = new FormData()
        data.append('csrf_token', $.one('[name="csrf_token"]').value)
        data.append('file', file)
        return data
    }

    field.FileField.behaviours.formData['csrfFormData'] = csrfFormData
    gallery.Gallery.behaviours.formData['csrfFormData'] = csrfFormData

    // Fields
    for (inputElm of $.many('[data-mh-file-field]')) {
        let fileField = new field.FileField(
            inputElm,
            {
                'allowDrop': true,
                'uploadUrl': '/manage/upload-asset',
                'editing': '--draft--',
                'preview': '--thumb--',
                'formData': 'csrfFormData'
            }
        )
        fileField.init()
    }

    // Galleries
    for (inputElm of $.many('[data-mh-gallery]')) {
        let galleryInst = new gallery.Gallery(
            inputElm,
            {
                'allowDrop': true,
                'uploadUrl': '/manage/upload-asset',
                'editing': '--draft--',
                'preview': '--thumb--',
                'formData': 'csrfFormData'
            }
        )
        galleryInst.init()
    }

    // @@ Handle errors

}
