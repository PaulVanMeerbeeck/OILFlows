/**
 * 
 */

function writeNwsPros()
{
	var table = document.getElementById("nwsprojects");
	if(OilFlows.hasOwnProperty("projects") && OilFlows.projects.hasOwnProperty("NWS") )
	{
		while(table.rows.length>1)
		{
			table.deleteRow(-1);
		}
		if(dataLocked)
		{
			var hRow = table.rows[0];
			if(hRow.cells.length>5) hRow.deleteCell(5);
		}
		for(var j=0; j<OilFlows.projects.NWS.length; j++)
		{
			var row = table.insertRow();
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);
			var cell3 = row.insertCell(3);
			var cell4 = row.insertCell(4);
			var cell5;
			if(dataLocked==false)
			{
				cell5 = row.insertCell(5);
			}
			if(OilFlows.projects.NWS[j].hasOwnProperty("projectid"))
			{
				cell0.innerHTML=OilFlows.projects.NWS[j].projectid;
			}
			if(OilFlows.projects.NWS[j].hasOwnProperty("name"))
			{
				cell1.innerHTML=OilFlows.projects.NWS[j].name;
			}
			if(OilFlows.projects.NWS[j].hasOwnProperty("release"))
			{
				cell2.innerHTML=OilFlows.projects.NWS[j].release;
			}
			if(OilFlows.projects.NWS[j].hasOwnProperty("description"))
			{
				cell3.innerHTML=OilFlows.projects.NWS[j].description;
			}
			if(OilFlows.projects.NWS[j].hasOwnProperty("doc"))
			{
				cell4.innerHTML=OilFlows.projects.NWS[j].doc;
			}
			if(dataLocked==false)
			{
				addNwsPrButton(cell5, j)
			}
		}
	}
}

function addNwsPrButton(item, id)
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
			button.setAttribute("onclick", "doNwsPrEdit(id)");
		}
		else
		{		
			button.addEventListener("click", function() {
															try
															{
																doNwsPrEdit(id);
															}
															catch(e)
															{
																alert("doNwsPrEdit call error "+e);
															}
														});
		}
		item.appendChild(button);
	}
	catch(e)
	{
		alert("in addNwsPrButton"+e);
	}
	return;
}

function appendNwsProsTable(aTable)
{
	var row = aTable.insertRow();
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	var cell4 = row.insertCell(4);
	var cell5 = row.insertCell(5);
	
	newInputField(cell0);
	newInputField(cell1);
	newInputField(cell2);
	newInputField(cell3);
	newInputField(cell4);
	cell4.firstElementChild.value="(<a target=\\\"_default\\\" href=\\\"\\\"></a>)";
	
	cell0.firstChild.addEventListener("blur", function() {
		checkNewNwsProsId(row);
	});
	
	var saveButton = document.createElement("input");
	saveButton.type = "button";
	saveButton.value = "Save";
	saveButton.className = "flowbutton";
	saveButton.style.width="50%";
	if(isIE)
	{
		saveButton.setAttribute("onclick", "doSaveNewNwsProsItem(row)");
	}
	else
	{		
		saveButton.addEventListener("click", function() {
			doSaveNewNwsProsItem(row);
		});
	}
	toggleButton(saveButton,false);
	saveButton.style.float="left";
	cell5.appendChild(saveButton);
	var cancelButton = document.createElement("input");
	cancelButton.type = "button";
	cancelButton.value = "Cancel";
	cancelButton.className = "flowbutton";
	cancelButton.style.float="right";
	cancelButton.style.width="50%";
	if(isIE)
	{
		cancelButton.setAttribute("onclick", "doCancelNwsProsItem(row)");
	}
	else
	{		
		cancelButton.addEventListener("click", function() {
			doCancelNwsProsItem(row);
		});
	}
	toggleButton(cancelButton,true);
	cell5.appendChild(cancelButton);
	row.style.display = "table-row";
	setTableViewByIndex(aTable,aTable.rows.length-2);
//	row.scrollIntoView();
	
}

function checkNwsProsName(prId)
{
	for(var i=0; i < OilFlows.projects.NWS.length; i++) 
	{
		// do not check for nws projects.
		//		if(OilFlows.projects.NWS[i].projectid.toLowerCase()==prId.toLowerCase()) return true;
	}
	return false;
}

function checkNewNwsProsId(aRow)
{
	var val=aRow.cells[0].firstElementChild.value;
	var bttn=aRow.cells[5].firstElementChild;
	if(val=="")
	{
		toggleButton(bttn,false);
		return;
	}
	if(checkNwsProsName(val))
	{
		alert(val+" is already present in the list of NWS Projects");
		toggleButton(bttn,false);
		return;
	}
	else
	{
		toggleButton(bttn,true);
	}

}

function doCancelNwsProsItem(row)
{
	try
	{
/*		OilFlows.projects.NWS.sort(function(a, b) {
	        var x = a.release.toLowerCase();
	        var y = b.release.toLowerCase();
	        if (x > y) {return -1;}
	        if (x < y) {return 1;}
	        return 0;
			}); */
		writeNwsPros();
		toggleNewItemButton(true);
		document.getElementById("idFlowSearch").disabled=false;
	}
	catch(e)
	{
		alert("error = "+e);
	}
}

function doSaveNewNwsProsItem(row)
{
	try
	{
		if(checkNwsProsName(row.cells[0].firstElementChild.value))
		{
			alert(row.cells[0].firstElementChild.value+" exists already in the list of NWS Projects");
			return;
		}
		var newProj = {projectid:new String(row.cells[0].firstElementChild.value),
					   name:new String(row.cells[1].firstElementChild.value),
					   release:new String(row.cells[2].firstElementChild.value),
					   description:new String(row.cells[3].firstElementChild.value),
					   doc:new String(row.cells[4].firstElementChild.value)}; 
		OilFlows.projects.NWS.push(newProj);
/*		OilFlows.projects.NWS.sort(function(a, b) {
	        var x = a.name.toLowerCase();
	        var y = b.name.toLowerCase();
	        if (x < y) {return -1;}
	        if (x > y) {return 1;}
	        return 0;
			}); */
		writeNwsPros();
		toggleNewItemButton(true);
		document.getElementById("idFlowSearch").disabled=false;
		toggleFileSaveButton(true);
	}
	catch(e)
	{
		alert("error = "+e);
	}
}

function cancelNwsPrEdit()
{
	document.editFormNwsPr.style.display="none";
	flowSearch();
	return true;
}

function enableNwsPrButton()
{
	try
	{
		var el=document.getElementById("saveNwsPr");
		if(el.disabled)
		{
			el.disabled=false;
			el.style.backgroundColor="#0099db";
		}
	}
	catch(e)
	{
		alert("foutje in enableNwsPrButton "+e);
	}
}

function saveNwsPrEdit()
{
	document.editFormNwsPr.style.display="none";
	OilFlows.projects.NWS[editCompId].name=document.editFormNwsPr.ProName.value;
	OilFlows.projects.NWS[editCompId].release=document.editFormNwsPr.OilRelease.value;
	OilFlows.projects.NWS[editCompId].description=document.editFormNwsPr.Description.value;
	OilFlows.projects.NWS[editCompId].doc=document.editFormNwsPr.Documents.value;
	writeNwsPros();
	flowSearch();
	toggleFileSaveButton(true);
	return true;
}

function doNwsPrEdit(id) 
{
	try
	{
		if(id < OilFlows.projects.NWS.length)
		{ 
			editCompId=id;
			setTableViewByIndex(document.getElementById("nwsprojects"),editCompId);
			document.getElementById("editFormNwsPrHeader").innerHTML="Edit NWS Project: "+OilFlows.projects.NWS[id].projectid;
			document.editFormNwsPr.style.display="block";
			if(OilFlows.projects.NWS[id].hasOwnProperty("name"))
			{
				document.editFormNwsPr.ProName.value=OilFlows.projects.NWS[id].name;
			}
			else
			{
				document.editFormNwsPr.ProName.value="";
			}
			if(OilFlows.projects.NWS[id].hasOwnProperty("release"))
			{
				document.editFormNwsPr.OilRelease.value=OilFlows.projects.NWS[id].release;
			}
			if(OilFlows.projects.NWS[id].hasOwnProperty("description"))
			{
				document.editFormNwsPr.Description.value=OilFlows.projects.NWS[id].description;
			}
			if(OilFlows.projects.NWS[id].hasOwnProperty("doc"))
			{
				document.editFormNwsPr.Documents.value=OilFlows.projects.NWS[id].doc;
			}
			else
			{
				document.editFormNwsPr.Documents.value="";
			}
			var saveBttn = document.getElementById("saveNwsPr");
			saveBttn.disabled=true;
			saveBttn.style.backgroundColor="grey";
			document.getElementById("cancelNwsPr").scrollIntoView();
		}
	}
	catch(e)
	{
		alert("foutje in doNwsPrEdit => "+e);
	}
}


