export default class Comments {
  constructor(hikeName) {
    this.hikeName = hikeName;
  }
  addComment(date, content) {
    let comments = [];
    const newComment = {
      name: this.hikeName,
      date: date,
      content: content,
    };

    if (!localStorage.getItem('comments')) {
      comments.push(newComment);
      return localStorage.setItem('comments', JSON.stringify(comments));
    }

    comments = JSON.parse(localStorage.getItem('comments'));
    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));
  }
  getAllComments() {
    let allComments = JSON.parse(localStorage.getItem('comments'));
    return allComments;
  }
  renderCommentList(hikeName) {
    const allComments = this.filterCommentsByName(hikeName);
    let div = '';

    for (let comment of allComments) {
      div += `<li>${comment.content} - comment for ${comment.name}`;
      var date = new Date(comment.date).toDateString();
      div += `posted ${date}</li>`;
    }
    return div;
  }
  renderAllCommentList() {
    const allComments = this.getAllComments();
    let div = '';

    for (let comment of allComments) {
      div += `<li>${comment.content} - comment for ${comment.name}`;
      var date = new Date(comment.date).toDateString();
      div += `posted ${date}</li>`;
    }
    return div;
  }
  filterCommentsByName(hikename) {
    const hikeNameArray = this.getAllComments().filter(
      (comments) => comments.name == hikename
    );
    return hikeNameArray;
  }
}
