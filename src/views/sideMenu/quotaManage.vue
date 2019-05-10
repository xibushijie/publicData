<template>
    <div>
        <el-card shadow="hover" class="box-card">
            <i class="el-icon-search"></i>搜索条件
            <el-divider></el-divider>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="审批人">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit"><i class="el-icon-search"></i> 查询</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script type="text/javascript">
export default {
    data() {
        return {
            formInline: {
                user: ""
            }
        };
    },
    mounted() {},
    methods: {}
};
</script>

<style scoped>
</style>
