$("#currentDay").text(moment().format('dddd, MMMM Do LT'));

function dayPassOrNot() {
    var currentTime = moment().format("HH");
    $(".col-10").each(function(){
        var elementId = $(this).attr("id");
        if (+currentTime == +elementId){
            $(this).addClass("present");
        }else if(+currentTime > +elementId){
            $(this).addClass("past");
            $(this).attr("disabled", true);
        }else{
            $(this).addClass("future");
        };
    });
};

$(".saveBtn").on("click", saveFunction);

function saveFunction() {
    var buttonIdString = $(this).attr("id");
    var buttonId = buttonIdString.slice(4,6)
    localStorage.setItem(buttonId, $("#" + buttonId).val())
};

function pageLoad() {
    $(".col-10").each(function(){
        var elementId2 = $(this).attr("id");
        $("#" + elementId2).val(localStorage.getItem(elementId2));
    });
};

pageLoad();
dayPassOrNot();