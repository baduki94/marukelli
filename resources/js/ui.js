function tabJs(tabContainer){
	var tabclick = $(tabContainer).find(".tabclick");
	tabclick.click(function(){
		var curObj = this;
		var $this = $(this);
		tabclick.each(function(){
			if(this==curObj){
				if(this.href.split("#").length>1) 
				$("#"+this.href.split("#")[1]).show(); 
				tabclick.parent().removeClass("current");
				$this.parent().addClass("current");					
			}else{
				if(this.href.split("#").length>1) 
				$(tabContainer).find("#"+this.href.split("#")[1]).css({'display':'none'}) ;
			}
		});return false;
	})
}



//datepicker 달력
function datepicker(){
	$.datepicker.regional['ko'] = {
		closeText: '',
		prevText: '이전달',
		nextText: '다음달',
		currentText: '오늘',
		monthNames: ['01','02','03','04','05','06월','07','08','09','10','11','12'],
		monthNamesShort: ['01','02','03','04','05','06월','07','08','09','10','11','12'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin:['일','월','화','수','목','금','토'],
		dateFormat: 'yy-mm-dd',
		firstDay: 0,
		isRTL: false,
		changeYear: false,
		changeMonth: false,
		showMonthAfterYear: true,
		showButtonPanel: false,
		yearSuffix: '',
		monthSuffix: '',

	};
	$.datepicker.setDefaults($.datepicker.regional['ko']);
	$( '.datepic' ).datepicker({dateFormat: 'yy-mm-dd'});
}
