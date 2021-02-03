const API_KEY =
  "6kjLX5Fy8TBleGLPoY7lHttj5Jw%2BZbCZgqyf9%2Fh1T2yWBmJkLZ2R3b5RJwMB7G2GarTb9X5pCLtu%2FkP1zvAygQ%3D%3D";
const tour = document.querySelector(".js-tour");

function searchTour(query) {
  const url = `http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?ServiceKey=${API_KEY}&numOfRows=10&pageNo=1&keyword=${query}&MobileOS=ETC&MobileApp=AppTest&_type=json`;
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      //   const result = jsonData.map((element) => element.show.addr1);
      //   console.log(jsonData);

      for (let i = 0; i < jsonData.response.body.items.item.length; i++) {
        const address = jsonData.response.body.items.item[i].addr1;
        const titleName = jsonData.response.body.items.item[i].title;
        const image = jsonData.response.body.items.item[i].firstimage;
        const telephone = jsonData.response.body.items.item[i].tel;
        renderResults(address);
        renderResults(titleName);
        renderResults(telephone);
        renderimage(image);
      }
      //   const address = jsonData.response.body.items.item[0].addr1;
      //   const title = jsonData.response.body.items.item[0].title;
      //   console.log(address);
      //   console.log(title);
      //   tour.innerText = `
      //                     주소: ${address}
      //                     제목: ${title}
      //   `;
    });
}
function renderimage(result) {
  const element = document.createElement("img");
  element.src = result;
  tour.appendChild(element);
}
function renderResults(results) {
  const element = document.createElement("li");
  element.innerText = results;
  tour.appendChild(element);
}

let searchTimeoutToken = 0;
window.onload = () => {
  const searchFieldElement = document.querySelector("#searchFields");
  searchFieldElement.onkeyup = (event) => {
    clearTimeout(searchTimeoutToken);

    if (searchFieldElement.value.trim().length === 0) {
      return;
    }
    searchTimeoutToken = setTimeout(() => {
      searchTour(searchFieldElement.value);
    }, 250);
  };
};
