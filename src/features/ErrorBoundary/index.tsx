import React, { ErrorInfo } from 'react'

import ErrorUI from 'src/components/ErrorUI'

export default class ErrorBoundary extends React.Component<
  any,
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error(error)
    // eslint-disable-next-line no-console
    console.error(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorUI />
    }

    return this.props.children
  }
}
