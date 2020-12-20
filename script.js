// variable to store and loop through scheduler
var myDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridian: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridian: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridian: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridian: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridian: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridian: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridian: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridian: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridian: "pm",
        reminder: ""
    },
    
]

// gets data for the header date
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}
// saves data to localStorage
var timeSlot = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : {}

// loads header date
getHeaderDate();

// creates the visuals for the scheduler body

for (let i = 0; i < myDay.length; i++) {
    // creates time column
    var hourField = $("<div>");
    hourField.text(myDay[i].hour + myDay[i].meridian);
    hourField.addClass("col-md-2 hour");
    $("#timeTable").append(hourField);

    // creates schdeduler data column
    var hourPlan = $("<textarea>");
    hourPlan.addClass("col-md-9 input textarea");
    hourPlan.text("");
    hourPlan.attr("id", myDay[i].id);
    if (myDay[i].time < moment().format("HH")) {
        hourPlan.addClass("past");
    }
     else if (myDay[i].time === moment().format("HH")) {
        hourPlan.addClass("present");
    } 
    else if (myDay[i].time > moment().format("HH")) {
        hourPlan.addClass("future");
    }
    $("#timeTable").append(hourPlan);

    //creates save button
    
    var saveButton = $("<button>");
    saveButton.addClass("col-md-1 saveBtn");
    var saveIcon = $(saveButton).html("<i class='far fa-save'></i>");
    saveIcon.append(saveButton);
    $("#timeTable").append(saveButton);

}

// saves data to be used in localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr("id");
    var value = $(this).prev().val();
    timeSlot[id]= value; 
    localStorage.setItem('tasks', JSON.stringify(timeSlot));

})