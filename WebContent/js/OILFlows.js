/**
 * 
 */

var OilFlows;	
var theNameOfTheFile;
var editFlowid;

var buildOptions=true;


function getData()
{
	try
	{
		if(OilFlows != null && OilFlows.hasOwnProperty("flows"))
		{
			for( var i=0; i<OilFlows.flows.length; i++)
			{
			    	var elem = OilFlows.flows[i];
			    	if(elem.hasOwnProperty("flow") && elem.hasOwnProperty("info")) continue;
			    	alert("Property 'flow' or 'info' element ["+i+"]");
			    	return false;
			}
		}
		document.selectTrackingDomain.keuze.innerHTML="<option></option>";	
		buildOptions=true;	
		document.editForm.style.display="none";
		writeOilFlow("");
		return;
	}
	catch(e)
	{
		alert("getData - foutje "+e);
	}
}

function writeElement(element)
{
	try
	{
		var txt = "";
		if(element.hasOwnProperty("flow"))
		{
			txt+="<td>"+element.flow+"</td>";
			if(buildOptions)
			{
				document.getElementById("options").innerHTML+="<option>"+element.flow+"</option>";
			}
		}
		else
		{
			txt+="<td></td>";
		}
		if(element.hasOwnProperty("info")) 
		{
			if(element.info.hasOwnProperty("Consumer"))
			{
				txt+="<td>"+element.info.Consumer+"</td>";
			}
			else
			{
				txt+="<td></td>";
			}
			if(element.info.hasOwnProperty("Interfaces"))
			{
				txt+="<td>"+element.info.Interfaces+"</td>";
			}
			else
			{
				txt+="<td></td>";
			}
			if(element.info.hasOwnProperty("Component"))
			{
				txt+="<td>"+element.info.Component+"</td>";
			}
			else
			{
				txt+="<td></td>";
			}
			if(element.info.hasOwnProperty("ResponseFlow"))
			{
				txt+="<td>"+element.info.ResponseFlow+"</td>";
			}
			else
			{
				txt+="<td></td>";
			}
			if(element.info.hasOwnProperty("Documents"))
			{
				txt+="<td>"+element.info.Documents+"</td>";
			}
			else
			{
				txt+="<td></td>";
			}
			txt+="<td><button class=\"flowbutton\" id=\""+element.flow+"\" name=\""+element.flow+"\" onclick=\"doEdit(id)\">Edit</button></td>";
		}
		else
		{
			txt+="<td></td><td></td><td></td>";
		}
		txt+="</tr>";
		return txt;
	}
	catch(e)
	{
		return(e);
	}
}

function writeOilFlow(flowName)
{
		var txt = "";		
		txt=txt+"<table id=\"oilflows\"><tr><th>Flow</th><th>Consumer</th><th>Interfaces</th><th>Component</th><th>Response flow</th><th>Document References</th><th>Action</th></tr>";
		for(var i=0; i<OilFlows.flows.length; i++)
		{
			if(flowName=="" || OilFlows.flows[i].flow==flowName)
			{ 
				txt+=writeElement(OilFlows.flows[i]);
			}
		}
		txt=txt+"</table>";
		document.getElementById("list").innerHTML = txt;
		buildOptions=false;
}

function NieuweKeuze()
{
	var selectedFlow = document.selectTrackingDomain.keuze[document.selectTrackingDomain.keuze.selectedIndex].value;
	var selectedIndex = document.selectTrackingDomain.keuze.selectedIndex;
	writeOilFlow(selectedFlow);
	document.selectTrackingDomain.keuze.selectedIndex = selectedIndex;
	document.editForm.style.display="none";
	return true;
}

function doEdit(id) 
{
 for(var j=0; j<OilFlows.flows.length; j++)
 {
	 if(OilFlows.flows[j].flow==id)
	 { 
		editFlowid=j;
		writeOilFlow(OilFlows.flows[j].flow);
		document.selectTrackingDomain.keuze.selectedIndex = j+1;
		try
		{
			document.getElementById("editFormHeader").innerHTML="Edit Oil Flow: "+OilFlows.flows[j].flow;
			document.editForm.style.display="block";
			if(OilFlows.flows[j].info.hasOwnProperty("Consumer"))
			{
				document.editForm.Consumer.value=OilFlows.flows[j].info.Consumer;
			}
			else
			{
				document.editForm.Consumer.value="";
			}
			if(OilFlows.flows[j].info.hasOwnProperty("Interfaces"))
			{
				document.editForm.Interfaces.value=OilFlows.flows[j].info.Interfaces;
			}
			else
			{
				document.editForm.Interfaces.value="";
			}
			if(OilFlows.flows[j].info.hasOwnProperty("Component"))
			{
				document.editForm.Component.value=OilFlows.flows[j].info.Component;
			}
			else
			{
				document.editForm.Component.value="";
			}
			if(OilFlows.flows[j].info.hasOwnProperty("ResponseFlow"))
			{
				document.editForm.ResponseFlow.value=OilFlows.flows[j].info.ResponseFlow;
			}
			else
			{
				document.editForm.ResponseFlow.value="";
			}
			if(OilFlows.flows[j].info.hasOwnProperty("Documents"))
			{
				document.editForm.Documents.value=OilFlows.flows[j].info.Documents;
			}
			else
			{
				document.editForm.Documents.value="";
			}
			var saveBttn = document.getElementById("save");
			saveBttn.disabled=true;
			saveBttn.style.backgroundColor="grey";
			document.getElementById("cancel").scrollIntoView();
		}
		catch(e)
		{
			alert("foutje in doEdit => "+e);
		}
		break;
	 }
 }
}

function readOilFlows(evt) 
{
	var file = evt.target.files[0]; // FileList object
	theNameOfTheFile = file.name;
	try
	{
		var reader = new FileReader();
		if(reader)
		{
			try
			{
				reader.onload = function()
				{
					var data = reader.result;
					OilFlows = JSON.parse(data);
					if(!OilFlows.hasOwnProperty("flows")) 
					{
					    	alert("Property 'flows' not found in definition file! Select another file.");
					    	return false;
					}
					for( var i=0; i<OilFlows.flows.length; i++)
					{
					    	var elem = OilFlows.flows[i];
					    	if(elem.hasOwnProperty("flow") && elem.hasOwnProperty("info")) continue;
					    	alert("Property 'flow' or 'info' element ["+i+"]");
					    	return false;
					}
					document.selectTrackingDomain.keuze.innerHTML="<option></option>";	
					buildOptions=true;	
					document.editForm.style.display="none";
					writeOilFlow("");
				};
				reader.onerror = function()
				{
					document.getElementById("trace").innerHTML+="onerror function called.<br>";
				};
				reader.readAsText(file);
			}
			catch(e)
			{
				alert("catched error "+e);
			}
		}
		else
		{
			document.getElementById("trace").innerHTML+="FileReader NOT supported!<br>";
		};
	}
	catch(e)
	{
			alert("catched error "+e);
	}
}

function saveEdit()
{
	document.editForm.style.display="none";
	OilFlows.flows[editFlowid].info.Consumer=document.editForm.Consumer.value;
	OilFlows.flows[editFlowid].info.Interfaces=document.editForm.Interfaces.value;
	OilFlows.flows[editFlowid].info.Component=document.editForm.Component.value;
	OilFlows.flows[editFlowid].info.ResponseFlow=document.editForm.ResponseFlow.value;
	OilFlows.flows[editFlowid].info.Documents=document.editForm.Documents.value;
 	writeOilFlow(OilFlows.flows[editFlowid].flow);
	document.selectTrackingDomain.keuze.selectedIndex = editFlowid+1;
	document.getElementById("saveFile").style.display="block";
	document.getElementById("saveFile").style.backgroundColor="#0099db";
	document.getElementById("saveFile").disabled=false;
	return true;
}

function cancelEdit()
{
	document.editForm.style.display="none";
 	writeOilFlow(OilFlows.flows[editFlowid].flow);
 	document.selectTrackingDomain.keuze.selectedIndex = editFlowid+1;
	return true;
}

function saveFile()
{
	try
	{	// The download function takes a CSV string, the filename and mimeType as parameters
		// Scroll/look down at the bottom of this snippet to see how download is called
		var download = function(content, fileName, mimeType) 
				{
  					var a = document.createElement('a');
  					mimeType = mimeType || 'application/octet-stream';

  					if (navigator.msSaveBlob) 
  					{	// IE10
  						navigator.msSaveBlob(new Blob([content], {type: mimeType}), fileName);
  					}
  					else 
  						if (URL && 'download' in a)
  						{ //html5 A[download]
  							a.href = URL.createObjectURL(new Blob([content], {type: mimeType}));
  							a.setAttribute('download', fileName);
  							document.body.appendChild(a);
  							a.click();
  							document.body.removeChild(a);
  						}
  						else
  						{
  							location.href = 'data:application/octet-stream,' + encodeURIComponent(content); // only this mime type is supported
  						}
				};
		var jsonContent=JSON.stringify(OilFlows,null,'  ');
		download(jsonContent, theNameOfTheFile, 'text/json;encoding:utf-8');
		document.getElementById("saveFile").disabled=true;
		document.getElementById("saveFile").style.backgroundColor="lightgrey";
	}
	catch(e)
	{
		alert("foutje in saveFile: "+e);
	}
	return;
}

function enableButton()
{
	try
	{
		var el=document.getElementById("save");
		if(el.disabled==true)
		{
			el.disabled=false;
			el.style.backgroundColor="#0099db";
		}
	}
	catch(e)
	{
		alert("foutje in enableButton "+e);
	}
}

