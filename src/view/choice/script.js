/**
 * Created by Lzhang on 2017/12/11.
 */
import ChoiceWe from "./ChoiceWechat/index.vue"
import ChoiceMo from "./ChoiceMobile/index.vue"
import Header from "../../components/Header/header.vue"
import swiper from "../../components/swiper/swiper.vue"
import getAwardDetail from '@/api/award/award-add'
export default {
    name:"appChoice",
    data () {
        return {
            // 轮播图
            banners:[
                {
                    url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
                    isInstall:true,
                    gameTitle:'测试',
                    gameIntroduce:'测试',
                    bannerTitle:'测试',
                    bannerIntroduce:'测试'
                },
                {
                    url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
                    isInstall:false,
                    gameTitle:'测试',
                    gameIntroduce:'测试',
                    bannerTitle:'测试',
                    bannerIntroduce:'测试'
                },
                {
                    url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
                    isInstall:false,
                    gameTitle:'测试',
                    gameIntroduce:'测试',
                    bannerTitle:'测试',
                    bannerIntroduce:'测试'
                },
                {
                    url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
                    isInstall:false,
                    gameTitle:'测试',
                    gameIntroduce:'测试',
                    bannerTitle:'测试',
                    bannerIntroduce:'测试'
                },
            ],
            // 网游微端及排行列表
            defineChildData: [
                {title: '', rankTitle:'', list: [], rank: []},
                {title: '', rankTitle:'', list: [], rank: []},
            ],
            // 手游列表及排行
            mobileGame: {title:'', rankTitle:'', list:[], rank:[]},

    }},
    created () {
        // this.getTitleLists();
    },
    computed: {

    },
    mounted() {
        this.getGameLists();
    },
    methods: {
        getGameLists () {
            // 接口地址在serviceUrl里
            getAwardDetail.getAwardDetail(93).then((res) => {
                console.log(res.data);
                // 网游(网游标题、列表、网游排行标题，排行列表)
                this.defineChildData[0].title = res.data.channels[0].modules[2].moduleTitle;
                this.defineChildData[0].list = res.data.channels[0].modules[2].elements;
                this.defineChildData[0].rankTitle = res.data.channels[0].modules[6].moduleTitle;
                this.defineChildData[0].rank = res.data.channels[0].modules[6].elements;
                // 微端（微端标题、列表、微端排行标题，排行列表）
                this.defineChildData[1].title = res.data.channels[0].modules[4].moduleTitle;
                this.defineChildData[1].list = res.data.channels[0].modules[4].elements;
                this.defineChildData[1].rankTitle = res.data.channels[0].modules[7].moduleTitle;
                this.defineChildData[1].rank = res.data.channels[0].modules[7].elements;
                // 手游（手游标题、列表、手游排行标题，排行列表）
                this.mobileGame.title = res.data.channels[0].modules[5].moduleTitle;
                this.mobileGame.list = res.data.channels[0].modules[5].elements;
                this.mobileGame.rankTitle = res.data.channels[0].modules[8].moduleTitle;
                this.mobileGame.rank = res.data.channels[0].modules[8].elements;
                console.log(this.defineChildData)
            })
        }
    },
    components: {
        'vWeGame':ChoiceWe,
        'vMoGame':ChoiceMo,
        'vHeader':Header,
        'vSwiper':swiper
    }
}