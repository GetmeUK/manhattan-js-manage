import {field, gallery, imageSet} from 'manhattan-assets'
import {CharacterCount} from 'manhattan-character-count'
import {datePicker} from 'manhattan-date-picker'
import * as $ from 'manhattan-essentials'
import {addFilled} from 'manhattan-field-filled'
import {timePicker} from 'manhattan-time-picker'
import {tokenizer, typeahead} from 'manhattan-typeahead'


// The number of assets currently being uploaded
let uploading = 0


// -- Handlers --

function anchored(frameElm, formElm, btnsElm) {

    /**
     * Add/remove the anchored flag to a form when the btns bottom of the form
     * is visible to the user.
     */
    function _anchored() {

        // Determing if the form buttons should be affixed to the page
        let affix = frameElm !== null
        affix = affix && frameElm.clientHeight > window.innerHeight
        affix = affix && !formElm.classList
            .contains('mh-form--fixed-btns-disallowed')

        if (affix) {

            // Flag the form as having fixed buttons
            formElm.classList.add('mh-form--fixed-btns')

            if (window.innerHeight + window.scrollY >= frameElm.clientHeight) {
                btnsElm.classList.add('mh-field--anchored')
            } else {
                btnsElm.classList.remove('mh-field--anchored')
            }
        } else {

            // Remove fixed buttons
            formElm.classList.remove('mh-form--fixed-btns')
            btnsElm.classList.remove('mh-field--anchored')

        }
    }

    return _anchored
}

/**
 * If there are active uploads when the user tries to leave the page then ask
 * them to confirm the action.
 */
function confirmLeave(event) {
    const confirmMsg = 'Not all files/images have been uploaded'

    if (uploading > 0) {
        (event || window.event).returnValue = confirmMsg
        return confirmMsg
    }

    return null
}

/**
 * Decrease the uploading counter by 1, if the count reaches 0 enable .
 */
function decUploads() {
    uploading = Math.max(uploading - 1, 0)
}

/**
 * Increase the uploading counter by 1.
 */
function incUploads() {
    uploading += 1
}

/**
 * Return a handler that will prevent the advanced filter being closed when
 * the element clicked on is related to an input element within the filter
 * (such as a date picker).
 */
function preventAdvFilterClosing(inputElm) {

    function _preventAdvFilterClosing(event) {
        if ($.closest(inputElm, '.mh-filter-adv')) {
            document.body.dataset.navSupressClick = ''
        }
    }

    return _preventAdvFilterClosing
}


// -- Initializer --

export function init() {

    let dataPrefix = null
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

    // Add additional tokenizer behaviour
    CharacterCount.behaviours.counter['manhattan'] = (inst) => {

        // Create a counter element
        const cls = inst.constructor
        const counter = $.create('div', {'class': cls.css['counter']})

        // Insert the counter after the last element next to the
        // input/textarea.
        inst.input.parentNode.appendChild(counter)

        return counter
    }

    for(inputElm of $.many('[data-mh-character-count]')) {
        let characterCount = new CharacterCount(
            inputElm,
            {'counter': 'manhattan'}
        )
        characterCount.init()
    }

    // Date pickers
    for (inputElm of $.many('[data-mh-date-picker]')) {
        let picker = new datePicker.DatePicker(inputElm)
        picker.init()

        // Disable auto-complete as we're showing the picker
        inputElm.setAttribute('autocomplete', 'off')

        // Prevent selecting a date closing the advanced filter
        $.listen(
            picker.picker,
            {'click': preventAdvFilterClosing(inputElm)}
        )
    }

    // Time pickers
    for (inputElm of $.many('[data-mh-time-picker]')) {
        let picker = new timePicker.TimePicker(inputElm)
        picker.init()

        // Disable auto-complete as we're showing the picker
        inputElm.setAttribute('autocomplete', 'off')

        // Prevent selecting a time closing the advanced filter
        $.listen(
            picker.picker,
            {'click': preventAdvFilterClosing(inputElm)}
        )
    }

    // Typeaheads
    for (inputElm of $.many('[data-mh-typeahead]')) {
        let typeaheadInst = new typeahead.Typeahead(inputElm)
        typeaheadInst.init()

        // Prevent selecting a suggestion closing the advanced filter
        $.listen(
            typeaheadInst.typeahead,
            {'mousedown': preventAdvFilterClosing(inputElm)}
        )
    }

    // Tokenizers

    // Add additional tokenizer behaviour
    tokenizer.Tokenizer.behaviours.store['jsonObjects'] = (inst) => {
        const hiddenSelector = $.one(inst._options.hiddenSelector)
        hiddenSelector.value = JSON.stringify(inst.tokens)
    }

    for (inputElm of $.many('[data-mh-tokenizer]')) {
        let tokenizerInst = new tokenizer.Tokenizer(
            inputElm,
            {'store': 'json'}
        )
        let hiddenSelector = inputElm
            .getAttribute('data-mh-tokenizer--hidden-selector')
        let hiddenElm = $.one(hiddenSelector)
        let tokens = JSON.parse(hiddenElm.value || '[]')
        tokens = tokens.map((token) => {
            if (typeof token === 'string') {
                return {
                    'label': token,
                    'value': token
                }
            }
            return token
        })
        tokenizerInst.init(tokens)
    }

    // Assets

    function mhFormData(inst, file) {

        const data = new FormData()

        if ($.one('[name="csrf_token"]')) {
            data.append('csrf_token', $.one('[name="csrf_token"]').value)
        }
        data.append('file', file)

        if (inst.gallery) {
            dataPrefix = 'data-mh-gallery'
            inputElm = inst.gallery.input
        } else {
            dataPrefix = 'data-mh-file-field'
            inputElm = inst.input
        }

        data.append('field_name', inputElm.name)

        if (inst.parentOptions) {
            data.append('file_type', inst.parentOptions.fileType)
        } else {
            data.append('file_type', inst._options.fileType)
        }

        if (inputElm.getAttribute(`${dataPrefix}--blueprint`)) {
            data.append(
                'blueprint',
                inputElm.getAttribute(`${dataPrefix}--blueprint`)
            )
        }

        if (inputElm.hasAttribute(`${dataPrefix}--secure`)) {
            data.append('secure', 'secure')
        }

        return data
    }

    field.FileField.behaviours.formData['mhFormData'] = mhFormData
    gallery.Gallery.behaviours.formData['mhFormData'] = mhFormData

    // Fields
    for (inputElm of $.many('[data-mh-file-field]')) {

        let fileField = new field.FileField(
            inputElm,
            {
                'allowDrop': true,
                'uploadUrl': '/manage/upload-asset',
                'editing': '--draft--',
                'preview': '--thumb--',
                'formData': 'mhFormData'
            }
        )
        fileField.init()

        $.listen(
            inputElm,
            {
                'uploading': incUploads,
                'uploaded uploadfailed': decUploads
            }
        )
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
                'formData': 'mhFormData',
                'maxUploads': 1
            }
        )
        galleryInst.init()

        $.listen(
            inputElm,
            {
                'uploading': incUploads,
                'uploaded uploadfailed': decUploads
            }
        )
    }

    // Image sets
    for (inputElm of $.many('[data-mh-image-set]')) {
        let imageSetInst = new imageSet.ImageSet(
            inputElm,
            {
                'allowDrop': true,
                'uploadUrl': '/manage/upload-asset',
                'editing': '--draft--',
                'preview': '--thumb--',
                'formData': 'mhFormData'
            }
        )
        imageSetInst.init()

        $.listen(
            inputElm,
            {
                'uploading': incUploads,
                'uploaded uploadfailed': decUploads
            }
        )
    }

    // Ask the user to confirm they want to leave the page if there are assets
    // still uploading.
    $.listen(window, {'beforeunload': confirmLeave})

    // Addix form butons to the bottom of the page if the form is longer than
    // the frame containing it.
    const formElm = $.one('.mh-form--primary')
    if (formElm) {
        const frameElm = $.closest(formElm, '.mh-frame')
        const btnsElm = $.one('.mh-field--btns', formElm)

        // Flag whenever the buttons are anchored to the bottom of the form
        const anchoredHandler = anchored(frameElm, formElm, btnsElm)
        $.listen(window, {'resize scroll': anchoredHandler})
        anchoredHandler()
    }

}
