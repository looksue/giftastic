var topics = ["cat", "dog", "bird","horse","capybara"];

//    <button data-animal="cat">Cat</button>
for (var i=0; i<topics.length; i++){
    var b= document.createElement("button");
    b.innerText=topics[i];
    b.setAttribute("data-animal", topics[i]);
    var d= document.getElementById("divButtons");
    d.append(b);
}



$("button").on("click", function(){
    var animal= $(this).attr("data-animal");

//constructing query
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ animal + "&api_key=4vsBrisJcwIs9UYSnj8pkvZjsjBs3d0X&limit=10";

//AJAX request with query
$.ajax ({
    url:queryURL,
    method: "GET"
})
.then (function(response){
    console.log (queryURL);
})

//storing the data from request
var results= response.data; 

//looping through results
for (var i=0; i<results.length; i++){
    }

//create and store results in div
var animalDiv = $("<div>");

//create a p tag with items rating
var p = $ ("<p>").text ("Rating: " + results[i].rating);

//create and store image tag
var animalImage = 4("<img>");

//set src attr of image to a property pulled off result item, is fixed height the attr?
animalImage.attr("src", results[i].images.fixed_height.url);

//append the p and img tag to animal div
animalDiv.append(p);
animalDiv.append(animalImage);

//prepend the animaldiv to html page 
$("#gifs-appear-here").prepend(animalDiv);

})
