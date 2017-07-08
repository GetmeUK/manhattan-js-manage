$ = require 'manhattan-essentials'

core = require './core.coffee'
flashes = require './flashes.coffee'
forms = require './forms.coffee'
nav = require './nav.coffee'
order = require './order.coffee'
results = require './results.coffee'

init = () ->

    flashes.init()
    forms.init()
    nav.init()
    results.init()
    order.init()
    core.init()


module.exports = {
    # Standard init
    init: init,

    # Separate behaviour modules
    core: core,
    flashes: flashes,
    forms: forms,
    nav: nav,
    results: results
    }
