function goHome()
{
window.navigate("index.html");
}


function GetByIDCustom(strId)
{
    if(document.getElementById)
        return document.getElementById(strId);
    else
        return document.all[strId];
}

function IsNumeric(strString)	
{
	var strValidChars = "0123456789.-";
	var strChar;
	var blnResult = true;

	if (strString.length == 0) return false;

	//  test strString consists of valid characters listed above
	for (i = 0; i < strString.length && blnResult == true; i++)
	{
		strChar = strString.charAt(i);
		if (strValidChars.indexOf(strChar) == -1)
			blnResult = false;
	}
	return blnResult;
}

function ValidateInput(elInputField)
{
	if (elInputField.value == '')
	{
		alert('Please enter input value (numeric)!');
		elInputField.focus();
		return false;
	}
	if (!IsNumeric(elInputField.value))
	{
		alert('Numeric value is required!');
		elInputField.focus();
		return false;
	}
	return true;
}

function custLog(x, base) 
{
	return (Math.log(x))/(Math.log(base));
}