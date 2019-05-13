<template>
  <div>
    <el-card shadow="hover" class="box-card">
      <i class="el-icon-search"></i>搜索条件
      <el-divider></el-divider>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="指标体系名称：">
          <el-select v-model="formInline.region" placeholder="请输入/选择指标体系">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            <el-option label="区域三" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select class="frame" v-model="formInline.region" placeholder="全部">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onsubmit()">
            <i class="el-icon-search"></i> 搜索
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
.frame {
  width: 120px;
}
</style>
