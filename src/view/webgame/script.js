/**
 * Created by Lzhang on 2017/12/11.
 */

export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            isShow:false
        }
    },
    computed: {

    },
    mounted() {
       // // this.home.changeCount();
       //  this.changeCount()
    },
    methods: {
		isIn(){
			this.isShow=true;
		}
    }
}