<template>
  <el-menu background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen"
           @close="handleClose" :collapse="isCollapse">
    <h3>通用后台管理系统</h3>
    <el-menu-item @click="clickMenu(item.path)" :index="item.name" v-for="item in noChildren" :key="item.name">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu :index="item.label" v-for="item in hasChildren" :key="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :index="subItem.name">
        <el-menu-item @click="clickMenu(subItem.path)" :index="subItem.name">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100vh;
  h3{
    color: aliceblue;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      MenuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mail',
          name: 'mail',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面',
              icon: 'setting',
              url: 'other/PageOne',
            },
            {
              path: '/page2',
              name: 'page2',
              label: "页面2",
              icon: 'setting',
              url: 'other/PageTwo'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(path){
      if(this.$route.path !== path && !(this.$route.path==='/home' && path==='/')){
        this.$router.push(path)
      }
    }
  },
  computed: {
    //没有子菜单
    noChildren() {
      return this.MenuData.filter(item => !item.children)
    },
    //有子菜单
    hasChildren() {
      return this.MenuData.filter(item => item.children)
    }
  }
}
</script>