/**
 * Created by Lzhang on 2017/12/11.
 */
import swiper from "../../components/swiper/swiper.vue"
import getAwardDetail from '@/api/award/award-add'

export default {
    data () {
        return {
            banner:[],
            banners:[
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

                  // this.banner=res.data.channels[0].modules[1].elements;
                  // this.banners[0].url=this.banner[0].poster;
                  // this.banners[1].url=this.banner[1].poster;
                  // this.banners[2].url=this.banner[2].poster;
                  // this.banners[3].url=this.banner[3].poster;
                  // console.log(res.data.channels[0].modules[2]);
                  this.recommends=res.data.channels[0].modules[2].elements.slice(0,8);
              })
        },
        seeMore(){
            this.$router.push({ path: '/recommend', params: {}})
        }
    },
    components:{
        'vswiper':swiper
    }
}