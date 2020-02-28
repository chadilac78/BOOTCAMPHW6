var main = document.getElementById("main");
//var activity = {};
//var input = document.getElementById("activity");
//var savAct = document.getElementById("save");
//var eightAm = document.getElementById("eightAm");
//var time = document.getElementById("displayTime");
//var hour = document.getElementById('time');
//var displayTime = document.getElementById("currentTime");
var card = document.getElementById("card-body")
var container = $('.container');
var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
//run

for (var i = 0; i < hours.length; i++) {
    //add hours, textarea, and save btn to each block
    var timeBlock = $('<div>').addClass("time-block-row");
    var hourBlock = $('<div>').addClass('hour col-2');
    var textBlock = $('<input id="activity">').addClass('description col-12');
    var SaveBtn = $('<button>').addClass('btn col-2');
    SaveBtn.html('save')
    timeBlock.text(moment(hours[i], 'H A').format('hh A'));
    console.log(moment(hours[i], 'H A').format('hh A'));
    timeBlock.append(hourBlock);
    container.append(timeBlock);
    timeBlock.append(textBlock);
    timeBlock.append(SaveBtn);

    //$(textBlock).addClass(".text-area");
    // $("#card-body").append(timeBlock);
    //$("#card-body").addClass(".wrapper");
    $(container).append(timeBlock)


    var activity = document.getElementById("activity")



    $(SaveBtn).on('click', function (event) {
        localStorage.setItem("TIME", activity.innerHTML);

        console.log(activity.value);

        //var artist = $("#artist-input").val().trim();
        event.preventDefault();

    })

}






//$(input).on('keypress', function (event) {
//    if (event.which === 13)
//        console.log(input.value); {
//    }
//});
//$(savAct).click(function (activity) {
//    var activity = $("input").val();
//    console.log(activity);
//});
//var eightAmv = 8;
//if (eightAmv + 1 < hours) {

//    console.log(input.classList);/
//}