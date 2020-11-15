function sonnetFunction() {
    
    var y = document.getElementById('owst'); 
    
        if (window.matchMedia('(max-width: 767px)').matches) {
   
            y.style.fontSize = '150%';
        }
    
        else {
    
            y.style.fontSize = '100%';
        }
    
    }

sonnetFunction();