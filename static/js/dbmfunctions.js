function AmtodBuAm()
{
	var CalcinputAm;
	CalcinputAm= document.getElementById('inputAm').value;
	outputdBuAm.value= 20*Math.log10(CalcinputAm*1/1000000)+120;
}

function uVmtodBuVm()
{
	var CalcinputuVm;
	CalcinputuVm= document.getElementById('inputuVm').value;
	outputdBuVm.value= 20*Math.log10(CalcinputuVm*1/1000000)+120;
}

function WtodBm()
{
	var CalcinputW;
	CalcinputW= document.getElementById('inputW').value;
	outputdBm.value= 10*Math.log10(CalcinputW*1/0.001);
}
function dBmtoW()
{
	var a;
	a=a*1;
	a=document.getElementById('inputdBm').value;
	outputW.value=(1/1000)*Math.pow(10,a/10);
}

function db_itof()
{
	var a;var b;var c;var d;
	a=0;a=a*1;b=a*1;c=a*1;d=a*1;

	a=document.getElementById('inputdBi').value;
	b=document.getElementById('inputdini').value;
	c=document.getElementById('inputdfin').value;
 
	reslt=a*1+40*Math.log10(b*1/c*1);
	outputdfd.value=reslt;

}

function db_itofb()
{
	var a;var b;var c;var d;
	a=0;a=a*1;b=a*1;c=a*1;d=a*1;

	a=document.getElementById('inputdBib').value;
	b=document.getElementById('inputdinib').value;
	c=document.getElementById('inputdfinb').value;
 
	reslt=a*1+20*Math.log10(b*1/c*1);
	outputdfdb.value=reslt;

}
function dBuAmtodBm()
{
	var a;var b;var c;var d;
	a=0;a=a*1;b=a*1;c=a*1;d=a*1;

	a=document.getElementById('inputdBuAm').value;
	reslt=a*1-43.73;
	outputdBmA.value=reslt;

}

function dBuVmtodBm()
{
	var a;var b;var c;var d;
	a=0;a=a*1;b=a*1;c=a*1;d=a*1;

	a=document.getElementById('inputdBuVm').value;
	reslt=a*1-95.23;
	outputdBmV.value=reslt;

}




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









