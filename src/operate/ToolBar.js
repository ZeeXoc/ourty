import React, {Component} from 'react';
import {Editor, Transforms, Text} from "slate";
import {Button} from "antd";
import * as Icon from '@ant-design/icons'

import {CustomEditor} from "./CustomEditor";
import {style} from './style'

export default class ToolBar extends Component {
    render() {
        return (
            <div>
                <Bold
                    editor={() => this.props.editor}
                />
                <Italic
                    editor={() => this.props.editor}
                />
                <Delete
                    editor={() => this.props.editor}
                />
            </div>
        );
    }
}

const Bold = (props) =>
    <Button
        icon={<Icon.BoldOutlined/>}
        title={style.inline.bold.title}
        onClick={event => {
            CustomEditor.toggleInlineStyle(props.editor(), style.inline.bold.key);
        }}
    />

const Italic = (props) =>
    <Button
        icon={<Icon.ItalicOutlined/>}
        title={style.inline.italic.title}
        onClick={event => {
            CustomEditor.toggleInlineStyle(props.editor(), style.inline.italic.key);
        }}
    />

const Delete = (props) =>
    <Button
        icon={<Icon.StrikethroughOutlined/>}
        title={style.inline.delete.title}
        onClick={event => {
            CustomEditor.toggleInlineStyle(props.editor(), style.inline.delete.key);
        }}
    />

    const Underline = (props) =>
    <Button
        icon={<Icon.StrikethroughOutlined/>}
        title={style.inline.delete.title}
        onClick={event => {
            CustomEditor.toggleInlineStyle(props.editor(), style.inline.delete.key);
        }}
    />
