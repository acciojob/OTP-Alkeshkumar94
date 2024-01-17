//your JS code here. If required.
function focusnext(currentinput){
	const previnput=currentinput.previousElementSibling;
	const nextinput=currentinput.nextElementSibling;
	const maxlength=parseInt(currentinput.getAttribute('maxlength'));
	if(currentinput.value.length===maxlength){
		if(nextinput){
			nextinput.focus();
		}
	}
	else if(currentinput.value.length===maxlength)
	{
		if(previnput){
			previnput.focus();
		}
	}
	else if(currentinput.value.length===0)
	{
		if(previnput){
			previnput.focus();
		}
	}
}
cy.focused().should("have.class", "code").and("have.attr", "id", "code-1");
