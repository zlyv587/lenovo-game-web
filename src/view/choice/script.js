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
            styleObject: {
                marginBottom:'20px',
                width:'100%',

            },
            gameList: [
                {'id':94,'name':'网游'},
                {'id':95,'name':'微端'},
                ],
            titleList:[
                {txt:'最强女主播开团'},
                {txt:'最强女主播开团'},
                {txt:'最强女主播开团'},
                {txt:'最强女主播开团'},
                {txt:'最强女主播开团'},
                {txt:'最强女主播开团'},
            ],
            mobileList:[
                {
                    name:'魔兽世界',
                    txt:'开局一把刀刀刀',
                    isa:'安装'
                },{
                    name:'魔兽世界',
                    txt:'开局一把刀刀刀',
                    isa:'安装'
                },{
                    name:'魔兽世界',
                    txt:'开局一把刀刀刀',
                    isa:'安装'
                }
            ],
            banners:[
                {
                    url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
                    isInstall:'测试',
                    gameTitle:'测试',
                    gameIntroduce:'测试',
                    bannerTitle:'测试',
                    bannerIntroduce:'测试'
                },
                {
                    url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
                    isInstall:'测试',
                    gameTitle:'测试',
                    gameIntroduce:'测试',
                    bannerTitle:'测试',
                    bannerIntroduce:'测试'
                },
                {
                    url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
                    isInstall:'测试',
                    gameTitle:'测试',
                    gameIntroduce:'测试',
                    bannerTitle:'测试',
                    bannerIntroduce:'测试'
                },
                {
                    url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
                    isInstall:'测试',
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
        this.getTitleLists();
    },
    methods: {
        getTitleLists () {
            // 接口地址在serviceUrl里
            getAwardDetail.getAwardDetail(93).then((res) => {
                console.log(res.data)
                console.log(this.titleList)
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