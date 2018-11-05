import React from 'react'
import styled from 'styled-components'

import ContentBox from '../../components/layouts/ContentBox'
import Fullscreen from '../../components/layouts/FullscreenWrapper'

const StyledContentBox = styled(ContentBox)`
  background: ${p => p.theme.surface};
  min-height: 100%;
`

const PasswordLost = () => (
  <Fullscreen>
    <StyledContentBox title='Password lost?'>
      <div>That&spos;s sad :(</div>
    </StyledContentBox>
  </Fullscreen>
)

export default PasswordLost
