$ = require 'manhattan-essentials'
mhNav = require 'manhattan-nav'


# Table of registered nav items
_navs = {}

closeNavs = (navNames=null, exclude=[]) ->
    # Close a list of navs (defaults to all navs) except those in the exclude
    # list. The `exclude` option can take a list of name strings, `NavItem`
    # elements or a combination of both.
    unless navNames
        navNames = (key for key of _navs)

    for name in navNames
        if exclude.indexOf(name) > 0
            continue

        unless _navs[name]
            continue

        for nav in _navs[name]
            if exclude.indexOf(nav.element) > 0
                continue
            nav.close()

registerNav = (name, element) ->
    # Register a nav item against a name
    nav = element.__mh_navItem
    if _navs[name]
        _navs[name].push(nav)
    else
        _navs[name] = [nav]

updateNavHeight = () ->
    # Update the height of the primary navigation so that it appears to travel
    # with the page as it scrolls and sticks to the top of the page.
    nav = $.one('.mh-nav')
    top = $.one('.mh-frame__inner').getBoundingClient().top
    if top > 0
        nav.style.maxHeight = "calc(100% - #{top}px)"
    else
        nav.style.maxHeight = '100%'

init = () ->

    # Primary nav
    primaryNav = $.one('.mh-nav--prime')
    if primaryNav

        # Implement open/close behaviour
        primeHandle = $.one('.mh-nav__handle', primaryNav)
        new mhNav.NavItem(
            primeHandle,
            {
                openClass: 'mh-frame--prime-nav-open'
                selectors: '.mh-frame',
                target: 'selectors'
            }
        )
        $.listen primeHandle, 'click': () ->
            ev.stopPropagation()

        registerNav('prime', primeHandle)

        $.listen primeHandle,
            'mh-nav-item--open': () ->
                closeNavs(null, ['prime'])
            'mh-nav-item--close': () ->
                closeNavs(null, ['prime'])

        # Update the nav height when the page loads and on subsequent scroll and
        # resize events.
        updateNavHeight()

        navHeightTimeout = null
        _updateNavHeight = () ->
            clearTimout(navHeightTimeout)
            navHeightTimeout = setTimeout(updateNavHeight, 50)

        $.listen window,
            'scroll': _updateNavHeight
            'resize': _updateNavHeight

    # User nav
    userNav = $.one('.mh-nav--user')
    if userNav

        # Implement open/close behaviour
        userHandle = $.one('.mh-nav__handle', userNav)
        new mhNav.NavItem(
            userHandle,
            {
                openClass: 'mh-frame--user-nav-open'
                selectors: '.mh-frame',
                target: 'selectors'
            }
        )
        $.listen userHandle, 'click': () ->
            ev.stopPropagation()

        registerNav('user', userHandle)

        $.listen userHandle,
            'mh-nav-item--open': () ->
                closeNavs(null, exclude=['user'])
            'mh-nav-item--close': () ->
                closeNavs(null, exclude=['user'])

    # Sub navs
    for subNav in $.many('.mh-nav__sub-list')
        new mhNav.NavItem(
            subNav.parentNode,
            {
                openClass: 'mh-nav__item--open'
                selectors: '.mh-nav__sub-list',
                target: 'child'
            }
        )
        $.listen subNav, 'click': () ->
            ev.stopPropagation()

        registerNav('subNav', subNav.parentNode)

        $.listen subNav.parentNode,
            'mh-nav-item--open': () ->
                closeNavs(['subNav', 'user'], exclude=[this])
            'mh-nav-item--close': () ->
                closeNavs(['subNav', 'user'], exclude=['prime', this])

    # Actions
    actionsNav = $.one('.mh-actions')
    if actionsNav
        actionsHandle = $.one('.mh-actions__handle', actionsNav)
        new mhNav.NavItem(
            actionsHandle,
            {
                openClass: 'mh-actions--open'
                selectors: '.mh-actions',
                target: 'closest'
            }
        )
        registerNav('actions', actionsHandle)

        $.listen actionsHandle, 'click': () ->
            ev.stopPropagation()

        $.listen actionsHandle.parentNode, 'click': () ->
            ev.stopPropagation()

    # Advanced filters
    filterNav = $.one('.mh-filter-adv')
    if filterNav
        filterHandle = $.one('.mh-filter-adv__handle', filterNav)
        new mhNav.NavItem(
            filterHandle,
            {
                openClass: 'mh-filter-adv--open'
                selectors: '.mh-filter-adv',
                target: 'closest'
            }
        )
        registerNav('filters', filterHandle)

        $.listen $.one('.mh-filter-adv__fields', filterNav), 'click': (ev) ->
            ev.stopPropagation()

        $.listen $.one('.mh-filter-adv__close', filterNav), 'click': (ev) ->
            closeNavs(['filters'])

    # Close filters and actions when a user clicks the body
    $.listen document.body, 'click': (ev) ->
        if not ev.defaultPrevented
            closeNavs(['actions', 'filters'])


module.exports = {
    closeNavs: closeNavs,
    init: init,
    registerNav: registerNav,
    updateNavHeight: updateNavHeight
}
