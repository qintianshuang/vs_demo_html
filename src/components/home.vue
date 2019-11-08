<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  display:flex;
  flex-direction:row;
}
.homeList {
  width:200px;
  font-size:16px;
}
.homeListItem {
  width:150px;
  height:30px;
}
.homeList .listHead {
  width:150px;
}
/*.layout-header-bar {*/
/*  background: #fff;*/
/*  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);*/
/*}*/
/*.layout-logo-left {*/
/*  width: 90%;*/
/*  height: 30px;*/
/*  background: #5b6270;*/
/*  border-radius: 3px;*/
/*  margin: 15px auto;*/
/*}*/

.newList {
  padding: 0 24px 24px;
}
.newList .tabs {
  padding: 24px; minHeight: 1100px; background: #fff;
}

/*.el-menu-icon {*/
/*  transition: all 0.3s;*/
/*}*/
/*.rotate-icon {*/
/*  transform: rotate(-90deg);*/
/*}*/
/*.el-menu-item span {*/
/*  display: inline-block;*/
/*  overflow: hidden;*/
/*  width: 69px;*/
/*  text-overflow: ellipsis;*/
/*  white-space: nowrap;*/
/*  vertical-align: bottom;*/
/*  transition: width 0.2s ease 0.2s;*/
/*}*/
/*.el-menu-item i {*/
/*  transform: translateX(0px);*/
/*  transition: font-size 0.2s ease, transform 0.2s ease;*/
/*  vertical-align: middle;*/
/*  font-size: 16px;*/
/*}*/
/*.collapsed-menu span {*/
/*  width: 0px;*/
/*  transition: width 0.2s ease;*/
/*}*/
/*.collapsed-menu i {*/
/*  transform: translateX(5px);*/
/*  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;*/
/*  vertical-align: middle;*/
/*  font-size: 22px;*/
/*}*/
</style>
<template>
  <div class="layout">
    <Layout class="homeList">
      <el-row class="tac"
              :collapsed-width="1000">
        <el-col :span="12">
          <h5>自定义颜色</h5>
          <el-menu default-active="2"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   @close="handleClose"
                   @select="onclick"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b">
            <el-submenu class="listHead" :index="index"
                        v-for="(item , index) in menuList"
                        v-if="item.meta.menuShow"
                        :name="item.meta.menuName">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.meta.menuName}}</span>
              </template>

              <el-menu-item-group class="homeListItem" v-for="(itemChild , i) in item.children"
                                  :key="i"
                                  v-if="itemChild.meta.menuShow"
                                  :name="itemChild">
                <el-menu-item :index="itemChild.path">{{itemChild.meta.menuName}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </Layout>
    <Layout  class="newList">
      <Tabs class="tabs" v-model="tabIndex"
            type="card"
            closable
            @on-tab-remove="handleTabRemove"
            @on-click="onclickTabs">
        <TabPane v-for="(x , index) in tabList"
                 :label="x.meta.menuName"
                 :name="x.path"
                 :key="index"
                 v-if="!is">
          <div>
            <router-view></router-view>
          </div>
        </TabPane>
      </Tabs>
    </Layout>
  </div>
</template>
<script>

import Plan from './common/plan'
export default {
  data () {
    return {
      is: false,
      tabIndex: '1',
      tabName: '',
      isCollapsed: false,
      menuList: [],
      tabList: []
    }
  },
  components: {
    Plan
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    init () {
      this.$router.options.routes.forEach((item, index) => {
        this.menuList.push(item)
        item.children.forEach((value, index) => {
          value.is = true
          this.tabList.push(value)
        })
      })
      console.log(this.tabList)
    },
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    handleTabRemove (name) {
      this.tabList.map((v, k) => {
        console.log(v)
        if (name === v.path) {
          v.is = false
        }
      })
    },
    onclick (data) {
      this.tabList.map((v, k) => {
        debugger
        console.log(v)
        if (data === v.path) {
          v.is = true
          this.tabIndex = v.path
          this.$router.push(v.path)
        }
      })
    },
    onclickTabs (name) {
      this.tabList.forEach((item, index) => {
        if (name === item.path) {
          item.is = true
          this.tabIndex = item.path
          this.$router.push(item.path)
        }
      })
    }
  },
  created () {
    this.init()
  },
  mounted () {

  }
}
</script>
