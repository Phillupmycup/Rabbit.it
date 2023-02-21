$(function() {

	'use strict';

  


	var contactForm = function() {

		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					email: {
						required: true,
						email: true
					},
          telephone: {
						required: true,
					  minlength: 8
					}
				},
				messages: {
					name: "Bitte geben Sie Ihren Namen ein",
          telephone: "Bitte geben Sie eine gültige Telefonnummer ein",
					email: "Bitte geben Sie eine gültige E-mail Adresse ein",
          accept: "Dies ist erforderlich &nbsp &nbsp",

				},
				/* submit via ajax */
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
						waitText = 'Übermitteln...';

					$.ajax({   	
				      type: "POST",
				      url: "../php/send-email.php",
				      data: $(form).serialize(),

				      beforeSend: function() { 
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeOut();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);
			               
			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	$('#form-message-warning').html("Es ist ein Fehler aufgetreten, bitte versuchen Sie es nochmals.");
				         $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });    		
		  		}
				
			} );
		}
	};
	contactForm();

   var logo = $(".navlogo").attr("src");

  $("#collapse1").hover(function () {
    $(this).prev("a").css("color", "rgb(180, 157, 229)");
    $(".navbar").css("background-color", "#000000");
    $(".navlogo").attr("src", "images/Logos/rabbit_it_redeye_ears.svg");
  
  },    function()  {
    $(this).prev("a").css("color", "rgb(218, 218, 218)");
    $(".navbar").css("background-color", "rgb(40, 42, 53)");
    $(".navlogo").attr("src", logo);
  }
  );
  
  $(".it").hover(function () {
    $(this).css("color", "rgb(180, 157, 229)");
    $(".navbar").css("background-color", "#000000");
    $(".navlogo").attr("src", "images/Logos/rabbit_it_redeye_ears.svg");
  },    function()  {
    $(this).css("color", "rgb(218, 218, 218)");
    $(".navbar").css("background-color", "rgb(40, 42, 53)");
    $(".navlogo").attr("src", logo);
  }
  );
  
  $("#collapse2").hover(function () {
      $(this).prev("a").css("color", "rgb(108, 221, 131)");
      $(".navbar").css("background-color", "#000000");
      $(".navlogo").attr("src", "images/Logos/rabbit_legal_redeye_ears.svg");
  },    function()  {
      $(this).prev("a").css("color", "rgb(218, 218, 218)");
      $(".navbar").css("background-color", "rgb(40, 42, 53)");
      $(".navlogo").attr("src", logo);
  }
  );
  
  $(".legal").hover(function () {
    $(this).css("color", "rgb(108, 221, 131)");
    $(".navbar").css("background-color", "#000000");
    $(".navlogo").attr("src", "images/Logos/rabbit_legal_redeye_ears.svg");
  },    function()  {
    $(this).css("color", "rgb(218, 218, 218)");
    $(".navbar").css("background-color", "rgb(40, 42, 53)");
    $(".navlogo").attr("src", logo);
  }
  );
  
  
  
  $("#collapse3").hover(function () {
    $(this).prev("a").css("color", "rgb(231, 121, 184)");
    $(".navbar").css("background-color", "#000000");
    $(".navlogo").attr("src", "images/Logos/rabbit_interact_redeye_ears.svg");
  },    function()  {
    $(this).prev("a").css("color", "rgb(218, 218, 218)");
    $(".navbar").css("background-color", "rgb(40, 42, 53)");
    $(".navlogo").attr("src", logo);
  }
  );
  
  $(".interact").hover(function () {
    $(this).css("color", "rgb(231, 121, 184)");
    $(".navbar").css("background-color", "#000000");
    $(".navlogo").attr("src", "images/Logos/rabbit_interact_redeye_ears.svg");
  },    function()  {
    $(this).css("color", "rgb(218, 218, 218)");
    $(".navbar").css("background-color", "rgb(40, 42, 53)");
    $(".navlogo").attr("src", logo);
  }
  );


  // -----------------------Legal Offers Page------------------------------

$("#headingOne").click(function () {

    if ($(this).find("span").first().text("X")) {
      $(this).find("span").first().text("V");
    }
    
    if ($(this).siblings().attr("class") !== "show") {
      $(this).find("span").first().text("X");
      $(this).parent().siblings().find("span:first-child").text("V");
    }
  });
  
  $("#headingTwo").click(function () {
    if ($(this).siblings().attr("class") !== "show") {
      $(this).find("span").first().text("X");
      $(this).parent().siblings().find("span:first-child").text("V");
    } else {
      $(this).find("span").first().text("V");
    }
  });

  $("#headingThree").click(function () {
    if ($(this).siblings().attr("class") !== "show") {
      $(this).find("span").first().text("X");
      $(this).parent().siblings().find("span:first-child").text("V");
    } else {
      $(this).find("span").first().text("V");
    }
  });

  $("#headingFour").click(function () {
    if ($(this).siblings().attr("class") !== "show") {
      $(this).find("span").first().text("X");
      $(this).parent().siblings().find("span:first-child").text("V");
    } else {
      $(this).find("span").first().text("V");
    }
  });

  $("#headingFive").click(function () {
    if ($(this).siblings().attr("class") !== "show") {
      $(this).find("span").first().text("X");
      $(this).parent().siblings().find("span:first-child").text("V");
    } else {
      $(this).find("span").first().text("V");
    }
  });

  $("#headingSix").click(function () {
    if ($(this).siblings().attr("class") !== "show") {
      $(this).find("span").first().text("X");
      $(this).parent().siblings().find("span:first-child").text("V");
    } else {
      $(this).find("span").first().text("V");
    }
  });

  $("#headingSeven").click(function () {
    if ($(this).siblings().attr("class") !== "show") {
      $(this).find("span").first().text("X");
      $(this).parent().siblings().find("span:first-child").text("V");
    } else {
      $(this).find("span").first().text("V");
    }
  });

  $("#headingEight").click(function () {
    if ($(this).siblings().attr("class") !== "show") {
      $(this).find("span").first().text("X");
      $(this).parent().siblings().find("span:first-child").text("V");
    } else {
      $(this).find("span").first().text("V");
    }
  });

  $("#headingNine").click(function () {
    if ($(this).siblings().attr("class") !== "show") {
      $(this).find("span").first().text("X");
      $(this).parent().siblings().find("span:first-child").text("V");
    } else {
      $(this).find("span").first().text("V");
    }
  });

  $("#headingTen").click(function () {
    if ($(this).siblings().attr("class") !== "show") {
      $(this).find("span").first().text("X");
      $(this).parent().siblings().find("span:first-child").text("V");
    } else {
      $(this).find("span").first().text("V");
    }
  });



  // var imgSrc = $("#diagramImg");

  // $("#headingOne").click(function () {
  //   if (imgSrc.attr("src") !== "images/1Select.PNG") {
  //     imgSrc.attr("src", "images/1Select.PNG");
  //     $(this).find("span").first().text("X");
  //     $(this).parent().siblings().find("span:first-child").text("V");
  //   } else {
  //     imgSrc.attr("src", "images/noneSelect.PNG");
  //     $(this).find("span").first().text("V");
  //   }
  // });
  
  // $("#headingTwo").click(function () {
  //   if (imgSrc.attr("src") !== "images/2Select.PNG") {
  //     imgSrc.attr("src", "images/2Select.PNG");
  //     $(this).find("span").first().text("X");
  //     $(this).parent().siblings().find("span:first-child").text("V");
  //   } else {
  //     imgSrc.attr("src", "images/noneSelect.PNG");
  //     $(this).find("span").first().text("V");
  //   }
  // });

  // $("#headingThree").click(function () {
  //   if (imgSrc.attr("src") !== "images/3Select.PNG") {
  //     imgSrc.attr("src", "images/3Select.PNG");
  //     $(this).find("span").first().text("X");
  //     $(this).parent().siblings().find("span:first-child").text("V");
  //   } else {
  //     imgSrc.attr("src", "images/noneSelect.PNG");
  //     $(this).find("span").first().text("V");
  //   }
  // });

  // $("#headingFour").click(function () {
  //   if (imgSrc.attr("src") !== "images/4Select.PNG") {
  //     imgSrc.attr("src", "images/4Select.PNG");
  //     $(this).find("span").first().text("X");
  //     $(this).parent().siblings().find("span:first-child").text("V");
  //   } else {
  //     imgSrc.attr("src", "images/noneSelect.PNG");
  //     $(this).find("span").first().text("V");
  //   }
  // });

  // $("#headingFive").click(function () {
  //   if (imgSrc.attr("src") !== "images/5Select.PNG") {
  //     imgSrc.attr("src", "images/5Select.PNG");
  //     $(this).find("span").first().text("X");
  //     $(this).parent().siblings().find("span:first-child").text("V");
  //   } else {
  //     imgSrc.attr("src", "images/noneSelect.PNG");
  //     $(this).find("span").first().text("V");
  //   }
  // });

  // $("#headingSix").click(function () {
  //   if (imgSrc.attr("src") !== "images/6Select.PNG") {
  //     imgSrc.attr("src", "images/6Select.PNG");
  //     $(this).find("span").first().text("X");
  //     $(this).parent().siblings().find("span:first-child").text("V");
  //   } else {
  //     imgSrc.attr("src", "images/noneSelect.PNG");
  //     $(this).find("span").first().text("V");
  //   }
  // });

  // $("#headingSeven").click(function () {
  //   if (imgSrc.attr("src") !== "images/7Select.PNG") {
  //     imgSrc.attr("src", "images/7Select.PNG");
  //     $(this).find("span").first().text("X");
  //     $(this).parent().siblings().find("span:first-child").text("V");
  //   } else {
  //     imgSrc.attr("src", "images/noneSelect.PNG");
  //     $(this).find("span").first().text("V");
  //   }
  // });

  // $("#headingEight").click(function () {
  //   if (imgSrc.attr("src") !== "images/8Select.PNG") {
  //     imgSrc.attr("src", "images/8Select.PNG");
  //     $(this).find("span").first().text("X");
  //     $(this).parent().siblings().find("span:first-child").text("V");
  //   } else {
  //     imgSrc.attr("src", "images/noneSelect.PNG");
  //     $(this).find("span").first().text("V");
  //   }
  // });

  // $("#headingNine").click(function () {
  //   if (imgSrc.attr("src") !== "images/9Select.PNG") {
  //     imgSrc.attr("src", "images/9Select.PNG");
  //     $(this).find("span").first().text("X");
  //     $(this).parent().siblings().find("span:first-child").text("V");
  //   } else {
  //     imgSrc.attr("src", "images/noneSelect.PNG");
  //     $(this).find("span").first().text("V");
  //   }
  // });

  // $("#headingTen").click(function () {
  //   if (imgSrc.attr("src") !== "images/10Select.PNG") {
  //     imgSrc.attr("src", "images/10Select.PNG");
  //     $(this).find("span").first().text("X");
  //     $(this).parent().siblings().find("span:first-child").text("V");
      
  //   } else {
  //     imgSrc.attr("src", "images/noneSelect.PNG");
  //     $(this).find("span").first().text("V");
  //   }
  // });


  
});







