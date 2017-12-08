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
		else if(activeTab=="docobs")
		{
			var theDocsTable = document.getElementById("obsoletedocuments");
			setTableViewBySelector(theDocsTable, document.getElementById("idFlowSearch").value);
		}
	}
	catch(e)
	{
		alert("fout in flowSearch : " +e);
	}
}

function getData()
{
	try
	{
		var browser = detectIE();
		if(browser==false) isIE=false;
		checkUpdateStatus();
		if(!dataLocked)
		{
			document.getElementById("newItemBttn").style.display="block";
		}
		document.editFormComp.style.display="none";
		document.editFormDoc.style.display="none";
		if(OilFlows != null && OilFlows.hasOwnProperty("obsolete"))
		{
			writeCompObs();
			writeDocObs();
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

function newInputField(aCell)
{
	var aField = document.createElement("input");
	aField.type = "text";
	aField.value = "";
	aField.className = "inputNewField";
	aCell.appendChild(aField);
}

function newItem()
{
	try
	{
		document.getElementById("idFlowSearch").disabled=true;
		if(activeTab=="active")
		{
			var theFlowTable = document.getElementById("oilflows");
			appendActiveTable(theFlowTable);
		}
		else if(activeTab=="compobs")
		{
			var theCompsTable = document.getElementById("obsoletecomponents");
			appendCompsTable(theCompsTable);
		}
		else if(activeTab=="docobs")
		{
			var theDocsTable = document.getElementById("obsoletedocuments");
			appendDocsTable(theDocsTable);
		}
		toggleNewItemButton(false);
	}
	catch(e)
	{
		alert("fout in newItem : " +e);
	}
}

function openFlow(evt, flowType) 
{
	try
	{
		if(document.getElementById("idFlowSearch").disabled) return;
		document.editFormComp.style.display="none";
		document.editForm.style.display="none";
//		document.getElementById("idFlowSearch").value="";
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
		flowSearch();
	}
	catch(e)
	{
		alert("fout in openFlow : " +e);
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
		toggleFileSaveButton(false);
	}
	catch(e)
	{
		alert("foutje in saveFile: "+e);
	}
	return;
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

function setTableViewBySelector(aTable, selector)
{
	var cntColumns=aTable.rows[0].cells.length;
	for(var i=1; i< aTable.rows.length; i++)
	{
		aTable.rows[i].style.display = "none";
		if(selector!="")
		{
			for(var j=0; j<cntColumns; j++)
			{
				if(aTable.rows[i].cells[j].innerHTML.toLowerCase().indexOf(selector.toLowerCase())!=-1)
				{
					aTable.rows[i].style.display = "table-row";
				}
			}
		}
		else
		{
			aTable.rows[i].style.display = "table-row";
		}
	}
}

function toggleButton(aButton, onOff)
{
	if(onOff)
	{
		aButton.style.display="block";
		aButton.style.backgroundColor="#0099db";
		aButton.disabled=false;
	}
	else
	{
		aButton.disabled=true;
		aButton.style.backgroundColor="lightgrey";
	}
}

function toggleFileSaveButton(onOff)
{
	var theButton = document.getElementById("saveFileBttn");
	toggleButton(theButton,onOff);
}

function toggleNewItemButton(onOff)
{
	var theButton = document.getElementById("newItemBttn");
	toggleButton(theButton,onOff);
}

