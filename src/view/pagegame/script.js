/**
 * Created by Lzhang on 2017/12/11.
 */
import HotGame from "../pagegame/HotGame/index.vue"
import TypeGame from "../pagegame/TypeGame/index.vue"
import Header from "../../components/Header/header.vue"
import Swiper from "../../components/swiper/swiper.vue"
import getAwardDetail from '@/api/award/award-add'
export default {
    name:"appChoice",
    data () {
        return {
            titleList: [
                {'id':94,'name':'网游'},
                {'id':95,'name':'微端'},
            ],
            // 热门游戏列表排行
            hotGameList:[],
            hotGameRanking:[],
            // 角色扮演列表排行
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
        // this.getGameLists();

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
            getAwardDetail.getAwardDetail(95).then((res) => {
                console.log(res.data);
            this.hotGameList = res.data.channels[0].modules[2].elements;
            // console.log(this.hotGameList);
            this.hotGameRanking = res.data.channels[0].modules[6].elements;
            // console.log(this.hotGameRanking);
            this.rpgList = res.data.channels[0].modules[4].elements;
            console.log(this.rpgList);
            this.rpgRanking = res.data.channels[0].modules[7].elements;
            // console.log(this.rpgRanking);

        })
        }
    },
    components: {
        'vHotGame':HotGame,
        'vTypeGame':TypeGame,
        'vHeader':Header,
        'vSwiper':Swiper
    }
}