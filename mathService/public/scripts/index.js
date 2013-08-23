$(document).ready(init);
   
///
function init() {
    $('#btnSubmit').on('click', submit);
}

///
function submit() {
    var op = $('#selOperation').val();
    
    switch (op ) {
        case "Add":
            add();
            break;
        case "Subtract":
            subtract();
            break;
        case "Multiply":
            multiply();
            break;
        default:
            failed();
    }
}

///
function add() {
    $.getJSON('/addition', getXYValueAsJson())
        .done(displayResult)
        .fail(failed);
}   

///
function subtract() {
    $.getJSON('/subtraction', getXYValueAsJson())
        .done(displayResult)
        .fail(failed);
}

///
function multiply() {
    $.getJSON('/multiplication', getXYValueAsJson())
        .done(displayResult)
        .fail(failed);
}

///
function displayResult(data) {
    $('#result').html(data.result);
}

///
function failed(data, error) {
    alert('Something went wrong... rutrow\n\nError: ' + error);
}

///
function getXValue() { return Number($('#txtX').val()) }
function getYValue() { return Number($('#txtY').val()) }
function getXYValueAsJson() {
    return {
      "x": getXValue(),
      "y": getYValue()
    };
}