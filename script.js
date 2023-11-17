//your JS code here. If required.
const firstName=document.getElementById("fn");
const lastName=document.getElementById("ln");
const phoneNumber=document.getElementById("pn");
const emailId=document.getElementById("email");
function myAlert()
	{
		alert(`First Name: ${firstName.value} \nLast Name: ${lastName.value} \nPhone Number: ${phoneNumber.value} \nEmail Id: ${emailId.value}`);
	}
