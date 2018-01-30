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
            titleList: [
                {'id':94,'name':'网游'},
                {'id':95,'name':'微端'},
                ],
            // 网游列表排行
            webGameList:[],
            webGameRanking:[],
            // 手游列表排行
            mobileGameList:[],
            mobileGameRanking:[],
            // 热门游戏列表开服时间
            hotGameList:[],
            hotGameRanking:[],
            // 角色扮演游戏列表排行
            rpgList:[],
            rpgRanking:[],
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
            ]
        }
    },
    created () {
        // this.getTitleLists();
    },
    computed: {

    },

    mounted() {
       // // this.home.changeCount();
       //  this.changeCount()
        this.getGameLists();
    },
    methods: {
        getGameLists () {
            // 接口地址在serviceUrl里
            getAwardDetail.getAwardDetail(93).then((res) => {
                console.log(res.data);
            this.webGameList = res.data.channels[0].modules[2].elements;
            console.log(this.webGameList);
            this.webGameRanking = res.data.channels[0].modules[6].elements;
            console.log(this.webGameRanking);
            this.mobileGameList = res.data.channels[0].modules[5].elements;
            console.log(this.mobileGameList);
            this.mobileGameRanking = res.data.channels[0].modules[8].elements;
            console.log(this.mobileGameRanking);
            // banners:[
            //     {
            //         url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
            //         isInstall:true,
            //         gameTitle:'测试',
            //         gameIntroduce:'测试',
            //         bannerTitle:'测试',
            //         bannerIntroduce:'测试'
            //     },
            //     ]
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