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
  <div class="Layout">
    <Layout>
      <Row>
        <Col span="8">
        <Menu :theme="theme2">

          <template v-for="(item , index) in $router.options.routes"
                    v-if="item.meta.menuShow">

            <Submenu :name="item.meta.menuName">
              <template slot="title">

                <Icon :type="item.meta.menuStyle" />{{item.meta.menuName}}
              </template>
              <MenuItem v-for="(itemChild , index) in item.children"
                        :index="itemChild.path"
                        :key="index"
                        v-if="itemChild.meta.menuShow">
              <Icon :type="itemChild.meta.menuStyle" />{{itemChild.meta.menuName}}
              </MenuItem>
            </Submenu>
          </template>
        </Menu>
        </Col>
      </Row>
    </Layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  }
}
</script>