import React, { Component } from 'react';
import TreeView from './treeview';

class TreeNode extends Component {
    render() {
        let node = this.props.node,
            children = [];

        let text;
        if (node.children) {
            text = (<span> {node.title} </span>);
            children.push(<TreeView data={node.children} />);
        } else {
            text = (<a href={node.url}> {node.title} </a>);
        }

        return (
            <li key={node.id} className="tree-node">
                {text}
                {children}
            </li>
        )
    }
}

export default TreeNode;