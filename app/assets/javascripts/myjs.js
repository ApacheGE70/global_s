menu=true;
type="";
first="";
function ifr()
{
    var x = document.getElementsByClassName("iFrame");
    for (var i = 0; i < x.length; i++) {
	  x[i].src = $("#input_url").val();
	}
}

function hide(index,visible_class)
{
	var x = document.getElementsByClassName("block")[index].getElementsByClassName("choice");
	 for (var i = 0; i < x.length; i++) {
	  x[i].style.visibility="hidden";
	}
	var y = document.getElementsByClassName("block")[index].getElementsByClassName(visible_class)[0];
	y.style.visibility="visible";
}

function visible_input_url(index)
{
	var x = document.getElementsByClassName("block")[index].getElementsByClassName("input_url");
	for (var i = 0; i < x.length; i++) {
	  x[i].style.visibility="visible";
	}
	var y = document.getElementsByClassName("block")[index].getElementsByClassName("choice");
	 for (var i = 0; i < y.length; i++) {
	  y[i].style.visibility="hidden";
	}
}

function change_menu()
{
	if(menu==true)
	{
		menu=false;
		var x = document.getElementsByClassName("vertical_menu");
		for (var i = 0; i < x.length; i++) {
	  		x[i].style.visibility="visible";
		}
		var y = document.getElementsByClassName("horizontal_menu");
		for (var i = 0; i < y.length; i++) {
	  		y[i].style.visibility="hidden";
		}
	}
	else
	{
		menu=true;
		var x = document.getElementsByClassName("horizontal_menu");
		for (var i = 0; i < x.length; i++) {
	  		x[i].style.visibility="visible";
		}
		var y = document.getElementsByClassName("vertical_menu");
		for (var i = 0; i < y.length; i++) {
	  		y[i].style.visibility="hidden";
		}
	}
}

function get_data(index)
{
	var x = document.getElementsByClassName("block")[index].getElementsByClassName("pgwSlideshow")[0];
	var y = document.getElementsByClassName("block")[index].getElementsByClassName("iFrame")[0];
	var z = document.getElementsByClassName("block")[index].getElementsByClassName("form")[0];
	if(x.style.visibility=="visible")
		type="galary";
	if(y.style.visibility=="visible")
		type="video";
	else
		type="text"
}

function get_data1()
{
	if(type=="video")
	{
		first= document.getElementsByClassName("block")[0].getElementsByClassName("input_url_text")[0].value;
	}
	alert(first);
}


