var myArray = [];

$(document).ready(function() {

  $(".item").blur(function() {

    var input_id = $(this).attr("id");

    var input_value = $(this).val();

    process_item(input_id, input_value);
  });

});


function process_item(input_id, input_value) {

  if (input_value == "") {
    deleteItems(input_id);
  } else if (checkIfExists(input_id)) {
    updateItems(input_id, input_value);
  } else if (!checkIfExists(input_id)) {
    createNew(input_id, input_value);
  }

  readAllItems();
}

// CREATE
function createNew(input_id, input_value) {
  myArray.push({
    "input_id": input_id,
    "input_value": input_value
  });
  $("#status").text("Successfully added.");
}

// READ
function readAllItems() {

  $("#results").text("");

  var arr_len = myArray.length;

  $("#results").append("Array length: " + arr_len + "<br />");

  for (var x = 0; x < arr_len; x++) {
    var input_id = myArray[x]['input_id'];
    var input_value = myArray[x]['input_value'];

    $("#results").append("input_id: " + input_id + " >>> input_value: " + input_value + "<br />");
  }
}

// UPDATE
function updateItems(input_id, input_value) {

  myArray.remove("input_id", input_id);

  myArray.push({
    "input_id": input_id,
    "input_value": input_value
  });
  $("#status").text("Successfully edited.");

}

// DELETE
function deleteItems(input_id) {
  myArray.remove("input_id", input_id);
  $("#status").text("Successfully deleted.");
}


function checkIfExists(check_input_id) {

  var arr_len = myArray.length;

  for (var x = 0; x < arr_len; x++) {
    var input_id = myArray[x]['input_id'];
    var input_value = myArray[x]['input_value'];

    if (check_input_id == input_id) {
      return true;
    }
  }

  return false;
}

Array.prototype.remove = function(name, value) {
  array = this;
  var rest = $.grep(this, function(item) {
    return (item[name] != value);
  });

  array.length = rest.length;
  $.each(rest, function(n, obj) {
    array[n] = obj;
  });
};