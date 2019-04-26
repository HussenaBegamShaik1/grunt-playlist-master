  
$(document).ready(function(){

  var popupEvent = function() {
  }

$('.hasDropdown').hunterPopup({
    width: '320px',
    height: '200px',
    title: "",
    content: $('#tableContent'),
    event: popupEvent
});

$('#ajaxphp-results').click(function(){
  
  $.ajax({
    url: 'https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4',
    type: 'GET',
    // data: 'twitterUsername=jquery4u',
    success: function(data) {
    //called when successful
    console.log(data)
    
      
    $.each( data, function( key, val ) {
      // menuItems.push('<button class="rootLink item-products hasDropdown colorize" data-dropdown="'+key+'"'
      //   + 'aria-haspopup="true" aria-expanded="false">'
      //   +       '<span>'+key+'</span>'
      //   + '</button>');


      var head = 
              '<div class="dropdownSection active" data-dropdown="'+key+'" id="'+key+'" aria-hidden="true">'
                +'<div class="dropdownContent" style="width: 494px;">'
                // +   key
                  +  '<div class="linkGroup">'
                  +  '<ul class="productsGroupPrimary">';
      var databody = [];
      val.forEach(subMenu => {
               
        databody.push('<li>'
                        +'<a class="linkContainer item-payments" href="/en-US/payments" data-analytics-action="payments" data-analytics-source="nav_dropdown" tabindex="-1">'
                         // +  '<svg viewBox="0 0 48 48"><path fill="#87BBFD" class="hover-fillLight" d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z"></path><path fill="#555ABF" class="hover-fillDark" d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z"></path><path fill="#FFF" d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z"></path></svg>'
                          + '<div class="productLinkContent">'
                            +'<h3 class="linkTitle">'+subMenu['title']+'</h3>'
                            +'<p class="linkSub">'+subMenu['sub-title']+'</p>'
                            +'</div>'
                        +'</a>'
                        +'</li>'
                      );
        });
      var footer = 
                      '</ul>'
                    +'</div>'
                  +'</div>'
                +'</div>';
      $('#ajaxphp-results').append(head+databody.join("")+footer);
    });
   
    
     // $('#menuItems').html(menuItems.join(""));
   
  },
    error: function(e) {
    //called when there is an error
    //console.log(e.message);
    }
  });

  // var menuItems = [];
  //   $.each( data, function( key, val ) {
  //     menuItems.push('<button class="rootLink item-products hasDropdown colorize" data-dropdown="'+key+'"'
  //       + 'aria-haspopup="true" aria-expanded="false">'
  //       +       '<span>'+key+'</span>'
  //       + '</button>');
  //   });
   
  //    $('#menuItems').html(menuItems.join(""));
 
});

$('#ajaxphp-results').trigger('click');
});
