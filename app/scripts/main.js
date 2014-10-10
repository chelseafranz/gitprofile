var users = 'https://api.github.com/users/chelseafranz';
var repo ='https://api.github.com/users/chelseafranz/repos';
var org = 'https://api.github.com/users/chelseafranz/orgs';
var starred = 'https://api.github.com/users/chelseafranz/starred';

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
$('.head_right').prepend(rendered(i));
});


var template2= $('#side_box').html();
var rendered2 = _.template(template2);

$.getJSON(users).done( function(i){
$('.sidebar').prepend(rendered2(i));

});


// starred///////////////////////////////
var template5= $('#star').html();
console.log(template5);

var rendered5= _.template(template5);
console.log(rendered5);
var starCount = rendered5.length;


$.getJSON(starred).done(function(a){
  a.forEach( function(b){
    $('.zero').append(rendered5(b));
    console.log(rendered5(b));
    console.log(starCount);

  })
});
// var stars=rendered5.length;
//
// $.getJSON(starred).done( function(s){
// $('.zero').append(rendered5(s));
// });
// console.log(stars);


////////////////////////////////////////////////

var template3= $('#org_img').html();
var rendered3 = _.template(template3);

$.getJSON(org).done( function(i){
i.forEach(function(x){
  $('.org').append(rendered3(x));

  })
});


var template4= $('#repo').html();
var rendered4 = _.template(template4);


$.getJSON(repo).done( function(i){
i.forEach(function(x){
  $('.bars2').append(rendered4(x));

  })
});
