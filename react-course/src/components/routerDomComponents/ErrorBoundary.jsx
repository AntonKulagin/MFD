import {Component} from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error) {
    console.log('errorFromError', error)
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('error', error)
    console.log('errorInfo', errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h4>Что-то пошло не так</h4>
    }
    return this.props.children
  }
}