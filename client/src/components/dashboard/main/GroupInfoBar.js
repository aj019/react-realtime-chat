import React, { Component } from 'react'
import styled from 'styled-components';


const GroupInfoWrapper = styled.div`
    width:100%;
    height:10%;
    background: #EEEEEE;
`;

export default class GroupInfoBar extends Component {
    render() {
        const {group} = this.props;
        if(Object.keys(group).length === 0) return <div />
        return (
            <GroupInfoWrapper>
                <h1>{group.name}</h1>
            </GroupInfoWrapper>
        )
    }
}
