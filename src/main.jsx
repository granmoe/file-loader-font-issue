import React from 'react'
import ReactDOM from 'react-dom'
import styled, { injectGlobal } from 'styled-components'
import ostrich from 'ostrich-sans-regular.eot'

injectGlobal`
  @font-face {
    font-family: test;
    src: url(${ostrich});
  }
`

const Test = styled.div`
  font-family: test;
  font-size: 32px;
`

ReactDOM.render(
  <Test>This should be in a crazy font, but it isn't</Test>,
  document.getElementById('app')
)
