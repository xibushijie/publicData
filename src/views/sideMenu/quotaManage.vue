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

    <el-card class>
      <el-button @click="onAdded" type="primary">
        <i class="el-icon-circle-plus-outline"></i>
        新增
      </el-button>
      <el-button type="info">
        <i class="el-icon-error"></i>
        批量删除
      </el-button>
      <el-divider></el-divider>
      <el-table
        border
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column label="指标体系名称" width="320">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="指标体系描述" width="300"></el-table-column>
        <el-table-column prop="address" label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">
              <i class="el-icon-view"></i>
            </el-button>
            <el-button type="text" size="small">
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button type="text" size="small">
              <i class="el-icon-date"></i>
            </el-button>
            <el-button type="text" size="small">
              <i class="el-icon-delete"></i>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      formInline: {
        user: ""
      },
      tableData3: [
        {
          date: "数据归集",
          name: "数据归集体系"
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
  methods: {
    onAdded() {
      // window.open("./quotaManage/indexes");
      this.$router.push({ path: "/quotaManage/indexes" });
      console.log(111);
    },
    onsubmit() {},
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped>
.box-card {
  margin-bottom: 30px;
}
.block {
  text-align: center;
}
</style>
