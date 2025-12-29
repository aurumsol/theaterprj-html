// Change active date
document.querySelectorAll('.date').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.date').forEach(d => d.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  
  // Handle showtime click
  function selectShow(time) {
    // You can store selected show/time in localStorage if needed
    alert("Selected show: " + time); 
    // Then navigate to seat selection
    window.location.href = "seat-selection.html";
  }
  