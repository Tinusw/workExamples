// Running Character Count
$("#emailMessage").on("keyup", function() {
  console.log("keyup happened"); //Catch keyup
  //Log how many chars user typed//
  var charCount = $("#emailMessage").val().length;
  //Display running count to user in a <p> tag
  $("#char-count").html(charCount);

  // IF conditional statement to change text color if charCount > 50
  if (charCount > 50) {
    $("#char-count").css("color", "red");
  } else {
    $("#char-count").css("color", "black");
  };
});

// Send Button on-click event, also checks for empty strings and creates red border
$("#sendButton").on("click", function() {
  // Capture and log events
  var name = $("#emailName").val();
  console.log(name);
  var comment = $("#emailMessage").val();
  console.log(comment);
  console.log("clicked");

  if (comment == "") {
    $("#emailMessage").css("border-color", "red");
    $("#emailName").css("border", "2px solid red");
    $("#visibleComment").html("Please type a message first " + name + "!");
  } else {
    $("#visibleComment").html("thanks " + name + ", get back to you soon! Here's what you wrote: " + comment);
    // Hide Inputs
    $("#emailMessage").hide();
    $("#emailName").hide();
    $("#email").hide();
    $("sendButton").hide();
    $("#char-count").hide();
    return false;
  }
});

// Alternate method for validating fields using classes to show green or blue color if input is not blank, also if email is actually an email address.

$("emailName").on('input', function() {});

// Name cannot be blank
$('#emailName').on('input', function() {
  var input = $(this);
  var is_name = input.val();

  if (is_name) {
    input.removeClass("invalid").addClass("valid");
  } else {
    input.removeClass("valid").addClass("invalid");
  }
});

// Email cannot be blank (uses regular expressions)
$('#email').on('input', function() {
  var input = $(this);
  // not 100% sure what this regular expression var does
  var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var is_email = re.test(input.val());

  if (is_email) {
    input.removeClass("invalid").addClass("valid");
  } else {
    input.removeClass("valid").addClass("invalid");
  }
});

// message cannot be blank

$('#emailMessage').on('input', function() {
  var input = $(this);
  var is_Message = input.val();

  if (is_Message) {
    input.removeClass("invalid").addClass("valid");
  } else {
    input.removeClass("valid").addClass("invalid");
  }
});