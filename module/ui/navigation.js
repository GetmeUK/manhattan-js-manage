import * as $ from 'manhattan-essentials'


// -- Classes --

/**
 * A class to manage a set of navigation items.
 */
class NavMgr {

    constructor() {

        // A map of navigation items added to the navigation manager
        this._navItems = {}

        // A map of defined nav groups
        this._navGroups = {}
    }

    /**
     * Add a navigation item to the navigation manager.
     */
    add(navItem) {
        this._navItems[navItem.name] = navItem
    }

    /**
     * Add a navigation group to the navigation manager (associated with the
     * manager).
     */
    addGroup(groupName, names) {
        this._navGroups[groupName] = names
    }

    /**
     * Close the named list of navigation items.
     */
    close(names) {
        const flatNames = this._expandNames(names)
        for (let name of flatNames) {
            this._navItems[name].open = false
        }
    }

    /**
     * Close all navigation items (associated with the manager), optionally
     * exclude any of the named navigation items in the `exclude` list.
     */
    closeAll(exclude=[]) {
        const flatExclude = this._expandNames(exclude)
        for (let name in this._navItems) {
            if (exclude.indexOf(name) === -1) {
                this._navItems[name].open = false
            }
        }
    }

    // -- Private methods --

    /**
     * Flattern a list of nav and/or group names into a list of nav names
     * only.
     */
    _expandNames(names) {
        const expandedNames = []
        for (let name of names) {
            if (this._navItems[name]) {
                expandedNames.push(name)
            }
            if (this._navGroups[name]) {
                expandedNames.push(...this._navGroups[name])
            }
        }
        return expandedNames
    }
}


/**
 * A UI component for navigation.
 */
class NavItem {

    constructor(name, navElm, handleElm, targetElm, css) {

        // The name of the navigation item
        this._name = name

        // The navigation element
        this._navElm = navElm

        // The element that triggers the navigation item to open/close
        this._handleElm = handleElm

        // The element that the open/close css class will be applied to
        this._targetElm = targetElm

        // The CSS class that will be applied to the target element when the
        // navigation item is open.
        this._css = css

        // Set up toggle event for the navigation item
        $.listen(
            handleElm,
            {
                'click': (event) => {
                    if (event.buttons === 0) {
                        event.stopPropagation()
                        this.open = !this.open
                    }
                }
            }
        )
    }

    get name() {
        return this._name
    }

    get open() {
        return this._targetElm.classList.contains(this._css)
    }

    set open(value) {
        if (value) {
            this._targetElm.classList.add(this._css)
            $.dispatch(this._navElm, 'opened')
        } else {
            this._targetElm.classList.remove(this._css)
            $.dispatch(this._navElm, 'closed')
        }
    }

}


// -- Utils --

/**
 * Update the height of the primary navigation so that it appears to travel
 * with the page as it scrolls and sticks to the top of the page.
 */
function updatePrimaryNavHeight() {
    const {top} = $.one('.mh-frame__inner').getBoundingClientRect()
    if (top > 0) {
        $.one('.mh-nav').style.maxHeight = `calc(100% - ${top}px)`
    } else {
        $.one('.mh-nav').style.maxHeight = '100%'
    }
}


// -- Initializer

export function init() {

    const navMgr = new NavMgr()

    // Primary navigation
    const primaryNavElm = $.one('.mh-nav__section--prime')
    if (primaryNavElm) {

        // Set up the primary navigation item
        const primaryNav = new NavItem(
            'primary',
            primaryNavElm,
            $.one('.mh-handle', primaryNavElm),
            $.one('.mh-frame'),
            'mh-frame--prime-nav-open'
        )
        navMgr.add(primaryNav)
        $.listen(
            primaryNavElm,
            {
                'opened': (event) => {
                    if (primaryNavElm === event.target) {
                        navMgr.closeAll(['primary'])
                    }
                }
            }
        )

        // Listen for resize and scroll events and update the height of
        // primary navigation to match.
        let primaryNavTimeout = null
        $.listen(
            window,
            {
                'resize scroll': () => {
                    clearTimeout(primaryNavTimeout)
                    primaryNavTimeout = setTimeout(updatePrimaryNavHeight, 50)
                }
            }
        )

        updatePrimaryNavHeight()
    }

    // Sub-navigation
    for (let [i, subNavElm]
        of $.many('.mh-nav-item--has-children').entries()) {

        // Set up the sub-navigation item
        let subNav = new NavItem(
            `subNav_${i}`,
            subNavElm,
            subNavElm,
            subNavElm,
            'mh-nav-item--open'
        )
        navMgr.add(subNav)

        $.listen(
            subNavElm,
            {
                'opened': (event) => {
                    if (subNavElm === event.target) {
                        navMgr.closeAll(['primary', `subNav_${i}`])
                    }
                }
            }
        )
    }

    // User navigation
    const userNavElm = $.one('.mh-nav__section--user')
    if (userNavElm) {

        // Set up the user navigation item
        const userNav = new NavItem(
            'user',
            userNavElm,
            $.one('.mh-handle', userNavElm),
            $.one('.mh-frame'),
            'mh-frame--user-nav-open'
        )
        navMgr.add(userNav)
        $.listen(
            userNavElm,
            {
                'opened': (event) => {
                    if (userNavElm === event.target) {
                        navMgr.closeAll(['user'])
                    }
                }
            }
        )

    }

    // Actions
    const actionsElm = $.one('.mh-actions')
    if (actionsElm) {

        // Set up the action navigation item
        const actionsNav = new NavItem(
            'actions',
            actionsElm,
            $.one('.mh-actions__handle', actionsElm),
            actionsElm,
            'mh-actions--open'
        )
        navMgr.add(actionsNav)

        $.listen(
            actionsElm,
            {
                'closed': (event) => {
                    const actionElms = $
                        .many('.mh-actions__link--has-sub-actions')
                    for (const actionElm of actionElms) {
                        actionElm
                            .classList
                            .remove('mh-actions__link--sub-actions-open')
                    }
                },
                'opened': (event) => {
                    if (actionsElm === event.target) {
                        navMgr.closeAll(['actions'])
                    }
                }
            }
        )

        for (const actionElm of $.many('.mh-actions__link--has-sub-actions')) {

            // Set up sub-action menus
            $.listen(
                actionElm,
                {
                    'click': (event) => {
                        event.stopPropagation()
                        event
                            .currentTarget
                            .classList
                            .toggle('mh-actions__link--sub-actions-open')

                        if (event
                            .currentTarget
                            .classList
                            .contains('mh-actions__link--sub-actions-open')) {

                            navMgr.close(['filter'])
                        }
                    }
                }
            )
        }
    }

    // Filter
    const filterElm = $.one('.mh-filter-adv')
    if (filterElm) {

        // Set up the filter navigation item
        const filterNav = new NavItem(
            'filter',
            filterElm,
            $.one('.mh-filter-adv__handle', filterElm),
            filterElm,
            'mh-filter-adv--open'
        )
        navMgr.add(filterNav)

        $.listen(
            filterElm,
            {
                'opened': (event) => {
                    if (filterElm === event.target) {
                        navMgr.close(['actions'])
                    }
                }
            }
        )

        $.listen(
            $.one('.mh-filter-adv__fields', filterElm),
            {
                'click': (ev) => {
                    ev.stopPropagation()
                }
            }
        )

        $.listen(
            $.one('.mh-filter-adv__close', filterElm),
            {
                'click': (ev) => {
                    navMgr.close(['filter'])
                }
            }
        )
    }

    // Close actions and filter if the user clicks the body
    $.listen(
        document.body,
        {
            'click': (event) => {
                if ('navSupressClick' in document.body.dataset) {
                    delete document.body.dataset.navSupressClick
                    return
                }

                if (!event.defaultPrevented) {
                    navMgr.close(['actions', 'filter'])
                }
            }
        }
    )

    if (window.innerWidth < 1080) {

        // On narrow devices we don't want the user nav to be open when the
        // page loads so we ensure it's closed it initially.
        navMgr.close(['user'])
    }
}
