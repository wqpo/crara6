function toggleLunchMenu() {
    var moreText = document.querySelector('.more-info-lunch .more-text');
    var dots = document.querySelector('.more-info-lunch .dots');
    
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      dots.style.display = "none";
    } else {
      moreText.style.display = "none";
      dots.style.display = "inline";
    }
  }
  
  function toggleDinnerMenu() {
    var moreText = document.querySelector('.more-info-dinner .more-text');
    var dots = document.querySelector('.more-info-dinner .dots');
    
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      dots.style.display = "none";
    } else {
      moreText.style.display = "none";
      dots.style.display = "inline";
    }
  }
  