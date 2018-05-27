// add function to test that everything is working and upload it to the js sub directory
// create a function to get the first bit of text data from the from
function startDataUpload(){
	confirm("start data upload");
	
	var locationname = document.getElementById("location_name").value;
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var module = document.getElementById("moduleselectbox").value;
	var postString = "locationname="+locationname+"&firstname="+firstname +"&lastname=" +lastname +"&module=" +module;
	
	var question = document.getElementById("question").value;
	
	var choiceString = "";
	for (var i = 1;i<5;i++){
		if (i ==4){
			choiceString = choiceString+"choice"+i+"="+document.getElementById("choice"+i).value;
		}else{
			choiceString = choiceString+"choice"+i+"="+document.getElementById("choice"+i).value+"&";
		}
	}
	postString = postString+"&question="+question+"&"+choiceString;
	
	var answer = document.querySelector('input[name="answer"]:checked').value;
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	
	postString = postString + "&answer="+ answer + "&latitude=" + latitude + "&longitude=" + longitude;
	processData(postString)
}

// add AJAX call and response method to code
var client;

function processData(postString){
	client = new XMLHttpRequest();
	client.open('POST', 'http://developer.cege.ucl.ac.uk:30282/uploadData' ,true);
	client.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	client.onreadystatechange = dataUploaded;
	client.send(postString);
}

// create the code to wait for the response from the data server, and process the response once it is received 
function dataUploaded(){
	// this function listens out for the server to say tha the data is ready 
	if (client.readyState == 4){
		// alert to show the response
		alert(client.responseText);
	}
}