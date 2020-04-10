// le boutton

function changeSingleStyle() {
    
  var margin = document.getElementById("top-nav").style.marginTop;
  if (margin === "600px")
    document.getElementById("top-nav").style.marginTop = "-70px";
  else document.getElementById("top-nav").style.marginTop = "600px";
}

// diaporama des images 


var i = 0; 		
var images = [];	
var time = 3000;	
	 


images[0] = "artificielle.jpg";
images[1] = "intelligence-artificielle.jpg";

function changeImg(){
    
	document.slide.src = images[i];

	
	if(i < images.length - 1){
	
	  i++; 
	} else { 
	
		i = 0;
	}


	setTimeout("changeImg()", time);
}


// Run function when page loads
window.onload=changeImg;

//changer les photos

function change1()
{

    document.image.src="second1.png";
    document.image1.src="second2.jpg";

   
}
function change()
{

    document.image1.src="second1.png";
    document.image.src="second2.jpg";

   
}
//formulaire

function vide()
{
    if(document.form.name.value == "")
        {
            alert("please enter your name");
        }
    
    if(document.form.email.value == "")
        {
            alert("please enter your email");
        }
     if(document.form.email.value != "")
        {
            if((document.form.email.value.includes('@')) && (document.form.email.value.includes('.')))
            {
            }
            else
            {
                alert("please enter the correct email");
            }
        }
    

    
}


