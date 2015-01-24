(function(){
  'use strict';


  var gorillas = rawGorillaData.results; // figure out what i need here using the console.

  $(document).ready(function(){ // runs the function on document ready

    var $list = $('.gorillas-list'); // targets div with class gorilla in the html

    gorillas.forEach(function(gorilla){
      var gorrilaText = renderTemplate('gorillaResults', {
        name: gorilla.name,
        price: gorilla.price
      });
      $list.append('gorillaText');
    });

    function renderTemplate(name, data) {
      var $template = $('[data-template-name=' + name + ']').text();
      $.each(data, function(prop, value) {
        $template = $template.replace('<% ' + prop + ' %>', value);
      });
      return $template;
    }

  });
})();
