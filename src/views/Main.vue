<template>
 <div>
     <el-container>
       <el-aside width="200px">
         <common_aside></common_aside>
       </el-aside>
       <el-container>
         <el-header>
           <common_header></common_header>
         </el-header>
         <el-main>
           <!-- 路由出口 -->
           <!-- 路由匹配到的组件将渲染在这里 -->
           <router-view></router-view>
         </el-main>
         <el-footer>Footer</el-footer>
       </el-container>
     </el-container>
 </div>
</template>

<script>
import common_aside from "@/components/common_aside.vue";
import common_header from '@/components/common_header.vue';
export default {
  data(){
    return{}
  },
  components:{
    common_aside,
    common_header
  }
}
</script>


<style lang="less">
.el-header{
  padding: 0;
}
</style>