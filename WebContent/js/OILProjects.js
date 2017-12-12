/**
 * 
 */

function writeOilPros()
{
	var table = document.getElementById("oilprojects");
	if(OilFlows.hasOwnProperty("projects") && OilFlows.projects.hasOwnProperty("OIL") )
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
		for(var j=0; j<OilFlows.projects.OIL.length; j++)
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
			if(OilFlows.projects.OIL[j].hasOwnProperty("projectid"))
			{
				cell0.innerHTML=OilFlows.projects.OIL[j].projectid;
			}
			if(OilFlows.projects.OIL[j].hasOwnProperty("name"))
			{
				cell1.innerHTML=OilFlows.projects.OIL[j].name;
			}
			if(OilFlows.projects.OIL[j].hasOwnProperty("release"))
			{
				cell2.innerHTML=OilFlows.projects.OIL[j].release;
			}
			if(OilFlows.projects.OIL[j].hasOwnProperty("description"))
			{
				cell3.innerHTML=OilFlows.projects.OIL[j].description;
			}
			if(OilFlows.projects.OIL[j].hasOwnProperty("doc"))
			{
				cell4.innerHTML=OilFlows.projects.OIL[j].doc;
			}
			if(dataLocked==false)
			{
				addOilPrButton(cell5, OilFlows.projects.OIL[j].projectid);
			}
		}
	}
}

function addOilPrButton(item, id)
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
			button.setAttribute("onclick", "doOilPrEdit(id)");
		}
		else
		{		
			button.addEventListener("click", function() {
				doOilPrEdit(id);
			});
		}
		item.appendChild(button);
	}
	catch(e)
	{
		alert("in addOilPrButton"+e);
	}
	return;
}

function appendOilProsTable(aTable)
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
	
	cell0.firstChild.addEventListener("blur", function() {
		checkNewOilProsId(row);
	});
	
	var saveButton = document.createElement("input");
	saveButton.type = "button";
	saveButton.value = "Save";
	saveButton.className = "flowbutton";
	saveButton.style.width="50%";
	if(isIE)
	{
		saveButton.setAttribute("onclick", "doSaveNewOilProsItem(row)");
	}
	else
	{		
		saveButton.addEventListener("click", function() {
			doSaveNewOilProsItem(row);
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
		cancelButton.setAttribute("onclick", "doCancelOilProsItem(row)");
	}
	else
	{		
		cancelButton.addEventListener("click", function() {
			doCancelOilProsItem(row);
		});
	}
	toggleButton(cancelButton,true);
	cell5.appendChild(cancelButton);
	row.style.display = "table-row";
	setTableViewByIndex(aTable,aTable.rows.length-2);
//	row.scrollIntoView();
	
}

function checkOilProsName(prId)
{
	for(var i=0; i < OilFlows.projects.OIL.length; i++) 
	{
		if(OilFlows.projects.OIL[i].projectid.toLowerCase()==prId.toLowerCase()) return true;
	}
	return false;
}

function checkNewOilProsId(aRow)
{
	var val=aRow.cells[0].firstElementChild.value;
	var bttn=aRow.cells[5].firstElementChild;
	if(val=="")
	{
		toggleButton(bttn,false);
		return;
	}
	if(checkOilProsName(val))
	{
		alert(val+" is already present in the list of OIL Projects");
		toggleButton(bttn,false);
		return;
	}
	else
	{
		toggleButton(bttn,true);
	}

}

function doCancelOilProsItem(row)
{
	try
	{
		OilFlows.projects.OIL.sort(function(a, b) {
	        var x = a.name.toLowerCase();
	        var y = b.name.toLowerCase();
	        if (x < y) {return -1;}
	        if (x > y) {return 1;}
	        return 0;
			});
		writeOilPros();
		toggleNewItemButton(true);
		document.getElementById("idFlowSearch").disabled=false;
	}
	catch(e)
	{
		alert("error = "+e);
	}
}

function doSaveNewOilProsItem(row)
{
	try
	{
		if(checkOilProsName(row.cells[0].firstElementChild.value))
		{
			alert(row.cells[0].firstElementChild.value+" exists already in the list of OIL Projects");
			return;
		}
		var newProj = {projectid:new String(row.cells[0].firstElementChild.value),
					   name:new String(row.cells[1].firstElementChild.value),
					   release:new String(row.cells[2].firstElementChild.value),
					   description:new String(row.cells[3].firstElementChild.value),
					   doc:new String(row.cells[4].firstElementChild.value)}; 
		OilFlows.projects.OIL.push(newProj);
		OilFlows.projects.OIL.sort(function(a, b) {
	        var x = a.name.toLowerCase();
	        var y = b.name.toLowerCase();
	        if (x < y) {return -1;}
	        if (x > y) {return 1;}
	        return 0;
			});
		writeOilPros();
		toggleNewItemButton(true);
		document.getElementById("idFlowSearch").disabled=false;
		toggleFileSaveButton(true);
	}
	catch(e)
	{
		alert("error = "+e);
	}
}

function cancelOilPrEdit()
{
	document.editFormOilPr.style.display="none";
	flowSearch();
	return true;
}

function enableOilPrButton()
{
	try
	{
		var el=document.getElementById("saveOilPr");
		if(el.disabled)
		{
			el.disabled=false;
			el.style.backgroundColor="#0099db";
		}
	}
	catch(e)
	{
		alert("foutje in enableOilPrButton "+e);
	}
}

function saveOilPrEdit()
{
	document.editFormOilPr.style.display="none";
	OilFlows.projects.OIL[editCompId].name=document.editFormOilPr.ProName.value;
	OilFlows.projects.OIL[editCompId].release=document.editFormOilPr.OilRelease.value;
	OilFlows.projects.OIL[editCompId].description=document.editFormOilPr.Description.value;
	OilFlows.projects.OIL[editCompId].doc=document.editFormOilPr.Documents.value;
	writeOilPros();
	flowSearch();
	toggleFileSaveButton(true);
	return true;
}

function doOilPrEdit(id) 
{
	for(var j=0; j<OilFlows.projects.OIL.length; j++)
	{
		if(OilFlows.projects.OIL[j].projectid==id)
		{ 
			editCompId=j;
			setTableViewByIndex(document.getElementById("oilprojects"),editCompId);
			try
			{
				document.getElementById("editFormOilPrHeader").innerHTML="Edit OIL Project: "+OilFlows.projects.OIL[j].projectid;
				document.editFormOilPr.style.display="block";
				if(OilFlows.projects.OIL[j].hasOwnProperty("name"))
				{
					document.editFormOilPr.ProName.value=OilFlows.projects.OIL[j].name;
				}
				else
				{
					document.editFormOilPr.ProName.value="";
				}
				if(OilFlows.projects.OIL[j].hasOwnProperty("release"))
				{
					document.editFormOilPr.OilRelease.value=OilFlows.projects.OIL[j].release;
				}
				if(OilFlows.projects.OIL[j].hasOwnProperty("description"))
				{
					document.editFormOilPr.Description.value=OilFlows.projects.OIL[j].description;
				}
				if(OilFlows.projects.OIL[j].hasOwnProperty("doc"))
				{
					document.editFormOilPr.Documents.value=OilFlows.projects.OIL[j].doc;
				}
				else
				{
					document.editFormOilPr.Documents.value="";
				}
				var saveBttn = document.getElementById("saveOilPr");
				saveBttn.disabled=true;
				saveBttn.style.backgroundColor="grey";
				document.getElementById("cancelOilPr").scrollIntoView();
			}
			catch(e)
			{
				alert("foutje in doOilPrEdit => "+e);
			}
			break;
		}
	}
}


