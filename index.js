// copy section 
const counter = document.getElementById("counter");
    let count = 0;

    for (let i = 1; i <= 9; i++) {
      const copyBtn = document.getElementById("CopyBtn" + i);
      const textToCopy = document.getElementById("textToCopy" + i);

      copyBtn.addEventListener("click", function (e) {
        navigator.clipboard.writeText(textToCopy.textContent)
          .then(function () {
            e.preventDefault();
            count++;
            counter.textContent = count +" "+"Copy";
            alert("Number has copied: " + textToCopy.textContent );
          })
          .catch(function () {
            alert("Failed to copy");
          });
      });
    }
// love react section 
const loveCounter = document.getElementById("loveCounter");
    let totalLove = 0;

    for (let i = 1; i <= 9; i++) {
      const loveBtn = document.getElementById("loveBtn" + i);

      loveBtn.addEventListener("click", function (e) {
        e.preventDefault();
        totalLove++;
        loveCounter.textContent = totalLove ;
      });
    }
// call button section 
 let coins = 100;
    const coinDisplay = document.getElementById("coinDisplay");
    for (let i = 1; i <= 9; i++) {
      const btn = document.getElementById("callBtn" + i);
      const CalledNumber = document.getElementById("callednumber"+i);
      const textToCopyNew = document.getElementById("textToCopy" + i);
      btn.addEventListener("click", function(e) {
        e.preventDefault();
        if (coins >= 20) {
          coins -= 20;
          coinDisplay.textContent = coins;
          alert( " You are calling "+CalledNumber.textContent +":"+ textToCopyNew.textContent );
        } else {
          alert("Not enough coins");
        }
      });
    }