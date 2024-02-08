let registered = false;
let diceClicks = 0;
let diceSum = 0;
let attempts = 0;

function register() {
  const _name = document.getElementById("_name").value;
  const username = document.getElementById("username").value;

  if (_name && username) {
    registered = true;
    document.getElementById("formContainer").style.display = "none";
  } else {
    alert("Please fill in all fields.");
  }
}

document.getElementById("image1").addEventListener("click", () => {
  if (!registered) {
    document.getElementById("formContainer").style.display = "block";
  }
});

document.getElementById("image2").addEventListener("click", () => {
  if (registered) {
    document.getElementById(
      "result"
    ).innerText = `name :${_name.value} \nusername:${username.value}`;

    document.getElementById("result").style.display = "block";
  }
});

document.getElementById("image3").addEventListener("click", () => {
  if (registered && attempts < 2) {
    diceClicks++;
    const randomNum = Math.floor(Math.random() * 6) + 1;
    diceSum += randomNum;

    if (diceClicks === 3) {
      attempts++;
      if (diceSum > 10) {
        document.getElementById("image4").style.cursor = "pointer";
        document.getElementById("result").innerText =
          "Click Image 4 for Coupon";
      } else {
        document.getElementById("result").innerText =
          "Try again after scoring more than 10";
        diceClicks = 0;
        diceSum = 0;
      }
    }
  } else if (attempts === 2) {
    document.getElementById("result").innerText = "Bad luck";
  }
});

document.getElementById("image4").addEventListener("click", () => {
  if (diceSum > 10) {
    const coupon = generateCoupon();
    document.getElementById(
      "result"
    ).innerText = `Congratulations! Coupon: ${coupon}`;
    document.getElementById("image4").style.cursor = "not-allowed";
    document.getElementById("congratulationsOverlay").style.display = "flex";
  }
});

function generateCoupon() {
  let coupon = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 12; i++) {
    coupon += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return coupon;
}
