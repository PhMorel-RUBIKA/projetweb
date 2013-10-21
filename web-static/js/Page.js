var Page = function(content){
	this.root = document.createElement("div");
	this.root.innerHTML = content;
	
	this.currentPage = null;
};
Page.prototype.append = function(content){
	if(typeof(content) == "string"){
		this.root.innerHTML += content;
	}else{
		this.root.appendChild(content.get(0));
	}
};
Page.prototype.setVisible = function(visible){
	this.root.style.display = visible?"block":"none";
};