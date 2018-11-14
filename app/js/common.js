jQuery(function() {

	jQuery('.open-login').click(function() {
		$.fancybox.close();
		$.fancybox.open({
			src  : '#login-popup',
			type : 'inline',
			opts : {
				touch : false,
			}
		});
	});

	jQuery('.open-reg').click(function() {
		$.fancybox.close();
		$.fancybox.open({
			src  : '#reg-popup',
			type : 'inline',
			opts : {
				touch : false,
			}
		});
	});
	jQuery('.number-minus').click(function() {
		var input = jQuery(this).parent().find('.number-control__input');
				value = input.val();
				min 	= input.attr('min');
				step 	= jQuery(this).data('step');
				value = Number(value) - Number(step);
		if(min < value) {
			input.val(value);
		}
	});

	jQuery('.number-plus').click(function() {
		var input = jQuery(this).parent().find('.number-control__input');
				value = input.val();
				max 	= input.attr('max');
				step 	= jQuery(this).data('step');
				value = Number(value) + Number(step);
		if(max >= value) {
			input.val(value);
		}
	});

	jQuery('.number-bouble').click(function() {
		var input = jQuery(this).parent().find('.number-control__input');
				value = input.val();
				max 	= input.attr('max');
				value = Number(value) * 2;
		if(max >= value) {
			input.val(value);
		}
		if(max <= value) {
			input.val(max);
		}
		console.log(value);

	});

	jQuery(".hamburger").click(function(){
		$(this).toggleClass("is-active");
		$('.header .main-nav').toggleClass("show");
		$('.header-right').toggleClass("show");
	});
	function retnum(str) { 
		var num = str.replace(/[^0-9]/g, ''); 
		return parseInt(num,10); 
	}

	jQuery("#value-slider").roundSlider({
		radius: 147,
		width: 20,
		handleSize: "36",
		sliderType: "min-range",
		value: 50,
		endAngle: -90,
		startAngle: -90,
		max: 100,
		min: 0,

		create: function (args) {
			jQuery('.rs-handle').css({ 'transform': 'rotate(-450deg)'});
    },

		change: function (args) {
			var rotation = jQuery(".rs-bar")[0].style.transform;
					rotation = rotation.match(/\d+/)[0];
			console.log(rotation);
			jQuery('.rs-handle').css({ 'transform': 'rotate(-' + rotation + 'deg)'});
    },

    touch: function (args) {
			var rotation = jQuery(".rs-bar")[0].style.transform;
					rotation = rotation.match(/\d+/)[0];
			console.log(rotation);
			jQuery('.rs-handle').css({ 'transform': 'rotate(-' + rotation + 'deg)'});
    }
	});
});
