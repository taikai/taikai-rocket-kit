import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

interface AvatarProps {
  size?: number;
  square?: boolean;
}

export const Wrapper = styled.div<AvatarProps>`
  position: relative;
  border: ${rem('2px')} solid ${colors.grey200};
  border-radius: ${props => (props.square ? 0 : '999px')};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  overflow: hidden;
  z-index: 0;

  > * {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
  }
`;
