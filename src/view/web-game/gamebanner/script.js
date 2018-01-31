/**
 * Created by Lzhang on 2017/12/11.
 */
import swiper from "../../../components/swiper/swiper.vue"

export default {
    data () {
        return {
            banners:[],
        }
    },
    props:['gamebanners'],
    computed: {

    },
    mounted() {
       // // this.home.changeCount();
       //  this.changeCount()
    },
    methods: {

    },
    components:{
        'vswiper':swiper
    }
}