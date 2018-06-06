import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class FlagsScene extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flags         : [],
      page          : 0,
      per_page      : 10,
      total         : 0,
      has_more_pages: false,
      loading       : true
    }
  }

  componentDidMount() {
    this.loadFlags()
  }

  loadFlags() {
    axios.get('/admin/web/flags', {
      page: this.state.page
    }).then(response => {
      let {data} = response.data
      this.setState({
        flags         : data.data,
        total         : data.total,
        page          : data.current_page,
        per_page      : data.per_page,
        has_more_pages: data.next_page_url !== null,
        loading       : false
      })
    }).catch(error => {
      this.setState({loading: false})
      console.log(error)
    })
  }

  next() {
    if (!this.state.has_more_pages) {
      return
    }

    this.setState({
      page: this.state.page + 1
    }, () => {
      this.loadFlags()
    })
  }

  back() {
    if (this.state.page <= 1) {
      return
    }

    this.setState({
      page: this.state.page - 1
    }, () => {
      this.loadFlags()
    })
  }

  renderTable() {
    if (this.state.total === 0) {
      return
    }

    return (
      <table className="table">
        <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Observation</th>
          <th>Reason</th>
          <th>Date Flagged</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {this.state.flags.map(flag => {
          const user        = flag.user
          const observation = flag.observation
          return (
            <tr key={flag.id}>
              <td className={'table-thumbnail-container'}>
                <img src={observation.thumbnail}
                     alt={observation.observation_category}
                     className={'table-thumbnail is-rounded'}/>
              </td>
              <td>
                <p>
                  <a href={`/observation/${observation.id}`}>
                    <strong>{observation.observation_category}</strong>
                  </a>
                </p>
                <p>
                  <strong>Uploaded by</strong> <Link to={`/user/${observation.user.id}`}>{observation.user.name}</Link>
                </p>
                <p>
                  <strong>Flagged by</strong> <Link to={`/user/${user.id}`}>{user.name}</Link>
                </p>
              </td>
              <td>
                <p>{flag.reason}</p>
                {flag.comments ? <div>
                  <p><strong>User Comments</strong></p>
                  <p>{flag.comments}</p>
                </div> : null}
              </td>
              <td>{flag.created_at}</td>
              <td></td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }

  renderPaginator() {
    return (
      <nav className="pagination is-centered" role="navigation" aria-label="pagination">
        <button className="pagination-previous"
                disabled={this.state.page <= 1}
                onClick={this.back.bind(this)}>
          Previous
        </button>
        <button className="pagination-next"
                disabled={!this.state.has_more_pages}
                onChange={this.next.bind(this)}>
          Next
        </button>
      </nav>
    )
  }

  render() {
    return (
      <div>
        <h1 className="title is-3">Flagged Observations</h1>
        <div className="box">
          {this.state.total === 0 && !this.state.loading ? <p>There are no flagged observations.</p> : null}
          {this.renderTable()}
          {this.renderPaginator()}
        </div>
      </div>
    )
  }
}