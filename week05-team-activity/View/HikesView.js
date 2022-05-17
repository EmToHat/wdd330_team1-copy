// Hike View handler
export default class HikesView {
  constructor(listElementId) {
    // will need this
    this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
  }
  renderHikeList(hikeList, listElement) {
    // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
    let listHTML = '';
    for (let list of hikeList) {
      listHTML += '<li>';
      listHTML += `<h2>${list.name}</h2>`;
      listHTML += `<img src='${this.imgBasePath}${list.imgSrc}' alt='${list.imgAlt}'> `;
      listHTML += `<p><span>Distance:</span> ${list.distance}</p> `;
      listHTML += `<p><span>Difficulty:</span> ${list.difficulty} </p>`;
      listHTML += `<p><span>Description:</span> ${list.description}</p> `;
      listHTML += `<p><span>Directions:</span> ${list.directions}<p>`;
      listHTML += `<button type='button' onclick="listView.hikeModel.getHikeByName('${list.name}')">See it</button>'`;
      listHTML += '</li>';
    }
    document.getElementById(listElement).innerHTML = listHTML;
  }
  renderOneHikeLight(hike) {
    // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty
    let listHTML = '';
    listHTML += '<li>';
    listHTML += `<h2>${hike.name}</h2>`;
    listHTML += `<img src='${this.imgBasePath}${hike.imgSrc}' alt='${hike.imgAlt}'> `;
    listHTML += `<p><span>Distance:</span> ${hike.distance}</p> `;
    listHTML += `<p><span>Difficulty:</span> ${hike.difficulty} </p>`;
    listHTML += '</li>';
  }
  renderOneHikeFull(hike, parentElement) {
    // this method will be used to one hike with full detail...you will need this for the stretch goal!
  }
}
