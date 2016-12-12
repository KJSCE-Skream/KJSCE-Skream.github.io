var Tabs= (function($){
	
	var GenderToggle;
	var Girls;
	var ItemActive;
	var Boys;
	var DropDownArrow = "<span class=\"caret\"></span>";
	var generalTab;
	var contactTab;
	var sports =[];


	function init(){
		cacheDom();
		bindHandlers();
		
	}
	function bindHandlers(){
		Boys.on("click",genderHandler);
		Girls.on("click",genderHandler);
		$(".main").on("click",ItemHandler);
	}
	function ItemHandler(){
		$('.item .active').on("click",function(e){
				$(e).find('.dropdown');

		});
		
	}

	function cacheDom(){
		GenderToggle = $("#gen1 i");
		Boys = $(".Gender1");
		Girls = $(".Gender2");
		generalTab = $("#general1-tab");
		ItemActive = $(".item .active");
		contactTab = $("#contact-tab");
	}
	function ChangeVaribles(d){
		GenderToggle = $("#gen"+ d +" i");
		generalTab = $("#general"+d + "-tab");
		contactTab = $("#contact"+d +"-tab");
	}


	function genderHandler(e){
			console.log("Fuckshits");
			var currentSportnumber = e.currentTarget.attributes.data.value;
			var Gender = e.currentTarget.text;
			ChangeVaribles(currentSportnumber);
			
			GenderToggle.text(Gender);

			generalTab.attr("href","#general"+ currentSportnumber +"-"+Gender);
			contactTab.attr("href","#contact"+ currentSportnumber +"-"+Gender);
			setTimeout(function(){
				generalTab.trigger("click");
			},500);
	}
	return{
		init_tabs: init,
	}



})(jQuery);


Tabs.init_tabs();