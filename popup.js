//lien
function OpenURL() {
  console.log('amazone');
    chrome.tabs.create({ url: "/*here your web site link*/" });
}
document.getElementById("openBtn").addEventListener("click", OpenURL);

function OpenURL2() {
    chrome.tabs.create({ url: "/*here your web site link*/" });
}
document.getElementById("openBtn2").addEventListener("click", OpenURL2);

//calculatrice
window.onload = function() {
    let currentOperand = '';
    let previousOperand = '';
    let operation = null;

    document.getElementById('equals').addEventListener('click', calculate);
    document.getElementById('clear').addEventListener('click', clearAll);
    document.getElementById('plus').addEventListener('click', function() {
      chooseOperation('+');
    });
    document.getElementById('minus').addEventListener('click', function() {
      chooseOperation('-');
    });
    document.getElementById('multiply').addEventListener('click', function() {
      chooseOperation('*');
    });
    document.getElementById('divide').addEventListener('click', function() {
      chooseOperation('/');
    });

    var numberButtons = document.getElementsByClassName('number');
    for (var d = 0; d < numberButtons.length; d++) {
      numberButtons[d].addEventListener('click', function() {
        appendNumber(this.textContent);
      });
    }

    function appendNumber(number) {
      currentOperand = currentOperand.toString() + number.toString();
      updateDisplay();
    }

    function clearAll() {
      currentOperand = '';
      previousOperand = '';
      operation = null;
      updateDisplay();
    }

    function chooseOperation(op) {
      if (currentOperand === '') return;
      if (previousOperand !== '') {
        calculate();
      }
      operation = op;
      previousOperand = currentOperand;
      currentOperand = '';
    }

    function calculate() {
      let computation;
      const prev = parseFloat(previousOperand);
      const current = parseFloat(currentOperand);

      if (isNaN(prev) || isNaN(current)) return;

      switch (operation) {
        case '+':
          computation = prev + current;
          break
        case '-':
          computation = prev - current;
          break
        case '*':
          computation = prev * current;
          break
        case '/':
          computation = prev / current;
          break
        default:
          return
      }

      currentOperand = computation.toString();
      operation = null;
      previousOperand = '';
      
      updateDisplay();
    }

    function updateDisplay() {
        document.getElementById('result').value = currentOperand;
    }
}


//champ de text


document.getElementById("myText").addEventListener("input", function() {
    
    var data = document.getElementById("myText").value;
  
    
    localStorage["inputText"] = data;
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    
    var data = localStorage["inputText"];
  
    
    if (data) {
      document.getElementById("myText").value = data;
    }
  });
  

  

