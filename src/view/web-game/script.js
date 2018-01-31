/**
 * Created by Lzhang on 2017/12/11.
 */
import getAwardDetail from '@/api/award/award-add'
import gamebanner from "./gamebanner/index.vue"
import recbanner from "./recbanner/index.vue"
export default {
    data () {
        return {
            gamebanners:[
                {
                    url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
                    isInstall:'',
                    gameTitle:'',
                    gameIntroduce:'',
                    bannerTitle:'',
                    bannerIntroduce:''
                },
                {
                    url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
                    isInstall:'',
                    gameTitle:'',
                    gameIntroduce:'',
                    bannerTitle:'',
                    bannerIntroduce:''
                },
                {
                    url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
                    isInstall:'',
                    gameTitle:'',
                    gameIntroduce:'',
                    bannerTitle:'',
                    bannerIntroduce:''
                },
                {
                    url:'http://smtv-cms.oss-cn-beijing.aliyuncs.com/cms/2018-01-25/201801251416138731366.png',
                    isInstall:'',
                    gameTitle:'',
                    gameIntroduce:'',
                    bannerTitle:'',
                    bannerIntroduce:''
                }],
            recbanners:[],
            recommends:[]
        }
    },
    computed: {

    },
    mounted() {
       // // this.home.changeCount();
       //  this.changeCount()
        this.getWebGames();
    },
    methods: {
        getWebGames() {
              getAwardDetail.getAwardDetail(94).then((res) => {
                  this.recbanners=res.data.channels[0].modules[2].elements;
                  // this.gamebanners[0].url=this.banner[0].poster;
                  // this.gamebanners[1].url=this.banner[1].poster;
                  // this.gamebanners[2].url=this.banner[2].poster;
                  // this.gamebanners[3].url=this.banner[3].poster;
                  // console.log(res.data.channels[0].modules[2]);
                  // this.recommends=res.data.channels[0].modules[2].elements.slice(0,8);
              })
        },
        seeMore(){
            this.$router.push({ path: '/recommend', params: {}})
        }
    },
    components:{
        'gamebanner':gamebanner,
        'recbanner':recbanner
    }
}