const DomNodeCollection = require("./dom_node_collection.js");

const functionsReady = [];

window.$l = (selector) => {
	if(selector instanceof HTMLElement){
		let node_list = [selector];
		return new DomNodeCollection(node_list);
	} 
	else if(typeof selector === "function"){
		if(!(document.readyState === "complete")){
			functionsReady.push(selector);
		}
		else {
			selector();
		}
	} else {
		let node_list = document.querySelectorAll(selector);
		return new DomNodeCollection(Array.from(node_list));
	}

}

$l.extend = function(...args){
	for(let i = 0; i < args.length; i++){
		for(let k = 0; k < Object.keys(args[i]).length; k++){
			let key = Object.keys(args[i])[k];
			let value = Object.values(args[i])[k];
			args[0][key] = value;
		}
	}
	return args[0];
}

$l.ajax = function(options){
	
}

