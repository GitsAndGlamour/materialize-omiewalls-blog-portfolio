$(document).ready(function () {
    /* Theme Controller */
    $(".theme-links").click(function () {
        var $href, $theme;
        $theme = $(this).text().toLowerCase();
        if ($(this).text() == "Default") {
            $href = "http://bootswatch.com/flatly/bootstrap.min.css";
        } else {
            $href = "http://bootswatch.com/" + $theme + "/bootstrap.min.css";
        }
        $("#bootstrapcdn-link").prop("href", $href);
        console.log($href);
    });

    /* Blog Controller */
    $(".blog-types").click(function (event) {
        event.preventDefault();
        var $type = $(this).text();
        var $iframe;
        var $script = $('<script id="medium-script" async src="https://static.medium.com/embed.js"></script><a class="m-profile" href="https://medium.com/@TheLefty">Omie Walls</a>');
        if ($type == 'Medium') {
            $iframe = "";
            $("#blog-iframe").hide();
            $("#medium-blog").append($script);

        } else {
            $("#medium-blog").empty();
            $("#blog-iframe").show();
            if ($type == 'Career') {
                $iframe = "http://thelefthandedrightclicker.blogspot.com/";
            } else if ($type == 'Personal') {
                $iframe = "http://disfunctionallygreat.blogspot.com/";
            } else if ($type == 'Art') {
                $iframe = "http://omieart.tumblr.com/";
            } else if ($type == 'Tumblr') {
                $iframe = "http://thelefty.tumblr.com/";
            } else if ($type == 'Blogger') {
                $iframe = "http://thelefthandedrightclicker.blogspot.com/";
            } else {
                $iframe = "";
            }
            document.getElementById("blog-iframe").src = $iframe;
            console.log($type, $iframe);
        }
    });
   
    /* Portfolio Controller */
    
});