var coll = document.getElementsByClassName("collapse");
var i;

// Looping through the class name(i.e Link)
for (i = 0; i < coll.length; i++) {

  // Adding an EventListener when referring to an external named function
  coll[i].addEventListener("click", toogleContent) 
} 

function toogleContent() {

  // The classList property returns the class name(s) of an element
  // This property is useful to add, remove and toggle CSS classes on an element.
  this.classList.toggle("active");

  // The nextElementSibling property returns the element immediately following the specified element
  var content = this.nextElementSibling;

  if (content.style.maxHeight){ 
    document.getElementById("cols").innerHTML = "See More Vendors";       
    content.style.maxHeight = null;
} else {
    // The scrollHeight property returns the entire height of an element in
    // pixels, including padding, but not the border, scrollbar or margin
    document.getElementById("cols").innerHTML = "See Less Vendors";        
    content.style.maxHeight = content.scrollHeight + "px";
  }
}