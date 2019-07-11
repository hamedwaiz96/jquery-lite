const DomNodeCollection = require("./dom_node_collection.js");

window.$l = (selector) => {
	if(selector instanceof HTMLElement){
		let node_list = [selector];
		return new DomNodeCollection(node_list);
	} else {
		let node_list = document.querySelectorAll(selector);
		return new DomNodeCollection(Array.from(node_list));
	}
}

