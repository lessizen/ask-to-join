

function superHover(hoveree, changer) {
  $(hoveree).hover(function() {
    $(changer).css('opacity', 1)
  }, function() {
    $(changer).css('opacity', 0)
  })
}


superHover('.v0', '.v0_en')
superHover('.v1', '.v1_en')
superHover('.v2', '.v2_en')
superHover('.v3', '.v3_en')
superHover('.v4', '.v4_en')
superHover('.v5', '.v5_en')
superHover('.v6', '.v6_en')
superHover('.v7', '.v7_en')
superHover('.v8', '.v8_en')
superHover('.v9', '.v9_en')
superHover('.v10', '.v10_en')
superHover('.11', '.v11_en')



inView('.point2').on('enter', function(){
  $('.point2').css('color', 'blue')
});
