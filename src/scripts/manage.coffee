$ = require 'manhattan-essentials'

core = require './core.coffee'
flashes = require './flashes.coffee'
forms = require './forms.coffee'
nav = require './nav.coffee'
results = require './results.coffee'

init = () ->

    core.init()
    flashes.init()
    forms.init()
    nav.init()
    results.init()


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
