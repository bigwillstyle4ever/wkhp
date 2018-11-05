import React from 'react'
import styled from 'styled-components'

import ContentBox from '../../components/layouts/ContentBox'
import Fullscreen from '../../components/layouts/FullscreenWrapper'

const StyledContentBox = styled(ContentBox)`
  background: ${p => p.theme.surface};
  min-height: 100%;
`

const Account = () => (
  <Fullscreen>
    <StyledContentBox title='Account settings'>
      <div>Modify your account settings</div>
    </StyledContentBox>
  </Fullscreen>
)

export default Account
