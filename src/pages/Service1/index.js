import React from 'react'
import styled from 'styled-components'

import ContentBox from '../../components/layouts/ContentBox'
import Fullscreen from '../../components/layouts/FullscreenWrapper'

const StyledContentBox = styled(ContentBox)`
  background: ${p => p.theme.surface};
  min-height: 100%;
`

const Service1 = () => (
  <Fullscreen>
    <StyledContentBox title='Service1'>
      <div>Service1</div>
    </StyledContentBox>
  </Fullscreen>
)

export default Service1
