<template>
    <div class="contact-head">
        <img src="../../assets/img/contactway.png" alt="">
        <h2>联系方式</h2>
        <p>杭州信使网络科技有限公司是软件云服务提供商，拥有自己专业的开发团队，注册资本为人民币1000万元；是一家以云服务为导向的创新型科技企业。
            我们没有悠久的历史，但我们拥有一批行业内最优秀的年轻人，高效的研发团队、高素质的客户管理人员和先进的软件云服务运营模式。</p>
    </div>
    <div class="flex-contact">
        <div class="flex-item flex-item-phone">0571-87290000</div>
        <div class="flex-item flex-item-news">www.ataw.cn</div>
        <div class="flex-item flex-item-address">杭州市西湖区三墩镇振华路<br>198号西城博司8幢9楼</div>
    </div>
</template>
<script>
    export default{

    }
</script>
<style>
.contact-head{
    img{ width: 69px; height: 74px; display: block; margin: 50px auto 40px;}
    h2{ text-align: center; font-size: 35px;color: #434343;}
    p{ width: 1030px; margin: 20px auto; font-size: 16px; color: #666; font-family: simsun; line-height: 1.8em; padding: 0 30px; box-sizing: border-box}
}
.flex-contact{
    display: flex;
    width: 830px;
    margin: 120px auto 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}
    .flex-item{ font-size: 20px; color: #666; text-align: center;}
    .flex-item::before{ content: " "; display: block; width: 80px; height: 80px; margin: 0 auto 30px; background-position: center;}
    .flex-item-phone::before{ background-image: url("../../assets/icon/icon_phone.png")}
    .flex-item-news::before{background-image: url("../../assets/icon/icon_news.png")}
    .flex-item-address::before{ background-image: url("../../assets/icon/icon_map.png")}
</style>