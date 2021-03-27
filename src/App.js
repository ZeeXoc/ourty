import React, {Component, useEffect, useCallback, useMemo, useState} from 'react'
import {createEditor, Editor, Transforms, Text} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'

import {Leaf} from './operate/CustomEditor'
import ToolBar from "./operate/ToolBar";

import Renderer from "./wikidot/renderer";

const App = () => {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{text: 'A line of text in a paragraph.'}],
        },
    ])

    console.log(value,editor)

    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    // Define a leaf rendering function that is memoized with `useCallback`.
    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, [])

    return (
        <div>
            <Slate editor={editor} value={value} onChange={value => setValue(value)}>
                <ToolBar editor={editor} value={value}/>
                <Editable
                    id='rich-edit-area'
                    renderElement={renderElement}
                    // Pass in the `renderLeaf` function.
                    renderLeaf={renderLeaf}
                    /* TODO onKeyDown={} */
                />
            </Slate>
            {/*<Renderer editor={editor} value={value}/>*/}
        </div>
    )
}

const CodeElement = props => {
    return (
        <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
    )
}

const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
}

export default App;
