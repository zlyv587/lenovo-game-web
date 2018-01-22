/**
 * Created by Lzhang on 2017/12/11.
 */
import ChoiceWe from "./ChoiceWechat/index.vue"
import ChoiceMo from "./ChoiceMobile/index.vue"
import Header from "../../components/Header/header.vue"
import Swiper from "../../components/swiper/swiper.vue"
export default {
    name:"appChoice",
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            styleObject: {
                marginBottom:'20px',
            }
        }
    },
    computed: {

    },
    mounted() {
       // // this.home.changeCount();
       //  this.changeCount()

    },
    methods: {

    },
    components: {
        'weGame':ChoiceWe,
        'moGame':ChoiceMo,
        'Header':Header,
        'Swiper':Swiper
    }
}