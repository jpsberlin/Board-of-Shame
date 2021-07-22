// creating Variables
var tabs = document.querySelectorAll(".boardOfShame_tabs ul li");
var today = document.querySelector(".today");
var week = document.querySelector(".week");
var month = document.querySelector(".month");
var items = document.querySelectorAll(".boardOfShame_item");


// adding ActionListeners
tabs.forEach(function (tab){
	tab.addEventListener("click", function(){
		var currentDataLi = tab.getAttribute("data-li");

			//check with console.log, as hovered tab is activated
			//console.log(currentDataLi);

			//making the hovered link activate

			tabs.forEach(function(tab){
			tab.classList.remove("active");
			})
			
			tab.classList.add("active");
		
		
			items.forEach(function(item){
			item.style.display = "none";
			})
		
		
			if(currentDataLi == "today") {
			today.style.display = "block";
			}	
			else if(currentDataLi == "week") {
			week.style.display = "block";
			}
			else{
			month.style.display = "block";
			}
		
	})

})