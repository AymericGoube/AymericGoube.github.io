// Utilisation de parallax materialize

$(document).ready(function(){
   $('.parallax').parallax();
});


$(document).ready(function() {
                $('.js-scrollTo').on('click', function() { // Au clic sur un élément
                        var page = $(this).attr('href'); // Page cible
                        var speed = 750; // Durée de l'animation (en ms)
                        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
                        return false;
                });
        });

// Mouvement des div
$(function(){
   var div = $('#competence1');
   var div2 = $('#competence2');
   var div3 = $('#competence3');
   var div4 = $('#competence4');
   var div5 = $('#competence5');
   var divOffSet = div.offset().top/2;
   var divOffSet2 = div2.offset().top/1.8;
   var divOffSet3 = div3.offset().top/1.6;
   var divOffSet4 = div4.offset().top/1.4;
   var divOffSet5 = div5.offset().top/1.4;
      console.log(divOffSet,divOffSet2,divOffSet3,divOffSet4,divOffSet5);
   var documentdiv = $(document);
   $('#competence1').hide();
   $('#competence2').hide();
   $('#competence3').hide();
   $('#competence4').hide();
   $('#competence5').hide();
   $('#pourcentage').hide();
   documentdiv.on('scroll', function(){
      if(documentdiv.scrollTop() > divOffSet && documentdiv.scrollTop() < divOffSet2){
         $('#competence1').show();
         $('.pourcentage').fadeIn(2000);
      }
      else if (documentdiv.scrollTop() > divOffSet2 && documentdiv.scrollTop() < divOffSet3) {
         $('#competence2').show();
      }
      else if (documentdiv.scrollTop() > divOffSet3 && documentdiv.scrollTop() < divOffSet4) {
         $('#competence3').show();
      }
      else if (documentdiv.scrollTop() > divOffSet4 && documentdiv.scrollTop() < divOffSet5) {
         $('#competence4').show();
      }
      else if (documentdiv.scrollTop() > divOffSet5) {
         $('#competence5').show();
      }
   });
});

$(function(){
   var div = $('#expe1');
   var div2 = $('#expe2');
   var div3 = $('#expe3');
   var div4 = $('#expe4');
   var divOffSet = (div.offset().top)/1.2;
   var divOffSet2 = (div2.offset().top)/1.2;
   var divOffSet3 = (div3.offset().top);
   var divOffSet4 = (div4.offset().top);
   var documentdiv = $(document);
   $('#expe1').hide();
   $('#expe2').hide();
   $('#expe3').hide();
   $('#expe4').hide();
   $('.texteExperience1').hide();
   $('.texteExperience2').hide();
   $('.texteExperience3').hide();
   $('.texteExperience4').hide();
   documentdiv.on('scroll', function(){
      console.log(documentdiv.scrollTop());
      if(documentdiv.scrollTop() > divOffSet && documentdiv.scrollTop() < divOffSet2){
         $('#expe1').show();
         $('.texteExperience1').fadeIn(2000);
      }
      else if(documentdiv.scrollTop() > divOffSet2 && documentdiv.scrollTop() < divOffSet3){
         $('#expe2').show();
         $('.texteExperience2').fadeIn(2000);
      }
      else if(documentdiv.scrollTop() > divOffSet3 && documentdiv.scrollTop() < divOffSet4){
         $('#expe3').show();
         $('.texteExperience3').fadeIn(2000);
      }
      else if(documentdiv.scrollTop() > divOffSet4){
         $('#expe4').show();
         $('.texteExperience4').fadeIn(2000);
      }
   });

});
