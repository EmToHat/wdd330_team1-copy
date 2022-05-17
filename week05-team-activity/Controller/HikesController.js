import HikeModel from '../Model/HikeModel.js';
import HikesView from '../View/HikesView.js';

// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }

  showHikeList() {
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    return this.hikeModel.getAllHikes();
  }

  showOneHike(hikeName) {
    return this.hikeModel.getHikeByName(hikeName);
  }
  addHikeListener() {}
}
