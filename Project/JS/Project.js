
var arrayEmployee=[
    {
        id:"1",
        name:"rahul",
        Email:"vaishutizare@gmail.com",
        salary:1000,
        city:"nagpur"
    },
    {
        id:"2",
        name:"rahul11",
        Email:"vaishutizare@gmail.com",
        salary:1000,
        city:"nagpur"
    },
    {
        id:"3",
        name:"rahul12",
        Email:"vaishutizare@gmail.com",
        salary:1000,
        city:"nagpur"
    }

];
SendToRegistration=function(){
    location.href="./Registration.html";
};
sendToLogin=function(){
    location.href="./Login_Page.html";
};
sendToDashBoard=function(I){
    location.href="./DashBoard.html"
    
                   
};
loadDashBoardGrid=function(){
    var table="<table border=1>"
        +   "<tr> "
        +"  <th><label>Id</label> </th> <th> <label>Full Name</label>  </th>  <th>   <label>Email</label>  </th>  <th>  <label>Salary</label> </th> <th> <label>City</label>  </th> <th></th>"
        +"</tr>";
    let tableRow="";    
    for(i=0;i<arrayEmployee.length;i++){
        let obj=arrayEmployee[i];
         tableRow= tableRow+"<tr>"+
        "<td>"+obj.id+"</td><td>"+obj.name+"</td><td>"+obj.Email+"</td><td>"+obj.salary+"</td><td>"+obj.city+"</td>"
        +"<td>"
        +"<button onclick='edit("+i+")'>Edit</button>&nbsp; <button onclick='deleteFunc("+i+")'>Delete</button>"
        +"</td>"
        +"</tr>";
    }
    var tableEnd="</table>"
    console.log(tableRow);
    document.getElementById("tableRowID").innerHTML=table+tableRow+tableEnd;
};
edit=function(id){
    //alert(id);
    let empObj=arrayEmployee[id];
    let table="<table border=1>";
    let tableRowID= "<tr><td>ID</td><td><input type='text' id=edit_id_"+id+" value="+empObj.id+" /></td></tr>";
    let tableRowName= "<tr><td>Name:</td><td><input type='text' id=edit_name_"+id+" value='"+empObj.name+"' /></td></tr>";
    let tableRoWSalary= "<tr><td>Salary:</td><td><input type='text' id=edit_salary_"+id+" value="+empObj.salary+" /></td></tr>";
    let tableRowCity= "<tr><td>City:</td><td><input type='text' id=edit_city_"+id+" value="+empObj.city+" /></td></tr>";
    let tableEnd="<tr><td><input type=button value='save' onclick='saveEditedData("+id+")' /></td></tr></table>";
    let htmlString=table+tableRowID+tableRowName+tableRoWSalary+tableRowCity+tableEnd;
    console.log("html-> "+htmlString);
    document.getElementById("showdetails").innerHTML=htmlString;
};

deleteFunc=function(myid){
    arrayEmployee.splice(myid,1);
    loadDashBoardGrid();
}

saveEditedData=function(id){
    let empObj=arrayEmployee[id];
    let idObj=document.getElementById("edit_id_"+id);
    let nameObj=document.getElementById("edit_name_"+id);
    let salaryObj=document.getElementById("edit_salary_"+id);
    let cityObj=document.getElementById("edit_city_"+id);
    console.log("-> "+idObj);
    //let value=obj1.value;
    //alert(value);
    empObj.id=idObj.value;
    empObj.name=nameObj.value;
    empObj.salary=salaryObj.value;
    empObj.city=cityObj.value;

    document.getElementById("showdetails").innerHTML="";
    loadDashBoardGrid();

}