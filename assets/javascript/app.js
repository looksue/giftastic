var topics = ["pig", "snowmobile", "shark", "pizza", "capybara"];
var results;

// making a button for each array item
for (var i = 0; i < topics.length; i++) {
    var b = document.createElement("button");
    b.innerText = topics[i];
    b.setAttribute("data-animal", topics[i]);
    var d = document.getElementById("divButtons");
    d.append(b);
}
$("#divButtons").on("click", "button", function () {
    //empty the div container to prevent giphy overload (nobody needs that many!)
    $("#gifs-appear-here").empty();

    var animal = $(this).attr("data-animal");

    //constructing query
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=4vsBrisJcwIs9UYSnj8pkvZjsjBs3d0X&limit=10";

    //AJAX request with query
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            //storing the data from request
            results = response.data;

            var p = $("<p>").text("Click any of the images to toggle animation:");
            $("#gifs-appear-here").prepend(p);

            //looping through results
            for (var i = 0; i < results.length; i++) {

                //create and store results in div
                var animalDiv = $("<div>");
                animalDiv.css("display", "inline-block");
                //create a p tag with items rating
                p = $("<p>").text("Rating: " + results[i].rating);

                //create and store image tag
                var animalImage = $("<img>");

                //set src attr of image to a property pulled off result item, is fixed height the attr?
                animalImage.attr("src", results[i].images.fixed_height_still.url);

                //append the p and img tag to animal div
                animalDiv.append(p);
                animalDiv.append(animalImage);

                //prepend the animaldiv to gifs container 
                $("#gifs-appear-here").append(animalDiv);
            }
        })
})

$("#gifs-appear-here").on("click", "img", function () {
    //toggle still mode and animated mode
    for (var i = 0; i < results.length; i++) {
        if (($(this).attr("src")) == results[i].images.fixed_height_still.url) {
            $(this).attr("src", results[i].images.fixed_height.url);
        } else if (($(this).attr("src")) == results[i].images.fixed_height.url) {
            $(this).attr("src", results[i].images.fixed_height_still.url);
        }
    }
})

// event listener for the new submit button
$("#btnSubmit").on("click", function () {
    //keep the form submit from refreshing the page
    //because that deletes the new button we're making
    event.preventDefault();
    submitform();
})

//add a new animal button
function submitform() {
    //get a pointer to our user input
    var a = document.getElementById("newAnimal").value;
    //make sure the user input isn't blank
    if (a == "") {
        return;
    }
    // create a new button and point a variable at it
    var b = document.createElement("button");
    //labeling the new button with the text input from user    
    b.innerText = a;
    b.setAttribute("data-animal", a);
    //get a pointer to our div that contains the buttons
    var d = document.getElementById("divButtons");
    //append the button to the div
    d.append(b);
    //clear the text input box 
    document.getElementById("newAnimal").value = "";
}
