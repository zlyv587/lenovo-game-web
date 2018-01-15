import axios from 'axios';
import storage from '../../common/storage.js';

export default {
    data() {
        return {

        };
    },
    methods: {
        handleCommand(command) {
            if (command === 'loginout') {
                this.logout();
            }
            if (command === 'editPassword') {
                this.editPassword();
            }
        },
        async logout() {
            console.log(333, this.userName);
            const res = await axios.get('/pyramid/user/logout', {params: {userName: this.userName}}).catch(() => {
            });
            if (res.data.code === 200) {
                storage.local.removeItem('user');
                this.$router.replace('/login');
                console.log('退出成功');
            } else {
                vm.$message.error('退出失败');
            }
        },
        editPassword() {
            this.$router.push('/edit_password');
        },
        // xj add
        switchSpread() {
            this.isActive = !this.isActive;
            this.$bus.$emit('collapsed', this.isActive);
        }
    }
};
