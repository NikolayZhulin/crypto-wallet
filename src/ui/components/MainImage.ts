import styled from 'styled-components'

import ellipse1 from '../../common/assets/images/ellipse1.png'
import ellipse2 from '../../common/assets/images/ellipse2.png'
import ellipse3 from '../../common/assets/images/ellipse3.png'
import ellipse4 from '../../common/assets/images/ellipse4.png'
import ellipse5 from '../../common/assets/images/ellipse5.png'
import planet from '../../common/assets/images/planet.png'

export const MainImage = styled.div<{ top: string; right: string }>`
  width: 550px;
  height: 550px;
  position: absolute;
  top: ${props => props.top + 'px'};
  right: ${props => props.right + 'px'};

  z-index: 10;

  background-image: url(${planet}), url(${ellipse3}), url(${ellipse2}), url(${ellipse1}),
    url(${ellipse5}), url(${ellipse4});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: 320px 322px, 370px, 384px, 446px, 526px, 532px;
`
