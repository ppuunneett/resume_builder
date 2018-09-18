$('document').ready(function() {
    $('.add_another').click(function() {
        $("#tbl").append('<tr><td><input type="text" class="txtbox" value="" placeholder="name"/></td><td><textarea name="pdisc" cols="70" rows="2" placeholder="description"></textarea></td></tr>');
    });
})