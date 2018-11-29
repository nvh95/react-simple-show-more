import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-simple-show-more Demo</h1>
      <Example
      text="Lorem ipsum dolor sit amet, ultrices odio vitae a est, justo fusce commodo at, pellentesque pharetra. Donec mi elit hendrerit felis non, at sodales ut nibh, diam taciti quam est mattis et a, urna sed sociis, ac per per ut nunc. Nonummy dictum in ante nulla cras, cras sed dolor nonummy wisi ante, id tellus. A imperdiet. Semper turpis aliquam nunc metus, dictum tempor interdum interdum bibendum tellus id, eu sit non, ante nec eros quisque sit ipsum, class ut neque. Orci mus leo, venenatis sollicitudin, penatibus ridiculus massa suspendisse. Nonummy urna neque rhoncus laoreet aliquam nullam, id diam maecenas dapibus tellus, maecenas ipsum sed. In vehicula in urna, amet magna donec tellus pretium.
      "
      length={170}
      tag="a"
      className="text-blue"
      ellipsis="..."
      enabled
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
