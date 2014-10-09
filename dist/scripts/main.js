var users = 'https://api.github.com/users/chelseafranz';
var repo ='https://api.github.com/users/chelseafranz/repos';
var org = 'https://api.github.com/users/chelseafranz/orgs'


// var template= $('#user_stuff').html();
// var rendered = _.template(template);
//
// $.getJSON(url-variable).done( function(user_data){
//
// $('.hero-unit').append(rendered(user_data));
// });


var template= $('#top_box').html();

var rendered = _.template(template);

$.getJSON(users).done( function(i){

$('.head_right').append(rendered(i));
});


var template2= $('#side_box').html();

var rendered2 = _.template(template2);

$.getJSON(users).done( function(i){

$('.sidebar').append(rendered2(i));
});

// $.getJSON(org).done( function(i){
//
// $('.sidebar').append(rendered2(i));
// });
