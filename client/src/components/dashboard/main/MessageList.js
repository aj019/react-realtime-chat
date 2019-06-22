import React, { Component } from 'react'
import styled from 'styled-components'

const StyledMessagesBox = styled.div`
    width: 100%;
    height:80%;
    background-color: grey;
    overflow:scroll;
`

export default class MessageList extends Component {
    render() {
        const {group} = this.props;
        if(Object.keys(group).length === 0) return <div />
        return (
            <StyledMessagesBox>
                <p>First Message</p>
                <p>Second Message</p>
                <p>First Message</p>
                <p>Second Message</p>
                <p>First Message</p>
                <p>Second Message</p>
                <p>First Message</p>
                <p>Second Message</p>
                <p>First Message</p>
                <p>Second Message</p>
                <p>First Message</p>
                <p>Second Message</p>
                <p>First Message</p>
                <p>Second Message</p>
                <p>First Message</p>
                <p>Second Message</p>
                <p>First Message</p>
                <p>Second Message</p><p>First Message</p>
                <p>Second Message</p>
            </StyledMessagesBox>
        )
    }
}
