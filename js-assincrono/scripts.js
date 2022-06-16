const getCats = async () => {
  fetch('https://thatcopy.pw/catapi/rest/')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      return response.json();
    })
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
};

const loadImg = async () => {
	const catImg = document.getElementsByTagName('img')[0];
	catImg.src = await getCats();
};

const btn = document.getElementById("change-cat");
btn.addEventListener("click", loadImg);
loadImg();