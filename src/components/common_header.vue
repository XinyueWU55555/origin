<template>
  <div class="container">
    <div class="left_content">
      <el-button icon="el-icon-menu" size="mini"></el-button>
<!--      面包屑区域-->
      <span class="text">首页</span>
    </div>
    <div class="right_content">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="less">
.container{
  padding: 0 20px;
  height: 60px;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text{
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }
}
</style>