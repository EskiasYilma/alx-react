import $ from 'jquery';

$(document).ready(function() {
    // Create three paragraphs and add them to the page body
    const paragraph1 = $('<p>').text('Holberton Dashboard');
    const paragraph2 = $('<p>').text('Dashboard data for the students');
    const paragraph3 = $('<p>').text('Copyright - Holberton School');

    $('body').append(paragraph1, paragraph2, paragraph3);
});
