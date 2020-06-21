import * as $ from 'manhattan-essentials'


/**
 * An element that is visible depending on the value of a field.
 */
class BaseConditional {

    get visible() {
        const hideCSS = this.constructor.css['hide']

        if (this._dom.relatedControl.classList.contains(hideCSS)) {
            // The related field isn't visible so the the element should not
            // be visible.
            return false
        }

        const [inputElm] = this._dom.relatedInputs

        switch (inputElm.type.toLowerCase()) {

        case 'radio':

            let radioElm = $.one(`[name='${this._related}']:checked`)

            if (this._value === 'y' || this._value === 'n') {
                if (this._value === 'y') {
                    return radioElm && radioElm.value === 'y'
                } else if (this._value === 'n') {
                    return radioElm && radioElm.value === 'n'
                }
            }

            return radioElm
                && this.constructor.match(
                    this._value,
                    radioElm.value,
                    this._matchType
                )

        case 'checkbox':

            let checkboxElms = $.many(`[name='${this._related}']:checked`)
            let values = [...checkboxElms].map((checkboxElm) => {
                return checkboxElm.value
            })

            if (this._value === 'y' || this._value === 'n') {
                if (this._value === 'y') {
                    return values.length === 1
                } else if (this._value === 'n') {
                    return values.length === 0
                }
            }

            return this.constructor.match(
                this._value,
                values,
                this._matchType
            )

        default:

            return this.constructor.match(
                this._value,
                inputElm.value,
                this._matchType
            )
        }
    }

}

/**
 * Return True if the match value matches the input value.
 */
BaseConditional.match = (matchValue, inputValue, matchType) => {

    const matchValues = matchValue.split('|')

    // Startswith (case insensitive)
    if (matchType === 'startswith') {
        if (typeof inputValue === 'string') {
            return matchValue.split('|').some((v) => {
                return inputValue.toLowerCase().startsWith(v.toLowerCase())
            })
        }

        return matchValue.split('|').some((mv) => {
            return inputValue.some((iv) => {
                return iv.toLowerCase().startsWith(mv.toLowerCase())
            })
        })
    }

    // Not equals
    if (matchType === 'notequal') {
        if (typeof inputValue === 'string') {
            return matchValue.split('|').indexOf(inputValue) === -1
        }

        return !matchValue.split('|').some((mv) => {
            return inputValue.some((iv) => {
                return iv === mv
            })
        })
    }

    // Equals
    if (typeof inputValue === 'string') {
        return matchValue.split('|').indexOf(inputValue) > -1
    }

    return matchValue.split('|').some((mv) => {
        return inputValue.some((iv) => {
            return iv === mv
        })
    })
}


/**
 * An element that is visible depending on the value of a field.
 */
export class ConditionalElement extends BaseConditional {

    constructor(element) {
        super()

        // The name of the related field (input)
        this._related = null

        // The value required in order for the element to be visible
        this._value = null

        // The match type to perform
        this._matchType = null

        // Domain for related DOM elements
        this._dom = {
            'element': null,
            'relatedControl': null,
            'relatedInputs': null
        }

        // Store a reference to the element
        this._dom.element = element

        // Set up event handlers
        this._handlers = {

            'change': (event) => {
                event.preventDefault()

                const hideCSS = this.constructor.css['hide']

                // Toggle the visibility of the element
                if (this.visible) {
                    this.element.classList.remove(hideCSS)
                } else {
                    this.element.classList.add(hideCSS)
                }

                // Trigger a change event against the element to capture
                // changes in visibility.
                $.dispatch(this.element, 'change', {})

                // Force resize to ensure that the save bar on forms updates
                $.dispatch(window, 'resize', {})
            }
        }
    }

    // -- Getters & Setters --

    get element() {
        return this._dom.element
    }

    // -- Public methods --

    /**
     * Remove the conditional element behaviour.
     */
    destroy() {

        if (this._dom.relatedInputs) {

            for (const relatedInputElm of this._dom.relatedInputs) {
                $.ignore(
                    relatedInputElm,
                    {'change': this._handlers['change']}
                )
            }

            this._dom.relatedControl = null
            this._dom.relatedInputs = null
        }

        // Remove the conditional element reference from the input
        delete this.element._conditionalElement
    }

    /**
     * Initialize the conditional element behaviour.
     */
    init() {

        // Store a reference to the conditional element instance against the
        // element.
        this.element._conditionalElement = this

        // Get the name of the related element
        this._related = this
            .element
            .getAttribute('data-mh-conditional-element--related')

        // Get the conditional value for the element
        this._value = this
            .element
            .getAttribute('data-mh-conditional-element--value')

        // Get the match type to perform for the element
        this._matchType= this
            .element
            .getAttribute('data-mh-conditional-element--match-type')

        // Look up the relevant DOM elements
        this._dom.relatedInputs = $.many(`[name=${this._related}]`)
        this._dom.relatedControl = $.closest(
            this._dom.relatedInputs[0],
            '.mh-field__control'
        )

        // Setup event handlers
        for (const relatedInputElm of this._dom.relatedInputs) {
            $.listen(relatedInputElm, {'change': this._handlers['change']})
            $.dispatch(relatedInputElm, 'change', {})
        }

    }

}


// -- CSS classes --

ConditionalElement.css = {

    /**
     * Applied to the hidden elements.
     */
    'hide': 'ninja'

}


/**
 * A field that is visible depending on the value of a related field.
 */
export class ConditionalField extends BaseConditional {

    constructor(input) {
        super()

        // The name of the related field (input)
        this._related = null

        // The value required in order for the element to be visible
        this._value = null

        // Domain for related DOM elements
        this._dom = {
            'control': null,
            'field': null,
            'input': null,
            'relatedControl': null,
            'relatedInputs': null
        }

        // Store a reference to the input
        this._dom.input = input

        // Set up event handlers
        this._handlers = {

            'change': (event) => {
                event.preventDefault()

                const hideCSS = this.constructor.css['hide']

                // Toggle the visibility of the element
                if (this.visible) {
                    this._dom.control.classList.remove(hideCSS)
                    this._dom.field.classList.remove(hideCSS)
                } else {

                    this._dom.control.classList.add(hideCSS)
                    const hasVisibleSiblings = $.one(
                        `.mh-field__control:not(.${hideCSS})`,
                        this._dom.field
                    )
                    if (!hasVisibleSiblings) {
                        this._dom.field.classList.add(hideCSS)
                    }

                }

                // Trigger a change event against the element to capture
                // changes in visibility.
                $.dispatch(this.input, 'change', {})

                // Force resize to ensure that the save bar on forms updates
                $.dispatch(window, 'resize', {})
            }
        }

    }

    // -- Getters & Setters --

    get input() {
        return this._dom.input
    }

    // -- Public methods --

    /**
     * Remove the conditional field behaviour.
     */
    destroy() {

        if (this._dom.relatedInputs) {

            for (const relatedInputElm of this._dom.relatedInputs) {
                $.ignore(
                    relatedInputElm,
                    {'change': this._handlers['change']}
                )
            }

            this._dom.control = null
            this._dom.field = null
            this._dom.relatedInputs = null
            this._dom.relatedControl = null
        }

        // Remove the conditional field reference from the input
        delete this.input._conditionalField
    }

    /**
     * Initialize the conditional field behaviour.
     */
    init() {

        // Store a reference to the conditional field instance against the
        // element.
        this.input._conditionalField = this

        // Get the name of the related field
        this._related
            = this.input.getAttribute('data-mh-conditional-field--related')

        // Get the conditional value for the field
        this._value
            = this.input.getAttribute('data-mh-conditional-field--value')

        // Get the match type to perform for the field
        this._matchType
            = this.input.getAttribute('data-mh-conditional-field--match-type')

        // Look up the relevant DOM elements
        this._dom.control = $.closest(this.input, '.mh-field__control')
        this._dom.field = $.closest(this.input, '.mh-field')
        this._dom.relatedInputs = $.many(`[name=${this._related}]`)
        this._dom.relatedControl = $.closest(
            this._dom.relatedInputs[0],
            '.mh-field__control'
        )

        // Setup event handlers
        for (const relatedInputElm of this._dom.relatedInputs) {
            $.listen(relatedInputElm, {'change': this._handlers['change']})
            $.dispatch(relatedInputElm, 'change', {})
        }

    }

}


// -- CSS classes --

ConditionalField.css = {

    /**
     * Applied to the hidden elements.
     */
    'hide': 'ninja'

}


// -- Initializer --

export function init() {

    let element = null

    // Initialize conditional elements and fields
    for (element of $.many('[data-mh-conditional-element]')) {
        const conditionalElement = new ConditionalElement(element)
        conditionalElement.init()
    }

    for (element of $.many('[data-mh-conditional-field]')) {
        const conditionalField = new ConditionalField(element)
        conditionalField.init()
    }

}
