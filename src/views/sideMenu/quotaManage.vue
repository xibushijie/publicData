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
          <el-button type="primary" @click="onSubmit">
            <i class="el-icon-search"></i> 查询
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <el-button type="primary" icon="el-icon-circle-plus-outline">新增</el-button>
      <el-button type="info" icon="el-icon-error">批量删除</el-button>
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      formInline: {
        user: ""
      },
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>
