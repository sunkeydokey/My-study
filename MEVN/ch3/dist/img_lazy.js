document.addEventListener('DOMContentLoaded', function () {
  // 1. DOM이 모두 로딩되었을 때의 이벤트.
  let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
  // 2. 유사배열인 NodeList를 slice 얕은 복사를 통해 빈 배열에 넣어 진짜 배열로 만든다.
  let active = false;
  // 3. active 플래그로 저화질 이미지를 버리고 고화질 이미지를 불러올지 결정한다. 그 후 setTimeout을 통해 반복적으로 2번에서 만든 저화질 이미지 리스트들을 업데이트하며 확인하는 작업을 반복한다.
  const lazyLoad = function () {
    if (active === false) {
      active = true;
      setTimeout(() => {
        // 4. 스크롤 이벤트가 발생했을 때 200ms 후에 저화질 이미지 리스트들을 확인한다.
        lazyImages = lazyImages
          .map((lazyImage) => {
            if (lazyImage.getBoundingClientRect().top <= window.innerHeight && window.getComputedStyle(lazyImage).display !== 'none') {
              // 5. window.innerHeight와 getBoundingClientRect().top을 비교한다.
              // 비교한 후 자신이 지금 보고 있는 화면에 이미지가 들어왔는지 확인한다.
              lazyImage.src = lazyImage.dataset.src;
              // 6. src를 dataset에 설정해놓은 원래의 고화질 이미지를 수정해서 불러온다.
              lazyImage.classList.remove('lazy');
              // lazy 클래스를 지우고
              return null;
              // object를 null로 바꿔서 반환한다.
            } else return lazyImage;
          })
          .filter((image) => image);
        // null로 정의된 요소가 배열에서 없어지게 만든다.
        if (!lazyImages.length) {
          // 7. 배열의 요소들이 모두 없어지면 이 이벤트를 스크롤 이벤트에서 제거한다.
          document.removeEventListener('scroll', lazyLoad);
        } else active = false;
      }, 200);
    }
  };
  document.addEventListener('scroll', lazyLoad);
});
