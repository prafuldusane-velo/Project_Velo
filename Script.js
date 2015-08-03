//Code goes here
$(document).ready(function()
{
	var globalIndex=0;
	var id_of_ele=0;
	$.getJSON( "TaskData.json", function(json){
		
             $.each(json, function(i,value){
                   $("tbody").append("<tr id="+i+"><td>&nbsp"+value.Assigned_By+"</td><td>&nbsp"+value.Assigned_To+"</td><td>&nbsp"+value.Task_id+"</td><td>&nbsp"+value.Description+"</td>" +
                   		"<td><button type=button class=\" btn btn-sm btn-default\" id=\"editdata\" data-toggle=\"modal\" data-target=\"#myModaledit\">&nbspEdit<span class=\"glyphicon glyphicon-edit\"></span></button>&nbsp<button type=button class=\" btn btn-sm btn-danger\" id=\"trashdata\" >Trash<span class=\"glyphicon glyphicon-trash\"></span></button></td></tr>");
                   globalIndex=i;
             });//each
             
    });//getJSON
	
	//$('#example').DataTable();//Attaching data tables
	
	$("button#addNew").click(function(){
		
		var fname=document.getElementById("assingby").value;
		var lname=document.getElementById("assingto").value;
		var rollno=document.getElementById("taskid").value;
		var subjects=document.getElementById("desc").value;
		console.log(fname+lname+rollno+subjects);
		var subs=subjects.split(",");
		var sub1=subs[0];
		var sub2=subs[1];
		var sub3=subs[2];
		//globalindex++;
		$("tbody").append("<tr><td>&nbsp"+fname+"</td><td>&nbsp"+lname+"</td><td>&nbsp"+rollno+"</td><td>&nbsp"+sub1+","+sub2+","+sub3+"</td><td><button type=button class=\" btn btn-sm btn-default\" id=\"editdata\" &nbsp>Edit<span class=\"glyphicon glyphicon-edit\"></span></button>&nbsp<button type=button class=\" btn btn-sm btn-danger\" id=\"trashdata\" >Trash<span class=\"glyphicon glyphicon-trash\"></span></button></td></tr>");
	});
	
	//Function to delete selected row.
	
	$('table').on( "click",'button#trashdata',function( event ) {
		$( event.target ).closest( "tr" ).remove();
	});	
	
	//Function to edit the data of selected student.
	
	$('table').on("click",'button#editdata',function(event){
		
		var x=$(event.target).closest("tr").text();
		var stringArray = x.split(/(\s+)/);
		console.log(stringArray); 
	    $("#eassignby").attr("value",stringArray[2]);
	    $("#eassignto").attr("value",stringArray[4]);
	    $("#etaskid").attr("value",stringArray[6]);
	    $("#edesc").attr("value",stringArray[8]);
	    id_of_ele=$(event.target).closest("tr").attr('id');
	});
	
	//Function to button:edit on Modal click to change the data
	
	$("button#EditData").click(function(){
		
		var edtdassby=document.getElementById("eassingby").value;
	    var edtdassto=document.getElementById("eassingto").value;
	    var edtdtskid=document.getElementById("etaskid").value;
	    var edtddesc=document.getElementById("edesc").value;
	    $("#example").find("#"+id_of_ele).replaceWith("<tr id="+id_of_ele+"><td>&nbsp"+edtdassby+"</td><td>&nbsp"+edtdassto+"</td><td>&nbsp"+edtdtskid+"</td><td>&nbsp"+edtddesc+"</td><td><button type=button class=\" btn btn-sm btn-default\" id=\"editdata\" &nbsp>Edit<span class=\"glyphicon glyphicon-edit\"></span></button>&nbsp<button type=button class=\" btn btn-sm btn-danger\" id=\"trashdata\" >Trash<span class=\"glyphicon glyphicon-trash\"></span></button></td></tr>");
	});
	
	//Animate page title on Hover
	$("body .page_title").hover(function(){
		
		$(this).animate({width:"600px"}),$(this).animate({width:"400px"});	
	});
	
});//document.ready