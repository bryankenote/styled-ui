import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styledSystemPropTypes from '@styled-system/prop-types';
import { DefaultThemeProvider } from '../DefaultThemeProvider';
import { filterProps } from '../utils';
import * as Styled from './styled';

export const ParameterInputBox = React.forwardRef((props, ref) => {
	const {
		defaultValue,
		value,
		onChange,
		formatValue,
		accessibilityLabel,
		onFocus,
		onBlur,
		...otherProps
	} = props;
	const { matchingProps: styledSystemProps, remainingProps: inputProps } = filterProps(otherProps, {
		...styledSystemPropTypes.layout,
		...styledSystemPropTypes.typography,
	});

	const [isFocused, setIsFocused] = useState(false);

	const toggleFocus = useCallback(() => {
		setIsFocused(state => !state);
	}, []);

	const handleFocus = useCallback(() => {
		if (onFocus) {
			onFocus();
		}
		toggleFocus();
	}, [onFocus, toggleFocus]);

	const handleBlur = useCallback(() => {
		if (onBlur) {
			onBlur();
		}
		toggleFocus();
	}, [onBlur, toggleFocus]);

	const displayValue = formatValue ? formatValue(value || defaultValue) : value || defaultValue;

	return (
		<DefaultThemeProvider>
			<Styled.InputContainer isFocused={isFocused} {...styledSystemProps}>
				<Styled.Input
					ref={ref}
					onChange={onChange}
					placeholder={defaultValue}
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={!isFocused ? displayValue : value}
					aria-label={accessibilityLabel}
					width={styledSystemProps.width}
					fontSize={styledSystemProps.fontSize}
					{...inputProps}
				/>
			</Styled.InputContainer>
		</DefaultThemeProvider>
	);
});

ParameterInputBox.propTypes = {
	defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onChange: PropTypes.func.isRequired,
	formatValue: PropTypes.func,
	accessibilityLabel: PropTypes.string.isRequired,
	...styledSystemPropTypes.layout,
	...styledSystemPropTypes.typography,
};
