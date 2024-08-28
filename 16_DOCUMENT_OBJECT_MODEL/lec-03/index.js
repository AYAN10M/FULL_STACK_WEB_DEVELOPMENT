// to select the element using tag name. Among all the tag the first one occuring would only be selected
var title2 = document.querySelector("h2");

// using querySelector we can also select the HTML element using id
document.querySelector("#title").style.color = "brown";

// this is how we can change the html elements content. innerHTML is the property of HTML element h2
title2.innerHTML = "Registration In Process";

// to select all the elements in the HTML file of the given tag name
// this will only change the color of the bullet
document.getElementsByTagName("li")[2].style.color = "yellow";

// this will also change the hyperlink label text too
document.querySelectorAll("#list .item a")[2].style.color = "yellow";

// the given list of item will be converted to array in DOM, so to get the length of the array we need to
document.getElementsByTagName("li").length;

// to select all the elements in the HTML file of the given class name
document.getElementsByClassName("list");

// to select element of given id
document.getElementById("submit_button").style.color = "green";

// Note: Every id within HTML id tag should be unique

// Combining selector
document.querySelector("ul.list");

// hirerical way to select the item by id and class 
document.querySelector("#list .item");

// to select all the HTML element using query Selector
document.querySelectorAll("#list .item");

// Note: For complex selection process query selector is recommended

// We can change css using java script as given above. The name of properties are slight different for reference you can visit here: https://www.w3schools.com/jsref/dom_obj_style.asp 