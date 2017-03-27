$ = require 'manhattan-essentials'

flashes = require './flashes.coffee'
forms = require './forms.coffee'
nav = require './nav.coffee'
results = require './results.coffee'

init = () ->

    flashes.init()
    forms.init()
    nav.init()
    results.init()
