import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Tooltip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
    }

    render() {
        return (
            <div className={`tooltip ${this.props.position}`}
                 onMouseEnter={() => this.setState({show: true})}
                 onMouseLeave={() => this.setState({show: false})}
                 {..._.omit(this.props, Object.keys(Tooltip.PropTypes))}
                 onClick={() => this.setState({show: false})}
            >
                {this.props.children}
                <div className={`tooltip-text${this.state.show ? ' show' : ''}`}>
                    {this.props.label}
                </div>
            </div>
        )
    }
}

Tooltip.PropTypes = {
    label   : PropTypes.string.isRequired,
    position: PropTypes.string
}

Tooltip.defaultProps = {
    position: 'top'
}