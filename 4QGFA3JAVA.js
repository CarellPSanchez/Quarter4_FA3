  function getNumberInput() {
    let num;
    do {
      num = prompt("Please enter a number:");
    } while (isNaN(num) || num.trim() === "");
    return parseInt(num);
  }
  function generateShape(num) {
    let result = `Number inputted: ${num}\n\n`;

    if (num % 2 !== 0) {
      for (let i = num; i >= 1; i--) {
        for (let j = 1; j <= num; j++) {
          result += i + ' ';
        }
        result = result.trim() + '\n';
      }
    } else {
      for (let i = num; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
          result += i + ' ';
        }
        result = result.trim() + '\n';
      }
    }
    return result;
  }
  const number = getNumberInput();
  const shape = generateShape(number);
  document.getElementById("shape-output").innerHTML = "<pre>" + shape + "</pre>"; 
  
    let contacts = [];
    function updateDisplay() {
      document.getElementById("contactList").textContent = contacts.join(" ");
    }
    function addContact() {
      const input = document.getElementById("contactInput");
      const name = input.value.trim();
      if (name === "") return;
      if (contacts.length >= 7) {
        contacts.shift(); 
      }
      contacts.push(name);
      updateDisplay();
      input.value = "";
    }
    function removeContact() {
      contacts.pop(); 
      updateDisplay();
    }