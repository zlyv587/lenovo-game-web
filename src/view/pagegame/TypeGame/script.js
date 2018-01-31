/**
 * Created by Lzhang on 2017/12/11.
 */
export default {
    name:"app",
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    props:['options','hotGame'],
    computed: {

    },
    mounted() {
       // // this.home.changeCount();
       //  this.changeCount()

    },
    methods: {
        seeMore(){
            this.$router.push({ path: '../../recommend', params: {}})
        }
    },
}