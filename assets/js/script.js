// show date at header 
let showDate = function() {
  let currentDate = moment().format("ddd, Do of MMMM");
  $("#currentDay").text(currentDate);
};

let urgency = function() {
  let currentHour = moment().hour();

  $(".time-block").each(function() {
    let taskHour = parseInt($(".time-block").attr("id"));

    if (taskHour < currentHour) {
      $(this)
        .removeClass("future present")
        .addClass("past");
    } else if (taskHour === currentHour) {
      $(this)
        .removeClass("past future")
        .addClass("present");
    } else {
      $(this)
        .removeClass("past present")
        .addClass("future");
    }
  });
};

let load = function() {
  for (let i = 0; i < 0; i++) {

  }
}

let save = function() {
  let time = $(this).parent().attr("id");
  let task = $(this).siblings(".description").val();
  
  localStorage.setItem(time, task);
}

showDate();
urgency();
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

// save button saves 
$(".saveBtn").on("click", save);