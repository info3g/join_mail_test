var cl = console.log;
function ValidateEmail(mail)  {
 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {		 		
    	return (true)
  	}		    
    return (false)
}
function submit_form(){			
	let email = document.getElementById("email").value;	
	var email_error_element = document.getElementById("email_error");
	var email_validate = document.getElementById("email_validate");
	if(email == ''){		
		if(document.getElementsByClassName('error-show').length == 0){
			email_error_element.className = '';
			email_error_element.className += 'error error-show';
		}	
		
		return document.join_mailing_list.email.focus()
	}
	else{
		email_error_element.className = '';
		email_error_element.className += 'error error-hide';		
		if(ValidateEmail(email)){
			email_validate.className += '';
			email_validate.className += 'email_validate error-hide';
			callApi(email);
		}
		else{
			email_validate.className += '';
			email_validate.className += 'email_validate error-show';

		}
	}			
}

function callApi(email){
	cl('going for api call');
	let data = {
		"email": email
	};
	let __url = 'https://api.staging.fourthwall.com/api/mailing-list';


	var http = new XMLHttpRequest();
	var url = __url;
	var params = JSON.stringify(data);
	http.open('POST', url, true);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/json");
	http.setRequestHeader("X-ShopId", "sh_9f57832f-456b-44f3-888f-8a370b155a18");

	http.onreadystatechange = function() {//Call a function when the state changes.
		cl(http.readyState);
		cl(http.status);
	    if(http.readyState == 4 && http.status == 201) {
	        alert(http.responseText);
	    }
	    else{
	    	// alert('Unable to process your request');
	    }
	}
	http.send(params);
}