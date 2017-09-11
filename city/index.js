(function () {
  const $cityWrap = $('.j_city_wrap');
  const $citySelect = $('.j_city_select');
  const $cityList = $('.j_city_list');

  $citySelect.on('focus', function () {
    $cityList.removeClass('hide');
    $.getJSON( "./city.json", function( data ) {
      const cityData = data.all;
      let str = '';
      cityData.forEach(item => {
        str += `<li data-id="${item.code}">${item.name}</li>`;
      });
      $cityList.html(str);
      $cityList.on('click', function (e) {
        e.stopPropagation();
        const id = e.target.dataset.id;
        if (id) {
          const content = e.target.innerText;
          $citySelect.val(content);
          $cityList.addClass('hide');
        }
      });
    });
  });

  document.onclick = function (e) {
    if (e.target.tagName === 'HTML' || e.target.tagName === 'BODY') {
      $cityList.addClass('hide');
    }
  };

})();