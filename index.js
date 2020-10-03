$(function() {
    $('.js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const newItem = $('#shopping-list-entry').val();

      $("#submit").click(function(){
        $(<li>
            <span class="shopping-item"> ${newItem} </span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
             <span class="button-label">delete</span>
            </button>
            </div>
        </li>
        ).appendTo(".shopping-list")})
    })

    $(".shopping-item-delete").click(function() {
        $(".shopping-item").remove()
     })
})
