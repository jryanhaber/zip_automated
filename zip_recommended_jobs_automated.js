// apply for all suggested jobs

var validLinks = $('.t_one_click_apply');
$(validLinks).css('background-color', 'purple');
console.log(validLinks);

$.each($('.t_one_click_apply'), function(i, el) {
  $(el).css('background-color', 'purple');

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

  console.log('congrats, you just applied for ' + validLinks.length + ' jobs');
});

// for searched jobs
