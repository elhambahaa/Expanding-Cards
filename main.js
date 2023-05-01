function expand(img) {
    
    const imgs = document.querySelectorAll('.img');
    imgs.forEach(i => {
       
      if (i !== img) {
        i.classList.remove('expanded');
      } else {
        i.classList.toggle("expanded");
      }
    });
    
  }
  
     