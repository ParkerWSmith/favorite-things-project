$(document).ready(function () {

    const addStuffHere = "#addstuff";
    const subjectHeaders = 'h2';
    const createMyFavThings = function (subject, description, videoID, figText, myClass) {

        const favVideoID = "#" + videoID;

        $(addStuffHere).append('<div class="row">');
        $(addStuffHere).append('<div id= "' + videoID + '" class="col-xs-6 col-md-4">');
        $(favVideoID).append('<h2 id="' + subject + '">' + subject + '</h2>')
        $(subjectHeaders).hide();
        $(favVideoID).append('<p class="' + myClass + '">' + description + '</p>');
        $('p').hide();
        $(addStuffHere).append('<div id="video ' + videoID + ' " class="col-xs-6 col-md-4">');
        $(favVideoID).append('<iframe class="' + myClass + '" src="https://www.youtube.com/embed/' + videoID + '"></iframe>');
        $('iframe').hide();
        $(addStuffHere).append('<figcaption class="' + myClass + '">' + figText + '</figcaption');
        $('figcaption').hide();

        //Click events

        $('#Travel').click(function () {
            $('.worldtravel').show();
            $('.gaming').hide();
            $('.musiccontent').hide();
            $('.pets').hide();
        });

        $('#Gaming').click(function () {
            $('.gaming').show();
            $('.worldtravel').hide();
            $('.musiccontent').hide();
            $('.pets').hide();
        });

        $('#Music').click(function () {
            $('.musiccontent').show();
            $('.gaming').hide();
            $('.worldtravel').hide();
            $('.pets').hide();
        });

        $('#Pets').click(function () {
            $('.pets').show();
            $('.worldtravel').hide();
            $('.gaming').hide();
            $('.musiccontent').hide();
        });
    }

    $.getJSON("myThings.json", function (data) {
        var item;
        $.each(data.myThings, function (index, item) {
            createMyFavThings(item.subject, item.description, item.videoID, item.figText, item.myClass);
        });
    });

    $('#addstuff').append('<button id="favoritethingbutton">Click here to see my favorite things</button>');

    $('button').click(function () {
                $(this).remove();
        $(subjectHeaders).show();
    });


});
