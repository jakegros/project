<script>
window.onclick = function(event) {
  if (event.target.matches('.dropbtn')) {
    var dropbuttons = document.getElementsByClassName("dropbtn");
    for (var i = 0; i < dropbuttons.length; i++) {
      var openDropdown = dropbuttons[i];
      if (openDropdown.classList.contains('show') && !event.target.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    event.target.classList.toggle("show");
  }
}
  </script>
