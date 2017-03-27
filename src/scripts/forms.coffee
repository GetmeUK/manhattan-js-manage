$ = require 'manhattan-essentials'
effects = require 'manhattan-effects'
forms = require 'manhattan-forms'


clearError = (input) ->
    # Clear an error against the field
    field = $.closest('.mh-field__control')

    # Remove the error attribute from the input and any siblings
    for child in $.many('[data-mh-error]', field)
        child.removeAttribute('data-mh-error')

    # Remove the error class from the field
    field.classList.remove('mh-field__control--error')

    # Remove the error
    error = $.one('.mh-field__error', field)
    if error
        error.remove()

focusField = (input) ->
    # Scroll a field into view and give it focus
    effects.scrollTo input, 1,  [0, -90], () ->
        input.focus()

fixButtons = (fix) ->
    # @@

inFieldLabels = () ->
    # Implement in-field labels
    inputSelector = '.mh-field__text, .mh-field__textarea, .mh-field__select'

    # Add fill events
    forms.fields.listenForFill(inputSelector)

    # Listen for fill, focus and blur events and modify the field state to
    # accommodate in-field lables.
    for input in $.many(inputSelector)
        field = $.closest(input, '.mh-field__control')
        if not field
            continue

        $.listen input,
            'blur': (ev) ->
                field.classList.remove('mh-field__control--focused')

            'fill': (ev) ->
                if ev.filled
                    field.classList.add('mh-field__control--filled')
                else
                    field.classList.remove('mh-field__control--filled')

            'focus': (ev) ->
                field.classList.add('mh-field__control--focused')

# ToggleFields

init = () ->
    # Set up in-field labels
    inFieldLabels()

    # Clear field errors
    inputErrors = [data-mh-error]
    for input in inputErrors
        $.listen input, 'change', () ->
            clearError(input)

    # Focus on the first error
    if inputErrors.length > 0
        focusField(inputErrors[0])

    # @@ Toogle fields

    # @@ Fix buttons if the form is longer than the page

{
    clearError: clearError,
    focusField: focusField,
    inFieldLabels: inFieldLabels,
    init: init
}
