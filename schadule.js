const pv = document.getElementById('main-s2-schadule');
function setSchadule(){
    const dd = document.getElementById('dday')
    if (dd = "DAY1") {
        pv.innerHTML = `
    <article>
        <section>18:00</section>
        <section>출국(인천공항)✈</section>
    </article>
    <article>
        <section>22:30</section>
        <section>코타키나발루 입성⭐</section>
    </article>
    <article>
        <section>숙소</section>
        <section>숙소ㄱㄱ(마리나코트)</section>
    </article>`
    }else if(dd = "DAY2"){
        pv.innerHTML = `
        <article>
    <section>숙소</section>
    <section>마리나코트</section>
</article>
<article>
    <section>식당</section>
    <section>신키 바쿠테</section>
</article>
<article>
    <section>식당</section>
    <section>케다이 코피 이펑</section>
</article>
<article>
    <section>관광</section>
    <section>시티 모스크</section>
</article>
<article>
    <section>관광</section>
    <section>가야 스트리트</section>
</article>
<article>
    <section>쇼핑</section>
    <section>이마고 쇼핑몰</section>
</article>
<article>
    <section>관광</section>
    <section>시바 주립 모스크</section>
</article>
<article>
    <section>관광</section>
    <section>제셀톤 포인트</section>
</article>
        `
    }else if(dd = "DAY3"){
        pv.innerHTML = `
        <article>
    <section>숙소</section>
    <section>마리나코트</section>
</article>
<article>
    <section>관광</section>
    <section>사피 섬</section>
</article>
<article>
    <section>쇼핑</section>
    <section>나이트 푸드 마켓</section>
</article>
        `
    }else if(dd = "DAY4"){
        pv.innerHTML = `
        <article>
    <section>숙소</section>
    <section>마리나코트</section>
</article>
<article>
    <section>쇼핑</section>
    <section>선데이 마켓</section>
</article>
<article>
    <section>쇼핑</section>
    <section>센터 포인트 시바</section>
</article>
<article>
    <section>식당</section>
    <section>쌍천 씨푸드 레스토랑</section>
</article>
<article>
    <section>관광</section>
    <section>탄중 아루 해변</section>
</article>
        `
    }else if(dd = "DAY5"){
        pv.innerHTML = `
        <article>
    <section>23:40</section>
    <section>한국으로✈(코타 국제공항)/화요일 새벽 6시 도착</section>
</article>
        `
    }else if(dd = "DAY6"){
        pv.innerHTML = `
<article>
    <section>00:00</section>
    <section>비행기 둥실둥실🛫</section>
</article>
<article>
    <section>06:00</section>
    <section>귀국(인천공항)/한국 도착!</section>
</article>
        `
    }
};
setSchadule();
