/**
 * Created by Lzhang on 2017/12/11.
 */
export default {
    name:"app",
    data () {
        return {

        }
    },
    props: ['options'],
    computed: {

    },
    mounted() {

    },
    methods: {
        seeMore(){
            this.$router.push({ path: '../../recommend', params: {}})
        }
    },
}
