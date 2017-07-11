$(document).ready(function () {
    $('#checkBoxAll').click(function () {
        if ($(this).is(":checked"))
            $('.chkCheckBoxId').prop('checked', true);
        else
            $('.chkCheckBoxId').prop('checked', false);

    });
});
$(document).ready(function () {
    $('.nav li').click(function () {
        var tt = localStorage.getItem("active");
        if (tt == null || tt == "") {
            localStorage.setItem("active", "adminHome");
            
        } else {
            localStorage.setItem("active", String(this.id));
            if (this.id == "view" || this.id == "add")
            {
                $(".nav li").removeClass("active");
                $(this).addClass("active");
            }
        }
        })    
});

window.onload = function () {
   
    var active1 = localStorage.getItem("active");
    //alert(active1);
    if (localStorage.getItem("active") == null) {
        $("#adminHome").addClass("active");
       // alert("adminhome active");
    }
    else {
        $(".nav li").removeClass("active");
        $("#"+localStorage.getItem("active")).addClass("active");
    }
}
var ConfirmDelete = function (QuizId) {

    $("#hiddenQuizId").val(QuizId);
    $("#deleteQuizModel").modal('show');


}

var ViewQuestions = function (quizid) {
    $("#hiddenQuizId").val(quizid);
    $.ajax({
        type: "POST",
        url: "/Admin/ViewQuestions",
        data: { quizId: quizid },
        success: function (response) {
            $("#ViewQuizBody").html(response);

        }

    })
}

var DeleteQuiz = function () {

    //$("#loaderDiv").show();

    var quizId = $("#hiddenQuizId").val();

    $.ajax({

        type: "POST",
        url: "/Admin/DeleteQuiz",
        data: { QuizId: quizId },
        success: function (result) {
            // $("#loaderDiv").hide();
            $("#deleteQuizModel").modal("hide");
            $("#row_" + quizId).remove();

        }

    })
}

var EditQuiz = function (quizId) {

    var url = "/Admin/EditQuiz?QuizId=" + quizId;

    $("#editQuizModelBody").load(url, function () {
        $("#editQuizModel").modal("show");
    })
}

var ShowQuiz = function (quizId) {

    $.ajax({

        type: "POST",
        url: "/Admin/ShowQuiz",
        data: { QuizId: quizId },
        success: function (response) {
            $("#showQuizModelBody").html(response);
            $("#showQuizModel").modal("show");
        }

    })
}
var EditQuestion = function (quesId) {
    //alert("hiiiiiii");
    $.ajax({
        type: "POST",
        url: "/Admin/EditQuestion",
        data: { QuesId: quesId },
        success: function (response) {
            $("#editQuestionModelBody").html(response);
            $("#editQuestionModel").modal("show");
            //$("#ViewQuiz").html(response);//
        }

    })

}

function editQuiz1(e) {
    e.preventDefault();
    var dataToPost = $("#myForm").serialize();
    $.ajax(
    {
        type: "POST",
        data: dataToPost,
        url: "/Admin/PartialQuizEdit",
        success: function (response) {
            $("#editQuizModelBody").html(response);
            $.ajax({
                type: "POST",
                url: "/Admin/ViewQuiz",
                data: { },
                success: function (response1) {
                    $("#ViewQuizBody").html(response1);

                }

            })
                    }

    })

}

function editQuestionPartial(e) {
    e.preventDefault();
    var dataToPost = $("#editQuestionForm").serialize();
    $.ajax(
    {
        type: "POST",
        data: dataToPost,
        url: "/Admin/PartialQuesEdit",
        success: function (response) {
            $("#editQuestionModelBody").html(response);
            var quizid = $("#hiddenQuizId").val();
            $.ajax({
                type: "POST",
                url: "/Admin/ViewQuestions",
                data: { quizId: quizid },
                success: function (response1) {
                    $("#ViewQuizBody").html(response1);

                }

            })

        }
            //refresh background here
    })

}
function ConfirmQuesDel(quesid)
{
    $("#hiddenQuesId").val(quesid);
    $("#deleteQuesModel").modal('show');
}
var DeleteQuestion = function () {

    var quesId = $("#hiddenQuesId").val();

    $.ajax({
        type: "POST",
        url: "/Admin/DeleteQuestion",
        data: { QuesId: quesId },
        success: function (result) {
            // $("#loaderDiv").hide();
            $("#deleteQuesModel").modal("hide");
            $("#quesrow_" + quesId).remove();

        }
    })
}

function BackFromViewQues()
{
    $.ajax({
        type: "POST",
        url: "/Admin/ViewQuiz",
        data: {},
        success: function (response1) {
            $("#ViewQuiz").html(response1);
            $("#ViewQuiz").css('margin-top', '10px');

        }

    })
}

var EditResult = function (resId) {
    $("#hiddenResultId").val(resId);
    $.ajax({
        type: "POST",
        url: "/Admin/EditResult",
        data: { ResId: resId },
        success: function (response) {
            $("#editResultModelBody").html(response);
            $("#editResultModel").modal("show");
            //$("#ViewQuiz").html(response);//
        }

    })

}
function editResultPartial(e) {
    e.preventDefault();
    var dataToPost = $("#myResultForm").serialize();
    $.ajax(
    {
        type: "POST",
        data: dataToPost,
        url: "/Admin/PartialResultEdit",
        success: function (response) {
            $("#editResultModelBody").html(response);
            var resid = $("#hiddenResultId").val();
        }
        //refresh background here
    })

}


var ShowAdminSetting = function () {
    $.ajax({

        type: "POST",
        url: "/Admin/ShowAdminSetting",
        success: function (response) {
            $("#adminSettingModelBody").html(response);
            $("#adminSettingModel").modal("show");
        }

    })
}

function adminSettingPartial(e) {
    e.preventDefault();
    //alert("updatedd");
    var dataToPost = $("#adminSettingForm").serialize();
    $.ajax(
    {
        type: "POST",
        data: dataToPost,
        url: "/Admin/PartialViewSetting",
        success: function (response) {
            $("#adminSettingModelBody").html(response);
        }
        //refresh background here
    })

}