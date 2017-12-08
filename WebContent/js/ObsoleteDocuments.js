/**
 * 
 */

function writeDocObs()
{
	var table = document.getElementById("obsoletedocuments");
	if(OilFlows.obsolete.hasOwnProperty("doc") )
	{
		while(table.rows.length>1)
		{
			table.deleteRow(-1);
		}
		if(dataLocked)
		{
			var hRow = table.rows[0];
			if(hRow.cells.length>3) hRow.deleteCell(3);
		}
		for(var j=0; j<OilFlows.obsolete.doc.length; j++)
		{
			var row = table.insertRow();
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);
			var cell3;
			if(dataLocked==false)
			{
				cell3 = row.insertCell(3);
			}
			if(OilFlows.obsolete.doc[j].hasOwnProperty("name"))
			{
				cell0.innerHTML=OilFlows.obsolete.doc[j].name;
			}
			if(OilFlows.obsolete.doc[j].hasOwnProperty("reference"))
			{
				cell1.innerHTML=OilFlows.obsolete.doc[j].reference;
			}
			if(OilFlows.obsolete.doc[j].hasOwnProperty("description"))
			{
				cell2.innerHTML=OilFlows.obsolete.doc[j].description;
			}
			if(dataLocked==false)
			{
				addDocButton(cell3, OilFlows.obsolete.doc[j].name);
			}
		}
	}
}

function addDocButton(item, id)
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
			button.setAttribute("onclick", "doDocEdit(id)");
		}
		else
		{		
			button.addEventListener("click", function() {
				doDocEdit(id);
			});
		}
		item.appendChild(button);
	}
	catch(e)
	{
		alert("in addDocButton"+e);
	}
	return;
}

function appendDocsTable(aTable)
{
	var row = aTable.insertRow();
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	
	newInputField(cell0);
	newInputField(cell1);
	newInputField(cell2);
	
	cell0.firstChild.addEventListener("blur", function() {
		checkNewDocObsId(row);
	});
	
	var saveButton = document.createElement("input");
	saveButton.type = "button";
	saveButton.value = "Save";
	saveButton.className = "flowbutton";
	saveButton.style.width="50%";
	if(isIE)
	{
		saveButton.setAttribute("onclick", "doSaveNewDocObsItem(row)");
	}
	else
	{		
		saveButton.addEventListener("click", function() {
			doSaveNewDocObsItem(row);
		});
	}
	toggleButton(saveButton,false);
	saveButton.style.float="left";
	cell3.appendChild(saveButton);
	var cancelButton = document.createElement("input");
	cancelButton.type = "button";
	cancelButton.value = "Cancel";
	cancelButton.className = "flowbutton";
	cancelButton.style.float="right";
	cancelButton.style.width="50%";
	if(isIE)
	{
		cancelButton.setAttribute("onclick", "doCancelDocObsItem(row)");
	}
	else
	{		
		cancelButton.addEventListener("click", function() {
			doCancelDocObsItem(row);
		});
	}
	toggleButton(cancelButton,true);
	cell3.appendChild(cancelButton);
	row.style.display = "table-row";
	setTableViewByIndex(aTable,aTable.rows.length-2);
//	row.scrollIntoView();
}

function checkDocObsName(aName)
{
	for(var i=0; i < OilFlows.obsolete.doc.length; i++) 
	{
		if(OilFlows.obsolete.doc[i].name.toLowerCase()==aName.toLowerCase()) return true;
	}
	return false;
}

function checkNewDocObsId(aRow)
{
	var val=aRow.cells[0].firstElementChild.value;
	var bttn=aRow.cells[3].firstElementChild;
	if(val=="")
	{
		toggleButton(bttn,false);
		return;
	}
	if(checkDocObsName(val))
	{
		alert(val+" is already present in the list of obsolete documents");
		toggleButton(bttn,false);
		return;
	}
	else
	{
		toggleButton(bttn,true);
	}

}

function doCancelDocObsItem(row)
{
	try
	{
		OilFlows.obsolete.doc.sort(function(a, b) {
	        var x = a.name.toLowerCase();
	        var y = b.name.toLowerCase();
	        if (x < y) {return -1;}
	        if (x > y) {return 1;}
	        return 0;
			});
		writeDocObs();
		toggleNewItemButton(true);
		document.getElementById("idFlowSearch").disabled=false;
	}
	catch(e)
	{
		alert("error = "+e);
	}
}

function doSaveNewDocObsItem(row)
{
	try
	{
		if(checkDocObsName(row.cells[0].firstElementChild.value))
		{
			alert(row.cells[0].firstElementChild.value+" exists already in the list of obsolete documents");
			return;
		}
		var newDoc = { name:new String(row.cells[0].firstElementChild.value),
				       reference:new String(row.cells[1].firstElementChild.value),
				       description:new String(row.cells[2].firstElementChild.value)}; 
		OilFlows.obsolete.doc.push(newDoc);
		OilFlows.obsolete.doc.sort(function(a, b) {
	        var x = a.name.toLowerCase();
	        var y = b.name.toLowerCase();
	        if (x < y) {return -1;}
	        if (x > y) {return 1;}
	        return 0;
			});
		writeDocObs();
		toggleNewItemButton(true);
		document.getElementById("idFlowSearch").disabled=false;
		toggleFileSaveButton(true);
	}
	catch(e)
	{
		alert("error = "+e);
	}
}


function cancelDocEdit()
{
	document.editFormDoc.style.display="none";
	flowSearch();
	return true;
}


function enableDocsButton()
{
	try
	{
		var el=document.getElementById("saveDoc");
		if(el.disabled)
		{
			el.disabled=false;
			el.style.backgroundColor="#0099db";
		}
	}
	catch(e)
	{
		alert("foutje in enableDocsButton "+e);
	}
}

function saveDocEdit()
{
	document.editFormDoc.style.display="none";
	OilFlows.obsolete.doc[editDocId].reference=document.editFormDoc.Reference.value;
	OilFlows.obsolete.doc[editDocId].description=document.editFormDoc.Description.value;
	writeDocObs();
	flowSearch();
	toggleFileSaveButton(true);
	return true;
}

function doDocEdit(id) 
{
	for(var j=0; j<OilFlows.obsolete.doc.length; j++)
	{
		if(OilFlows.obsolete.doc[j].name==id)
		{ 
			editDocId=j;
			setTableViewByIndex(document.getElementById("obsoletedocuments"),editDocId);
			try
			{
				document.getElementById("editFormDocsHeader").innerHTML="Edit info on Oil Document: "+OilFlows.obsolete.doc[j].name;
				document.editFormDoc.style.display="block";
				if(OilFlows.obsolete.doc[j].hasOwnProperty("reference"))
				{
					document.editFormDoc.Reference.value=OilFlows.obsolete.doc[j].reference;
				}
				else
				{
					document.editFormDoc.Config.value="";
				}
				if(OilFlows.obsolete.doc[j].hasOwnProperty("description"))
				{
					document.editFormDoc.Description.value=OilFlows.obsolete.doc[j].description;
				}
				else
				{
					document.editFormDoc.Documents.value="";
				}
				var saveBttn = document.getElementById("saveDoc");
				saveBttn.disabled=true;
				saveBttn.style.backgroundColor="grey";
				document.getElementById("cancelDoc").scrollIntoView();
			}
			catch(e)
			{
				alert("foutje in doDocEdit => "+e);
			}
			break;
		}
	}
}
