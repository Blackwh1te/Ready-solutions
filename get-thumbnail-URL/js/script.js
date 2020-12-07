
    $('.field-name-field-video .field-item').each(function(index) {
      let thumbnailURL = $(this).find('iframe').attr('src').match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
      setTimeout(function() {
        $(`.lSGallery li:eq(${index - 1}) img`).attr('src', `http://img.youtube.com/vi/${thumbnailURL}/1.jpg`);
      }, 1000);
    });
