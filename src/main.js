import './style.css';

const shoes = {
  daily: [
    { id: 'cumulus', brand: 'ASICS', name: 'GEL-CUMULUS 26', type: '데일리 러닝화', price: '₩179,000', drop: '8 mm', weight: '255 g', cushion: 72, response: 48, stability: 68, x: 25, y: 30, color: '#7bc7bc', badge: '안정적인 매일의 러닝', note: '부드러움과 안정감의 균형' },
    { id: 'pegasus', brand: 'NIKE', name: 'PEGASUS 41', type: '데일리 러닝화', price: '₩169,000', drop: '10 mm', weight: '251 g', cushion: 64, response: 62, stability: 56, x: 57, y: 46, color: '#5b75e9', badge: '가장 다재다능한 선택', note: '일상부터 템포까지 함께' },
    { id: '1080', brand: 'NEW BALANCE', name: 'FRESH FOAM X 1080v14', type: '데일리 러닝화', price: '₩189,000', drop: '6 mm', weight: '235 g', cushion: 91, response: 43, stability: 45, x: 77, y: 21, color: '#ef8b7a', badge: '구름 같은 쿠셔닝', note: '회복주에 특히 좋은 편안함' },
    { id: 'ghost', brand: 'BROOKS', name: 'GHOST 16', type: '데일리 러닝화', price: '₩169,000', drop: '12 mm', weight: '269 g', cushion: 58, response: 42, stability: 82, x: 20, y: 68, color: '#e5bc63', badge: '든든한 안정감', note: '예측 가능한 부드러운 착화감' },
    { id: 'clifton', brand: 'HOKA', name: 'CLIFTON 9', type: '데일리 러닝화', price: '₩179,000', drop: '5 mm', weight: '248 g', cushion: 79, response: 51, stability: 51, x: 66, y: 70, color: '#b687db', badge: '가볍고 풍성하게', note: '긴 거리에도 부담 없는 경량화' }
  ],
  super: [
    { id: 'supernova', brand: 'ADIDAS', name: 'ADIZERO PRIME X 2.0', type: '슈퍼트레이너', price: '₩359,000', drop: '6.5 mm', weight: '295 g', cushion: 94, response: 90, stability: 48, x: 75, y: 24, color: '#ef8b7a', badge: '최대 쿠셔닝 · 최대 추진력', note: '롱런을 위한 에너지 보존' },
    { id: 'sc', brand: 'NEW BALANCE', name: 'FUELCELL SUPERCOMP TRAINER v3', type: '슈퍼트레이너', price: '₩279,000', drop: '6 mm', weight: '261 g', cushion: 88, response: 80, stability: 65, x: 47, y: 38, color: '#5b75e9', badge: '오래 달릴수록 빛나는', note: '부드러운 롤링감의 장거리 파트너' },
    { id: 'skyward', brand: 'HOKA', name: 'SKYWARD X', type: '슈퍼트레이너', price: '₩369,000', drop: '5 mm', weight: '320 g', cushion: 97, response: 72, stability: 60, x: 84, y: 67, color: '#7bc7bc', badge: '압도적인 보호력', note: '느린 롱런에 최적화된 맥시멀' },
    { id: 'zoomfly', brand: 'NIKE', name: 'ZOOM FLY 6', type: '슈퍼트레이너', price: '₩219,000', drop: '8 mm', weight: '265 g', cushion: 70, response: 86, stability: 50, x: 25, y: 70, color: '#e5bc63', badge: '속도 훈련의 즐거움', note: '템포런을 견인하는 반응성' }
  ],
  race: [
    { id: 'alphafly', brand: 'NIKE', name: 'ALPHAFLY 3', type: '레이싱화', price: '₩389,000', drop: '8 mm', weight: '218 g', cushion: 89, response: 98, stability: 36, x: 82, y: 24, color: '#ef8b7a', badge: '마라톤 레이스 데이', note: '기록을 향한 폭발적인 추진력' },
    { id: 'pro4', brand: 'ADIDAS', name: 'ADIZERO ADIOS PRO 4', type: '레이싱화', price: '₩329,000', drop: '6 mm', weight: '200 g', cushion: 74, response: 96, stability: 42, x: 58, y: 42, color: '#5b75e9', badge: '풀코스 기록 경신', note: '가볍고 빠른 최상급 레이서' },
    { id: 'vaporfly', brand: 'NIKE', name: 'VAPORFLY 3', type: '레이싱화', price: '₩299,000', drop: '8 mm', weight: '198 g', cushion: 68, response: 92, stability: 40, x: 32, y: 65, color: '#e5bc63', badge: '짧고 빠른 레이스', note: '10K부터 하프까지 날렵하게' },
    { id: 'metaspeed', brand: 'ASICS', name: 'METASPEED SKY PARIS', type: '레이싱화', price: '₩319,000', drop: '5 mm', weight: '183 g', cushion: 66, response: 94, stability: 45, x: 19, y: 31, color: '#7bc7bc', badge: '가장 가벼운 질주', note: '스트라이드 러너를 위한 설계' }
  ]
};

let category = 'daily';
let selected = shoes.daily[1];

const app = document.querySelector('#app');
const categoryLabels = { daily: ['01', '데일리 러닝화', '매일의 편안한 달리기'], super: ['02', '슈퍼트레이너', '긴 훈련을 위한 추진력'], race: ['03', '레이싱화', '기록을 위한 가장 빠른 선택'] };

function shoeVisual(shoe, small = false) {
  return `<div class="shoe-visual ${small ? 'small' : ''}" style="--shoe:${shoe.color}"><span class="heel"></span><span class="upper"></span><span class="sole"></span><b>${shoe.brand[0]}</b></div>`;
}

function render() {
  const list = shoes[category];
  if (!list.some(s => s.id === selected.id)) selected = list[0];
  const label = categoryLabels[category];
  app.innerHTML = `
    <main>
      <header>
        <a class="logo" href="#"><span>RUN</span>MAP<i></i></a>
        <nav><a class="active">SHOE MAP</a><a>GUIDE</a><a>ABOUT</a></nav>
        <button class="saved" aria-label="저장한 러닝화">♡ <span>저장함</span></button>
      </header>
      <section class="hero">
        <p class="eyebrow">YOUR RUNNING, MAPPED</p>
        <h1>오늘의 달리기에<br/><em>딱 맞는 한 켤레.</em></h1>
        <p class="intro">러닝화는 숫자보다 느낌이 먼저입니다.<br/>두 개의 축 위에서 나만의 러닝화를 찾아보세요.</p>
      </section>
      <section class="categories" aria-label="러닝화 카테고리">
        ${Object.entries(categoryLabels).map(([key, [num, title, desc]]) => `<button class="cat ${key === category ? 'chosen' : ''}" data-category="${key}"><span class="num">${num}</span><strong>${title}</strong><small>${desc}</small><i>↗</i></button>`).join('')}
      </section>
      <section class="map-area">
        <div class="map-head"><div><p class="eyebrow">${label[0]} / SHOE LANDSCAPE</p><h2>${label[1]} <span>${list.length}</span></h2></div><p>점을 눌러<br/>러닝화를 비교하세요 <b>↓</b></p></div>
        <div class="map-layout">
          <div class="map-wrap">
            <div class="axis-y"><span>안정감</span><span>자유로운 착화감</span></div>
            <div class="map-grid">
              <div class="quadrant q1">보호력과<br/>편안함</div><div class="quadrant q2">부드러운<br/>쿠셔닝</div><div class="quadrant q3">안정적인<br/>리듬</div><div class="quadrant q4">경쾌한<br/>반응성</div>
              <div class="cross horizontal"></div><div class="cross vertical"></div>
              ${list.map(shoe => `<button class="pin ${selected.id === shoe.id ? 'selected' : ''}" data-shoe="${shoe.id}" style="--x:${shoe.x}%;--y:${shoe.y}%;--shoe:${shoe.color}" aria-label="${shoe.name}"><span class="pin-dot"></span><span class="pin-name">${shoe.name}</span></button>`).join('')}
            </div>
            <div class="axis-x"><span>편안한 쿠셔닝</span><span>빠른 반응성</span></div>
          </div>
          <aside class="detail" style="--accent:${selected.color}">
            <div class="detail-top"><span>${selected.type}</span><button aria-label="저장">♡</button></div>
            <div class="product-art">${shoeVisual(selected)}<div class="art-circle"></div></div>
            <p class="brand">${selected.brand}</p><h3>${selected.name}</h3><p class="tag">${selected.badge}</p>
            <p class="description">${selected.note}</p>
            <div class="metrics">${[['쿠셔닝', selected.cushion], ['반응성', selected.response], ['안정성', selected.stability]].map(([n,v]) => `<div><span>${n}</span><b>${v}</b><i><em style="width:${v}%"></em></i></div>`).join('')}</div>
            <div class="specs"><span><b>WEIGHT</b>${selected.weight}</span><span><b>DROP</b>${selected.drop}</span><span><b>PRICE</b>${selected.price}</span></div>
            <button class="view-btn">상세 스펙 보기 <span>→</span></button>
          </aside>
        </div>
      </section>
      <footer><span>RUN MAP © 2025</span><span>RUN WITH INTENTION</span></footer>
    </main>`;
  document.querySelectorAll('[data-category]').forEach(b => b.onclick = () => { category = b.dataset.category; selected = shoes[category][0]; render(); });
  document.querySelectorAll('[data-shoe]').forEach(b => b.onclick = () => { selected = list.find(s => s.id === b.dataset.shoe); render(); });
}
render();
