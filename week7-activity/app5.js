import Hikes from './hikes.js';
import Comments from './Comments.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});

//const comment = new Comments('Some hike');
const hikeComment = new Comments('name Hike');

//comment.addComment(Date.now(), 'Here we will be adding a comment');
hikeComment.addComment(Date.now(), "Here's a comment");

//console.table(comment.getAllComments());

//console.table(hikeComment.filterCommentsByName(hikeComment.hikeName));
document.addComment = function addComment(hikeName) {
  const newComment = new Comments(hikeName);
  const comment = document.getElementById('add-comment').value;

  newComment.addComment(Date.now(), comment);
  myHikes.showOneHike(hikeName);
};
//function render() {
//document.getElementById('comments').innerHTML = comment.renderCommentList();
//}

//document.addEventListener('onload', render());
