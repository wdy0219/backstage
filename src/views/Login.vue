<template>
    <div>
        <el-form :model="form" label-width="120">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },

        methods: {
            login() {
                this.$http.post('api/permission/getMenu', this.form).then(res => {
                    res = res.data
                    console.log(res);
                    if (res.code === 2000) {
                        this.$store.commit('clearMenu')
                        this.$store.commit('setMenu', res.data.menu)
                        this.$store.commit('setToken', res.data.token)
                        this.$store.commit('addMenu', this.$router)
                        this.$router.push({name: 'home'})
                    }else {
                        this.$message.warning(res.data.message)
                    }

                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn {
    text-align: center;
}

.el-form {
    margin: 0 auto;
    width: 50%;
    height: 300px;
    
}
</style>
