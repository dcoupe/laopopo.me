var DOC = document, WIN = window;

YUI().use('node', 'pjax', 'anim', function (Y) {

  var pjax = new Y.Pjax({ container: '#wrapper' }),
    $ = Y.one,
    body = $('body'),
    t;

  pjax.on('navigate', function (e) {
    t = setTimeout(function() {
      $('#loading').setStyle('display', 'block');
      t = null;
    }, 1500);
  });

  pjax.on(['error', 'load'], function (e) {
    if (!t) {
      $('#loading').setStyle('display', 'none');
    } else {
      clearTimeout(t);
    }
  });


  $('#search .submit').on('click', function(e) {
    if (!$(this).ancestor('#search').one('input[name=key]').get('value')) e.preventDefault();
  });


  //qrcode
  var isQrcodeActive = 0;
  $('.qrcode').on('click', function() {
    var $this = $(this);
    (new Y.Anim({
      node: $this,
      to: {
          top: !isQrcodeActive ? '4px' : '-180px'
      },
      easing: isQrcodeActive ? 'easeIn' : 'bounceOut',
      duration: isQrcodeActive ? 0.15 : 0.8
    })).run().on('end', function() {
      isQrcodeActive = isQrcodeActive ? 0 : !0;
    });
  });

});

/*
$(function() {
  //pjax
  var timer, elLoad = $('#loading');

  $(DOC).pjax('.yui3-pjax', '#wrapper');

  $(DOC).on('pjax:send', function() {
    timer = setTimeout(function() {
      elLoad.show();
      timer = null;
    }, 1500);
  });

  $(DOC).on('pjax:complete', function() {
    if (!timer) {
      elLoad.hide();
    } else {
      clearTimeout(timer);
    }
  });

  //qrcode
  $('.qrcode').on('click', function() {
    var $this = $(this), isActive = $this.hasClass('active');
    $this.animate({'top': !isActive ? '4px' : '-180px'}, {
      duration: isActive ? 200 : 800,
      easing: isActive ? 'easeInQuad' : 'easeOutBounce',
      complete: function() {
        isActive ? $this.removeClass('active') : $this.addClass('active');
      }
    });
  });

  //搜索验证
  $('#search .submit').on('click', function() {
    if (!$(this).parent().find('input[name=key]').val()) return false;
  })

  //储存二维码状态
    

});
*/


/* YUI
YUI().use('node', 'pjax', 'anim', function (Y) {

  var pjax = new Y.Pjax({ container: '#left_con' }), body = Y.one('body'), t;

  pjax.on('navigate', function (e) {
    t = setTimeout(function() {
      Y.one('#loading').setStyle('display', 'block');
      t = null;
    }, 1500);
  });

  pjax.on(['error', 'load'], function (e) {
    if (!t) {
      Y.one('#loading').setStyle('display', 'none');
    } else {
      clearTimeout(t);
    }
  });

});
*/