import React, { Component } from 'react';
import TreeNode from './treenode';

class TreeView extends Component {
    render() {
        let data = this.props.data,
            children = [];

        data.forEach((node) => {
            children.push(<TreeNode node={node}/>);
        });

        return (
            <ul className="tree-wrap">
                {children}
            </ul>
        )
    }
}

export default TreeView;