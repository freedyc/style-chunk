import React from 'react';
import styled from 'styled-components'

const Button = styled.div`
    font-size: 1em;
  	margin: 1em;
  	padding: 0.25em 1em;
  	border-radius: 3px;
  	cursor: pointer;
	color: ${props => props.theme.icolor};
	border: 2px solid ${props => props.theme.icolor};
	&:active {
		opacity: 0.5;
	}
`
Button.defaultProps = {
  theme: {
    icolor: '#ccc'
  }
}

export default Button;