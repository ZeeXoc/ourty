import React,{Component} from 'react';
import {Editor, Transforms,Text} from "slate";
import {Button} from "antd";
import * as Icon from '@ant-design/icons'

import CustomEditor from "./CustomEditor";

export default class ToolBar extends Component{
    render() {
        return (
            <div>
                <Bold
                    onClick={event => {
                        event.preventDefault()
                        CustomEditor.toggleBoldMark(this.props.editor)
                    }
                    }
                />
            </div>
        );
    }
}

function Bold(props) {
    return(
        <Button
            icon={<Icon.BoldOutlined/>}
            title={'粗体'}
            onClick={event => {
            props.onClick(event)
        }}/>
    )
}