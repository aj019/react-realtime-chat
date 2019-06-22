import React from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap';

const StyledMessageBoxWrapper = styled.div`
    width:100%;
    height: 70px;
    background:#efefef;
    position: absolute;
    left:0;
    right:0;
    bottom: 0;
    display:flex;
    align-items:center;
`;

const StyledInput = styled.input`
    width:90%;
    margin: 10px;
    height: 40px;
`;

const StyledButton = styled(Button)`
    width:10%;
    margin-right: 10px;
`;

export default function SendMessage(props) {
    const {group} = props;
    if(Object.keys(group).length === 0) return <div />
    return (
        <StyledMessageBoxWrapper>
            <StyledInput />
            <StyledButton color="success">Send</StyledButton>
        </StyledMessageBoxWrapper>
    )
}
