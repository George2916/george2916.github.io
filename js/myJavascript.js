/* JAVASCRIPT FOR HOME PAGE - CAUSE 1 OF 6 PICTURES TO RANDOMLY APPEAR ON HOME PAGE */

window.onload = chooseHomepagePicture;
var myHomepagePictures = ["images/2004april(3).JPG", "images/2006april(2).JPG", "images/2009april(1A).JPG", "images/2009sept(1).JPG", "images/2009sept(2).JPG", "images/2009dec(2).JPG", "images/2010feb(1).JPG", "images/2011april(1A).JPG", "images/2015may(1).JPG", "images/2017july(2).JPG"];

function chooseHomepagePicture() {
    
    var randomNumber = Math.floor(Math.random() * myHomepagePictures.length);
    document.getElementById("homepagePicture").src = myHomepagePictures[randomNumber];
    document.getElementById("homepagePicture2").src = myHomepagePictures[randomNumber];
    
    
    if (randomNumber  === 0) {
        document.getElementById('modalCaption').innerHTML = "April 2004";
    }
    
    else if (randomNumber === 1) {
        document.getElementById('modalCaption').innerHTML = "April 2006";
    }
    
    else if (randomNumber === 2) {
        document.getElementById('modalCaption').innerHTML = "April 2009";
    }
    else if (randomNumber === 3) {
        document.getElementById('modalCaption').innerHTML = "September 2009";
    }
    else if (randomNumber === 4) {
        document.getElementById('modalCaption').innerHTML = "September 2009";
    }
    else if (randomNumber === 5) {
        document.getElementById('modalCaption').innerHTML = "December 2009";
    }
    else if (randomNumber === 6) {
        document.getElementById('modalCaption').innerHTML = "February 2010";
    }
    
    else if (randomNumber === 7) {
        document.getElementById('modalCaption').innerHTML = "April 2011";
    }
    
    else if (randomNumber === 8) {
        document.getElementById('modalCaption').innerHTML = "May 2015";
    }
    
    else {
        document.getElementById('modalCaption').innerHTML = "July 2017";
    }
}



/* when the user clicks on the Top button, scroll to the top of the document */

function topFunction() {
    document.body.scrollTop = 0; /* for Chrome, Safari and Opera */ 
    document.documentElement.scrollTop = 0; /* for IE and Firefox */
}

/* JAVASCRIPT AND JQUERY FOR THE AIDAN AND HARRISON PAGES */

/* activate Previous and Next buttons that appear in the modals */

$("div[id^='myModal']").each(function(){
  
  var currentModal = $(this);
  
  //click next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show'); 
  });
  
  //click prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show'); 
  });

});

/* cause the close, Previous and Next buttons on the modals to turn dark blue when hovered over */

$(document).ready(function() {
    $('.close, .btn-prev, .btn-next').hover(
        function(){
            $(this).css('color', '#26789B');
        },
        function(){
            $(this).css('color', '#C4FFF9');
        }
    );
});

/* cause the Top button to change position on the webpage, depending on the window width */

function mySetupFunctionX() {
    if ($(window).width() <= 767) {
        $('.specialDiv1').css('visibility', 'visible');
        $('.specialDiv2').css('visibility', 'hidden');
    }
    
    else {
        $('.specialDiv1').css('visibility', 'hidden');
        $('.specialDiv2').css('visibility', 'visible');
    }
}

$(document).ready(mySetupFunctionX);
$(window).resize(mySetupFunctionX);

/* JQUERY AND JAVASCRIPT FOR MISCELLANEOUS PAGE AND FAMILY TREE*/

function mySetupFunction1() {
    if ($(window).width() <= 575) {
        $('.YouTubeVideo').css({'width': '306px', 'height': '168.75px'});
        $('.box1').css('background-color', '#00A8E8');
        $('.box2').css('background-color', '#C4FFF9');  
        $('.box3').css('background-color', '#00A8E8');
        $('.box4').css('background-color', '#C4FFF9');
        $('.box5').css('background-color', '#00A8E8');
        $('.box6').css('display', 'none');
        $('.box7').css('background-color', '#C4FFF9');
        $('.box8').css('background-color', '#00A8E8');
        $('.box9').css('background-color', '#C4FFF9');
        $('.box10').css({'background-color': '#00A8E8', 'overflow': 'scroll'});
        $('.box11').css('background-color', '#C4FFF9');
        $('.box12').css('background-color', '#00A8E8');
        $('.box13').css({'background-color': '#C4FFF9', 'height': '200px', 'overflow': 'scroll'});
        $('.box14').css({'background-color': '#00A8E8', 'height': '100px'});
        $('.misc-link-1').css('color', '#9CEAEF');
        $('.misc-link-2').css('color', '#3DCCC7');
        $('.misc-link-3').css('color', '#9CEAEF');
        $('.misc-link-4').css('color', '#3DCCC7');
        $('.misc-link-5').css('color', '#9CEAEF');
        $('.misc-link-7').css('color', '#3DCCC7');
        $('.misc-link-8').css('color', '#9CEAEF');
        $('.misc-link-9').css('color', '#3DCCC7');
        $('.misc-link-10').css('color', '#9CEAEF');
        $('.misc-link-11').css('color', '#3DCCC7');
        $('.misc-link-12').css('color', '#9CEAEF');
        $('.misc-link-13').css('color', '#3DCCC7');
        $('.last2lines').css('margin-left', '0px');
        $('.hiddenFTbox').css('display', 'none');
        $('.hiddenText').css('display', 'none');
        
        
        $('.misc-link-1, .misc-link-3, .misc-link-5, .misc-link-8, .misc-link-10, .misc-link-12').hover(
        function(){
            $(this).css('color', '#26789B');
        },
        
        function(){
            $(this).css('color', '#9CEAEF');
        }
        );
        
        $('.misc-link-2, .misc-link-4, .misc-link-7, .misc-link-9, .misc-link-11, .misc-link-13').hover(
        function(){
            $(this).css('color', '#26789B');
        },
        function(){
            $(this).css('color', '#3DCCC7');
        }
        );
    }
    
    else if ($(window).width() <=767) {
        $('.YouTubeVideo').css({'width': '306px', 'height': '196.63px'});
        $('.box1').css('background-color', '#00A8E8');
        $('.box2').css('background-color', '#C4FFF9');  
        $('.box3').css('background-color', '#00A8E8');
        $('.box4').css('background-color', '#C4FFF9');
        $('.box5').css('background-color', '#00A8E8');
        $('.box6').css('display', 'none');
        $('.box7').css('background-color', '#C4FFF9');
        $('.box8').css('background-color', '#00A8E8');
        $('.box9').css('background-color', '#C4FFF9');
        $('.box10').css({'background-color': '#00A8E8', 'overflow': 'scroll'});
        $('.box11').css('background-color', '#C4FFF9');
        $('.box12').css('background-color', '#00A8E8');
        $('.box13').css({'background-color': '#C4FFF9', 'height': '200px', 'overflow': 'scroll'});
        $('.box14').css({'background-color': '#00A8E8', 'height': '100px'});
        $('.misc-link-1').css('color', '#9CEAEF');
        $('.misc-link-2').css('color', '#3DCCC7');
        $('.misc-link-3').css('color', '#9CEAEF');
        $('.misc-link-4').css('color', '#3DCCC7');
        $('.misc-link-5').css('color', '#9CEAEF');
        $('.misc-link-7').css('color', '#3DCCC7');
        $('.misc-link-8').css('color', '#9CEAEF');
        $('.misc-link-9').css('color', '#3DCCC7');
        $('.misc-link-10').css('color', '#9CEAEF');
        $('.misc-link-11').css('color', '#3DCCC7');
        $('.misc-link-12').css('color', '#9CEAEF');
        $('.misc-link-13').css('color', '#3DCCC7');
        $('.last2lines').css('margin-left', '0px');
        $('.hiddenFTbox').css('display', 'none');
        $('.hiddenText').css('display', 'none');
        
         $('.misc-link-1, .misc-link-3, .misc-link-5, .misc-link-8, .misc-link-10, .misc-link-12').hover(
        function(){
            $(this).css('color', '#26789B');
        },
        
        function(){
            $(this).css('color', '#9CEAEF');
        }
        );
        
        $('.misc-link-2, .misc-link-4, .misc-link-7, .misc-link-9, .misc-link-11, .misc-link-13').hover(
        function(){
            $(this).css('color', '#26789B');
        },
        function(){
            $(this).css('color', '#3DCCC7');
        }
        );
    }
    
    else if ($(window).width() <= 991) {
        $('.YouTubeVideo').css({'width': '310px', 'height': '196.63px'});
        $('.box1').css({'background-color': '#00A8E8', 'font-size': '92%'});
        $('.box2').css({'background-color': '#C4FFF9', 'font-size': '92%'});
        $('.box3').css({'background-color': '#C4FFF9', 'font-size': '92%'});
        $('.box4').css({'background-color': '#00A8E8', 'font-size': '92%'});
        $('.box5').css({'background-color': '#00A8E8', 'font-size': '92%'});
        $('.box6').css({'background-color': '#C4FFF9', 'font-size': '92%'});
        $('.box7').css({'background-color': '#C4FFF9', 'font-size': '92%'});
        $('.box8').css({'background-color': '#00A8E8', 'font-size': '92%'});
        $('.box9').css({'background-color': '#00A8E8', 'font-size': '92%'});
        $('.box10').css({'background-color': '#C4FFF9', 'font-size': '92%'});
        $('.box11').css({'background-color': '#C4FFF9', 'font-size': '92%'});
        $('.box12').css({'background-color': '#00A8E8', 'font-size': '92%'});
        $('.box13').css({'background-color': '#00A8E8', 'font-size': '85%', 'height': '370px'});
        $('.box14').css({'background-color': '#C4FFF9', 'font-size': '92%', 'height': '370px'});
        $('.misc-link-1').css('color', '#9CEAEF');
        $('.misc-link-2').css('color', '#3DCCC7');
        $('.misc-link-3').css('color', '#3DCCC7');
        $('.misc-link-4').css('color', '#9CEAEF');
        $('.misc-link-5').css('color', '#9CEAEF');
        $('.misc-link-6').css('color', '#3DCCC7');
        $('.misc-link-7').css('color', '#3DCCC7');
        $('.misc-link-8').css('color', '#9CEAEF');
        $('.misc-link-9').css('color', '#9CEAEF');
        $('.misc-link-10').css('color', '#3DCCC7');
        $('.misc-link-11').css('color', '#3DCCC7');
        $('.misc-link-12').css('color', '#9CEAEF');
        $('.misc-link-13').css('color', '#9CEAEF');
        $('.last2lines').css('margin-left', '0px');
        $('.hiddenFTbox').css('display', 'none');
        $('.hiddenText').css('display', 'none');
        
        $('.misc-link-1, .misc-link-4, .misc-link-5, .misc-link-8, .misc-link-9, .misc-link-12, .misc-link-13').hover(
        function(){
            $(this).css('color', '#26789B');
        },
        function(){
            $(this).css('color', '#9CEAEF');
        }
        );
        
        $('.misc-link-2, .misc-link-3, .misc-link-6, .misc-link-7, .misc-link-10, .misc-link-11').hover(
        function(){
            $(this).css('color', '#26789B');
        },
        function(){
            $(this).css('color', '#3DCCC7');
        }
        );
    }
               
    else if ($(window).width() <= 1199) {
        $('.YouTubeVideo').css({'width': '310px', 'height': '196.63px'});
        $('.box1').css({'background-color': '#00A8E8', 'font-size': '100%'});
        $('.box2').css({'background-color': '#C4FFF9', 'font-size': '100%'});  
        $('.box3').css({'background-color': '#C4FFF9', 'font-size': '100%'});
        $('.box4').css({'background-color': '#00A8E8', 'font-size': '100%'});
        $('.box5').css({'background-color': '#00A8E8', 'font-size': '100%'});
        $('.box6').css('background-color', '#C4FFF9');
        $('.box7').css({'background-color': '#C4FFF9', 'font-size': '100%'});
        $('.box8').css({'background-color': '#00A8E8', 'font-size': '100%'});
        $('.box9').css({'background-color': '#00A8E8', 'font-size': '100%'});
        $('.box10').css({'background-color': '#C4FFF9', 'font-size': '100%'});
        $('.box11').css({'background-color': '#C4FFF9', 'font-size': '100%'});
        $('.box12').css({'background-color': '#00A8E8', 'font-size': '100%'});
        $('.box13').css({'background-color': '#00A8E8', 'font-size': '96%', 'height': '370px'});
        $('.box14').css({'background-color': '#C4FFF9', 'font-size': '100%', 'height': '370px'});
        $('.misc-link-1').css('color', '#9CEAEF');
        $('.misc-link-2').css('color', '#3DCCC7');
        $('.misc-link-3').css('color', '#3DCCC7');
        $('.misc-link-4').css('color', '#9CEAEF');
        $('.misc-link-5').css('color', '#9CEAEF');
        $('.misc-link-6').css('color', '#3DCCC7');
        $('.misc-link-7').css('color', '#3DCCC7');
        $('.misc-link-8').css('color', '#9CEAEF');
        $('.misc-link-9').css('color', '#9CEAEF');
        $('.misc-link-10').css('color', '#3DCCC7');
        $('.misc-link-11').css('color', '#3DCCC7');
        $('.misc-link-12').css('color', '#9CEAEF');
        $('.misc-link-13').css('color', '#9CEAEF');
        $('.last2lines').css('margin-left', '25px');
        $('.bringUp1').css({'position': 'relative', 'bottom': '60px'});  
        $('.bringUp2').css({'position': 'relative', 'bottom': '60px'}); 
        $('.bringUp3').css({'position': 'relative', 'bottom': '60px'}); 
        $('.bringUp4').css({'position': 'relative', 'bottom': '60px'});
        $('.bringUp5').css({'position': 'relative', 'bottom': '60px'});  
        $('.bringUp6').css({'position': 'relative', 'bottom': '60px'}); 
        $('.misc-link-1, .misc-link-4, .misc-link-5, .misc-link-8, .misc-link-9, .misc-link-13').hover(
        function(){
            $(this).css('color', '#26789B');
        },
        function(){
            $(this).css('color', '#9CEAEF');
        }
        );
        
        $('.misc-link-2, .misc-link-3, .misc-link-6, .misc-link-7, .misc-link-10, .misc-link-11').hover(
        function(){
            $(this).css('color', '#26789B');
        },
        function(){
            $(this).css('color', '#3DCCC7');
        }
        );
    }
             
   else  {
       $('.YouTubeVideo').css({'width': '310px', 'height': '196.63px'});
        $('.box1').css({'background-color': '#00A8E8', 'font-size': '100%'});
        $('.box2').css({'background-color': '#C4FFF9', 'font-size': '100%'});
        $('.box3').css({'background-color': '#C4FFF9', 'font-size': '100%'});
        $('.box4').css({'background-color': '#00A8E8', 'font-size': '100%'});
        $('.box5').css({'background-color': '#00A8E8', 'font-size': '100%'});
        $('.box6').css({'background-color': '#C4FFF9', 'font-size': '100%'});
        $('.box7').css({'background-color': '#C4FFF9', 'font-size': '100%'});
        $('.box8').css({'background-color': '#00A8E8', 'font-size': '100%'});
        $('.box9').css({'background-color': '#00A8E8', 'font-size': '100%'});
        $('.box10').css({'background-color': '#C4FFF9', 'font-size': '100%'});
        $('.box11').css({'background-color': '#C4FFF9', 'font-size': '100%'});
        $('.box12').css({'background-color': '#00A8E8', 'font-size': '100%'});
        $('.box13').css({'background-color': '#00A8E8', 'font-size': '100%', 'height': '370px'});
        $('.box14').css({'background-color': '#C4FFF9', 'font-size': '100%', 'height': '370px'});
        $('.misc-link-1').css('color', '#9CEAEF');
        $('.misc-link-2').css('color', '#3DCCC7');
        $('.misc-link-3').css('color', '#3DCCC7');
        $('.misc-link-4').css('color', '#9CEAEF');
        $('.misc-link-5').css('color', '#9CEAEF');
        $('.misc-link-6').css('color', '#3DCCC7');
        $('.misc-link-7').css('color', '#3DCCC7');
        $('.misc-link-8').css('color', '#9CEAEF');
        $('.misc-link-9').css('color', '#9CEAEF');
        $('.misc-link-10').css('color', '#3DCCC7');
        $('.misc-link-11').css('color', '#3DCCC7');
        $('.misc-link-12').css('color', '#9CEAEF');
        $('.misc-link-13').css('color', '#9CEAEF');
        $('.last2lines').css('margin-left', '25px');
        $('.bringUp1').css({'position': 'relative', 'bottom': '110px'});  
        $('.bringUp2').css({'position': 'relative', 'bottom': '110px'}); 
        $('.bringUp3').css({'position': 'relative', 'bottom': '100px'}); 
        $('.bringUp4').css({'position': 'relative', 'bottom': '100px'});
        $('.bringUp5').css({'position': 'relative', 'bottom': '110px'});  
        $('.bringUp6').css({'position': 'relative', 'bottom': '110px'});
                        
        $('.misc-link-1, .misc-link-4, .misc-link-5, .misc-link-8, .misc-link-9, .misc-link-12, .misc-link-13').hover(
        function(){
            $(this).css('color', '#26789B');
        },
        function(){
            $(this).css('color', '#9CEAEF');
        }
        );
        
        $('.misc-link-2, .misc-link-3, .misc-link-6, .misc-link-7, .misc-link-10, .misc-link-11').hover(
        function(){
            $(this).css('color', '#26789B');
        },
        function(){
            $(this).css('color', '#3DCCC7');
        }
        );
    }
        
}

$(document).ready(mySetupFunction1);
$(window).resize(mySetupFunction1);





/* JQUERY FOR QUESTIONNAIRE */

function mySetupFunction2() {
    if ($(window).width() <=385) {
         $('.question, .answerAC, .answerHW').css('font-size', '90%');
         $('#answerAC-0').html('AC');
         $('#answerHW-0').html('HW');
         $('#question1').css('width', '100px').html('&nbsp;What is your<br>&nbsp;favorite sport<br>&nbsp;to play?&nbsp;');
         $('#answerAC-1').html('&nbsp;football /&nbsp;<br>&nbsp;football');
         $('#answerHW-1').html('&nbsp;football /<br>&nbsp;football and<br>&nbsp;basketball');
         $('#question2').css('width', '100px').html('&nbsp;What is your<br>&nbsp;favorite sport<br>&nbsp;to watch?&nbsp;');
         $('#answerAC-2').html('&nbsp;football /&nbsp;<br>&nbsp;football');
         $('#answerHW-2').html('&nbsp;football /<br>&nbsp;football');
         $('#question3').css('width', '100px').html('&nbsp;What is your<br>&nbsp;favorite<br>&nbsp;book?&nbsp;');
         $('#answerAC-3').html('&nbsp;Lord of the<br>&nbsp;the Rings /<br>&nbsp;Hunger Games');
         $('#answerHW-3').html('&nbsp;Friendo /<br>&nbsp;Glass Castle');
         $('#question4').css('width', '100px').html('&nbsp;What movie<br>&nbsp;have you<br>&nbsp;seen the<br>&nbsp;most times<br>&nbsp;(beginning&nbsp;<br>&nbsp;to end)?&nbsp;');
         $('#answerAC-4').html('&nbsp;Christmas<br>&nbsp;Story (10X) /<br>&nbsp;Fight Club<br>&nbsp;(12X)');
         $('#answerHW-4').html('&nbsp;Pitch<br>&nbsp;Perfect (10X) /<br>&nbsp;Pitch<br>&nbsp;Perfect (10X)');
         $('#question5').css('width', '100px').html('&nbsp;How far from<br>&nbsp;home will you<br>&nbsp;go to&nbsp;<br>&nbsp;college?&nbsp;');
         $('#answerAC-5').html('&nbsp;>50m /<br>&nbsp;<50m');
         $('#answerHW-5').html('&nbsp;>50m /<br>&nbsp;>50m');
         $('#question6').css('width', '100px').html('&nbsp;How old will<br>&nbsp;you be when<br>&nbsp;you first<br>&nbsp;marry?&nbsp;');
         $('#answerAC-6').html('&nbsp;26-30 y /<br>&nbsp;26-30 y');
         $('#answerHW-6').html('&nbsp;21-25 y /<br>&nbsp;21-25 y');
         $('#question7').css('width', '100px').html('&nbsp;How many<br>&nbsp;children will<br>&nbsp;you have?&nbsp;');
         $('#answerAC-7').html('&nbsp;4 / 4');
         $('#answerHW-7').html('&nbsp;3 / 2-4');
         $('#question8').css('width', '100px').html('&nbsp;What field<br>&nbsp;will your<br>&nbsp;career be in?&nbsp;');
         $('#answerAC-8').html('&nbsp;sports or<br>&nbsp;science /<br>&nbsp;computer<br>&nbsp;science');
         $('#answerHW-8').html('&nbsp;sports /<br>&nbsp;sports');
         $('#question9').css('width', '100px').html('&nbsp;Will you ever<br>&nbsp;practice yoga<br>&nbsp;regularly?&nbsp;');
         $('#answerAC-9').html('&nbsp;no / no');
         $('#answerHW-9').html('&nbsp;no / no');
         $('#question10').css('width', '100px').html('&nbsp;Will you ever<br>&nbsp;visit Africa?&nbsp;');
         $('#answerAC-10').html('&nbsp;yes / yes');
         $('#answerHW-10').html('&nbsp;yes / yes');
         $('#question11').html('&nbsp;Will you ever<br>&nbsp;run for<br>&nbsp;office?&nbsp;');
         $('#answerAC-11').html('&nbsp;no / maybe');
         $('#answerHW-11').html('&nbsp;no / no');
         $('#question12').html('&nbsp;Will you be<br>&nbsp;a registered<br>&nbsp;Dem.,<br>&nbsp;registered<br>&nbsp;Rep. or<br>&nbsp;indepen.?&nbsp;');
         $('#answerAC-12').html('&nbsp;Dem. / indep.');
         $('#answerHW-12').html('&nbsp;Dem. / Dem.');
         $('#question13').html('&nbsp;Will you ever<br>&nbsp;visit an<br>&nbsp;orphanage?&nbsp;');
         $('#answerAC-13').html('&nbsp;no / no');
         $('#answerHW-13').html('&nbsp;no / no');
         $('#question14').html('&nbsp;How many<br>&nbsp;tattoos will<br>&nbsp;you have?&nbsp;');
        $('#answerAC-14').html('&nbsp;8 / 2');
         $('#answerHW-14').html('&nbsp;5 / >7');
         $('#question15').html('&nbsp;What country<br>&nbsp;would you<br>&nbsp;most like to<br>&nbsp;visit?&nbsp;');
         $('#answerAC-15').html('&nbsp;Antarctica /<br>&nbsp;Japan');
         $('#answerHW-15').html('&nbsp;Italy / Italy');
         $('#question16').html('&nbsp;Will you ever<br>&nbsp;trod the<br>&nbsp;boards?&nbsp;');
         $('#answerAC-16').html('&nbsp;no / no');
         $('#answerHW-16').html('&nbsp;no / yes');
         $('#question17').html('&nbsp;Will you ever<br>&nbsp;live in a city?&nbsp;');
         $('#answerAC-17').html('&nbsp;no / yes');
         $('#answerHW-17').html('&nbsp;no / no');
         $('#question18').html('&nbsp;Will you ever<br>&nbsp;work abroad?&nbsp;');
         $('#answerAC-18').html('&nbsp;no / maybe');
         $('#answerHW-18').html('&nbsp;no / yes');
         $('#question19').html('&nbsp;Will you ever<br>&nbsp;go para-<br>&nbsp;chuting?&nbsp;');
         $('#answerAC-19').html('&nbsp;yes / no');
         $('#answerHW-19').html('&nbsp;yes / no');
         $('#question20').html('&nbsp;Will you ever<br>&nbsp;join a chorus?&nbsp;');
         $('#answerAC-20').html('&nbsp;no / no');
         $('#answerHW-20').html('&nbsp;no / no');
         $('#question21').html('&nbsp;RESENT /<br>&nbsp;RESERVE<br>&nbsp;Do these<br>&nbsp;words<br>&nbsp;a. have<br>&nbsp;similar<br>&nbsp;meanings?<br>&nbsp;b. have<br>&nbsp;contradictory<br>&nbsp;meanings?<br>&nbsp;c. mean<br>&nbsp;neither the<br>&nbsp;same nor the<br>&nbsp;opposite?&nbsp;');
         $('#answerAC-21').html('&nbsp;b / c');
         $('#answerHW-21').html('&nbsp;a / c');
         $('#question22').html('&nbsp;Who among<br>&nbsp;your siblings<br>&nbsp;will marry&nbsp;<br>&nbsp;first?&nbsp;');
         $('#answerAC-22').html('&nbsp;question<br>&nbsp;not posed<br>&nbsp;in 2013 /<br>&nbsp;Abigail');
         $('#answerHW-22').html('&nbsp;question<br>&nbsp;not posed<br>&nbsp;in 2013 /<br>&nbsp;Abigail');
         $('#question23').html('&nbsp;Who among<br>&nbsp;your siblings<br>&nbsp;will marry&nbsp;<br>&nbsp;last?&nbsp;');
         $('#answerAC-23').html('&nbsp;question<br>&nbsp;not posed<br>&nbsp;in 2013 /<br>&nbsp;Harrison');
         $('#answerHW-23').html('&nbsp;question<br>&nbsp;not posed<br>&nbsp;in 2013 /<br>&nbsp;Aidan');
         $('#question24').html('&nbsp;What % of&nbsp;<br>&nbsp;your DNA is&nbsp;<br>&nbsp;Panamanian?&nbsp;<br>&nbsp;(Correct<br>&nbsp;answer is&nbsp;<br>&nbsp;6.25% or<br>&nbsp;1/16.)&nbsp;');
         $('#answerAC-24').html('&nbsp;question<br>&nbsp;not posed<br>&nbsp;in 2013 /<br>&nbsp;1/16');
         $('#answerHW-24').html('&nbsp;question<br>&nbsp;not posed<br>&nbsp;in 2013 /<br>&nbsp;1.7%');
         $('#question25').css('border-width', '1px 1px 4px 4px').html('&nbsp;Will you ever<br>&nbsp;read a play<br>&nbsp;by Shake-<br>&nbsp;spear in its<br>&nbsp;entirety?&nbsp;');
         $('#answerAC-25').css('border-width', '1px 1px 4px 1px').html('&nbsp;question<br>&nbsp;not posed<br>&nbsp;in 2013 /<br>&nbsp;yes');
         $('#answerHW-25').css('border-width', '1px 4px 4px 1px').html('&nbsp;question<br>&nbsp;not posed<br>&nbsp;in 2013 /<br>&nbsp;yes');
    }
    
    
    else if ($(window).width() <=485) {
         $('.question, .answerAC, .answerHW').css('font-size', '90%');
         $('#answerAC-0').html('Aidan');
         $('#answerHW-0').html('Harrison');
         $('#question1').css('width', '130px').html('&nbsp;What is your<br>&nbsp;favorite sport to<br>&nbsp;play?&nbsp;');
         $('#answerAC-1').html('&nbsp;football /&nbsp;<br>&nbsp;football');
         $('#answerHW-1').html('&nbsp;football /<br>&nbsp;football and<br>&nbsp;basketball');
         $('#question2').css('width', '130px').html('&nbsp;What is your<br>&nbsp;favorite sport to<br>&nbsp;watch?&nbsp;');
         $('#answerAC-2').html('&nbsp;football /&nbsp;<br>&nbsp;football');
         $('#answerHW-2').html('&nbsp;football /<br>&nbsp;football');
         $('#question3').css('width', '130px').html('&nbsp;What is your<br>&nbsp;favorite book?&nbsp;');
         $('#answerAC-3').html('&nbsp;Lord of the<br>&nbsp;the Rings /<br>&nbsp;Hunger Games');
         $('#answerHW-3').html('&nbsp;Friendo /<br>&nbsp;Glass Castle');
         $('#question4').css('width', '130px').html('&nbsp;What movie have<br>&nbsp;you seen the most<br>&nbsp;times (beginning<br>&nbsp;to end)?&nbsp;');
         $('#answerAC-4').html('&nbsp;Christmas<br>&nbsp;Story (10X) /<br>&nbsp;Fight Club<br>&nbsp;(12X)');
         $('#answerHW-4').html('&nbsp;Pitch Perfect<br>&nbsp;(10X) / Pitch<br>&nbsp;Perfect (10X)');
         $('#question5').css('width', '130px').html('&nbsp;How far from<br>&nbsp;home will you go<br>&nbsp;to college?&nbsp;');
         $('#answerAC-5').html('&nbsp;>50m / <50m');
         $('#answerHW-5').html('&nbsp;>50m / >50m');
         $('#question6').css('width', '130px').html('&nbsp;How old will you<br>&nbsp;be when you<br>&nbsp;first marry?&nbsp;');
         $('#answerAC-6').html('&nbsp;26-30 y /<br>&nbsp;26-30 y');
         $('#answerHW-6').html('&nbsp;21-25 y /<br>&nbsp;21-25 y');
         $('#question7').css('width', '130px').html('&nbsp;How many<br>&nbsp;children will you<br>&nbsp;have?&nbsp;');
         $('#answerAC-7').html('&nbsp;4 / 4');
         $('#answerHW-7').html('&nbsp;3 / 2-4');
         $('#question8').css('width', '130px').html('&nbsp;What field will<br>&nbsp;your career be in?&nbsp;');
         $('#answerAC-8').html('&nbsp;sports or science<br>&nbsp;/ computer<br>&nbsp;science');
         $('#answerHW-8').html('&nbsp;sports / sports');
         $('#question9').css('width', '130px').html('&nbsp;Will you ever<br>&nbsp;practice yoga<br>&nbsp;regularly?&nbsp;');
         $('#answerAC-9').html('&nbsp;no / no');
         $('#answerHW-9').html('&nbsp;no / no');
         $('#question10').css('width', '130px').html('&nbsp;Will you ever visit<br>&nbsp;Africa?&nbsp;');
         $('#answerAC-10').html('&nbsp;yes / yes');
         $('#answerHW-10').html('&nbsp;yes / yes');
         $('#question11').html('&nbsp;Will you ever run<br>&nbsp;for office?&nbsp;');
         $('#answerAC-11').html('&nbsp;no / maybe');
         $('#answerHW-11').html('&nbsp;no / no');
         $('#question12').html('&nbsp;Will you be a<br>&nbsp;registered Dem.,<br>&nbsp;registered Rep. or<br>&nbsp;indepen.?&nbsp;');
         $('#answerAC-12').html('&nbsp;Dem. / indep.');
         $('#answerHW-12').html('&nbsp;Dem. / Dem.');
         $('#question13').html('&nbsp;Will you ever visit<br>&nbsp;an orphanage?&nbsp;');
         $('#answerAC-13').html('&nbsp;no / no');
         $('#answerHW-13').html('&nbsp;no / no');
         $('#question14').html('&nbsp;How many tattoos<br>&nbsp;will you have?&nbsp;');
        $('#answerAC-14').html('&nbsp;8 / 2');
         $('#answerHW-14').html('&nbsp;5 / >7');
         $('#question15').html('&nbsp;What country<br>&nbsp;would you most<br>&nbsp;like to visit?&nbsp;');
         $('#answerAC-15').html('&nbsp;Antarctica /<br>&nbsp;Japan');
         $('#answerHW-15').html('&nbsp;Italy / Italy');
         $('#question16').html('&nbsp;Will you ever trod<br>&nbsp;the boards?&nbsp;');
         $('#answerAC-16').html('&nbsp;no / no');
         $('#answerHW-16').html('&nbsp;no / yes');
         $('#question17').html('&nbsp;Will you ever live<br>&nbsp;in a city?&nbsp;');
         $('#answerAC-17').html('&nbsp;no / yes');
         $('#answerHW-17').html('&nbsp;no / no');
         $('#question18').html('&nbsp;Will you ever work<br>&nbsp;abroad?&nbsp;');
         $('#answerAC-18').html('&nbsp;no / maybe');
         $('#answerHW-18').html('&nbsp;no / yes');
         $('#question19').html('&nbsp;Will you ever go<br>&nbsp;parachuting?&nbsp;');
         $('#answerAC-19').html('&nbsp;yes / no');
         $('#answerHW-19').html('&nbsp;yes / no');
         $('#question20').html('&nbsp;Will you ever join<br>&nbsp;a chorus?&nbsp;');
         $('#answerAC-20').html('&nbsp;no / no');
         $('#answerHW-20').html('&nbsp;no / no');
         $('#question21').html('&nbsp;RESENT /<br>&nbsp;RESERVE<br>&nbsp;Do these words<br>&nbsp;a. have similar<br>&nbsp;meanings?<br>&nbsp;b. have<br>&nbsp;contradictory<br>&nbsp;meanings?<br>&nbsp;c. mean neither<br>&nbsp;the same nor the<br>&nbsp;opposite?&nbsp;');
         $('#answerAC-21').html('&nbsp;b / c');
         $('#answerHW-21').html('&nbsp;a / c');
         $('#question22').html('&nbsp;Who among your<br>&nbsp;siblings will marry<br>&nbsp;first?&nbsp;');
         $('#answerAC-22').html('&nbsp;question not<br>&nbsp;posed in<br>&nbsp;2013 / Abigail');
         $('#answerHW-22').html('&nbsp;question not<br>&nbsp;posed in<br>&nbsp;2013 / Abigail');
         $('#question23').html('&nbsp;Who among your<br>&nbsp;siblings will marry<br>&nbsp;last?&nbsp;');
         $('#answerAC-23').html('&nbsp;question not<br>&nbsp;posed in<br>&nbsp;2013 / Harrison');
         $('#answerHW-23').html('&nbsp;question not<br>&nbsp;posed in<br>&nbsp;2013 / Aidan');
         $('#question24').html('&nbsp;What % of your<br>&nbsp;DNA is Panama-<br>&nbsp;nian? (Correct<br>&nbsp;answer is 6.25%<br>&nbsp;or 1/16.)&nbsp;');
         $('#answerAC-24').html('&nbsp;question not<br>&nbsp;posed in<br>&nbsp;2013 / 1/16');
         $('#answerHW-24').html('&nbsp;question not<br>&nbsp;posed in<br>&nbsp;2013 / 1.7%');
         $('#question25').css('border-width', '1px 1px 4px 4px').html('&nbsp;Will you ever read<br>&nbsp;a play by Shake-<br>&nbsp;spear in its<br>&nbsp;entirety?&nbsp;');
         $('#answerAC-25').css('border-width', '1px 1px 4px 1px').html('&nbsp;question not<br>&nbsp;posed in<br>&nbsp;2013 / yes');
         $('#answerHW-25').css('border-width', '1px 4px 4px 1px').html('&nbsp;question not<br>&nbsp;posed in<br>&nbsp;2013 / yes');
    }
        
    else if ($(window).width() <=575) {
         $('.question, .answerAC, .answerHW').css('font-size', '95%');
         $('#answerAC-0').html('Aidan C.');
         $('#answerHW-0').html('Harrison W.');
         $('#question1').css('width', '160px').html('&nbsp;What is your favorite<br>&nbsp;sport to play?&nbsp;');
         $('#answerAC-1').html('&nbsp;football / football');
         $('#answerHW-1').html('&nbsp;football / football<br>&nbsp;and basketball');
         $('#question2').css('width', '160px').html('&nbsp;What is your favorite<br>&nbsp;sport to watch?&nbsp;');
         $('#answerAC-2').html('&nbsp;football / football');
         $('#answerHW-2').html('&nbsp;football / football');
         $('#question3').css('width', '160px').html('&nbsp;What is your favorite<br>&nbsp;book?&nbsp;');
         $('#answerAC-3').html('&nbsp;Lord of the Rings /<br>&nbsp;Hunger Games');
         $('#answerHW-3').html('&nbsp;Friendo / Glass<br>&nbsp;Castle');
         $('#question4').css('width', '160px').html('&nbsp;What movie have<br>&nbsp;you seen the most<br>&nbsp;times (beginning to<br>&nbsp;end)?&nbsp;');
         $('#answerAC-4').html('&nbsp;Christmas Story<br>&nbsp;(10X) / Fight Club<br>&nbsp;(12X)');
         $('#answerHW-4').html('&nbsp;Pitch Perfect<br>&nbsp;(10X) / Pitch<br>&nbsp;Perfect (10X)');
         $('#question5').css('width', '160px').html('&nbsp;How far from home<br>&nbsp;will you go to<br>&nbsp;college?&nbsp;');
         $('#answerAC-5').html('&nbsp;>50m / <50m');
         $('#answerHW-5').html('&nbsp;>50m / >50m');
         $('#question6').css('width', '160px').html('&nbsp;How old will you be<br>&nbsp;when you first<br>&nbsp;marry?&nbsp;');
         $('#answerAC-6').html('&nbsp;26-30 y / 26-30 y');
         $('#answerHW-6').html('&nbsp;21-25 y / 21-25 y');
         $('#question7').css('width', '160px').html('&nbsp;How many children<br>&nbsp;will you have?&nbsp;');
         $('#answerAC-7').html('&nbsp;4 / 4');
         $('#answerHW-7').html('&nbsp;3 / 2-4');
         $('#question8').css('width', '160px').html('&nbsp;What field will your<br>&nbsp;career be in?&nbsp;');
         $('#answerAC-8').html('&nbsp;sports or science /<br>&nbsp;computer science');
         $('#answerHW-8').html('&nbsp;sports / sports');
         $('#question9').css('width', '160px').html('&nbsp;Will you ever prac-<br>&nbsp;tice yoga regularly?&nbsp;');
         $('#answerAC-9').html('&nbsp;no / no');
         $('#answerHW-9').html('&nbsp;no / no');
         $('#question10').css('width', '160px').html('&nbsp;Will you ever visit<br>&nbsp;Africa?&nbsp;');
         $('#answerAC-10').html('&nbsp;yes / yes');
         $('#answerHW-10').html('&nbsp;yes / yes');
         $('#question11').html('&nbsp;Will you ever run for<br>&nbsp;office?&nbsp;');
         $('#answerAC-11').html('&nbsp;no / maybe');
         $('#answerHW-11').html('&nbsp;no / no');
         $('#question12').html('&nbsp;Will you be a<br>&nbsp;registered Dem.,<br>&nbsp;registered Rep.<br>&nbsp;or indepen.?&nbsp;');
         $('#answerAC-12').html('&nbsp;Dem. / indep.');
         $('#answerHW-12').html('&nbsp;Dem. / Dem.');
         $('#question13').html('&nbsp;Will you ever visit<br>&nbsp;an orphanage?&nbsp;');
         $('#answerAC-13').html('&nbsp;no / no');
         $('#answerHW-13').html('&nbsp;no / no');
         $('#question14').html('&nbsp;How many tattoos<br>&nbsp;will you have?&nbsp;');
        $('#answerAC-14').html('&nbsp;8 / 2');
         $('#answerHW-14').html('&nbsp;5 / >7');
         $('#question15').html('&nbsp;What country would<br>&nbsp;you most like to visit?&nbsp;');
         $('#answerAC-15').html('&nbsp;Antarctica / Japan');
         $('#answerHW-15').html('&nbsp;Italy / Italy');
         $('#question16').html('&nbsp;Will you ever trod<br>&nbsp;the boards?&nbsp;');
         $('#answerAC-16').html('&nbsp;no / no');
         $('#answerHW-16').html('&nbsp;no / yes');
         $('#question17').html('&nbsp;Will you ever live in<br>&nbsp;a city?&nbsp;');
         $('#answerAC-17').html('&nbsp;no / yes');
         $('#answerHW-17').html('&nbsp;no / no');
         $('#question18').html('&nbsp;Will you ever work<br>&nbsp;abroad?&nbsp;');
         $('#answerAC-18').html('&nbsp;no / maybe');
         $('#answerHW-18').html('&nbsp;no / yes');
         $('#question19').html('&nbsp;Will you ever go<br>&nbsp;parachuting?&nbsp;');
         $('#answerAC-19').html('&nbsp;yes / no');
         $('#answerHW-19').html('&nbsp;yes / no');
         $('#question20').html('&nbsp;Will you ever join a<br>&nbsp;chorus?&nbsp;');
         $('#answerAC-20').html('&nbsp;no / no');
         $('#answerHW-20').html('&nbsp;no / no');
         $('#question21').html('&nbsp;RESENT / RESERVE<br>&nbsp;Do these words<br>&nbsp;a. have similar<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;meanings?<br>&nbsp;b. have<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contradictory<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;meanings?<br>&nbsp;c. mean neither<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the same nor<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the opposite?&nbsp;');
         $('#answerAC-21').html('&nbsp;b / c');
         $('#answerHW-21').html('&nbsp;a / c');
         $('#question22').html('&nbsp;Who among your<br>&nbsp;siblings will marry<br>&nbsp;first?&nbsp;');
         $('#answerAC-22').html('&nbsp;question not<br>&nbsp;posed in 2013 /<br>&nbsp;Abigail');
         $('#answerHW-22').html('&nbsp;question not<br>&nbsp;posed in 2013 /<br>&nbsp;Abigail');
         $('#question23').html('&nbsp;Who among your<br>&nbsp;siblings will marry<br>&nbsp;last?&nbsp;');
         $('#answerAC-23').html('&nbsp;question not<br>&nbsp;posed in 2013 /<br>&nbsp;Harrison');
         $('#answerHW-23').html('&nbsp;question not<br>&nbsp;posed in 2013 /<br>&nbsp;Aidan');
         $('#question24').html('&nbsp;What % of your DNA<br>&nbsp;is Panamanian?&nbsp;<br>&nbsp;(Correct answer<br>&nbsp;is 6.25% or 1/16.)&nbsp;');
         $('#answerAC-24').html('&nbsp;question not<br>&nbsp;posed in 2013 /<br>&nbsp;1/16');
         $('#answerHW-24').html('&nbsp;question not<br>&nbsp;posed in 2013 /<br>&nbsp;1.7%');
         $('#question25').css('border-width', '1px 1px 4px 4px').html('&nbsp;Will you ever read a<br>&nbsp;play by Shakespeare&nbsp;<br>&nbsp;in its entirety?&nbsp;');
         $('#answerAC-25').css('border-width', '1px 1px 4px 1px').html('&nbsp;question not<br>&nbsp;posed in 2013 /<br>&nbsp;yes');
         $('#answerHW-25').css('border-width', '1px 4px 4px 1px').html('&nbsp;question not<br>&nbsp;posed in 2013 /<br>&nbsp;yes');
    }
    
    else if ($(window).width() <=675) {
         $('#answerAC-0').html('Aidan Charles');
         $('#answerHW-0').html('Harrison Woodell');
         $('#question1').css('width', '190px').html('&nbsp;What is your favorite<br>&nbsp;sport to play?&nbsp;');
         $('#answerAC-1').html('&nbsp;football / football');
         $('#answerHW-1').html('&nbsp;football / football<br>&nbsp;and basketball');
         $('#question2').css('width', '190px').html('&nbsp;What is your favorite<br>&nbsp;sport to watch?&nbsp;');
         $('#answerAC-2').html('&nbsp;football / football');
         $('#answerHW-2').html('&nbsp;football / football');
         $('#question3').css('width', '190px').html('&nbsp;What is your favorite<br>&nbsp;book?&nbsp;');
         $('#answerAC-3').html('&nbsp;Lord of the Rings /<br>&nbsp;Hunger Games');
         $('#answerHW-3').html('&nbsp;Friendo / Glass<br>&nbsp;Castle');
         $('#question4').css('width', '190px').html('&nbsp;What movie have you<br>&nbsp;seen the most times<br>&nbsp;(beginning to end)?&nbsp;');
         $('#answerAC-4').html('&nbsp;Christmas Story<br>&nbsp;(10X) / Fight Club<br>&nbsp;(12X)');
         $('#answerHW-4').html('&nbsp;Pitch Perfect (10X) /<br>&nbsp;Pitch Perfect (10X)');
         $('#question5').css('width', '190px').html('&nbsp;How far from home will<br>&nbsp;you go to college?&nbsp;');
         $('#answerAC-5').html('&nbsp;>50m / <50m');
         $('#answerHW-5').html('&nbsp;>50m / >50m');
         $('#question6').css('width', '190px').html('&nbsp;How old will you be<br>&nbsp;when you first marry?&nbsp;');
         $('#answerAC-6').html('&nbsp;26-30 y / 26-30 y');
         $('#answerHW-6').html('&nbsp;21-25 y / 21-25 y');
         $('#question7').css('width', '190px').html('&nbsp;How many children<br>&nbsp;will you have?&nbsp;');
         $('#answerAC-7').html('&nbsp;4 / 4');
         $('#answerHW-7').html('&nbsp;3 / 2-4');
         $('#question8').css('width', '190px').html('&nbsp;What field will your<br>&nbsp;career be in?&nbsp;');
         $('#answerAC-8').html('&nbsp;sports or science /<br>&nbsp;computer science');
         $('#answerHW-8').html('&nbsp;sports / sports');
         $('#question9').css('width', '190px').html('&nbsp;Will you ever practice<br>&nbsp;yoga regularly?&nbsp;');
         $('#answerAC-9').html('&nbsp;no / no');
         $('#answerHW-9').html('&nbsp;no / no');
         $('#question10').css('width', '190px').html('&nbsp;Will you ever visit Africa?&nbsp;');
         $('#answerAC-10').html('&nbsp;yes / yes');
         $('#answerHW-10').html('&nbsp;yes / yes');
         $('#question11').html('&nbsp;Will you ever run for<br>&nbsp;office?&nbsp;');
         $('#answerAC-11').html('&nbsp;no / maybe');
         $('#answerHW-11').html('&nbsp;no / no');
         $('#question12').html('&nbsp;Will you be a registered<br>&nbsp;Democrat, registered<br>&nbsp;Republican or<br>&nbsp;independent?&nbsp;');
         $('#answerAC-12').html('&nbsp;Democrat /<br>&nbsp;independent');
         $('#answerHW-12').html('&nbsp;Democrat /<br>&nbsp;Democrat');
         $('#question13').html('&nbsp;Will you ever visit an<br>&nbsp;orphanage?&nbsp;');
         $('#answerAC-13').html('&nbsp;no / no');
         $('#answerHW-13').html('&nbsp;no / no');
         $('#question14').html('&nbsp;How many tattoos will<br>&nbsp;you have?&nbsp;');
        $('#answerAC-14').html('&nbsp;8 / 2');
         $('#answerHW-14').html('&nbsp;5 / >7');
         $('#question15').html('&nbsp;What country would<br>&nbsp;you most like to visit?&nbsp;');
         $('#answerAC-15').html('&nbsp;Antarctica / Japan');
         $('#answerHW-15').html('&nbsp;Italy / Italy');
         $('#question16').html('&nbsp;Will you ever trod the<br>&nbsp;boards?&nbsp;');
         $('#answerAC-16').html('&nbsp;no / no');
         $('#answerHW-16').html('&nbsp;no / yes');
         $('#question17').html('&nbsp;Will you ever live in a<br>&nbsp;city?&nbsp;');
         $('#answerAC-17').html('&nbsp;no / yes');
         $('#answerHW-17').html('&nbsp;no / no');
         $('#question18').html('&nbsp;Will you ever work<br>&nbsp;abroad?&nbsp;');
         $('#answerAC-18').html('&nbsp;no / maybe');
         $('#answerHW-18').html('&nbsp;no / yes');
         $('#question19').html('&nbsp;Will you ever go<br>&nbsp;parachuting?&nbsp;');
         $('#answerAC-19').html('&nbsp;yes / no');
         $('#answerHW-19').html('&nbsp;yes / no');
         $('#question20').html('&nbsp;Will you ever join a<br>&nbsp;chorus?&nbsp;');
         $('#answerAC-20').html('&nbsp;no / no');
         $('#answerHW-20').html('&nbsp;no / no');
         $('#question21').html('&nbsp;RESENT / RESERVE<br>&nbsp;Do these words<br>&nbsp;a. have similar meanings?<br>&nbsp;b. have contradictory<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;meanings?<br>&nbsp;c. mean neither the same<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nor the opposite?&nbsp;');
         $('#answerAC-21').html('&nbsp;b / c');
         $('#answerHW-21').html('&nbsp;a / c');
         $('#question22').html('&nbsp;Who among your<br>&nbsp;siblings will marry first?&nbsp;');
         $('#answerAC-22').html('&nbsp;question not posed<br>&nbsp;in 2013 / Abigail');
         $('#answerHW-22').html('&nbsp;question not posed<br>&nbsp;in 2013 / Abigail');
         $('#question23').html('&nbsp;Who among your<br>&nbsp;siblings will marry last?&nbsp;');
         $('#answerAC-23').html('&nbsp;question not posed<br>&nbsp;in 2013 / Harrison');
         $('#answerHW-23').html('&nbsp;question not posed<br>&nbsp;in 2013 / Aidan');
         $('#question24').html('&nbsp;What % of your DNA is<br>&nbsp;Panamanian? (Correct<br>&nbsp;answer is 6.25% or 1/16.)&nbsp;');
         $('#answerAC-24').html('&nbsp;question not posed<br>&nbsp;in 2013 / 1/16');
         $('#answerHW-24').html('&nbsp;question not posed<br>&nbsp;in 2013 / 1.7%');
         $('#question25').css('border-width', '1px 1px 4px 4px').html('&nbsp;Will you ever read a play<br>&nbsp;by Shakespeare in its&nbsp;<br>&nbsp;entirety?&nbsp;');
         $('#answerAC-25').css('border-width', '1px 1px 4px 1px').html('&nbsp;question not posed<br>&nbsp;in 2013 / yes');
         $('#answerHW-25').css('border-width', '1px 4px 4px 1px').html('&nbsp;question not posed<br>&nbsp;in 2013 / yes');
    }
    
      else if ($(window).width() <=767) {
         $('#answerAC-0').html('AC Greenslade');
         $('#answerHW-0').html('HW Greenslade');
         $('#question1').css('width', '220px').html('&nbsp;What is your favorite sport<br>&nbsp;to play?&nbsp;');
         $('#answerAC-1').html('&nbsp;football / football');
         $('#answerHW-1').html('&nbsp;football / football<br>&nbsp;and basketball');
         $('#question2').html('&nbsp;What is your favorite sport<br>&nbsp;to watch?&nbsp;');
         $('#answerAC-2').html('&nbsp;football / football');
         $('#answerHW-2').html('&nbsp;football / football');
         $('#question3').html('&nbsp;What is your favorite book?&nbsp;');
         $('#answerAC-3').html('&nbsp;Lord of the Rings /<br>&nbsp;Hunger Games');
         $('#answerHW-3').html('&nbsp;Friendo / Glass<br>&nbsp;Castle');
         $('#question4').html('&nbsp;What movie have you seen<br>&nbsp;the most times (beginning<br>&nbsp;to end)?&nbsp;');
         $('#answerAC-4').html('&nbsp;Christmas Story<br>&nbsp;(10X) / Fight<br>&nbsp;Club (12X)');
         $('#answerHW-4').html('&nbsp;Pitch Perfect<br>&nbsp;(10X) / Pitch<br>&nbsp;Perfect (10X)');
         $('#question5').html('&nbsp;How far from home will you<br>&nbsp;go to college?<br>&nbsp;a. less than 50 miles<br>&nbsp;b. more than 50 miles');
         $('#answerAC-5').html('&nbsp;b / a');
         $('#answerHW-5').html('&nbsp;b / b');
         $('#question6').html('&nbsp;How old will you be when<br>&nbsp;you first marry?<br>&nbsp;a. 15-20 years old<br>&nbsp;b. 21-25 years old<br>&nbspc. 26-30 years old<br>&nbsp;d. over 30 years old');
         $('#answerAC-6').html('&nbsp;c / c');
         $('#answerHW-6').html('&nbsp;b / b');
         $('#question7').html('&nbsp;How many children will you<br>&nbsp;have?&nbsp;');
         $('#answerAC-7').html('&nbsp;4 / 4');
         $('#answerHW-7').html('&nbsp;3 / 2-4');
         $('#question8').html('&nbsp;What field will your career<br>&nbsp;be in?&nbsp;');
         $('#answerAC-8').html('&nbsp;sports or science /<br>&nbsp;computer science');
         $('#answerHW-8').html('&nbsp;sports / sports');
         $('#question9').html('&nbsp;Will you ever practice yoga<br>&nbsp;regularly?&nbsp;');
         $('#answerAC-9').html('&nbsp;no / no');
         $('#answerHW-9').html('&nbsp;no / no');
         $('#question10').html('&nbsp;Will you ever visit Africa?&nbsp;');
         $('#answerAC-10').html('&nbsp;yes / yes');
         $('#answerHW-10').html('&nbsp;yes / yes');
         $('#question11').html('&nbsp;Will you ever run for office?&nbsp;');
         $('#answerAC-11').html('&nbsp;no / maybe');
         $('#answerHW-11').html('&nbsp;no / no');
         $('#question12').html('&nbsp;Will you be a registered<br>&nbsp;Democrat, registered<br>&nbsp;Republican or independent?&nbsp;');
         $('#answerAC-12').html('&nbsp;Democrat /<br>&nbsp;independent');
         $('#answerHW-12').html('&nbsp;Democrat /<br>&nbsp;Democrat');
         $('#question13').html('&nbsp;Will you ever visit an<br>&nbsp;orphanage?&nbsp;');
         $('#answerAC-13').html('&nbsp;no / no');
         $('#answerHW-13').html('&nbsp;no / no');
         $('#question14').html('&nbsp;How many tattoos will you<br>&nbsp;have?&nbsp;');
        $('#answerAC-14').html('&nbsp;8 / 2');
         $('#answerHW-14').html('&nbsp;5 / >7');
         $('#question15').html('&nbsp;What country would you<br>&nbsp;most like to visit?&nbsp;');
         $('#answerAC-15').html('&nbsp;Antarctica /<br>&nbsp;Japan');
         $('#answerHW-15').html('&nbsp;Italy / Italy');
         $('#question16').html('&nbsp;Will you ever trod the<br>&nbsp;boards?&nbsp;');
         $('#answerAC-16').html('&nbsp;no / no');
         $('#answerHW-16').html('&nbsp;no / yes');
         $('#question17').html('&nbsp;Will you ever live in a city?&nbsp;');
         $('#answerAC-17').html('&nbsp;no / yes');
         $('#answerHW-17').html('&nbsp;no / no');
         $('#question18').html('&nbsp;Will you ever work abroad?&nbsp;');
         $('#answerAC-18').html('&nbsp;no / maybe');
         $('#answerHW-18').html('&nbsp;no / yes');
         $('#question19').html('&nbsp;Will you ever go para-<br>&nbsp;chuting?&nbsp;');
         $('#answerAC-19').html('&nbsp;yes / no');
         $('#answerHW-19').html('&nbsp;yes / no');
         $('#question20').html('&nbsp;Will you ever join a chorus?&nbsp;');
         $('#answerAC-20').html('&nbsp;no / no');
         $('#answerHW-20').html('&nbsp;no / no');
         $('#question21').html('&nbsp;RESENT / RESERVE<br>&nbsp;Do these words<br>&nbsp;a. have similar meanings?<br>&nbsp;b. have contradictory<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;meanings?<br>&nbsp;c. mean neither the same<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nor the opposite?&nbsp;');
         $('#answerAC-21').html('&nbsp;b / c');
         $('#answerHW-21').html('&nbsp;a / c');
         $('#question22').html('&nbsp;Who among your siblings<br>&nbsp;will marry first?&nbsp;');
         $('#answerAC-22').html('&nbsp;question not<br>&nbsp;posed in 2013 / <br>&nbsp;Abigail');
         $('#answerHW-22').html('&nbsp;question not<br>&nbsp;posed in 2013 / <br>&nbsp;Abigail');
         $('#question23').html('&nbsp;Who among your siblings<br>&nbsp;will marry last?&nbsp;');
         $('#answerAC-23').html('&nbsp;question not<br>&nbsp;posed in 2013 / <br>&nbsp;Harrison');
         $('#answerHW-23').html('&nbsp;question not<br>&nbsp;posed in 2013 / <br>&nbsp;Aidan');
         $('#question24').html('&nbsp;What % of your DNA is<br>&nbsp;Panamanian? (Correct&nbsp;<br>&nbsp;answer is 6.25% or 1/16.)&nbsp;');
         $('#answerAC-24').html('&nbsp;question not<br>&nbsp;posed in 2013 / <br>&nbsp;1/16');
         $('#answerHW-24').html('&nbsp;question not<br>&nbsp;posed in 2013 / <br>&nbsp;1.7%');
         $('#question25').css('border-width', '1px 1px 4px 4px').html('&nbsp;Will you ever read a play by<br>&nbsp;Shakespeare in its entirety?&nbsp;');
         $('#answerAC-25').css('border-width', '1px 1px 4px 1px').html('&nbsp;question not<br>&nbsp;posed in 2013 / <br>&nbsp;yes');
         $('#answerHW-25').css('border-width', '1px 4px 4px 1px').html('&nbsp;question not<br>&nbsp;posed in 2013 / <br>&nbsp;yes');
    }
        
    else if ($(window).width() <=991) {
         $('#answerAC-0').html('Aidan Greenslade');
         $('#answerHW-0').html('Harrison Greenslade');
         $('#question1').css('width', '280px').html('&nbsp;What is your favorite sport to play?&nbsp;');
         $('#answerAC-1').html('&nbsp;football / football');
         $('#answerHW-1').html('&nbsp;football / football and<br>&nbsp;basketball');
         $('#question2').html('&nbsp;What is your favorite sport to watch?&nbsp;');
         $('#answerAC-2').html('&nbsp;football / football');
         $('#answerHW-2').html('&nbsp;football / football');
         $('#question3').html('&nbsp;What is your favorite book?&nbsp;');
         $('#answerAC-3').html('&nbsp;Lord of the Rings /<br>&nbsp;Hunger Games');
         $('#answerHW-3').html('&nbsp;Friendo / Glass Castle');
         $('#question4').html('&nbsp;What movie have you seen the most<br>&nbsp;times (beginning to end)?&nbsp;');
         $('#answerAC-4').html('&nbsp;Christmas Story (10X) /<br>&nbsp;Fight Club (12X)');
         $('#answerHW-4').html('&nbsp;Pitch Perfect (10X) /<br>&nbsp;Pitch Perfect (10X)');
         $('#question5').html('&nbsp;How far from home will you go to<br>&nbsp;college?<br>&nbsp;a. less than 50 miles<br>&nbsp;b. more than 50 miles');
         $('#answerAC-5').html('&nbsp;b / a');
         $('#answerHW-5').html('&nbsp;b / b');
         $('#question6').html('&nbsp;How old will you be when you first<br>&nbsp;marry?<br>&nbsp;a. 15-20 years old<br>&nbsp;b. 21-25 years old<br>&nbspc. 26-30 years old<br>&nbsp;d. over 30 years old');
         $('#answerAC-6').html('&nbsp;c / c');
         $('#answerHW-6').html('&nbsp;b / b');
         $('#question7').html('&nbsp;How many children will you have?&nbsp;');
         $('#answerAC-7').html('&nbsp;4 / 4');
         $('#answerHW-7').html('&nbsp;3 / 2-4');
         $('#question8').html('&nbsp;What field will your career be in?&nbsp;');
         $('#answerAC-8').html('&nbsp;sports or science /<br>&nbsp;computer science');
         $('#answerHW-8').html('&nbsp;sports / sports');
         $('#question9').html('&nbsp;Will you ever practice yoga regularly?&nbsp;');
         $('#answerAC-9').html('&nbsp;no / no');
         $('#answerHW-9').html('&nbsp;no / no');
         $('#question10').html('&nbsp;Will you ever visit Africa?&nbsp;');
         $('#answerAC-10').html('&nbsp;yes / yes');
         $('#answerHW-10').html('&nbsp;yes / yes');
         $('#question11').html('&nbsp;Will you ever run for office?&nbsp;');
         $('#answerAC-11').html('&nbsp;no / maybe');
         $('#answerHW-11').html('&nbsp;no / no');
         $('#question12').html('&nbsp;Will you be a registered Democrat,<br>&nbsp;registered Republican or<br>&nbsp;independent?&nbsp;');
         $('#answerAC-12').html('&nbsp;Democrat / independent');
         $('#answerHW-12').html('&nbsp;Democrat / Democrat');
         $('#question13').html('&nbsp;Will you ever visit an orphanage?');
         $('#answerAC-13').html('&nbsp;no / no');
         $('#answerHW-13').html('&nbsp;no / no');
         $('#question14').html('&nbsp;How many tattoos will you have?&nbsp;');
        $('#answerAC-14').html('&nbsp;8 / 2');
         $('#answerHW-14').html('&nbsp;5 / >7');
         $('#question15').html('&nbsp;What country would you most like<br>&nbsp;to visit?&nbsp;');
         $('#answerAC-15').html('&nbsp;Antarctica / Japan');
         $('#answerHW-15').html('&nbsp;Italy / Italy');
         $('#question16').html('&nbsp;Will you ever trod the boards?&nbsp;');
         $('#answerAC-16').html('&nbsp;no / no');
         $('#answerHW-16').html('&nbsp;no / yes');
         $('#question17').html('&nbsp;Will you ever live in a city?&nbsp;');
         $('#answerAC-17').html('&nbsp;no / yes');
         $('#answerHW-17').html('&nbsp;no / no');
         $('#question18').html('&nbsp;Will you ever work abroad?&nbsp;');
         $('#answerAC-18').html('&nbsp;no / maybe');
         $('#answerHW-18').html('&nbsp;no / yes');
         $('#question19').html('&nbsp;Will you ever go parachuting?&nbsp;');
         $('#answerAC-19').html('&nbsp;yes / no');
         $('#answerHW-19').html('&nbsp;yes / no');
         $('#question20').html('&nbsp;Will you ever join a chorus?&nbsp;');
         $('#answerAC-20').html('&nbsp;no / no');
         $('#answerHW-20').html('&nbsp;no / no');
         $('#question21').html('&nbsp;RESENT / RESERVE<br>&nbsp;Do these words<br>&nbsp;a. have similar meanings?<br>&nbsp;b. have contradictory meanings?<br>&nbsp;c. mean neither the same nor the<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;opposite?&nbsp;');
         $('#answerAC-21').html('&nbsp;b / c');
         $('#answerHW-21').html('&nbsp;a / c');
         $('#question22').html('&nbsp;Who among your siblings will marry<br>&nbsp;first?&nbsp;');
         $('#answerAC-22').html('&nbsp;question not posed in<br>&nbsp;2013 / Abigail');
         $('#answerHW-22').html('&nbsp;question not posed in<br>&nbsp;2013 / Abigail');
         $('#question23').html('&nbsp;Who among your siblings will marry<br>&nbsp;last?&nbsp;');
         $('#answerAC-23').html('&nbsp;question not posed in<br>&nbsp;2013 / Harrison');
         $('#answerHW-23').html('&nbsp;question not posed in<br>&nbsp;2013 / Aidan');
         $('#question24').html('&nbsp;What % of your DNA is Panamanian?<br>&nbsp;(Correct answer is 6.25% or 1/16.)&nbsp;');
         $('#answerAC-24').html('&nbsp;question not posed in<br>&nbsp;2013 / 1/16');
         $('#answerHW-24').html('&nbsp;question not posed in<br>&nbsp;2013 / 1.7%');
         $('#question25').css('border-width', '1px 1px 4px 4px').html('&nbsp;Will you ever read a play by<br>&nbsp;Shakespeare in its entirety?&nbsp;');
         $('#answerAC-25').css('border-width', '1px 1px 4px 1px').html('&nbsp;question not posed in<br>&nbsp;2013 / yes');
         $('#answerHW-25').css('border-width', '1px 4px 4px 1px').html('&nbsp;question not posed in<br>&nbsp;2013 / yes');
    }
     
    else if ($(window).width() <=1199) {
         $('#answerAC-0').html('Aidan C. Greenslade');
         $('#answerHW-0').html('Harrison W. Greenslade');
         $('#question1').css('width', '340px').html('&nbsp;What is your favorite sport to play?&nbsp;');
         $('#answerAC-1').html('&nbsp;football / football');
         $('#answerHW-1').html('&nbsp;football / football and basketball');
         $('#question2').html('&nbsp;What is your favorite sport to watch?&nbsp;');
         $('#answerAC-2').html('&nbsp;football / football');
         $('#answerHW-2').html('&nbsp;football / football');
         $('#question3').html('&nbsp;What is your favorite book?&nbsp;');
         $('#answerAC-3').html('&nbsp;Lord of the Rings / Hunger Games');
         $('#answerHW-3').html('&nbsp;Friendo / Glass Castle');
         $('#question4').html('&nbsp;What movie have you seen the most times<br>&nbsp;(beginning to end)?&nbsp;');
         $('#answerAC-4').html('&nbsp;Christmas Story (10X) / Fight Club (12X)');
         $('#answerHW-4').html('&nbsp;Pitch Perfect (10X) / Pitch Perfect (10X)');
         $('#question5').html('&nbsp;How far from home will you go to college?<br>&nbsp;a. less than 50 miles<br>&nbsp;b. more than 50 miles');
         $('#answerAC-5').html('&nbsp;b / a');
         $('#answerHW-5').html('&nbsp;b / b');
         $('#question6').html('&nbsp;How old will you be when you first marry?<br>&nbsp;a. 15-20 years old<br>&nbsp;b. 21-25 years old<br>&nbspc. 26-30 years old<br>&nbsp;d. over 30 years old');
         $('#answerAC-6').html('&nbsp;c / c');
         $('#answerHW-6').html('&nbsp;b / b');
         $('#question7').html('&nbsp;How many children will you have?&nbsp;');
         $('#answerAC-7').html('&nbsp;4 / 4');
         $('#answerHW-7').html('&nbsp;3 / 2-4');
         $('#question8').html('&nbsp;What field will your career be in?&nbsp;');
         $('#answerAC-8').html('&nbsp;sports or science / computer science');
         $('#answerHW-8').html('&nbsp;sports / sports');
         $('#question9').html('&nbsp;Will you ever practice yoga regularly?&nbsp;');
         $('#answerAC-9').html('&nbsp;no / no');
         $('#answerHW-9').html('&nbsp;no / no');
         $('#question10').html('&nbsp;Will you ever visit Africa?&nbsp;');
         $('#answerAC-10').html('&nbsp;yes / yes');
         $('#answerHW-10').html('&nbsp;yes / yes');
         $('#question11').html('&nbsp;Will you ever run for office?&nbsp;');
         $('#answerAC-11').html('&nbsp;no / maybe');
         $('#answerHW-11').html('&nbsp;no / no');
         $('#question12').html('&nbsp;Will you be a registered Democrat,<br>&nbsp;registered Republican or independent?&nbsp;');
         $('#answerAC-12').html('&nbsp;Democrat / independent');
         $('#answerHW-12').html('&nbsp;Democrat / Democrat');
         $('#question13').html('&nbsp;Will you ever visit an orphanage?');
         $('#answerAC-13').html('&nbsp;no / no');
         $('#answerHW-13').html('&nbsp;no / no');
         $('#question14').html('&nbsp;How many tattoos will you have?&nbsp;');
        $('#answerAC-14').html('&nbsp;8 / 2');
         $('#answerHW-14').html('&nbsp;5 / >7');
         $('#question15').html('&nbsp;What country would you most like to visit?&nbsp;');
         $('#answerAC-15').html('&nbsp;Antarctica / Japan');
         $('#answerHW-15').html('&nbsp;Italy / Italy');
         $('#question16').html('&nbsp;Will you ever trod the boards?&nbsp;');
         $('#answerAC-16').html('&nbsp;no / no');
         $('#answerHW-16').html('&nbsp;no / yes');
         $('#question17').html('&nbsp;Will you ever live in a city?&nbsp;');
         $('#answerAC-17').html('&nbsp;no / yes');
         $('#answerHW-17').html('&nbsp;no / no');
         $('#question18').html('&nbsp;Will you ever work abroad?&nbsp;');
         $('#answerAC-18').html('&nbsp;no / maybe');
         $('#answerHW-18').html('&nbsp;no / yes');
         $('#question19').html('&nbsp;Will you ever go parachuting?&nbsp;');
         $('#answerAC-19').html('&nbsp;yes / no');
         $('#answerHW-19').html('&nbsp;yes / no');
         $('#question20').html('&nbsp;Will you ever join a chorus?&nbsp;');
         $('#answerAC-20').html('&nbsp;no / no');
         $('#answerHW-20').html('&nbsp;no / no');
         $('#question21').html('&nbsp;RESENT / RESERVE<br>&nbsp;Do these words<br>&nbsp;a. have similar meanings?<br>&nbsp;b. have contradictory meanings?<br>&nbsp;c. mean neither the same nor the opposite?&nbsp;');
         $('#answerAC-21').html('&nbsp;b / c');
         $('#answerHW-21').html('&nbsp;a / c');
         $('#question22').html('&nbsp;Who among your siblings will marry first?&nbsp;');
         $('#answerAC-22').html('&nbsp;question not posed in 2013 / Abigail');
         $('#answerHW-22').html('&nbsp;question not posed in 2013 / Abigail');
         $('#question23').html('&nbsp;Who among your siblings will marry last?&nbsp;');
         $('#answerAC-23').html('&nbsp;question not posed in 2013 / Harrison');
         $('#answerHW-23').html('&nbsp;question not posed in 2013 / Aidan');
         $('#question24').html('&nbsp;What % of your DNA is Panamanian?<br>&nbsp;(Correct answer is 6.25% or 1/16.)&nbsp;');
         $('#answerAC-24').html('&nbsp;question not posed in 2013 / 1/16');
         $('#answerHW-24').html('&nbsp;question not posed in 2013 / 1.7%');
         $('#question25').css('border-width', '1px 1px 4px 4px').html('&nbsp;Will you ever read a play by Shakespeare in its<br>&nbsp;entirety?&nbsp;');
         $('#answerAC-25').css('border-width', '1px 1px 4px 1px').html('&nbsp;question not posed in 2013 / yes');
         $('#answerHW-25').css('border-width', '1px 4px 4px 1px').html('&nbsp;question not posed in 2013 / yes');
    }
     
    else { 
         $('#answerAC-0').html('Aidan Charles Greenslade');
         $('#answerHW-0').html('Harrison Woodell Greenslade');
         $('#question1').css('width', '400px').html('&nbsp;What is your favorite sport to play?&nbsp;');
         $('#answerAC-1').html('&nbsp;football / football');
         $('#answerHW-1').html('&nbsp;football / football and basketball');
         $('#question2').html('&nbsp;What is your favorite sport to watch?&nbsp;');
         $('#answerAC-2').html('&nbsp;football / football');
         $('#answerHW-2').html('&nbsp;football / football');
         $('#question3').html('&nbsp;What is your favorite book?&nbsp;');
         $('#answerAC-3').html('&nbsp;Lord of the Rings / Hunger Games');
         $('#answerHW-3').html('&nbsp;Friendo / Glass Castle');
         $('#question4').html('&nbsp;What movie have you seen the most times<br>&nbsp;(beginning to end)?&nbsp;');
         $('#answerAC-4').html('&nbsp;Christmas Story (10X) / Fight Club (12X)');
         $('#answerHW-4').html('&nbsp;Pitch Perfect (10X) / Pitch Perfect (10X)');
         $('#question5').html('&nbsp;How far from home will you go to college?<br>&nbsp;a. less than 50 miles<br>&nbsp;b. more than 50 miles');
         $('#answerAC-5').html('&nbsp;b / a');
         $('#answerHW-5').html('&nbsp;b / b');
         $('#question6').html('&nbsp;How old will you be when you first<br>&nbsp;marry?<br>&nbsp;a. 15-20 y<br>&nbsp;b. 21-25 y<br>&nbspc. 26-30 y<br>&nbsp;d. over 30 y');
         $('#answerAC-6').html('&nbsp;c / c');
         $('#answerHW-6').html('&nbsp;b / b');
         $('#question7').html('&nbsp;How many children will you have?&nbsp;');
         $('#answerAC-7').html('&nbsp;4 / 4');
         $('#answerHW-7').html('&nbsp;3 / 2-4');
         $('#question8').html('&nbsp;What field will your career be in?&nbsp;');
         $('#answerAC-8').html('&nbsp;sports or science / computer science');
         $('#answerHW-8').html('&nbsp;sports / sports');
         $('#question9').html('&nbsp;Will you ever practice yoga regularly?&nbsp;');
         $('#answerAC-9').html('&nbsp;no / no');
         $('#answerHW-9').html('&nbsp;no / no');
         $('#question10').html('&nbsp;Will you ever visit Africa?&nbsp;');
         $('#answerAC-10').html('&nbsp;yes / yes');
         $('#answerHW-10').html('&nbsp;yes / yes');
         $('#question11').html('&nbsp;Will you ever run for office?&nbsp;');
         $('#answerAC-11').html('&nbsp;no / maybe');
         $('#answerHW-11').html('&nbsp;no / no');
         $('#question12').html('&nbsp;Will you be a registered Democrat, registered<br>&nbsp;Republican or independent?&nbsp;');
         $('#answerAC-12').html('&nbsp;Democrat / independent');
         $('#answerHW-12').html('&nbsp;Democrat / Democrat');
         $('#question13').html('&nbsp;Will you ever visit an orphanage?');
         $('#answerAC-13').html('&nbsp;no / no');
         $('#answerHW-13').html('&nbsp;no / no');
         $('#question14').html('&nbsp;How many tattoos will you have?&nbsp;');
        $('#answerAC-14').html('&nbsp;8 / 2');
         $('#answerHW-14').html('&nbsp;5 / >7');
         $('#question15').html('&nbsp;What country would you most like to visit?&nbsp;');
         $('#answerAC-15').html('&nbsp;Antarctica / Japan');
         $('#answerHW-15').html('&nbsp;Italy / Italy');
         $('#question16').html('&nbsp;Will you ever trod the boards?&nbsp;');
         $('#answerAC-16').html('&nbsp;no / no');
         $('#answerHW-16').html('&nbsp;no / yes');
         $('#question17').html('&nbsp;Will you ever live in a city?&nbsp;');
         $('#answerAC-17').html('&nbsp;no / yes');
         $('#answerHW-17').html('&nbsp;no / no');
         $('#question18').html('&nbsp;Will you ever work abroad?&nbsp;');
         $('#answerAC-18').html('&nbsp;no / maybe');
         $('#answerHW-18').html('&nbsp;no / yes');
         $('#question19').html('&nbsp;Will you ever go parachuting?&nbsp;');
         $('#answerAC-19').html('&nbsp;yes / no');
         $('#answerHW-19').html('&nbsp;yes / no');
         $('#question20').html('&nbsp;Will you ever join a chorus?&nbsp;');
         $('#answerAC-20').html('&nbsp;no / no');
         $('#answerHW-20').html('&nbsp;no / no');
         $('#question21').html('&nbsp;RESENT / RESERVE<br>&nbsp;Do these words<br>&nbsp;a. have similar meanings?<br>&nbsp;b. have contradictory meanings?<br>&nbsp;c. mean neither the same nor the opposite?&nbsp;');
         $('#answerAC-21').html('&nbsp;b / c');
         $('#answerHW-21').html('&nbsp;a / c');
         $('#question22').html('&nbsp;Who among your siblings will marry first?&nbsp;');
         $('#answerAC-22').html('&nbsp;question not posed in 2013 / Abigail');
         $('#answerHW-22').html('&nbsp;question not posed in 2013 / Abigail');
         $('#question23').html('&nbsp;Who among your siblings will marry last?&nbsp;');
         $('#answerAC-23').html('&nbsp;question not posed in 2013 / Harrison');
         $('#answerHW-23').html('&nbsp;question not posed in 2013 / Aidan');
         $('#question24').html('&nbsp;What % of your DNA is Panamanian? (Correct<br>&nbsp;answer is 6.25% or 1/16.)&nbsp;');
         $('#answerAC-24').html('&nbsp;question not posed in 2013 / 1/16');
         $('#answerHW-24').html('&nbsp;question not posed in 2013 / 1.7%');
         $('#question25').css('border-width', '1px 1px 4px 4px').html('&nbsp;Will you ever read a play by Shakespeare in its<br>&nbsp;entirety?&nbsp;');
         $('#answerAC-25').css('border-width', '1px 1px 4px 1px').html('&nbsp;question not posed in 2013 / yes');
         $('#answerHW-25').css('border-width', '1px 4px 4px 1px').html('&nbsp;question not posed in 2013 / yes');
    }
}
    
$(document).ready(mySetupFunction2);
$(window).resize(mySetupFunction2);



/* cause modal #22 on Aidan's page to randomly display one of three photos */ 
function chooseWeddingPicture() {
    
    var weddingPictures = ["images/2018august(1).JPG", "images/2018august(2).JPG", "images/2018august(3).JPG"];
    
     var randomNum = Math.floor(Math.random() * weddingPictures.length);
   
     document.querySelector("#mySpecialModal").src = weddingPictures[randomNum];
}
    
chooseWeddingPicture();


