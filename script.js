
var input = document.getElementById("activity");
var savAct = document.getElementById("save");
var time = document.getElementById("time");

time = document.getElementById("time");
console.log(time.value);

$(input).on('keypress', function (event) {
    if (event.which === 13)
        console.log(input.value); {
    }
});

$(savAct).click(function (activity) {
    var activity = $("input").val();
    console.log(activity);
});

