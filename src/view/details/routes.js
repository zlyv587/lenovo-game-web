/**
 * Created by Lzhang on 2017/12/11.
 */

const component = resolve => require(['./details.vue'], resolve);

export default[
    {
        path: '/details',
        name: 'details',
        component,
    }
]