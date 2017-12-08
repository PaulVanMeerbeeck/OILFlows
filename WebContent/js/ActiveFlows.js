/**
 * 
 */

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

function appendActiveTable(aTable)
{
	var row = aTable.insertRow();
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	var cell4 = row.insertCell(4);
	var cell5 = row.insertCell(5);
	var cell6 = row.insertCell(6);
	
	newInputField(cell0);
	newInputField(cell1);
	newInputField(cell2);
	newInputField(cell3);
	newInputField(cell4);
	newInputField(cell5);
	
	cell0.firstChild.addEventListener("blur", function() {
		checkNewFlowId(row);
	});
	
	var saveButton = document.createElement("input");
	saveButton.type = "button";
	saveButton.id = "newSaveItem_active6";
	saveButton.value = "Save";
	saveButton.className = "flowbutton";
	saveButton.style.width="50%";
	if(isIE)
	{
		saveButton.setAttribute("onclick", "doSaveNewActiveItem(row)");
	}
	else
	{		
		saveButton.addEventListener("click", function() {
			doSaveNewActiveItem(row);
		});
	}
	toggleButton(saveButton,false);
	saveButton.style.float="left";
	cell6.appendChild(saveButton);
	var cancelButton = document.createElement("input");
	cancelButton.type = "button";
	cancelButton.id = "newCancelItem_active6";
	cancelButton.value = "Cancel";
	cancelButton.className = "flowbutton";
	cancelButton.style.float="right";
	cancelButton.style.width="50%";
	if(isIE)
	{
		cancelButton.setAttribute("onclick", "doCancelNewActiveItem(row)");
	}
	else
	{		
		cancelButton.addEventListener("click", function() {
			doCancelNewActiveItem(row);
		});
	}
	toggleButton(cancelButton,true);
	cell6.appendChild(cancelButton);
	row.style.display = "table-row";
	setTableViewByIndex(aTable,aTable.rows.length-2);
//	row.scrollIntoView();
	
}

function cancelEdit()
{
	document.editForm.style.display="none";
	flowSearch();
	return true;
}

function checkFlowName(aName)
{
	for(var i=0; i < OilFlows.flows.length; i++) 
	{
		if(OilFlows.flows[i].flow.toLowerCase()==aName.toLowerCase()) return true;
	}
	return false;
}

function checkNewFlowId(aRow)
{
	var val=aRow.cells[0].firstElementChild.value;
	var bttn=aRow.cells[6].firstElementChild;
	if(val=="")
	{
		toggleButton(bttn,false);
		return;
	}
	if(checkFlowName(val))
	{
		alert(val+" is an existing flow");
		toggleButton(bttn,false);
		return;
	}
	else
	{
		toggleButton(bttn,true);
	}
}

function doCancelNewActiveItem(row)
{
	try
	{
		OilFlows.flows.sort(function(a, b) {
	        var x = a.flow.toLowerCase();
	        var y = b.flow.toLowerCase();
	        if (x < y) {return -1;}
	        if (x > y) {return 1;}
	        return 0;
			});
		writeOilFlow();
		toggleNewItemButton(true);
		document.getElementById("idFlowSearch").disabled=false;
	}
	catch(e)
	{
		alert("error = "+e);
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

function doSaveNewActiveItem(row)
{
	try
	{
		if(checkFlowName(row.cells[0].firstElementChild.value))
		{
			alert(row.cells[0].firstElementChild.value+" is an existing flow");
			return;
		}
		var newFlow = {flow:new String(row.cells[0].firstElementChild.value),
				info: { Consumer:new String(row.cells[1].firstElementChild.value),
						Interfaces:new String(row.cells[2].firstElementChild.value),
						Component:new String(row.cells[3].firstElementChild.value),
						ResponseFlow:new String(row.cells[4].firstElementChild.value),
						Documents:new String(row.cells[5].firstElementChild.value)
				}}; 
		OilFlows.flows.push(newFlow);
		OilFlows.flows.sort(function(a, b) {
	        var x = a.flow.toLowerCase();
	        var y = b.flow.toLowerCase();
	        if (x < y) {return -1;}
	        if (x > y) {return 1;}
	        return 0;
			});
		writeOilFlow();
		toggleFileSaveButton(true);
		toggleNewItemButton(true);
		document.getElementById("idFlowSearch").disabled=false;
	}
	catch(e)
	{
		alert("error = "+e);
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
	toggleFileSaveButton(true);
	return true;
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
		setTableViewBySelector(table, document.getElementById("idFlowSearch").value);
	}
	catch(e)
	{
		alert("In writeOilFlow - error = "+e)
	}
}


