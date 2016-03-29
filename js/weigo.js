var weigo = {
	dom:function(id){
		var sdom = typeof id === 'string' ? document.getElementById(id) : id;
		return sdom;
	}
	html:function(id,data){
		var dom  = this.dom(id);
		if(!dom.text){
			dom.innerHTML = data;
		}
	}
}
