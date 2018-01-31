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
            // 角色扮演战争策略游戏及排行列表
            defineChildData: [
                {title: '', rankTitle:'', list: [], rank: []},
                {title: '', rankTitle:'', list: [], rank: []},
            ],
            // 热门游戏列表及排行
            hotGame: {title:'', rankTitle:'', list:[], rank:[]},
        }
    },
    created () {

    },
    computed: {

    },
    mounted() {
        this.getGameLists();
    },
    methods: {
        getGameLists () {
            // 接口地址在serviceUrl里
            getAwardDetail.getAwardDetail(95).then((res) => {
                console.log(res.data);
                // 热游（热游标题、列表，今日开服、今日开服列表）
                this.hotGame.title = res.data.channels[0].modules[2].moduleTitle;
                this.hotGame.list = res.data.channels[0].modules[2].elements;
                this.hotGame.rankTitle = res.data.channels[0].modules[6].moduleTitle;
                this.hotGame.rank = res.data.channels[0].modules[6].elements;
                // console.log(this.defineChildData);
                // 角色扮演(角色扮演标题、列表，页游热度排行标题、页游热度列表)
                this.defineChildData[0].title = res.data.channels[0].modules[4].moduleTitle;
                this.defineChildData[0].list = res.data.channels[0].modules[4].elements;
                this.defineChildData[0].rankTitle = res.data.channels[0].modules[7].moduleTitle;
                this.defineChildData[0].rank = res.data.channels[0].modules[7].elements;
                // 战争策略（战争策略标题、列表，最近更新排行标题，最近更新排行列表）
                this.defineChildData[1].title = res.data.channels[0].modules[5].moduleTitle;
                this.defineChildData[1].list = res.data.channels[0].modules[5].elements;
                this.defineChildData[1].rankTitle = res.data.channels[0].modules[8].moduleTitle;
                this.defineChildData[1].rank = res.data.channels[0].modules[8].elements;
            })
        },
        seeMore(){
            this.$router.push({ path: '../../recommend', params: {}})
        }
    },
    components: {
        'vHotGame':HotGame,
        'vTypeGame':TypeGame,
        'vHeader':Header,
        'vSwiper':Swiper
    }
}