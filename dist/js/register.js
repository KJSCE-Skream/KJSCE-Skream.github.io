
var Register = (function($){
		var nameField;
		var collegeField;
		var phoneField;
		var emailField;
		var genderField;
		var sportsField;
		var submitButton;
		var name;
		var email;
		var college;
		var phone;
		var gender;
		var sports =[];
		var data;


		function init(){
			
			cacheDOM();
			if($('#myForm').validator()){
			submitButton.on('click',getValues);
			}
			
		}
		function cacheDOM(){
			nameField = $("#name");
			collegeField = $("#college");
			phoneField = $("#phone");
			emailField =$("#email");
			// genderField= $("#gender");
			sportsField= $("#sports");
			submitButton= $("#submit");
		}
		function getValues(){
			name = nameField.val();
			college = collegeField.val();
			phone = phoneField.val();
			email = emailField.val();
	        gender = $("input[name='gender']:checked").val();
			$("input[type=\"checkbox\"").each(function() {
    			var sThisVal = (this.checked ? $(this).val() : "");
    			if(sThisVal != "") sports.push(sThisVal);
    			
			});
			consoleout();
			packData(); //packing data
			makePostRequest(); //making post request
			alert("Your Response is Recorded");
			
		}
		function consoleout(){
			console.log(name);
			console.log(email);
			console.log(college);
			console.log(phone);
			console.log(gender);
			console.log(sports); 
			
		}
		function packData(){
			console.log("Here");
			data = {
				"entry.2005620554" : name,
				"entry.1045781291" : email,
				"entry.1065046570" : college,
				"entry.1166974658" : phone,
				"entry.839337160": "",//comments
				"entry.1173486410": "BasketBall",
				"entry.1173486410": "Tennis",
				"entry.1173486410": "chess",
			
	
			}
			return;

		}
		function makePostRequest(){
			$.ajax({
			    type:"POST",
			    url: "https://docs.google.com/forms/d/e/1FAIpQLSee2PxblwVLeOdU6eJmngwN207HFZ9Kl3p-PZq3uXjAhmYjVA/formResponse"
			    ,data: data,
			    dataType: "xml",
			});
			console.log("DONE");		
		}
		return {
			initFrom: init,
		};


})(jQuery);
Register.initFrom();


// $('.md-form').on('submit', function() {
// 	alert($("#text").val())
//   e.preventDefault(); 
//   $.ajax({
//     type:"POST",
//     url: "https://docs.google.com/forms/d/e/1FAIpQLSee2PxblwVLeOdU6eJmngwN207HFZ9Kl3p-PZq3uXjAhmYjVA/formResponse"
//     ,data: {
//       "entry.2005620554":'Chaitya',
// 	"entry.1045781291":'Chaitya62@gmail.com',
// 	"entry.1065046570":'KJSCE',
// 	"entry.1166974658":'28995633',
// 	"entry.839337160": "",
//     }
// }
//   );
// }



