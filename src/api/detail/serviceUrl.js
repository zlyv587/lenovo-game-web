/**
 * Created by zhang on 2017/5/17.
 */
export default {
    addAward: '/detail/name?gameId=5&relativeId=46',
    editAward(id){
    return `/indexChannel/${id}?relativeId=46`
},
getAwardDetail(id){
    return `/detail/name?gameId=${id}&relativeId=46`
},
}
