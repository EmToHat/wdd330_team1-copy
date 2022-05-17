import HikesController from './Controller/HikesController.js';

const listView = new HikesController('hikeList');

const list = listView.showHikeList();

listView.hikesView.renderHikeList(list, 'hikeList');
listView.hikesView.renderOneHikeLight(listView.showOneHike('Denanda Falls'));

console.table(listView.showOneHike('Bechler Falls'));
