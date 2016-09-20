class DOM{
	public CreateDom(cElementname){
	var dcElement = document.createElement(cElementname); 
	return dcElement;
}

	public GetDom(gElementname){
	var dgElement = document.getElementById(gElementname); 
	return dgElement
}
}