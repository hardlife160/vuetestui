<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <!-- <el-menu :default-openeds="['1', '3']" :default-active="'1-1'">
                 <el-submenu index="1">
                     <template slot="title"><i class="el-icon-message"></i>导航一</template>
                     <el-menu-item index="1-1">选项1</el-menu-item>
                     <el-menu-item index="1-2">选项2</el-menu-item>
                   <el-submenu index="1-3">
                     <template slot="title"><i class="el-icon-message"></i>选项1-3</template>
                     <el-menu-item index="1-3-1">选项3-1</el-menu-item>
                     <el-menu-item index="1-3-2">选项3-2</el-menu-item>
                   </el-submenu>
                 </el-submenu>
             </el-menu>-->
            <el-menu router :default-openeds="['0','1']">
                <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''" v-if="item.show">
                    <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
                    <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path" :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>

    </el-container>

</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>