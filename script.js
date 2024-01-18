//your JS code here. If required.
function focusnext(currentinput){
	const previnput=currentinput.previousElementSibling;
	const nextinput=currentinput.nextElementSibling;
	const maxlength=parseInt(currentinput.getAttribute('maxlength'));
	
	  if(currentinput.value.length === maxlength && nextinput){
        nextinput.focus();
    } else if(currentinput.value.length === 0 && previnput){
        previnput.focus();
    }
}
