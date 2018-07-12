//INIT
$(window).load(function() {

  var loader = $('.loader');
  var content = $('.section-bg');
  var electronOne = $('.electron.one');
  var electronTwo = $('.electron.two');
  var electronThree = $('.electron.three');
  var wHeight = $(window).height();
  var wWidth = $(window).width();
  var i = 0;

  loader.css({
    top: wHeight / 2 - 2.5,
    left: wWidth / 2 - 200
  })
      
  do{
    loader.animate({width: i},10);
    i+=2;
  } while(i <= 400);

  if(i === 402){
    loader.animate({
      left: 0,
      width: '100%'
    })
    loader.animate({
      top: '0',
      height: '100vh'
    })
  }  

  // Hides Neuron Loader
  setTimeout(function(){
    electronOne.hide();
    electronTwo.hide();
    electronThree.hide();
  },3200);

  // Shows Content Beneath
  setTimeout(function(){
    content.fadeIn(2000);
  },3500);

  // Removes Flat Line Loader
  setTimeout(function(){
    loader.fadeOut(2000);
  },4000);

});


