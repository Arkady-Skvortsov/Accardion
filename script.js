document.querySelectorAll('.accordion-item__trigger').forEach((item) => {	
   item.addEventListener('click', () => {
      let parent = item.parentNode;
      
      if(parent.classList.contains('accordion__active')) {
      	 parent.classList.remove('accordion__active');
      } else {
      	document.querySelectorAll('.accordion-item').forEach((accord) => {
           accord.classList.remove('accordion__active');
      	});
      	parent.classList.add('accordion__active');
      }
   });
});