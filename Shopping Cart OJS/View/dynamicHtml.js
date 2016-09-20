
var pdata = JSON.stringify(data);
var jData = JSON.parse(pdata);

	
	
	/* var x="<tr id='"+id+"' >" +
                      "<td class='image'>" +
                      ""+
                      "</td>" +
                      "<td class='name'>" +
                      " "+data[0]['Product']['name'] +
                      "</td>"+
                      "<td class='quantity'>" +
                      ""+amount +""+
                      "</td>"+
                      "<td class='total'>" +
                      ""+price*amount+
                      "</td>" +
                      ""+
                      "<td class='remove'>" +
                      "<input type='button'class='icon-remove' onclick='removeItemFromBasket(id)'>"+
                      "</td>"+
                      "</tr>"; */
					  
				 
			

function addRow(Id,Path){		
		
		 var y="<div class='left' id='"+Id+"'>"+
				"<img class='Item' src='"+Path+"' onclick=loadDescPage('"+Id+"')>"+
				"</div>";				
				return y;
	
}
		
function yx(){
	var imageDiv=document.getElementById("cartItems");
			
			for (var i = 0; i < jData.length; i++) {
				var divId = jData[i].id;
			var z=addRow(divId,jData[i].path);
			imageDiv.innerHTML+=z;
			}
	
}	

function loadDescPage(div) {
	window.location.href = "../Template/ProductDescription.html";

}	
	
	
	
	function GetDom(gElementname){
	var dgElement = document.getElementById(gElementname); 
	return dgElement;
	}
