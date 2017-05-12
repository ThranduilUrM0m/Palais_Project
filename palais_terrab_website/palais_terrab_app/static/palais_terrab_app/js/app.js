var total_height = $('.header').height();
$('.first_section-no-bg').css("padding-top", total_height);

$("#frame [class*='emo-']").on("click", function(){
	if($(this).attr('class') === 'emo-mad'){
		$('.overlay_emo_mad').css('background-color', '#f9de13');

		$('.overlay_emo_sad').css('background-color', 'transparent');
		$('.overlay_emo_surprised').css('background-color', 'transparent');
		$('.overlay_emo_happy').css('background-color', 'transparent');
		$('.overlay_emo_excited').css('background-color', 'transparent');
	}
	else if($(this).attr('class') === 'emo-sad'){
		$('.overlay_emo_sad').css('background-color', '#f9de13');

		$('.overlay_emo_mad').css('background-color', 'transparent');
		$('.overlay_emo_surprised').css('background-color', 'transparent');
		$('.overlay_emo_happy').css('background-color', 'transparent');
		$('.overlay_emo_excited').css('background-color', 'transparent');
	}
	else if($(this).attr('class') === 'emo-surprised'){
		$('.overlay_emo_surprised').css('background-color', '#f9de13');

		$('.overlay_emo_mad').css('background-color', 'transparent');
		$('.overlay_emo_sad').css('background-color', 'transparent');
		$('.overlay_emo_happy').css('background-color', 'transparent');
		$('.overlay_emo_excited').css('background-color', 'transparent');
	}
	else if($(this).attr('class') === 'emo-happy'){
		$('.overlay_emo_happy').css('background-color', '#f9de13');

		$('.overlay_emo_mad').css('background-color', 'transparent');
		$('.overlay_emo_sad').css('background-color', 'transparent');
		$('.overlay_emo_surprised').css('background-color', 'transparent');
		$('.overlay_emo_excited').css('background-color', 'transparent');
	}
	else if($(this).attr('class') === 'emo-excited'){
		$('.overlay_emo_excited').css('background-color', '#f9de13');
		
		$('.overlay_emo_mad').css('background-color', 'transparent');
		$('.overlay_emo_sad').css('background-color', 'transparent');
		$('.overlay_emo_surprised').css('background-color', 'transparent');
		$('.overlay_emo_happy').css('background-color', 'transparent');
	}
});

//<![CDATA[
    $(window).on('load', function() { // makes sure the whole site is loaded
        $('.demo-1').delay(320).fadeOut('slow'); // will fade out the white DIV that covers the website.
    })
//]]>