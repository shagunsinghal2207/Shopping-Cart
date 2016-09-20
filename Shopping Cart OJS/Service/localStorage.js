class storage{
	public getStorage(name){
	storagedata=JSON.parse(localStorage.getItem(name));
	return storagedata;
	}
	public updateStorage(data){
	var Items=localStorage.setItem("Product", JSON.stringify(data));
	return Items;
}

}