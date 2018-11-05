import React from 'react'
import styled from 'styled-components'

import ContentBox from '../../components/layouts/ContentBox'
import Fullscreen from '../../components/layouts/FullscreenWrapper'

const StyledContentBox = styled(ContentBox)`
  background: ${p => p.theme.surface};
  min-height: 100%;
`

const Login = () => (
  <Fullscreen>
    <StyledContentBox title='Login'>
      <div>Enter your credentials or sign up</div>
    </StyledContentBox>
  </Fullscreen>
)

export default Login
