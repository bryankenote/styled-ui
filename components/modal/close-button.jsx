import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { UtilityButton } from '../button';
import { Close } from '../icons';

/**
 * Simple absolutely-positioned button to close a modal.
 */
export const CloseButton = ({ onClose }) => (
	<Box position="absolute" top={24} right={24} cursor="pointer" zIndex={200}>
		<UtilityButton onClick={onClose}>
			<Close />
		</UtilityButton>
	</Box>
);

CloseButton.propTypes = {
	/** Callback function for when the modal is closed. */
	onClose: PropTypes.func.isRequired,
};