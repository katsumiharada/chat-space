$(function(){
  function buildHTML(message){
    // message.image ==  ? "var image =`<img class="lower-message__image" src="${message.image}">`" : "var image =``"
    if (message.image){
      var image = `<img class="lower-message__image" src="${message.image}">`
    }else{ 
      var image = ``
    }
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    <div class="lower-message__image">
                      ${image}
                    </div>
                  </div>
                </div>`
    return html;
  }


  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(message){
      console.log(message)
      var html = buildHTML(message);
      $('.messages').append(html);
      $(".form__submit").prop('disabled', false);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    });
  });
})
