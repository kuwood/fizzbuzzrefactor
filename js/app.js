function intCheck(num) {
  if (num % 1 != 0) {
    alert("Your number must be a whole number!");
  } else {
    return true;
  }
}

function countTo(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      $('section').append('<p>fizzbuzz</p>');
    } else if (i % 5 === 0) {
      $('section').append('<p>buzz</p>');
    } else if (i % 3 === 0) {
      $('section').append('<p>fizz</p>');
    } else {
      $('section').append('<p>' + i + '</p>');
    }
  }
}

$(document).ready(function() {
  //prevent form refresh
  $("form").submit(function(e) {
    e.preventDefault();
  });
  //on submit check if integer if not alert! otherwise run fizzbuzz
  $('button').click(function() {
    if (intCheck($('input').val()) === true) {
      var userNum = parseInt($('input').val())
      //console.log(typeof userNum)
      countTo(userNum)
    }
  })
})
