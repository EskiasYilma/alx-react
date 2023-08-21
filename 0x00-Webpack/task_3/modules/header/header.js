import $ from 'jquery';
import './header.css';

const logo = $('<div>').attr('id', 'logo');
const h1 = $('<h1>').text('Holberton Dashboard');

$("body").append("<header></header>");
$('header').append(logo, h1);
console.log('Init header');