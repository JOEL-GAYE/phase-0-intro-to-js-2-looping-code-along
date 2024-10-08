// Code your solutions in this file
function writeCards(names, event) {
    let messages = []; // Create an empty array to store messages
  
    // Loop through the array of names
    for (let i = 0; i < names.length; i++) {
      // Build the thank you message for each person and add it to the messages array
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
  
    // Return the array of messages
    return messages;
  }
  
  // Example usage
  const thankYouCards = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(thankYouCards);
  

  function countDown(n) {
    while (n >= 0) {
      console.log(n);
      n--; // Decrement `n` at each iteration
    }
  }
  
  // Example usage
  countDown(10);
  