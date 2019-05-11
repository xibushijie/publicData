<template>
  <div>
    <el-card shadow="hover" class="box-card">
      <i class="el-icon-search"></i>搜索条件
      <el-divider></el-divider>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="指标体系名称">
          <el-input v-model="formInline.user" placeholder="请输入指标体系名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onsubmit()">
            <i class="el-icon-search"></i> 查询
          </el-button>
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

<style lang='less' scoped>
</style>
