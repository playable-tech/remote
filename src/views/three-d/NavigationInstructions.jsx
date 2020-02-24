import PropTypes from 'prop-types';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Keyboard from '@material-ui/icons/Keyboard';
import Mouse from '@material-ui/icons/Mouse';

import FadeAndSlide from '~/components/transitions/FadeAndSlide';

const divStyle = {
  display: 'inline-block',
  transform: 'translateY(1px)'
};

const noWrap = {
  whiteSpace: 'nowrap'
};

const instructionsByMode = {
  walk: (
    <div style={noWrap}>
      <div style={divStyle}>
        <kbd>W</kbd>
        <kbd>A</kbd>
        <kbd>S</kbd>
        <kbd>D</kbd>
        <span> Walk around </span>
        <kbd>+</kbd>
        <kbd>-</kbd>
        <span> Altitude </span>
      </div>
      <IconButton disabled>
        <Mouse />
      </IconButton>
      <div style={{ ...divStyle, marginLeft: -8 }}>Look around</div>
    </div>
  ),

  fly: (
    <div style={noWrap}>
      <div style={divStyle}>
        <kbd>W</kbd>
        <kbd>S</kbd>
        <span> Fly forward / backward </span>
        <kbd>A</kbd>
        <kbd>D</kbd>
        <span> Strafe left / right </span>
        <kbd>+</kbd>
        <kbd>-</kbd>
        <span> Altitude </span>
      </div>
      <IconButton disabled>
        <Mouse />
      </IconButton>
      <div style={{ ...divStyle, marginLeft: -8 }}>Look around</div>
    </div>
  )
};

/**
 * Component that shows some short textual instructions about the hotkeys of the
 * current navigation mode.
 */
const NavigationInstructions = ({ mode }) => (
  <Box mx={1} flex={1} alignSelf="stretch" position="relative">
    <TransitionGroup>
      <FadeAndSlide key={mode}>
        <Box
          position="absolute"
          left={0}
          top={0}
          bottom={0}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          {instructionsByMode[mode] ||
            'No instructions for this navigation mode'}
        </Box>
      </FadeAndSlide>
    </TransitionGroup>
  </Box>
);

NavigationInstructions.propTypes = {
  mode: PropTypes.oneOf(['walk', 'fly'])
};

export default NavigationInstructions;
