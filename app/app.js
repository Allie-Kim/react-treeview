import React, { Component } from 'react';
import {render} from 'react-dom';
import TreeView from './treeview';

let data = [{
    "children":[{
        "id":"391","index":0,"parentId":"379","title":"Backbone.js Tutorials","url":"http://backbonetutorials.com/"},{
        "id":"392","index":1,"parentId":"379","title":"Backbone.js","url":"http://backbonejs.org/"},{
        "id":"626","index":2,"parentId":"379","title":"TodoMVC","url":"http://todomvc.com/"},{
        "id":"627","index":3,"parentId":"379","title":"Explore | StackShare","url":"http://stackshare.io/explore"},{
        "children":[{
            "children":[{
                "id":"629","index":0,"parentId":"628","title":"shinejs.io/home","url":"http://shinejs.io/home"},{
                "id":"630","index":1,"parentId":"628","title":"Meteor Korea – meteor, korea","url":"http://www.meteorjs.kr/"}],
            "id":"628","index":0,"parentId":"652","title":"codelap"}],
        "id":"652","index":4,"parentId":"379","title":"meteor"},{
        "id":"623","index":5,"parentId":"379","title":"WebFrameworks.kr - Home","url":"http://webframeworks.kr/"},{
        "children":[{
            "id":"278","index":0,"parentId":"196","title":"Developing Backbone.js Applications -","url":"http://addyosmani.github.io/backbone-fundamentals/#prelude"},{
            "id":"279","index":1,"parentId":"196", "title":"Backbone.js Wine Cellar Tutorial — Part 2: CRUD | Christophe Coenraets","url":"http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-2-crud/"}],
        "id":"196","index":6,"parentId":"379","title":"backbone.js"}],
    "id":"379","index":9,"parentId":"8","title":"framework"
}];

render(<TreeView data={data} />, document.getElementById('app'));