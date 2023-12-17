// Select the form element from the HTML
const form = document.querySelector('form');

// Select the unordered list element from the HTML
const fruits = document.querySelector('.fruits');

// Add an event listener to the form that triggers when the form is submitted
form.addEventListener('submit', function(event) {
 // Prevent the form from being submitted in the default way, which would refresh the page
 event.preventDefault();

 // Get the value of the input field with the id 'fruit-to-add'
 const fruitToAdd = document.getElementById('fruit-to-add');

 // Create a new list item element
 const newLi = document.createElement('li');

 // Set the HTML content of the new list item to be the value of the input field, followed by two buttons
 newLi.innerHTML = fruitToAdd.value + ' <button class="delete-btn">x</button><button class="edit-btn">Edit</button>';

 // Append the new list item to the unordered list
 fruits.appendChild(newLi);
});

// Select all the delete buttons
const deleteButtons = document.querySelectorAll('.delete-btn');

// Add an event listener to each delete button
deleteButtons.forEach(function(button) {
 button.addEventListener('click', function(e) {
   // Remove the parent list item
   e.target.parentElement.remove();
 });
});



