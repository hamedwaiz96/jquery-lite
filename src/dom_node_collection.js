class DomNodeCollection {

	constructor(collection){
		this.collection = collection;
	}

	html(string=""){
		if(string === ""){
			const first_node = this.collection[i];
			return first_node.innerHTML;
		} else {
			for(let i = 0; i < this.collection.length; i++){
				const node = this.collection[i];
				node.innerHTML = string;
			}
		}
	}

	empty(){
		for(let i = 0; i < this.collection.length; i++){
			const the_node = this.collection[i];
			the_node.innerHTML = "";
		}
	}

	append(thing){
		if(typeof thing === "string"){
			for(let k = 0; k < this.collection.length; k++){
				this.collection[k].innerHTML += thing;
			} 
		}
		else if(thing instanceof HTMLElement){
			for(let k = 0; k < this.collection.length; k++){
				this.collection[k].innerHTML += thing.outerHTML;
			}
		}
		 else {
			for(let k = 0; k < this.collection.length; k++){
				for(let i = 0; i < thing.length; i++){
					this.collection[k].innerHTML += thing[i].outerHTML;
				}
			}
		}
	}

	attr(...args){
		if(args.length === 1){
			return this.collection[0].getAttribute(args[0]);
		} else {
			for(let i = 0; i < this.collection.length; i++){
				this.collection[i].setAttribute(args[0], args[1]);
			}
		}
	}

	addClass(class1){
		for(let i = 0; i < this.collection.length; i++){
			this.collection[i].setAttribute("class", class1);
		}
	}

	removeClass(class2){
		for(let i = 0; i < this.collection.length; i++){
			if(this.collection[i].className.indexOf(class2) !== -1){
				this.collection[i].classList.remove(class2)
			}
		}
	}

	children(){
		let node_list = [];
		for(let i = 0; i < this.collection.length; i++){
			node_list.push(this.collection[i].children);
		}
		return new DomNodeCollection(node_list);
	}

	parent(){
		let node_list = [];
		for(let i = 0; i < this.collection.length; i++){
			if(this.collection[i].parentElement){
				node_list.push(this.collection[i].parentElement);
			}
			else {

			}
		}
		if(node_list.length >= 1){
			return new DomNodeCollection(node_list);
		}
		else {
			return undefined;
		}
	}

	find(sel){
		let node_list = [];
		for(let k = 0; k < this.collection[0].querySelectorAll(sel).length; k++){
			let query = this.collection[0].querySelectorAll(sel)[k];
			node_list.push(query);
			}
		return new DomNodeCollection(node_list);
		}

	remove(){
		for(let i = 0; this.collection.length; i++){
			let el = this.collection[i];
			if(el === undefined){
				break;
			} else {
				el.parentNode.removeChild(el);
			}
			
		}
	}

	on(event, callback){
		for(let i = 0; i < this.collection.length; i++){
			let el = this.collection[i];
			el.addEventListener(event, callback);
			if(el[`${event}-call`] === undefined){
				el[`${event}-call`] = [];
			}
			el[`${event}-call`].push(callback);
		}
	}

	off(event){
		for(let i = 0; i < this.collection.length; i++){
			let el = this.collection[i];
			for(let k = 0; k < el[`${event}-call`].length; k++){
				el.removeEventListener(event, el[`${event}-call`][i]);
			}
			
		}
	}


}

module.exports = DomNodeCollection;