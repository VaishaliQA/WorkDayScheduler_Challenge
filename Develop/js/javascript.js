// When page ready this function is called and set current day and date
// call timeblockcolorchange method
$(document).ready(function(){
    var formatDate = moment().format("dddd, MMMM Do")
    $("#currentDay").text(formatDate);
    var currentTime = moment().format('HH');
    console.log("current Time", currentTime)
    timeBlockColorChange(currentTime)
})

// Each timeblock color is changed past, present and future based on current time value
function timeBlockColorChange(currentTime){
    $(".time-block").each(function(){
        var getHour = parseInt($(this).attr("id"))
        console.log("gethour ",getHour)
        if(getHour > currentTime ){
            $(this).addClass("future") // set CSS class
        }
        else if(getHour == currentTime){
            $(this).addClass("present")
        }
        else{
            $(this).addClass("past")
        }
    })
}

// Set hour and descrtiption in local storage
$(".saveBtn").on("click",function(){
    var hour = $(this).siblings(".hour").text();
    var desc = $(this).siblings(".description").val();
    localStorage.setItem(hour,desc)
})

// Saved data on page even I refreshed page
function saveData(){
    $(".hour").each(function(){
        var hour = $(this).text()
        var desc = localStorage.getItem(hour)
        
        if(desc !== null) {
            $(this).siblings(".description").val(desc);
        }

    })
}

saveData();