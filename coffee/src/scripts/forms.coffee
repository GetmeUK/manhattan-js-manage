$ = require 'manhattan-essentials'
assets = require 'manhattan-assets'
datePicker = require 'manhattan-date-picker'
effects = require 'manhattan-effects'
forms = require 'manhattan-forms'
typeahead = require('manhattan-typeahead')


affixButtons = (form) ->
    # Affix buttons to a form

    # Check the form isn't flagged to prevent fixed buttons
    if form.classList.contains('mh-form--fixed-btns-disallowed')
        return

    # Flag the form as containing fixed buttons
    form.classList.add('mh-form--fixed-btns')

    # If the buttons are held within a fieldset then move them to the end of the
    # form.
    btns = $.one('.mh-field--btns', form)
    fieldset = $.closest(btns, '.mh-form__fieldset')
    if fieldset
        # Move the buttons
        forms.appendChild(btns)

        # Remove the fieldset if it's empty
        unless fieldset.innerHTML.trim()
            fieldset.remove()

    # Flag when the buttons are at the bottom of the page (this is used to apply
    # a visual effect to the buttons container).
    frame = $.closest(form, '.mh-frame')

    anchored = () ->
        # If the user has scrolled to the bottom of the page then flag this
        # against the form buttons.
        if window.innerHeight + window.scrollY >= frame.clientHeight
            btns.classList.add('mh-field--anchored')
        else
            btns.classList.remove('mh-field--anchored')

    # Check initially...
    anchored()

    # ...and subsequently whenever the user scrolls.
    $.listen window, 'scroll': () ->
        anchored()

clearError = (input) ->
    # Clear an error against the field
    field = $.closest(input, '.mh-field__control')

    # Remove the error attribute from the input and any siblings
    for child in $.many('[data-mh-error]', field)
        child.removeAttribute('data-mh-error')

    # Remove the error class from the field
    field.classList.remove('mh-field__control--error')

    # Remove the error
    error = $.one('.mh-field__error', field)
    if error
        error.remove()

    # Dispatch an event to notify listeners that the erro against the
    # input/field has bee cleared.
    $.dispatch(input, 'clearerror')

focusField = (input) ->
    # Scroll a field into view and give it focus
    effects.scrollTo input, 1,  [0, -90], () ->
        input.focus()

inFieldLabels = () ->
    # Implement in-field labels
    inputSelector = '.mh-field__text, .mh-field__textarea, .mh-field__select'

    # Listen for fill, focus and blur events and modify the field state to
    # accommodate in-field lables.
    for input in $.many(inputSelector)

        field = $.closest(input, '.mh-field__control')
        if not field
            continue

        $.listen input,
            'blur': (ev) ->
                field = $.closest(this, '.mh-field__control')
                field.classList.remove('mh-field__control--focused')

            'focus': (ev) ->
                field = $.closest(this, '.mh-field__control')
                field.classList.add('mh-field__control--focused')

            'mh-date-picker--picked': (ev) ->
                field = $.closest(this, '.mh-field__control')
                field.classList.add('mh-field__control--filled')

            'mh-forms-fields--fill': (ev) ->
                field = $.closest(this, '.mh-field__control')
                if ev.filled
                    field.classList.add('mh-field__control--filled')
                else
                    field.classList.remove('mh-field__control--filled')

    # Add fill events
    forms.fields.listenForFill(inputSelector)

# ToggleFields

init = () ->
    # Set up in-field labels
    inFieldLabels()

    # Set up for asset fields
    for input in $.many('[data-mh-assets-field]')
        new assets.Field(input, {
            endpoint: '/manage/upload-asset'
            })

    # Set up for asset galleries
    for input in $.many('[data-mh-assets-gallery]')
        new assets.Gallery(input, {
            endpoint: '/manage/upload-asset'
            })

    # Set up date pickers
    for input in $.many('[data-mh-date-picker]')
        new datePicker.DatePicker(input)

    # Set up typeaheads
    for input in $.many('[data-mh-typeahead]')
        new typeahead.Typeahead(input)

    # Clear field errors
    inputErrors = $.many('[data-mh-error]')
    for input in inputErrors
        $.listen input, 'change', () ->
            clearError(input)

            # If there are no more errors hide the next error button
            if $.many('[data-mh-error]').length == 0
                nextErrorBtn = $.one('.mh-form--primary .mh-btn--error')
                nextErrorBtn.classList.add('mh-btn--hidden')

    # Focus on the first error
    if inputErrors.length > 0
        focusField(inputErrors[0])

    # Affix the form buttons to the bottom of the page if the form is longer
    # than the form's container frame.
    primaryForm = $.one('.mh-form--primary')
    if primaryForm
        primaryFrame = $.closest(primaryForm, '.mh-frame')
        if primaryFrame and primaryFrame.clientHeight > window.innerHeight
            affixButtons(primaryForm)

            # Enable the next error button to aid users navigating long forms
            # containing errors.
            nextErrorBtn = $.one('.mh-btn--error', primaryForm)
            if nextErrorBtn
                $.listen nextErrorBtn, 'click': (ev) ->
                    ev.preventDefault()

                    # Find all inputs, and  all inputs with errors
                    inputs = $.many(
                        'input, select, textarea, [contentEditable=true]')
                    inputErrors = $.many('[data-mh-error]')

                    # If there's an active input in the form then focus on the
                    # first error after it...
                    activeInputIndex = inputs.indexOf(document.activeElement)
                    if activeInputIndex > -1
                        for inputError in inputErrors
                            if inputs.indexOf(inputError) > activeInputIndex
                                focusField(inputError)
                                break

                    # Otherwise just pick the first error
                    else
                        focusField(inputErrors[0])

                nextErrorBtn.classList.remove('mh-btn--hidden')


module.exports = {
    affixButtons: affixButtons,
    clearError: clearError,
    focusField: focusField,
    inFieldLabels: inFieldLabels,
    init: init
}