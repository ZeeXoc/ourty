import {Editor, Text, Transforms} from "slate";
import {style} from "./style";

const CustomEditor = {
    isInlineStyleActive(editor, type) {
         if (!style.inline.hasOwnProperty(type)) {
             console.warn(`Cannot find inline style \"${type}\".`);
             return false;
         }

        const [match] = Editor.nodes(editor, {
            match: n => n[type] === true,
            universal: true,
        })

        return !!match
    },

    toggleInlineStyle(editor, type) {
        const isActive = CustomEditor.isInlineStyleActive(editor, type)
        Transforms.setNodes(
            editor,
            {[type]: isActive ? null : true},
            {match: n => Text.isText(n), split: true}
        )
    },

    isCodeBlockActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'code',
        })

        return !!match
    },

    toggleCodeBlock(editor) {
        const isActive = CustomEditor.isCodeBlockActive(editor)
        Transforms.setNodes(
            editor,
            {type: isActive ? null : 'code'},
            {match: n => Editor.isBlock(editor, n)}
        )
    },
}

const Leaf = props => {
    for (const inlineStyle in style.inline) {
        if (props.leaf.hasOwnProperty(inlineStyle)) return style.inline.renderer(props);
    }

    return <span {...props.attributes}>{props.children}</span>
}

export {CustomEditor, Leaf};