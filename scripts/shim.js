document.addEventListener('contextmenu', function(e) {
  if (e.target.id === 'canvas') e.preventDefault();
});
(function() {
  var select = document.getElementById('servers');
  if (select && select.options.length <= 1) {
    select.innerHTML = '<option value="">Select Server ...</option>';
  }
})();
