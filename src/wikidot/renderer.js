import React, {Component} from "react";

export default class Renderer extends Component {
    analyze(value){
        if (!value) return

        if(value instanceof Array){
            return value.map(value => this.analyze(value))
        }

        let output = []

        switch (value.type){
            case 'paragraph':
                output.push(`${this.analyze(value.children)}\n`);
            default:
                if (value.bold) output.push(`**${this.analyze(value.children)}**`)
        }
        console.log(output)
        return output;
    }

    constructor(props) {
        super(props);
        this.state = {
            editor:this.props.editor,
            value:this.props.value,
            output:this.analyze(this.props.value)
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            editor:nextProps.editor,
            value:nextProps.value,
            output:this.analyze(this.props.value)
        })
    }

    render() {
        return (
            <div>
                {this.state.output.join(' ')}
            </div>
        );
    }
}