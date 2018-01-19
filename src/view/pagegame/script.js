/**
 * Created by Lzhang on 2017/12/11.
 */
import HotGame from "../pagegame/HotGame/index.vue"
import TypeGame from "../pagegame/TypeGame/index.vue"
import Header from "../../components/Header/header.vue"
import Swipe from "../../components/swiper/swiper.vue"
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
        'vHotGame':HotGame,
        'vTypeGame':TypeGame,
        'vHeader':Header,
        'vSwipe':Swipe
    }
}