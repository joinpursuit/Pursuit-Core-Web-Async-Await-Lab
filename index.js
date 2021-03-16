const select = document.querySelector("select");

const cards = (num) => {
  for (let i = 1; i <= num; i++) {
    const option = document.createElement("option");
    option.textContent = i + " number of cards";
    option.value = i;
    // debugger;
    select.appendChild(option);
  }
};
cards(10);
