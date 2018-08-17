//Variables
var empty_map;
var blue_sec,green_sec,orange_sec,purple_sec,yellow_sec;

function preload(){
  empty_map = loadImage('images/grey_map.png');
  blue_sec = loadImage('images/blue.png');
  green_sec = loadImage('images/green.png');
  orange_sec = loadImage('images/orange.png');
  purple_sec = loadImage('images/purple.png');
  yellow_sec = loadImage('images/yellow.png');
}

function setup(){
  var canvas = createCanvas(1000,800);
  canvas.parent('map');
}

function draw() {
  background(100);

  imageMode(CENTER);
  image(empty_map,width/2,height/2,800,622.3673); //Grey base map

  if ($('.yellow').hasClass('active')){
    image(yellow_sec,544,368,757.5510,708.5714); //Asia wing
  }
  if ($('.orange').hasClass('active')){
    image(orange_sec,662,553,284.7347,316.7347); //Ancient world wing
  }
  if ($('.blue').hasClass('active')){
    image(blue_sec,783,303,233.1429,386.6122); //Americas wing
  }
  if ($('.green').hasClass('active')){
    image(green_sec,195,311,188.0816,316.7347); //Contemporary art wing
  }
  if ($('.purple').hasClass('active')){
    image(purple_sec,542,288,511.3469,395.1020); //Europe wing
  }
}

function displayMap(){
  $('#start').css('opacity','0');

  setTimeout(function(){
    $('#start').css('display','none');
  }, 1750);
}

//Button Listener + Logic
$(document).ready(function(){
  //If wing buttons are clicked
  $('.yellow').click(function(){
    if ($('.yellow').hasClass('active')){ //if yellow is active
      $('.yellow').removeClass('active');   //turn off yellow
      $('.asiaTag').removeClass('active');   //turn off geotag
      $('.yBtn').removeClass('active');     //turn off yBtn
    }
    else{                                 //if yellow is not active
      $('.yellow').addClass('active');      //turn on yellow
      $('.asiaTag').addClass('active');     //turn on geotag
    }
  });
  $('.orange').click(function(){
    if ($('.orange').hasClass('active')){
      $('.orange').removeClass('active');
      $('.ancientTag').removeClass('active');
      $('.oBtn').removeClass('active');
    }
    else{
      $('.orange').addClass('active');
      $('.ancientTag').addClass('active');
    }
  });
  $('.blue').click(function(){
    if ($('.blue').hasClass('active')){
      $('.blue').removeClass('active');
      $('.americasTag').removeClass('active');
      $('.bBtn').removeClass('active');
    }
    else{
      $('.blue').addClass('active');
      $('.americasTag').addClass('active');
    }
  });
  $('.green').click(function(){
    if ($('.green').hasClass('active')){
      $('.green').removeClass('active');
      $('.contemporaryTag').removeClass('active');
      $('.gBtn').removeClass('active');
    }
    else{
      $('.green').addClass('active');
      $('.contemporaryTag').addClass('active');
    }
  });
  $('.purple').click(function(){
    if ($('.purple').hasClass('active')){
      $('.purple').removeClass('active');
      $('.europeTag').removeClass('active');
      $('.pBtn').removeClass('active');
    }
    else{
      $('.purple').addClass('active');
      $('.europeTag').addClass('active');
    }
  });

  //If category buttons are clicked
  $('.catBtn').click(function(){
    //yBtn
    if ($(this).hasClass('yBtn')){
      if ($('.yellow').hasClass('active') && $(this).hasClass('active')){
        $('.yellow').removeClass('active');
        $('.asiaTag').removeClass('active');
      }
      else if (!$('.yellow').hasClass('active') && !$(this).hasClass('active')){
        $('.yellow').addClass('active');
        $('.asiaTag').addClass('active');
      }
    }
    //oBtn
    if ($(this).hasClass('oBtn')){
      if ($('.orange').hasClass('active') && $(this).hasClass('active')){
        $('.orange').removeClass('active');
        $('.ancientTag').removeClass('active');
      }
      else if (!$('.orange').hasClass('active') && !$(this).hasClass('active')){
        $('.orange').addClass('active');
        $('.ancientTag').addClass('active');
      }
    }
    //bBtn
    if ($(this).hasClass('bBtn')){
      if ($('.blue').hasClass('active') && $(this).hasClass('active')){
        $('.blue').removeClass('active');
        $('.americasTag').removeClass('active');
      }
      else if (!$('.blue').hasClass('active') && !$(this).hasClass('active')){
        $('.blue').addClass('active');
        $('.americasTag').addClass('active');
      }
    }
    //gBtn
    if ($(this).hasClass('gBtn')){
      if ($('.green').hasClass('active') && $(this).hasClass('active')){
        $('.green').removeClass('active');
        $('.contemporaryTag').removeClass('active');
      }
      else if (!$('.green').hasClass('active') && !$(this).hasClass('active')){
        $('.green').addClass('active');
        $('.contemporaryTag').addClass('active');
      }
    }
    //pBtn
    if ($(this).hasClass('pBtn')){
      if ($('.purple').hasClass('active') && $(this).hasClass('active')){
        $('.purple').removeClass('active');
        $('.europeTag').removeClass('active');
      }
      else if (!$('.purple').hasClass('active') && !$(this).hasClass('active')){
        $('.purple').addClass('active');
        $('.europeTag').addClass('active');
      }
    }

    if ($(this).hasClass('active')){
      $(this).removeClass('active');
    }
    else if (!$(this).hasClass('active')){
      $(this).addClass('active');
    }
  });
});

function showInfo(item){
  $(item).css('display','block');
}

function hideInfo(item){
  $(item).css('display','none');
}

function reset(){
  $('button').removeClass('active');
  $('.geotag').removeClass('active');
}
