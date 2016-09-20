var pdata = JSON.stringify(data);
var jData = JSON.parse(pdata);

var controller = {
    
	addImage: function(){
		var imageDiv=document.getElementById("cartItems");
		for (var i = 0; i < jData.length; i++) {
		var newHtml="<div class='left' id='"+jData[i].id+"'>"+
				"<img class='Item' src='"+jData[i].path+"' onclick=loadDescPage('"+jData[i].id+"')>"+
				"</div>";
		View.addDiv(imageDiv,newHtml);				
	}
		
	},
	loadDescPage:function(div){
	window.location.href = "../Template/ProductDescription.html";	
	}
}



