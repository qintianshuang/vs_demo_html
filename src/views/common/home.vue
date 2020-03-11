<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.ivu-layout i {
  max-width: 100%;
}
</style>
<template>
  <div class="layout">
    <Layout style="max-width:100%;max-height:100%">
      <Sider ref="side1"
             hide-trigger
             collapsible
             :collapsed-width="78"
             v-model="isCollapsed">
        <Menu active-name="1-2"
              theme="dark"
              width="auto"
              accordion
              :class="menuitemClasses"
              @on-select="onclick">
          <Submenu v-for="(item, index) in menuList"
                   v-if="item.meta.menuShow"
                   :name="item.meta.menuName"
                   :key="index">
            <template slot="title">
              <Icon :type="item.meta.menuStyle" /><span>{{item.meta.menuName}}</span>
            </template>
            <MenuItem v-for="(itemChild , index) in item.children"
                      :key="index"
                      v-if="itemChild.meta.menuShow"
                      :name="itemChild.path">
            <Icon :type="itemChild.meta.menuStyle" /><span>{{itemChild.meta.menuName}}</span>
            </MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{padding: '0 24px 24px'}">
        <Tabs v-model="tabIndex"
              type="card"
              :before-remove="beforeRemove"
              closable
              :style="{padding: '0px', minHeight: '800px', background: '#fff'}"
              @on-click="onclickTabs">
          <TabPane v-for="(x , index) in tabList"
                   :label="x.meta.menuName"
                   :name="x.path"
                   :key="index">
            <router-view></router-view>
          </TabPane>
        </Tabs>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabIndex: '1',
      tabName: '',
      isCollapsed: false,
      menuList: [],
      tabList: []
    }
  },
  components: {
    // Plan
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
      })
      console.log(this.tabList)
    },
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    beforeRemove (name) {
      this.handleTabRemove(name)
      let promise = false
      return promise
    },
    handleTabRemove (name) {
      debugger
      this.tabList.splice(name, 1)
      console.log(this.tabList)
      // let arr = this.tabList
      // this.tabList = []
      // arr.map((v, k) => {
      //   if (name !== k) {
      //     // key = true
      //     this.tabList.push(v)
      //   }
      // })
    },
    onclick (data) {
      let key = false
      this.tabList.map((v, k) => {
        if (data === v.path) {
          key = true
          this.tabIndex = v.path
          this.$router.push(v.path)
        }
      })
      if (!key) {
        this.menuList.map((value, k) => {
          value.children.map((v, k) => {
            if (data === v.path) {
              // v.is = true
              this.tabList.push(v)
              this.tabIndex = v.path
              this.$router.push(v.path)
            }
          })
        })
      }
      console.log(this.tabList)
    },
    onclickTabs (name) {
      this.tabIndex = name
      this.$router.push(name)
    }
  },
  created () {
    this.init()
  }
}
</script>
