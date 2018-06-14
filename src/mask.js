import React from 'react';
import styled from 'styled-components'

const Mask = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    outline: 0;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 999;
`

export default Mask;