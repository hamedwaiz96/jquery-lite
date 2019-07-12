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
	const DEFAULTS = {
		method: 'GET',
		url: window.location.href,
		success(data){console.log(data)},
		error: "error(){console.error('An error occurred.')}",
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		data: {}
	}
	options = $l.extend(DEFAULTS, options);
	if(options.method === "GET"){
		options.url += `?${urlData(options.data)}`;
	}
	const xhr = new XMLHttpRequest();
	xhr.open(options.method, options.url);
	xhr.onload = function(s){
		if(xhr.status === 200){
			options.success(xhr.response);
		} else {
			options.error(xhr.response);
		}
	};
	xhr.send(JSON.stringify(options.data));
}

urlData = (data) => {
	let url = "";
	for(let i = 0; i < Object.keys(data).length; i++){
		if(i === Object.keys(data).length - 1){
			url += `${Object.keys(data)[i]}=${Object.values(data)[i]}`;
		} else {
			url += `${Object.keys(data)[i]}=${Object.values(data)[i]}&`;
		}
	}
	return url;
}
