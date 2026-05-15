(function() {
    var select = document.getElementById('servers');
    if (select) {
        select.innerHTML = '<option id="ffa1" value="0.0.0.0:0" selected>3RB.io FFA</option>';
    }

    var adminMsg = document.getElementById('admin_message');
    if (adminMsg) {
        adminMsg.style.display = 'none';
    }
})();
