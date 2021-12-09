function getApod(){
   var date = $('#date').val()
   $.ajax({
      type: "GET",
      url: `https://api.nasa.gov/planetary/apod?api_key=1smXQq2I9HaJBSmVAQPc1yT7ylgQyXQEOuMGmUp4&date=${date}`,

      success: function (response) {

         
         var divExplanation = $('<img src="'+response.url+'">, <p>"'+response.explanation+'"</p>')
         
        $('#info-apod').html(divExplanation);

      }
   });
}


