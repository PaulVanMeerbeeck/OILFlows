/**
 * 
 */

var dataLocked = false;
var OilFlows;	
var theNameOfTheFile = "OILFlowsData.js";
var editFlowId;
var editCompId;
var isIE = true;
var activeTab = "active";

function checkUpdateStatus()
{
	if(OilFlows.hasOwnProperty("Status"))
	{
		if(OilFlows.Status=="locked")
		{
			dataLocked=true;
		}
		if(isIE==false)
		{
			var urlParams = new URLSearchParams(window.location.search);
			var status = urlParams.get("status");
			if(status && status=="unlocked")
			{
				dataLocked = false;
			}
		}
	}
}

function getData()
{
	try
	{
		var browser = detectIE();
		if(browser==false) isIE=false;
		checkUpdateStatus();
		document.editFormComp.style.display="none";
		if(OilFlows != null && OilFlows.hasOwnProperty("obsolete"))
		{
			writeCompObs();
		}
		if(OilFlows != null && OilFlows.hasOwnProperty("flows"))
		{
			for( var i=0; i<OilFlows.flows.length; i++)
			{
				var elem = OilFlows.flows[i];
				if(elem.hasOwnProperty("flow") && elem.hasOwnProperty("info")) continue;
				alert("Property 'flow' or 'info' element ["+i+"]");
				return;
			}
		}
		document.editForm.style.display="none";
		writeOilFlow();
		return;
	}
	catch(e)
	{
		alert("getData - foutje "+e);
	}
}

function writeCompObs()
{
	var table = document.getElementById("obsoletecomponents");
	if(OilFlows.obsolete.hasOwnProperty("components") )
	{
		while(table.rows.length>1)
		{
			table.deleteRow(-1);
		}
		if(dataLocked)
		{
			var hRow = table.rows[0];
			if(hRow.cells.length>4) hRow.deleteCell(4);
		}
		for(var j=0; j<OilFlows.obsolete.components.length; j++)
		{
			var row = table.insertRow();
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);
			var cell3 = row.insertCell(3);
			var cell4;
			if(dataLocked==false)
			{
				cell4 = row.insertCell(4);
			}
			if(OilFlows.obsolete.components[j].hasOwnProperty("name"))
			{
				cell0.innerHTML=OilFlows.obsolete.components[j].name;
			}
			if(OilFlows.obsolete.components[j].hasOwnProperty("config"))
			{
				cell1.innerHTML=OilFlows.obsolete.components[j].config;
			}
			if(OilFlows.obsolete.components[j].hasOwnProperty("doc"))
			{
				cell2.innerHTML=OilFlows.obsolete.components[j].doc;
			}
			if(OilFlows.obsolete.components[j].hasOwnProperty("interfaces"))
			{
				cell3.innerHTML=OilFlows.obsolete.components[j].interfaces;
			}
			if(dataLocked==false)
			{
				addCompButton(cell4, OilFlows.obsolete.components[j].name);
			}
		}
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

function writeOilFlow()
{
	try
	{
		var table = document.getElementById("oilflows");
		while(table.rows.length>1)
		{
			table.deleteRow(-1);
		}
		if(dataLocked)
		{
			var hRow = table.rows[0];
			if(hRow.cells.length>6) hRow.deleteCell(6);
		}
		for(var i=0; i<OilFlows.flows.length; i++)
		{
			writeElement(table,OilFlows.flows[i]);
		}
	}
	catch(e)
	{
		alert("In writeOilFlow - error = "+e)
	}
}

function doEdit(id) 
{
	for(var j=0; j<OilFlows.flows.length; j++)
	{
		if(OilFlows.flows[j].flow==id)
		{ 
			editFlowId=j;
			setTableViewByIndex(document.getElementById("oilflows"),editFlowId);
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

function doCompEdit(id) 
{
	for(var j=0; j<OilFlows.obsolete.components.length; j++)
	{
		if(OilFlows.obsolete.components[j].name==id)
		{ 
			editCompId=j;
			setTableViewByIndex(document.getElementById("obsoletecomponents"),editCompId);
			try
			{
				document.getElementById("editFormCompsHeader").innerHTML="Edit Oil Component: "+OilFlows.obsolete.components[j].name;
				document.editFormComp.style.display="block";
				if(OilFlows.obsolete.components[j].hasOwnProperty("config"))
				{
					document.editFormComp.Config.value=OilFlows.obsolete.components[j].config;
				}
				else
				{
					document.editFormComp.Config.value="";
				}
				if(OilFlows.obsolete.components[j].hasOwnProperty("doc"))
				{
					document.editFormComp.Documents.value=OilFlows.obsolete.components[j].doc;
				}
				else
				{
					document.editFormComp.Documents.value="";
				}
				if(OilFlows.obsolete.components[j].hasOwnProperty("interfaces"))
				{
					document.editFormComp.Interfaces.value=OilFlows.obsolete.components[j].interfaces;
				}
				else
				{
					document.editFormComp.Interfaces.value="";
				}
				var saveBttn = document.getElementById("saveComp");
				saveBttn.disabled=true;
				saveBttn.style.backgroundColor="grey";
				document.getElementById("cancelComp").scrollIntoView();
			}
			catch(e)
			{
				alert("foutje in doCompEdit => "+e);
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
					document.editForm.style.display="none";
					writeOilFlow();
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
	OilFlows.flows[editFlowId].info.Consumer=document.editForm.Consumer.value;
	OilFlows.flows[editFlowId].info.Interfaces=document.editForm.Interfaces.value;
	OilFlows.flows[editFlowId].info.Component=document.editForm.Component.value;
	OilFlows.flows[editFlowId].info.ResponseFlow=document.editForm.ResponseFlow.value;
	OilFlows.flows[editFlowId].info.Documents=document.editForm.Documents.value;
	writeOilFlow();
	flowSearch();
	document.getElementById("saveFileBttn").style.display="block";
	document.getElementById("saveFileBttn").style.backgroundColor="#0099db";
	document.getElementById("saveFileBttn").disabled=false;
	return true;
}

function saveCompEdit()
{
	document.editFormComp.style.display="none";
	OilFlows.obsolete.components[editCompId].config=document.editFormComp.Config.value;
	OilFlows.obsolete.components[editCompId].doc=document.editFormComp.Documents.value;
	OilFlows.obsolete.components[editCompId].interfaces=document.editFormComp.Interfaces.value;
	writeCompObs();
	flowSearch();
	document.getElementById("saveFileBttn").style.display="block";
	document.getElementById("saveFileBttn").style.backgroundColor="#0099db";
	document.getElementById("saveFileBttn").disabled=false;
	return true;
}

function cancelCompEdit()
{
	document.editFormComp.style.display="none";
	flowSearch();
	return true;
}


function cancelEdit()
{
	document.editForm.style.display="none";
	flowSearch();
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

function enableCompsButton()
{
	try
	{
		var el=document.getElementById("saveComp");
		if(el.disabled)
		{
			el.disabled=false;
			el.style.backgroundColor="#0099db";
		}
	}
	catch(e)
	{
		alert("foutje in enableCompsButton "+e);
	}
}

function enableButton()
{
	try
	{
		var el=document.getElementById("save");
		if(el.disabled)
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

function addButton(item, id)
{
	try
	{
		var button = document.createElement("input");
		button.type = "button";
		button.id = id;
		button.value = "Edit";
		button.className = "flowbutton";
		if(isIE)
		{
			button.setAttribute("onclick", "doEdit(id)");
		}
		else
		{		
			button.addEventListener("click", function() {
				doEdit(id);
			});
		}
		item.appendChild(button);
	}
	catch(e)
	{
		alert("in addButton"+e);
	}
	return;
}

function addCompButton(item, id)
{
	try
	{
		var button = document.createElement("input");
		button.type = "button";
		button.id = id;
		button.value = "Edit";
		button.className = "flowbutton";
		if(isIE)
		{
			button.setAttribute("onclick", "doCompEdit(id)");
		}
		else
		{		
			button.addEventListener("click", function() {
				doCompEdit(id);
			});
		}
		item.appendChild(button);
	}
	catch(e)
	{
		alert("in addCompButton"+e);
	}
	return;
}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() 
{
	var ua = window.navigator.userAgent;

	// Test values; Uncomment to check result …

	// IE 10
	// ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

	// IE 11
	// ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

	// Edge 12 (Spartan)
	// ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

	// Edge 13
	// ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) 
	{
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) 
	{
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) 
	{
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}

function openFlow(evt, flowType) 
{
	try
	{
		document.editFormComp.style.display="none";
		document.editForm.style.display="none";
		document.getElementById("idFlowSearch").value="";
		flowSearch();
		activeTab = flowType;
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++)
		{
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++)
		{
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(flowType).style.display = "block";
		evt.currentTarget.className += " active";
	}
	catch(e)
	{
		alert("fout in openFlow : " +e);
	}
}

function flowSearch()
{
	try
	{
		if(activeTab=="active")
		{
			var theFlowTable = document.getElementById("oilflows");
			setTableViewBySelector(theFlowTable, document.getElementById("idFlowSearch").value);
		}
		else if(activeTab=="compobs")
		{
			var theCompsTable = document.getElementById("obsoletecomponents");
			setTableViewBySelector(theCompsTable, document.getElementById("idFlowSearch").value);
		}
	}
	catch(e)
	{
		alert("fout in flowSearch : " +e);
	}
}

function setTableViewBySelector(aTable, selector)
{
	for(var i=1; i< aTable.rows.length; i++)
	{
		if(aTable.rows[i].cells[0].innerHTML.toLowerCase().indexOf(selector.toLowerCase())!=-1 || selector=="")
		{
			aTable.rows[i].style.display = "table-row";
		}
		else
		{
			aTable.rows[i].style.display = "none";				
		}
	}
}

function setTableViewByIndex(aTable, idx)
{
	for(var i=1; i< aTable.rows.length; i++)
	{
		if(i==idx+1)
		{
			aTable.rows[i].style.display = "table-row";
		}
		else
		{
			aTable.rows[i].style.display = "none";				
		}
	}
}