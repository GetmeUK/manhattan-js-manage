$ = require 'manhattan-essentials'
mhSortable = require 'manhattan-sortable'


makeOrderable = (elm, input) ->
    # Make an orderable and save the results against the specified input
    sortable = new mhSortable.Sortable(elm)
    $.listen elm, 'mh-sortable--sorted': (ev) ->

        # Build the new ordered set of Ids
        ids = []
        for child in ev.children
            ids.push(child.dataset.id)

        # Set the value of the associated input
        input.value = JSON.stringify(ids)

init = () ->
    for elm in $.many('.mh-orderable')
        input = $.one('input[name="ordered_ids"]', $.closest(elm, 'form'))
        makeOrderable(elm, input)

module.exports = {
    init: init,
    makeOrderable: makeOrderable
}
