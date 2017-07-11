//function user() {
//    var save = "Mnehal16";
//    var user = document.getElementById("changeuser");
//    user.innerHTML = save;
//};
//document.getElementById("changeuser").onload = user();

//function filepath(inputz) {
//    var change = inputz.value;
//    change = change.replace(/.*[\/\\]/, '');
//    document.getElementById('ubinput').value = change;
//    document.this.onchange=disable_input(change);
//};
//document.getElementById('tarea').onkeyup = function () {
//    var len = document.getElementById('tarea').value;
//    document.getElementById('countnum').innerHTML = len.length;
//    console.log(len.length);
//    document.getElementById('tarea').onkeypress = disable_textarea(len.length);
//};
//function disable_input(values){
//    var disable,att;
//    if(values!==""){
//        document.getElementById("submited1").removeAttribute("disabled");
//            console.log('false');
//    }
//    else{
//        disable = document.getElementById('submited1');
//        att = document.createAttribute('disabled');
//        att.value = "disabled";
//        disable.setAttributeNode(att);
//        console.log('true');
//    }
//}
//function disable_textarea(valz){
//    var att,disable;
//    if(valz!==0){
//        document.getElementById("submitz").removeAttribute("disabled");
//            console.log('false');
//    }
//    else{
//        disable = document.getElementById('submitz');
//        att = document.createAttribute('disabled');
//        att.value = "disabled";
//        disable.setAttributeNode(att);
//        console.log('true');
//    }
//}

//function file_empty(){
//    var att,disable;
//    document.getElementById('uvalue').value="";
//    document.getElementById('ubinput').value="";
//    disable = document.getElementById('submited1');
//    att = document.createAttribute('disabled');
//    att.value = "disabled";
//    disable.setAttributeNode(att);
//    console.log('true');
//}
//function textarea_empty(){
//    var att,disable;
//    document.getElementById('tarea').value="";
//    document.getElementById('countnum').innerHTML=0;
//    disable = document.getElementById('submitz');
//    att = document.createAttribute('disabled');
//    att.value = "disabled";
//    disable.setAttributeNode(att);
//    console.log('true');
//}
/*
function dis() {
    var leng = document.getElementById('tarea').value;
    var changes = document.getElementById('uvalue').value;
    if (leng != 0 && changes == "") {
        if (leng.length > 10000) {
            disable = document.getElementById('submited');
            att = document.createAttribute('disabled');
            att.value = "disabled";
            disable.setAttributeNode(att);
            console.log('true');
        }
        else {
            document.getElementById("submited").removeAttribute("disabled");
            console.log('false');
        }
    }
    else if (changes != "" && leng == 0) {
        document.getElementById('countnum').innerHTML = 0;
        document.getElementById("submited").removeAttribute("disabled");
        console.log('false');
    }
    else {
        disable = document.getElementById('submited');
        att = document.createAttribute('disabled');
        att.value = "disabled";
        disable.setAttributeNode(att);
        console.log('true');
    }
};
*/
$(document).ready(function () {
    $('.nav li').click(function () {
       
        var tt = localStorage.getItem("active");
        if (tt == null || tt == "") {
            localStorage.setItem("active", "studentHome");

        } else {
            localStorage.setItem("active", String(this.id));
            
            if (this.id == "stdDropdown") {
                $(".nav li").removeClass("active");
                $(this).addClass("active");
            }
            
        }
    })
});


window.onload = function () {
    var active1 = localStorage.getItem("active");
    if (localStorage.getItem("active") == null) {
        $("#studentHome").addClass("active");
       
    }
    else {
        $(".nav li").removeClass("active");
        $("#" + localStorage.getItem("active")).addClass("active");
    }
}

var ShowStdSetting = function () {
    //alert("ppppppppppppp");
    $.ajax({

        type: "POST",
        url: "/Student/ShowStdSetting",
        success: function (response) {
            $("#stdSettingModelBody").html(response);
            $("#stdSettingModel").modal("show");
        }

    })
}
function stdSettingPartial(e) {
    e.preventDefault();
   // alert("updatedd");
    var dataToPost = $("#stdSettingForm").serialize();
    $.ajax(
    {
        type: "POST",
        data: dataToPost,
        url: "/Student/PartialViewSetting",
        success: function (response) {
            $("#stdSettingModelBody").html(response);
        }
        //refresh background here
    })

}