<template>
  <el-container class="main">
    <el-header>公共数据-绩效评估</el-header>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <!-- <el-container>
            <el-aside width="200px">
                <el-menu background-color="#38484D" text-color="#fff">
                    <el-menu-item>
                        <router-link tag="li" to="/quotaManage">指标管理</router-link>
                    </el-menu-item>
					<el-menu-item>
                        <router-link tag="li" to="/assessmentManage">考核管理</router-link>
                    </el-menu-item>
					<el-menu-item>
                        <router-link tag="li" to="/assessmentResult">考核结果</router-link>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
    </el-container>-->
  </el-container>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      data: [
        {
          label: "指标管理"
          //   children: [
          //     {
          //       label: "二级 1-1",
          //       children: [
          //         {
          //           label: "三级 1-1-1"
          //         }
          //       ]
          //     }
          //   ]
        },
        {
          label: "考核管理"
          //   children: [
          //     {
          //       label: "二级 2-1",
          //       children: [
          //         {
          //           label: "三级 2-1-1"
          //         }
          //       ]
          //     },
          //     {
          //       label: "二级 2-2",
          //       children: [
          //         {
          //           label: "三级 2-2-1"
          //         }
          //       ]
          //     }
          //   ]
        },
        {
          label: "考核结果"
          //   children: [
          //     {
          //       label: "二级 3-1",
          //       children: [
          //         {
          //           label: "三级 3-1-1"
          //         }
          //       ]
          //     },
          //     {
          //       label: "二级 3-2",
          //       children: [
          //         {
          //           label: "三级 3-2-1"
          //         }
          //       ]
          //     }
          //   ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>

<style lang="less" scoped>
.sideMenu {
  li {
    text-align: center;
    height: 35px;
    line-height: 35px;
    &:hover {
      background-color: #059ddb;
    }
  }
}
</style>
