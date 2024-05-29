function edit(){
    var academic = document.getElementsByName("acad");
    // var non_academic = document.getElementsByName("non_acad");

    var sub = document.getElementById("sub").value;
    var div = document.getElementById("div").value;
    var cre = document.getElementById("cre").value;
    var com = document.getElementById("com").value;

    var act = document.getElementById("act").value;
    var meet = document.getElementById("meet").value;

    // if(academic!="on" && non_academic!="on"){
    //     alert("Please choose the fields to edit !!!");
    // }

    if(academic[0].checked){
        if(sub!="" && div!="" && cre!="" && com!=""){
            document.getElementById("a").innerHTML = "<td colspan=\"2\">"+4+"</td>"+"<td colspan=\"4\">"+sub+"</td>"+"<td colspan=\"2\">"+div+"</td>"+"<td colspan=\"2\">"+cre+"</td>"+"<td colspan=\"2\">"+com+"%</td>";
        }
        else{
            alert("Please fill all the fields of Academics !!!");
        }
    }
    if(academic[1].checked){
        if(act!="" && meet!=""){
            document.getElementById("b").innerHTML = "<td colspan=\"2\">"+3+"</td>"+"<td colspan=\"4\">"+act+"</td>"+"<td colspan=\"4\">"+meet+"</td>";
        }
        else{
            alert("Please fill all the fields of Non-Academics !!!");
        }
    }
}