
/**
 * Created by Lzhang on 2017/12/11.
 */
import swiper from '../../components/swiper/swiper'
//import getAwardDetail from '@/api/detail'
//console.log(getAwardDetail, '====================');
export default {
    components:{swiper},
    // props:['gameId','relativeId','isInstall'],
    data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        result:{
            detailInfo:'',
            url:'http://www.baidu.com',
            captureFiles:['11','22'],
        },
        detailImages:[
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516175526231&di=6a5d1f0640377b8629781beac4178fb7&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F0ff41bd5ad6eddc4583f4c0a38dbb6fd53663362.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516175526231&di=5c0e74d1fa712ed7f41f7a7c9d98101f&imgtype=0&src=http%3A%2F%2Fl.paipaitxt.com%2F118851%2F13%2F08%2F19%2F104_15780822_ab4b4e6cd89dd4f.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516175526230&di=a3700bd8e00451548b1817d9dbd6f3a5&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F1442%2Fntk-1442-14832.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516175526230&di=131ab5b1687da9b9286c7306df0e403d&imgtype=0&src=http%3A%2F%2Fpic3.bbzhi.com%2Fyouxibizhi%2Fyouxirenwu1920x1080%2Fgame_gamewall_226610_15.jpg"
        ],
        flag:3,
        isInstall:true,
        banners: [
            {
                url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516175526231&di=6a5d1f0640377b8629781beac4178fb7&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F0ff41bd5ad6eddc4583f4c0a38dbb6fd53663362.jpg",
                // isInstall:false

            },
            {
                url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516175526231&di=5c0e74d1fa712ed7f41f7a7c9d98101f&imgtype=0&src=http%3A%2F%2Fl.paipaitxt.com%2F118851%2F13%2F08%2F19%2F104_15780822_ab4b4e6cd89dd4f.jpg",
                //isInstall:false
            },
            {
                url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516175526230&di=a3700bd8e00451548b1817d9dbd6f3a5&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F1442%2Fntk-1442-14832.jpg",
                // isInstall:false
            },
            {
                url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516175526230&di=131ab5b1687da9b9286c7306df0e403d&imgtype=0&src=http%3A%2F%2Fpic3.bbzhi.com%2Fyouxibizhi%2Fyouxirenwu1920x1080%2Fgame_gamewall_226610_15.jpg",
                // isInstall:false
            },
        ]
    }
},
mounted() {
    // // this.home.changeCount();
    //  this.changeCount()
    this.getInfo()
},
methods:{
    getInfo(){
        //this.$axios.request({
        //     url:'/detail/name/5&relativeId=46',
        //     method:'GET',
        //     params:{
        //      gameId:gameId,
        //      relativeId:relativeId
        //    }
        //}).then(res=>{
        //    if(res.data.code==0){
        //     this.result=res.data;
        //   detailImages.push(result.captureFiles)
        //}
        //})
      //  const res = await getAwardDetail.getAwardDetail(5).catch(()=> {})

    },
//   download(result.downLoadUrl){
//    console.log('下载该游戏');
//      //  let url='result.downLoadUrl'
//      //  window.open(url)
//},
    download(url){
        console.log('下载该游戏')
    },
    open(url){
        console.log('打开该游戏');
        window.open(url)
    },
    goback(){
        this.$router.go(-1)
    }
},
computed: {

},

created(){

}

}