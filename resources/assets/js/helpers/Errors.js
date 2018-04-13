const code_responses = {
  '500': 'Server error 500: Please try again later',
  '404': 'some 404 error',
  '422': 'some 422 error',
  '401': 'You are not logged in!Please log in to upload to the server.',
  '403': 'Authorization error: You don\'t have permission to access that observation.'
}

export default class Errors {
  /**
   * Construct the object.
   *
   * @param error
   */
  constructor(error) {
    this.errors = {}

    this.responses = code_responses

    if (typeof error === 'string') {
      this.errors = {general: [error]}
      return
    }

    if (typeof error === 'object') {
      this.errorCode = error.response ? error.response.status : -1
    }

    this._extractErrors(error)
  }

  /**
   * Get all errors.
   *
   * @return {{}|*|{general: string[]}}
   */
  all() {
    return this.errors
  }

  /**
   * Get the first error in for a field.
   *
   * @param field
   * @return {*}
   */
  first(field) {
    return this.errors[field][0]
  }

  /**
   * Returns the responses used for different error codes: handy for testing.
   *
   * @return {{Object}}
   */
  fetchCodes() {
    return this.responses
  }

  /**
   * Get all errors for a given field.
   *
   * @param field
   * @return {Array}
   */
  getField(field) {
    if (this.errors[field]) {
      return this.errors[field]
    }
  }

  /**
   * Sets the errors object based on the errorCode.
   *
   * @private
   */
  _extractErrors(errors) {
    switch (this.errorCode) {
      case 401:
        this.errors = {general: [this.responses['401']]}
        break
      case 403:
        this.errors = {general: [this.responses['403']]}
        break
      case 404:
        this.errors = {general: [this.responses['404']]}
        break
      case 500:
        this.errors = {general: [this.responses['500']]}
        break
      case 422:
        // There are 422 with custom errors, and 422s that are form validation rejections
        let data = errors.response.data

        if (data.error) {
          // Its a single error message
          this.errors = {
            general: [data.error]
          }
        }
        else {
          // Its a set of {field: [message]} pairs
          this.errors = data
        }
        break
      default:
        // No error code or error code was -1
        this.errors = {
          general: ['Network error!  Please check your internet connection and try again.']
        }
        break
    }
  }

  /**
   * Checks if an error exists for a given field.
   *
   * @param field
   * @return {boolean}
   */
  has(field) {
    return this.errors.hasOwnProperty(field)
  }

  /**
   * Checks if any errors exist.
   *
   * @return {boolean}
   */
  any() {
    return Object.keys(this.errors).length > 0
  }

  /**
   * clear error.
   *
   * @param field
   */
  clear(field) {
    if (this.errors.hasOwnProperty(field)) {
      delete this.errors[field]
    }
  }
}
