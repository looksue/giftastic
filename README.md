# Giftastic
This is a GIPHY API web app that populates the page with your choice of topical GIPHY's. It uses JavaScript and JQuery. The user has the option of toggling between animation and still images. It also fetches and displays the rating of each image.

The user can enter a new topic of their choice and the app will create a button on the fly to display GIPHY's when pressed. 

**Motivation:** To use JQuery to add elements to the DOM and extend listeners to newly appended children.  

**Code Style:** Tab

**Tech/Framework:** HTML5, CSS3, JavaScript, JQuery, Responsive, GIPHY API

**Features:** Button array, input form, animation

**Code Example:**
```javascript
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
```
**Screenshot:**

![Giftastic](https://github.com/looksue/giftastic/blob/master/assets/images/screenshot.png)

 **Link to Repository:** https://looksue.github.io/giftastic/
