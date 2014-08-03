//function codeboard()
//{
document.activeElement.addEventListener("keyup",keyc);
var ch = [')','!','@','#','$','%','^','&','*','('];
function keyc(event)
{
	var x = document.activeElement.value;
	if( event.keyCode >= 48 && event.keyCode <= 57)
		{
			event.preventDefault();
			x = x.substring(0, x.length - 1);
			x= x + ch[event.keyCode -48];			
		}
	document.activeElement.value = x ;
}
//}