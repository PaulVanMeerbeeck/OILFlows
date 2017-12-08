/**
 * 
 */

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

function appendCompsTable(aTable)
{
	var row = aTable.insertRow();
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	var cell4 = row.insertCell(4);
	
	newInputField(cell0);
	newInputField(cell1);
	newInputField(cell2);
	newInputField(cell3);
	
	cell0.firstChild.addEventListener("blur", function() {
		checkNewCompObsId(row);
	});
	
	var saveButton = document.createElement("input");
	saveButton.type = "button";
	saveButton.value = "Save";
	saveButton.className = "flowbutton";
	saveButton.style.width="50%";
	if(isIE)
	{
		saveButton.setAttribute("onclick", "doSaveNewCompObsItem(row)");
	}
	else
	{		
		saveButton.addEventListener("click", function() {
			doSaveNewCompObsItem(row);
		});
	}
	toggleButton(saveButton,false);
	saveButton.style.float="left";
	cell4.appendChild(saveButton);
	var cancelButton = document.createElement("input");
	cancelButton.type = "button";
	cancelButton.value = "Cancel";
	cancelButton.className = "flowbutton";
	cancelButton.style.float="right";
	cancelButton.style.width="50%";
	if(isIE)
	{
		cancelButton.setAttribute("onclick", "doCancelCompObsItem(row)");
	}
	else
	{		
		cancelButton.addEventListener("click", function() {
			doCancelCompObsItem(row);
		});
	}
	toggleButton(cancelButton,true);
	cell4.appendChild(cancelButton);
	row.style.display = "table-row";
	setTableViewByIndex(aTable,aTable.rows.length-2);
//	row.scrollIntoView();
	
}

function checkCompObsName(aName)
{
	for(var i=0; i < OilFlows.obsolete.components.length; i++) 
	{
		if(OilFlows.obsolete.components[i].name.toLowerCase()==aName.toLowerCase()) return true;
	}
	return false;
}

function checkNewCompObsId(aRow)
{
	var val=aRow.cells[0].firstElementChild.value;
	var bttn=aRow.cells[4].firstElementChild;
	if(val=="")
	{
		toggleButton(bttn,false);
		return;
	}
	if(checkCompObsName(val))
	{
		alert(val+" is already present in the list of obsolete components");
		toggleButton(bttn,false);
		return;
	}
	else
	{
		toggleButton(bttn,true);
	}

}

function doCancelCompObsItem(row)
{
	try
	{
		OilFlows.obsolete.components.sort(function(a, b) {
	        var x = a.name.toLowerCase();
	        var y = b.name.toLowerCase();
	        if (x < y) {return -1;}
	        if (x > y) {return 1;}
	        return 0;
			});
		writeCompObs();
		toggleNewItemButton(true);
		document.getElementById("idFlowSearch").disabled=false;
	}
	catch(e)
	{
		alert("error = "+e);
	}
}

function doSaveNewCompObsItem(row)
{
	try
	{
		if(checkCompObsName(row.cells[0].firstElementChild.value))
		{
			alert(row.cells[0].firstElementChild.value+" exists already in the list of obsolete components");
			return;
		}
		var newComp = {name:new String(row.cells[0].firstElementChild.value),
					   config:new String(row.cells[1].firstElementChild.value),
					   doc:new String(row.cells[2].firstElementChild.value),
					   interfaces:new String(row.cells[3].firstElementChild.value)}; 
		OilFlows.obsolete.components.push(newComp);
		OilFlows.obsolete.components.sort(function(a, b) {
	        var x = a.name.toLowerCase();
	        var y = b.name.toLowerCase();
	        if (x < y) {return -1;}
	        if (x > y) {return 1;}
	        return 0;
			});
		writeCompObs();
		toggleNewItemButton(true);
		document.getElementById("idFlowSearch").disabled=false;
		toggleFileSaveButton(true);
	}
	catch(e)
	{
		alert("error = "+e);
	}
}

function cancelCompEdit()
{
	document.editFormComp.style.display="none";
	flowSearch();
	return true;
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

function saveCompEdit()
{
	document.editFormComp.style.display="none";
	OilFlows.obsolete.components[editCompId].config=document.editFormComp.Config.value;
	OilFlows.obsolete.components[editCompId].doc=document.editFormComp.Documents.value;
	OilFlows.obsolete.components[editCompId].interfaces=document.editFormComp.Interfaces.value;
	writeCompObs();
	flowSearch();
	toggleFileSaveButton(true);
	return true;
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


