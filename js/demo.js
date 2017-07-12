$(function()
{
  /* Demo generation */

  $("#organizeFavoritesList > li")
      .each(
          function(i, e)
          {
            var $item = $(this);
            var title = $item.find(".fullTitle:eq(0)").text();
            $item
                .append("<a tabindex='0' role='button' class='fav-drag-handle' id='remove"
                    + i
                    + "' href='javascript:void(0);'>"
                    + "<i class='fa fa-bars' aria-hidden='true'></i>"
                    + "<span class='sr-only'>Change position for "
                    + title
                    + "</span></a>");
            $item
                .prepend("<a class='site-favorite-btn' href='javascript:void(0);' >"
                    + "<i class='site-favorite-icon site-favorite' aria-hidden='true'></i>"
                    + "<span class='sr-only'>Add "
                    + title
                    + " to favorites</span>" + "</a>");
          });
  
  $('a[role=button]').keydown(function (event) {
    console.log("test");
    if (event.keyCode === 32) {
        event.preventDefault();
        $(this).click();
    }
    return true;
});

  $("#organizeFavoritesList").keyboardSortable({
    items: "li:not(.favorites-max-marker)",
    handle: ".fav-drag-handle",
    keyboardHandle: ".fav-drag-handle"
  });
});