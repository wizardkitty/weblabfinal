// define a function to scramble the words in lists
function scrambleLists() {
  // get all unordered and ordered lists on the page
  const lists = document.querySelectorAll('ul, ol');

  // iterate through each list
  lists.forEach(list => {
    // get all the list items in the current list
    const items = list.querySelectorAll('li');
    
    // create an array of the text content of each list item
    const texts = Array.from(items).map(item => item.textContent);
    
    // shuffle the array of text content
    texts.sort(() => Math.random() - 0.5);
    
    // iterate through each list item and replace its text content with the shuffled text
    items.forEach((item, index) => {
      item.textContent = texts[index];
    });
  });
}

// get a reference to the button element
const button = document.querySelector('button');

// add an event listener to the button to call the scrambleLists function when clicked
button.addEventListener('click', scrambleLists);