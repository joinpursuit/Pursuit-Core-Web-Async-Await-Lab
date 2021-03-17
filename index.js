const select = document.querySelector("select");
const createOptions = (num) => {
  for (let i = 1; i <= num; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    select.appendChild(option);
  }
};
createOptions(10);

const button = document.querySelector("button");

// button.addEventListener("submit", (e) => {
//   e.preventDefault();

const showCards = async (e) => {
  const numOfCards = Number(e.target.value);
  try {
    const res = await axios.get(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );
    const dogPics = document.querySelector("#dog-pics");
    dogPics.innerHTML = "";
    res.data.message.forEach((dogURL) => {
      const img = document.createElement("img");
      img.src = dogURL;
      dogPics.appendChild(img);
    });
  } catch (err) {
    console.log(err);
  }
};

select.addEventListener("change", getAllDogs);

// });
