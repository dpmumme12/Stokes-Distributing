jQuery(document).ready(function($){

    if (sessionStorage.getItem('advertOnce') !== 'true') {
    //sessionStorage.setItem('advertOnce','true');
      $('.box').show();
      $('.overlay-verify').show();
      $('.branding-wrapper').hide();
      $('html, body').css({
        overflow: 'hidden',
        height: '100%'
      });
    }
    else{
      $('.box').hide();
      $('.overlay-verify').hide();
      $('.branding-wrapper').show();
      $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
    
    }
     
    $('#refresh-page').on('click',function(){
    $('.box').hide();
    $('.overlay-verify').hide();
    $('.branding-wrapper').show();
    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
    sessionStorage.setItem('advertOnce','true');
    });
      
    $('#reset-session').on('click',function(){
    $('.box').show();
    $('.overlay-verify').show();
    $('.branding-wrapper').hide();
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
    sessionStorage.setItem('advertOnce','');
    });
     
    });

function fileValidation() { 

    var fileInput = document.getElementById('file'); 
    
    var filePath = fileInput.value; 
    
    // Allowing file type 
    var allowedExtensions =  /(\.pdf)$/i;
        
    if (!allowedExtensions.exec(filePath)) {

      alert('Invalid file type.'); 
      fileInput.value = ''; 
      
      return false; 
    }  
  } 

var items = document.getElementsByClassName('event-description');
  
for (var i=0; i < items.length; i++) {
  var truncated = items[i].innerText;
  var maxLength = 120;

  if (truncated.length > maxLength) {
      truncated = truncated.substr(0,maxLength) + '...';
  }
    items[i].innerText = truncated;
  }

