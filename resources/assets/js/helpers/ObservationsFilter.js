export default class ObservationsFilter {
    constructor(observations) {
        this._observations = observations
        this._categoryName = ''
        this._searchTerm   = ''
        this._termCategory = 'all'
        this._collectionID = -1
        this._filtered     = []
        this._stateStatus  = 0

        this._saveState()
    }

    /**
     * Save current state.
     *
     * @private
     */
    _saveState() {
        this._state = {
            _categoryName: this._categoryName,
            _searchTerm  : this._searchTerm,
            _termCategory: this._termCategory,
            _collectionID: this._collectionID,
            _stateStatus : this._stateStatus
        }
    }

    /**
     * Check if one of our filters has changed.
     *
     * @returns {boolean}
     * @private
     */
    _stateChanged() {
        return !Object.keys(this._state).every(key => {
            return this._state[key] === this[key]
        })
    }

    /**
     * Replace current observations with a new set.
     *
     * @param observations
     * @returns {Array}
     */
    replace(observations) {
        this._observations = observations
        this._filtered     = []
        this._stateStatus += 1
        this._saveState()
        return this._filter()
    }

    /**
     * Set search filter.
     *
     * @param term
     * @returns {*}
     */
    search(term) {
        this._searchTerm = term
        return this._filter()
    }

    /**
     * Set collection filter.
     *
     * @param collection_id
     * @returns {*}
     */
    collection(collection_id) {
        this._collectionID = collection_id
        return this._filter()
    }

    /**
     * Set category filter.
     *
     * @param category
     * @returns {*}
     */
    category(category) {
        this._categoryName = category
        return this._filter()
    }

    /**
     * Set the search field category.
     *
     * @param value
     * @returns {Array}
     */
    searchTermCategory(value) {
        this._termCategory = value
        return this._filter()
    }

    /**
     * Search a certain category such as address or user name.
     *
     * @param term
     * @param category
     * @param observation
     * @returns {*}
     * @private
     */
    _searchCategory(term, category, observation) {
        switch (category) {
            case 'user':
                return this._contains(observation.user.name, term)
                break
            case 'category':
                return this._searchObservationCategory(term, observation)
                break
            case 'address':
            case 'state':
            case 'county':
            case 'city':
                return this._searchAddress(term, observation, category)
        }
    }

    /**
     * Check if string a contains string b.
     *
     * @param a
     * @param b
     * @returns {boolean}
     * @private
     */
    _contains(a, b) {
        return a.trim().toLowerCase().indexOf(b) > -1
    }

    /**
     * Search the observation category for a term.
     *
     * @param term
     * @param observation
     * @returns {boolean}
     * @private
     */
    _searchObservationCategory(term, observation) {
        if (this._contains(observation.observation_category, term)) {
            return true
        }

        if (observation.observation_category === 'Other' && typeof observation.meta_data.otherLabel !== 'undefined') {
            if (this._contains(observation.meta_data.otherLabel, term)) {
                return true
            }
        }

        return false
    }

    /**
     * Search address values.
     *
     * @param term
     * @param observation
     * @param type
     * @returns {boolean}
     * @private
     */
    _searchAddress(term, observation, type) {
        if (observation.location.address !== null) {
            let address = observation.location.address

            if (address.components.length > 0) {
                let found = false
                address.components.map(component => {
                    let keys = Object.keys(component)
                    for (let i = 0; i < keys.length; i++) {
                        let key = keys[i]
                        if (typeof type !== 'undefined' && type !== 'address') {
                            if (this._searchAddressComponent(type, term, component)) {
                                found = true
                                break
                            }
                        } else {
                            if (typeof component[key] === 'string') {
                                if (this._contains(component[key].trim(), term)) {
                                    found = true
                                    break
                                }
                            }
                        }
                    }
                })

                if (found) {
                    return true
                }
            }

            if (typeof type === 'undefined' || type === 'address') {
                if (this._contains(address.formatted, term)) {
                    return true
                }
            }
        }

        return false
    }

    /**
     *
     * @param {String} type Address type. E.g., county, city, state
     * @param {String} term Search term
     * @param {object} component Address component
     * @private
     */
    _searchAddressComponent(type, term, component) {
        let search = (component, term) => {
            return this._contains(component.long_name, term) || this._contains(component.short_name, term)
        }

        if (component.types) {
            switch (type) {
                case 'state':
                    if (component.types.indexOf('administrative_area_level_1') > -1) {
                        return search(component, term)
                    }
                    break
                case 'county':
                    if (component.types.indexOf('administrative_area_level_2') > -1) {
                        return search(component, term)
                    }
                    break
                case 'city':
                    if (component.types.indexOf('locality') > -1) {
                        return search(component, term)
                    }
                    break
            }
        }

        return false
    }

    /**
     * Checks if a term exists in observation.
     *
     * @param {String} term  the term to search for
     * @param {Object} observation the observation to check against
     * @param {String} category name of subcategory to search
     * @returns {boolean}
     * @private
     */
    _search(term, observation, category) {
        if (term.trim() === '') {
            return true
        }

        term = term.trim().toLowerCase()

        if (category !== 'all') {
            return this._searchCategory(term, category, observation)
        }

        if (this._searchObservationCategory(term, observation)) {
            return true
        }

        if (this._searchAddress(term, observation)) {
            return true
        }

        return this._contains(observation.user.name, term)
    }

    /**
     * Converts collections to array of IDs.
     *
     * @param collections
     * @private
     */
    _flatten(collections) {
        return collections.map(collection => parseInt(collection.id))
    }

    /**
     * Checks if an observation is in a given collection.
     *
     * @param id
     * @param observation
     * @returns {boolean}
     * @private
     */
    _collection(id, observation) {
        id = parseInt(id)
        if (id === -1) {
            return true
        }

        let collections = this._flatten(observation.collections)
        return collections.indexOf(id) > -1
    }

    /**
     * Checks if an observation is a given category.
     *
     * @param category
     * @param observation
     * @returns {boolean}
     * @private
     */
    _category(category, observation) {
        if (category.trim() === '') {
            return true
        }

        return category === observation.observation_category
    }

    /**
     * Applies all filters and returns a filtered observations array
     *
     * @return {Array}
     * @private
     */
    _filter() {
        // Make sure one of filters changed before iterating needlessly
        // We don't want this method called if React decides to update it's state
        //if (this._stateChanged()) {
        this._filtered = this._observations.filter(observation => {
            return this._collection(this._collectionID, observation)
                && this._search(this._searchTerm || '', observation, this._termCategory)
                && this._category(this._categoryName, observation)
        })

        this._saveState()
        /*} else if (this._filtered.length === 0) {
         return this._observations
         }*/

        return this._filtered
    }
}