(function(){
  'use strict';


  var results = rawGorillaData.results; // figure out what i need here using the console.

  $(document).ready(function(){ // runs the function on document ready

    var $list = $('.results-list'); // targets div with class gorilla in the html

    results.forEach(function(gorilla){
      var gorillaText = renderTemplate('gorilla-item', {
        name: gorilla.title,
        price: gorilla.price,
        image: gorilla.Images[0].url_170x135,
        currency: gorilla.currency_code,
        shop: gorilla.Shop.shop_name,
      });
      $list.append(gorillaText);
    });
  });

    function renderTemplate(name, data) {
      var $template = $('[data-template-name=' + name + ']').text();
      $.each(data, function(prop, value) {
        $template = $template.replace('<% ' + prop + ' %>', value);
      });
      return $template;
    }

})();
