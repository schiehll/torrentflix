import { Component } from 'react'
import PropTypes from 'prop-types'

class PageTitle extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: 'App'
  }

  componentDidMount() {
    document.title = this.props.title
  }

  componentDidUpdate() {
    document.title = this.props.title
  }

  render() {
    return null
  }
}

export default PageTitle
