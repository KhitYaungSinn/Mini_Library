const search=document.querySelector(".searchBar input");
const images=document.querySelectorAll(".img_box");

search.addEventListener("keyup", e =>{
	if(e.key=="Enter")
	{
		let searcValue= search.value,
		value=searcValue.toLowerCase();
		console.log(value);
	}
	
})