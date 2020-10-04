//cancelling the to-do
$("ol").on("click","li",function()
{
  $(this).toggleClass("completed");
});

//delete to-do
$("ol").on("click", "span", function(event)
{
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event)
{
    if(event.which === 13)
    {
        var todoText = $(this).val();
        $(this).val("");
        $("ol").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + " </li>")
    }
})
