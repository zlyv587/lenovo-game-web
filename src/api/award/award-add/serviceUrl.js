/**
 * Created by zhang on 2017/5/17.
 */
export default {
    addAward: '/lepro/admin/award',
    editAward(id){
        return `/lepro/admin/award/${id}`
    },
    getAwardDetail(id){
        return `/lepro/admin/award/${id}`
    },
}
