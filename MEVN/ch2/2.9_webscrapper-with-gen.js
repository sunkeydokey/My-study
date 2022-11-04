const Nightmare = require('nightmare');
const vo = require('vo');
const nightmare = Nightmare({
  show: true,
});
const BASE_URL = 'https://grafolio.naver.com/category/painting';
const GRAFOLIO_URL = `${BASE_URL}#category_popular_creator`;

function* run() {
  // 그라폴리오 url로 접속해 스크롤
  yield nightmare.goto(GRAFOLIO_URL);
  let prevHeight,
    currHeight = 0;
  while (prevHeight !== currHeight) {
    prevHeight = currHeight;
    currHeight = yield nightmare.evaluate(() => document.body.scrollHeight);
    yield nightmare.scrollTo(currHeight, 0).wait(3000);
  }

  // thumb 클래스를 가진 a태그 DOM을 모두 선택하여 href 속성을 가져와 map을 통해 다른 문자열을 가진 배열로 변환
  const exploreNightmare = nightmare.evaluate(() =>
    Array.from(document.querySelectorAll('a.thumb')).map((element) => `https://grafolio.naver.com${element.getAttribute('href')}`)
  );
  // 배열 출력
  console.log(exploreNightmare);
  yield nightmare.end();
}

vo(run)(() => console.log('scraping done.'));
