/**
 * 
 */

var dataLocked = false;
var OilFlows;	
var theNameOfTheFile = "OILFlowsData.js";
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
		addOption("");	
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

function writeElement(table,element)
{
	try
	{
		var row = table.insertRow();
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);
		var cell4 = row.insertCell(4);
		var cell5 = row.insertCell(5);
		var cell6;
		if(dataLocked==false)
		{
			cell6 = row.insertCell(6);
		}
		
		if(element.hasOwnProperty("flow"))
		{
			cell0.innerHTML=element.flow;
			if(buildOptions)
			{
				addOption(element.flow);
			}
		}
		if(element.hasOwnProperty("info")) 
		{
			if(element.info.hasOwnProperty("Consumer"))
			{
				cell1.innerHTML=element.info.Consumer;
			}
			if(element.info.hasOwnProperty("Interfaces"))
			{
				cell2.innerHTML=element.info.Interfaces;
			}
			if(element.info.hasOwnProperty("Component"))
			{
				cell3.innerHTML=element.info.Component;
			}
			if(element.info.hasOwnProperty("ResponseFlow"))
			{
				cell4.innerHTML=element.info.ResponseFlow;
			}
			if(element.info.hasOwnProperty("Documents"))
			{
				cell5.innerHTML=element.info.Documents;
			}
			if(dataLocked==false)
			{
				addButton(cell6, element.flow);
			}
		}
	}
	catch(e)
	{
		alert(e);
	}
}

function writeOilFlow(flowname)
{
	try
	{
		var table = document.getElementById("oilflows");
		while(table.rows.length>1)
		{
			table.deleteRow(-1);
		}
		if(OilFlows.hasOwnProperty("Status"))
		{
			if(OilFlows.Status=="locked") dataLocked=true;;
		}
		if(dataLocked)
		{
			var hRow = table.rows[0];
			if(hRow.cells.length>6) hRow.deleteCell(6);
		}
		for(var i=0; i<OilFlows.flows.length; i++)
		{
			if(flowname == "" ||OilFlows.flows[i].flow == flowname)
			{
				writeElement(table,OilFlows.flows[i]);
			}
		}
		if(table.rows.length>1)
		{
			buildOptions=false;
		}
	}
	catch(e)
	{
		alert("In writeOilFlow - error = "+e)
	}
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
					buildOptions=true;
					document.editForm.style.display="none";
					writeOilFlow("");
				}
				reader.onerror = function()
				{
					document.getElementById("trace").innerHTML+="onerror function called.<br>";
				}
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
		}
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
	document.getElementById("saveFileBttn").style.display="block";
	document.getElementById("saveFileBttn").style.backgroundColor="#0099db";
	document.getElementById("saveFileBttn").disabled=false;
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
		var jsonContent="/**\n *\n */\nOilFlows = "+JSON.stringify(OilFlows,null,'  ');
		download(jsonContent, theNameOfTheFile, 'text/json;encoding:utf-8');
		document.getElementById("saveFileBttn").disabled=true;
		document.getElementById("saveFileBttn").style.backgroundColor="lightgrey";
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

function addOption(name)
{
    var x = document.createElement("OPTION");
    x.setAttribute("value", name);
    var t = document.createTextNode(name);
    x.appendChild(t);
    document.selectTrackingDomain.keuze.appendChild(x);
}

function addButton(item, id)
{
	try
	{
		var button = document.createElement("input");
		button.type = "button";
		button.id = id;
		button.value = "Edit";
		button.className = "flowbutton";
		button.setAttribute("onclick", "doEdit(id)");
/*		
		button.addEventListener("click", function() {
			doEdit(id);
		}); */
	    item.appendChild(button);
	}
	catch(e)
	{
		alert("in addButton"+e);
	}
    return;
}
