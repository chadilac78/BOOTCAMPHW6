var main = document.getElementById("main");
var card = document.getElementById("card-body")
var container = $('.container');
var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];


for (var i = 0; i < hours.length; i++) {

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
    $(container).append(timeBlock)


    var activity = document.getElementById("activity")



    $(SaveBtn).on('click', function (event) {
        localStorage.setItem("TIME", activity.innerHTML);

        console.log(activity.value);


        event.preventDefault();

    })

}






