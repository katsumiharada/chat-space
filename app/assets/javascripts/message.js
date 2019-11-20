$.ajax({
  url: (取得したリクエストURL),  //同期通信でいう『パス』
  type: 'POST',  //同期通信でいう『HTTPメソッド』
  data: (取得したFomeData),  
  dataType: 'json',
  processData: false,
  contentType: false
})