import React from 'react';

import ws from '../utils/ws';

import RomList from './RomList';

import styled from 'styled-components';
const Button = styled.button`
    padding: 5px;
    width: 30px;
    height: 30px;
    margin-right:10px;
    /* background: rgb(5,39,175); */
    /* color: white; */
    outline: none;
`;

export default class component extends React.Component {

    render() {
        return (
            <div className="ToolBar">
                <div>
                    <Button title="create" onClick={() => ws.pub('romlist')}>+</Button>
                    <Button title="reset(Ctrl+F2)" onClick={() => ws.pub('reset')}>↻</Button>
                    <Button title="run" onClick={() => ws.pub('run')}>►</Button>
                    <Button title="stop" onClick={() => ws.pub('stop')}>▣</Button>
                </div>
                <RomList />
            </div>
        );
    }
}