
var sizePickerForm = $("#sizePicker");

var inputHeight = $("#inputHeight");

var inputWeight = $("#inputWeight");

var colorPicker = $("#colorPicker");

var pixelCanvas = $("#pixelCanvas");

sizePickerForm.submit(function(event) {
	event.preventDefault();
	clearGrid();
	makeGrid();
});

function clearGrid() {
	pixelCanvas.html("");
}

function makeGrid() {
	for (var i = 0; i < inputHeight.val(); i++) {
		pixelCanvas.append("<tr></tr>");
		var row = pixelCanvas.children().last();
		for (var j = 0; j < inputWeight.val(); j++) {
			row.append("<td></td>");
		}
	}

	pixelCanvas.find("td").click(function(event) {
		drawCell(event.target);
	}).mouseover(function(event) {
		if (event.buttons === 1) {
			drawCell(event.target);
		}
	});
}

function drawCell(cell) {
	$(cell).css("background-color", colorPicker.val());
}
