// A $( document ).ready() block.
$(document).ready(function() {
  // grab all quick apply links
  var validLinks = $('.one_click_apply');

  // activate the next page button at the bottom
  $('#pagination-button-next').bind('click', function() {
    window.location.href = $(this).attr('href');
  });

  // scroll smoothly to the bottom
  var scrollToTheBottom = function() {
    // scroll to the bottom
    var y = $(window).scrollTop(); //your current y position on the page

    $('html, body').animate(
      {
        scrollTop: $(window).top - 500000,
      },
      500
    );
  };

  // when complete with a page, wait 2 seconds then move on
  var moveOn = function() {
    scrollToTheBottom();
    setTimeout(function() {
      $('#pagination-button-next').click();
    }, 1200);
    $('#pagination-button-next').css('background-color', 'blue');
  };

  // congratulate me for automating my work
  var congratulate = function() {
    setTimeout(function() {
      update('congrats, you just applied for ' + validLinks.length + ' jobs');
    }, 2000);
  };

  // update the message to myself on whats happening
  var update = function(message) {
    // kill old one
    $('.message').remove();

    // create new one
    var div = document.createElement('div');
    div.setAttribute('class', 'message');
    div.style.width = 'auto';
    div.style.height = '50px';
    div.style.background = 'rgba(75, 115, 175, 1)';
    div.style.background = 'linear-gradient(to right bottom, blue, green);)';
    div.style.color = 'white';
    div.style.padding = '20px';
    div.style.position = 'absolute';
    div.style.top = '0px';
    div.style.left = '0px';
    div.style.borderRadius = '5px';
    div.style.zIndex = '500';
    div.innerHTML = message;

    // add new one
    var bodytag = document.getElementsByClassName('main_site_header');
    $(bodytag).append(div);
  };
  update('lets find you a job, Jonathan ');

  // apply for all valid one click apply jobs based on the filters I have set
  var applyForAllValidJobs = function() {
    $.each($('.one_click_apply'), function(i, el) {
      $(el).css('background-color', 'purple');

      // scroll to the next valid job
      setTimeout(function() {
        $('html, body').animate(
          {
            scrollTop: $(el).offset().top - 450,
          },
          500
        );

        $(el).css('background-color', 'red');
        $(el).click();
      }, 2000 + i * 2000);
    });

    setTimeout(function() {
      update(
        'congrats, you just applied for ' +
          validLinks.length +
          ' jobs, moving to the next page.'
      );
      scrollToTheBottom();
      moveOn();
    }, 3000 + validLinks.length * 2000);
  };

  update('found ' + validLinks.length + ' valid links');
  var linktotal = validLinks.length;
  if (linktotal >= 1) {
    update('found ' + linktotal + ' valid job(s), applying for you');
    applyForAllValidJobs(function() {
      update(
        'congrats! you just automatically applied for ' +
          linktotal +
          ' valid job(s)'
      );
    });
  } else {
    update('no valid jobs here, moving on');
    scrollToTheBottom();
    moveOn();
  }
});
