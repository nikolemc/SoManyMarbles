console.log("js loaded");


//let marblePickerHandler = () => {
//    let _inputForMarble = document.getElementById("marbleColour");
//    console.log(_inputForMarble);
//    document.getElementById("chooseYourMarble").innerHTML = _inputForMarble.value;
//}

let = marblePicker = () => {
    let _marbleColour = $("#marblecolour").val();
    $("#chooseYourMarble").html(_marbleColour);
}

let addToList = (data) => {
    $("#marbleList")
        .append($("<li>").html(data.MarbleColour));
}


let talkToServer = () => {

    let newMarble = {
        MarbleColour: $("#newMarbleColour").val()
    };

    $.ajax({
        url: '/api/marble',
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(newMarble),
        type: "POST",
        success: (data) => {
            addToList(data);
        },
        error: (data) => {
            console.log("oops", data)
        },
        complete: (data) => {
            console.log("done", data);
        }
    });
}

let loadMarbles = () => {
    // pull all marbles from the API
    // add to the list
    $.ajax({
        url: "/api/marble",
        dataType: "json",
        success: (data) => {
            data.map((item) => { addToList(item); });
        }
    })
}

loadMarbles();

let singleMarble = () => {
    // pull single marble from the API
    // add to the list
    $.ajax({
        url: "/api/random",
        dataType: "json",
        success: function (marble) {
            //called when successful
            //alert(marble);
            singleMarbleList(marble)
        },
        error: function (e) {
            //called when there is an error
            console.log(e.message);
        }
    })
}

let singleMarbleList = (marble) => {
    $("#marbleList")
        .html($("<li>").html(marble.MarbleColour));
}
