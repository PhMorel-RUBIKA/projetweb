function start(){
	console.log("ok");

	//var win = new Window('main-window', document.getElementById("gui"));
	var win = new Window('main-window', document.getElementById("gui"));
	
	try{
		win.addPage("info", new Page("infos"));
		win.addPage("description", new Page("<strong>hello</strong> world"));
		win.addPage("equipement", new Page("lorem ipsum"));
	}catch(e){
		console.log("New Exception : " + e);
	}
	
	infoPage, refreshData({
		xp : 23,
		hp : 100,
		power : 51
		});
		
	infoPage, refreshData({
	power : 543
	});
}