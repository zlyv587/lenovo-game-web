/**
 * Created by Lzhang on 2017/12/11.
 */
import getAwardDetail from '@/api/award/award-add'
export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    computed: {

    },
    mounted() {
       // // this.home.changeCount();
       //  this.changeCount()
    },
    methods: {
        getWebGames() {
            getAwardDetail.getAwardDetail(93).then((res) => {
                console.log(res.data.channels);
            })
        }
    }
}