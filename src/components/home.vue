<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
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
</style>
<template>
  <div class="layout">
    <Layout>
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

          <Submenu v-for="(item , index) in $router.options.routes"
                   v-if="item.meta.menuShow"
                   :name="item.meta.menuName">
            <template slot="title">
              <Icon :type="item.meta.menuStyle" /><span>{{item.meta.menuName}}</span>
            </template>
            <MenuItem v-for="(itemChild , index) in item.children"
                      :key="index"
                      v-if="itemChild.meta.menuShow"
                      :name="itemChild">
            <Icon :type="itemChild.meta.menuStyle" /><span>{{itemChild.meta.menuName}}</span>
            </MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{padding: '0 24px 24px'}">
        <Tabs v-model="tabIndex"
              type="card"
              closable
              :style="{padding: '24px', minHeight: '1100px', background: '#fff'}"
              @on-tab-remove="handleTabRemove"
              @on-click="onclickTabs"
              value="tabIndex">
          <TabPane :label="itemMenu.meta.menuName"
                   v-for="(itemMenu , index) in menuList"
                   :key="index"
                   :v-if="'tab' + index"
                   value="tabIndex">
            <div>
              <router-view></router-view>
            </div>
          </TabPane>
        </Tabs>
      </Layout>
    </Layout>
  </div>
</template>
<script>

import Plan from './common/plan'
export default {
  data () {
    return {
      tabIndex: '',
      tabName: '',
      isCollapsed: false,
      menuList: []
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
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    handleTabRemove (name) {
      // this['tab' + name] = false
      // debugger
      // if (this.menuList.length > 0) {
      //   let menuList = this.menuList
      //   this.menuList = []
      //   menuList.forEach((item, index) => {
      //     if (name !== index) {
      //       this.menuList.push(item)
      //     }
      //   })
      //   console.log(this.menuList)
      // }
    },
    onclick (name) {
      var keys = false
      if (this.menuList.length > 0) {
        debugger
        this.menuList.forEach((item, index) => {
          debugger
          if (name.meta.menuName === item.meta.menuName) {
            this['tab' + name] = true
            console.log(name)
            this.$router.push(name.path)
            keys = true
          } else {
            this['tab' + name] = false
          }
        })
      }
      if (!keys) {
        debugger
        this.menuList.push(name)
      }
    },
    onclickTabs (name) {
      debugger
      console.log(name)
      // onclick(name)
      this.menuList.forEach((item, index) => {
        if (name === index) {
          this['tab' + name] = true
          console.log(name)
          this.$router.push(item.path)
        }
      }
      )
    }
  }
}
</script>
