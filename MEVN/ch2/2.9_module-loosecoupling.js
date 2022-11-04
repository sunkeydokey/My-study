const cook = {
  create: (recipe) => recipe.start(),
};

const pasta = {
  start: () => console.log('파스타 요리'),
};

const steak = {
  start: () => console.log('스테이크 요리'),
};

cook.create(pasta);
cook.create(steak);

// 상위 모듈인 cook 이 메뉴를 받아 그저 실행하는 공간이 되게 해야 한다.
