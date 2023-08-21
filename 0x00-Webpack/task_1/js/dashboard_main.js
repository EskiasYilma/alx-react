import $ from 'jquery';
import _ from 'lodash'

const paragraph1 = $('<p>').text('Holberton Dashboard');
const paragraph2 = $('<p>').text('Dashboard data for the students');
const btn = $('<button>').text('Click here to get started');
const paragraph3 = $('<p>').attr('id', 'count');
const paragraph4 = $('<p>').text('Copyright - Holberton School');

$('body').append(paragraph1, paragraph2, btn, paragraph3, paragraph4);

let counter = 0;

function updateCounter(){
    counter++;
    $('#count').html(`${counter} clicks on the button`);

}
$('button').on('click', _.debounce(updateCounter, 100));
