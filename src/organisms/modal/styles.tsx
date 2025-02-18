import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { colors, field, misc, typography } from '../../ions/variables';
import { device } from '../../ions/breakpoints';

interface ModalStyleBaseProps {
  zIndex: number;
  modalOverflow?: boolean;
}

export const ModalOverlay = styled.div<ModalStyleBaseProps>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${rgba(colors.black, 0.8)};
  width: 100vw;
  height: 100vh;
  z-index: ${props => (props.zIndex ? props.zIndex : 10)};
`;

export const ModalWrapper = styled.div<ModalStyleBaseProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${props => props.zIndex + 1};
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-scrollbar-width: none;
  -moz-scrollbar-width: none;
  -ms-scrollbar-width: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  @media ${device.s} {
    display: flex;
    justify-content: center;
    align-items: ${props => (props.modalOverflow ? 'flex-start' : 'center')};
  }
`;

export const ModalContainer = styled.div<ModalStyleBaseProps>`
  position: relative;
  background: ${colors.white};
  width: 100%;
  min-height: 0;
  padding: ${rem('15px')};
  word-wrap: break-word;
  transition-duration: ${misc.transitionDuration};

  @media ${device.s} {
    --spacing: ${rem('30px')};
    margin: var(--spacing);
    border-radius: ${field.borderRadius};
    max-width: ${rem('860px')};
    padding: var(--spacing);

    &:after {
      content: '';
      position: absolute;
      bottom: calc(var(--spacing) * -1);
      width: ${rem('1px')};
      height: var(--spacing);
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;

  h2 {
    margin: 0 0 ${rem('30px')} 0;
    font-size: ${rem('32px')};
    font-weight: ${typography.semiBold};
  }

  button {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    margin: ${rem('-14px')} ${rem('-14px')} 0 0;
    border: ${rem('2px')} solid ${colors.grey200};
    min-width: ${rem('28px')};
    height: ${rem('28px')};
    z-index: 1;
    outline: none;

    @media ${device.s} {
      display: inherit;
    }
  }
`;
