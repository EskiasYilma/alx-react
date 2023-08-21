import $ from 'jquery';
import _ from 'lodash';
import './body.css';

const paragraph2 = $('<p>').text('Dashboard data for the students');
const btn = $('<button>').text('Click here to get started');
const paragraph3 = $('<p>').attr('id', 'count');
$('body').append(paragraph2, btn, paragraph3);

let count = 0;
function updateCounter() {
  count++;
  $('#count').html(`${count} clicks on the button`);
}
$('button').on('click', _.debounce(updateCounter, 100));
