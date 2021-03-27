import './style.less';

export const style = {
    inline: {
        renderer: props => <span
            {...props.attributes}
            className={
                [
                    props.leaf.bold ? 'bold' : '',
                    props.leaf.italic ? 'italic' : '',
                    props.leaf.delete ? 'delete' : '',
                ].join(' ')
            }
        >{props.children}</span>,
        bold: {
            key: 'bold',
            title: '粗体',
        },
        italic: {
            key: 'italic',
            title: '斜体',
        },
        underline: {
            key: 'underline',
            title: '下划线',
        },
        delete: {
            key: 'delete',
            title: '删除线',
        }
    }
}