import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'
import axios from 'axios'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin]    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
  */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path(.*)',
    component: () => import('@/views/redirect/index')
  }]
},
{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},
{
  path: '/auth-redirect',
  component: () => import('@/views/login/auth-redirect'),
  hidden: true
},
{
  path: '/404',
  component: () => import('@/views/error-page/404'),
  hidden: true
},
{
  path: '/cetak/piutang/beredar/pdf',
  component: () => import('@/views/cetak_hutang_penjualan_pdf'),
  name: 'PagePermission',
  hidden: true
},
{
  path: '/401',
  component: () => import('@/views/error-page/401'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [{
    path: 'dashboard',
    component: () => import('@/views/dashboard/index'),
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
      icon: 'dashboard',
      affix: true
    }
  }]
},
{
  path: '/profile',
  component: Layout,
  redirect: '/profile/index',
  hidden: true,
  children: [{
    path: 'index',
    component: () => import('@/views/profile/index'),
    name: 'Profile',
    meta: {
      title: 'Profile',
      icon: 'user',
      noCache: true
    }
  }]
}
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

  {
    path: '/penjualan',
    component: Layout,
    name: 'stok',
    meta: {
      title: 'Penjualan',
      icon: 'shopping',
      roles: ['admin', 'kasir'] // you can set roles in root nav
    },
    children: [{
      path: '/penjualan',
      component: () => import('@/views/stok_keluar'),
      name: 'PagePermission',
      meta: {
        title: 'Penjualan',
        roles: ['admin', 'kasir'] // or you can only set roles in sub nav
      }
    },
    {
      path: '/pesanan/penjualan',
      component: () => import('@/views/penjualan_nontunai'),
      name: 'PagePermission',
      meta: {
        title: 'Pesanan Penjualan',
        roles: ['admin', 'kasir'] // or you can only set roles in sub nav
      }
    }
    ]
  },

  {
    path: '/pembelian',
    component: Layout,
    name: 'stok',
    meta: {
      title: 'Pembelian',
      icon: 'shopping',
      roles: ['admin'] // you can set roles in root nav
    },
    children: [{
      path: '/pembelian',
      component: () => import('@/views/stok_masuk'),
      name: 'PagePermission',
      meta: {
        icon: '',
        title: 'Pembelian',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: '/pesanan/pembelian',
      component: () => import('@/views/pembelian_nontunai'),
      name: 'PagePermission',
      meta: {
        icon: '',
        title: 'Pesanan Pembelian',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }
    ]
  },

  {
    path: '/biaya',
    component: Layout,
    children: [{
      path: '/biaya',
      component: () => import('@/views/biaya'),
      name: 'biaya',
      meta: {
        title: 'Biaya',
        icon: 'money',
        roles: ['admin', 'kasir']
      }
    }]
  },
  {
    path: '/setarakas',
    component: Layout,
    name: 'Kas / Setoran Kas',
    meta: {
      title: 'Kas',
      icon: 'bug',
      roles: ['admin', 'kasir'] // you can set roles in root nav
    },
    children: [

      {
        path: '/kas/keluar',
        component: () => import('@/views/kas_out'),
        name: 'DirectivePermission',
        meta: {
          title: 'Kas Keluar',
          roles: ['admin']
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/kas/masuk',
        component: () => import('@/views/transaksi_in'),
        name: 'RolePermission',
        meta: {
          title: 'Kas Masuk',
          roles: ['admin']
        }
      },

      {
        path: '/kas/detail/:id',
        component: () => import('@/views/kas_detail'),
        name: 'RolePermission',
        hidden: true,
        meta: {
          title: 'Detail Kas',
          roles: ['admin', 'kasir']
        }
      },

      {
        path: '/kas/outdetail/:id',
        component: () => import('@/views/kas_outdetail'),
        name: 'RolePermission',
        hidden: true,
        meta: {
          title: 'Detail Kas',
          roles: ['admin', 'kasir']
        }
      },

      {
        path: '/kredit/detail/:id',
        component: () => import('@/views/kredit_detail'),
        name: 'RolePermission',
        hidden: true,
        meta: {
          title: 'Detail Kas',
          roles: ['admin', 'kasir']
        }
      },

      {
        path: '/transfer/detail/:id',
        component: () => import('@/views/transfer_detail'),
        name: 'RolePermission',
        hidden: true,
        meta: {
          title: 'Detail Transfer',
          roles: ['admin']
        }
      },
      {
        path: '/transfer/kas',
        component: () => import('@/views/transfer_in'),
        name: 'RolePermission',
        meta: {
          title: 'Transfer Kas',
          roles: ['admin', 'kasir']
        }
      }
    ]
  },

  {
    path: '/kon',
    component: Layout,
    name: 'kontak',
    meta: {
      title: 'Kontak',
      icon: 'example',
      roles: ['admin', 'kasir'] // you can set roles in root nav
    },
    children: [{
      path: '/kontak',
      component: () => import('@/views/supplier'),
      name: 'PagePermission',
      meta: {
        title: 'Kontak',
        roles: ['admin', 'kasir'] // or you can only set roles in sub nav
      }
    },
    {
      path: '/kontak/tipe',
      component: () => import('@/views/kontak_tipe'),
      name: 'PagePermission',
      meta: {
        title: 'Tipe Kontak',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }
    ]
  },

  {
    path: '/stok',
    component: Layout,
    name: 'stok',
    meta: {
      title: 'Persediaan',
      icon: 'shopping',
      roles: ['admin', 'kasir'] // you can set roles in root nav
    },
    children: [
      {
        path: '/produk',
        component: () => import('@/views/produk'),
        name: 'PagePermission',
        meta: {
          title: 'Produk',
          roles: ['admin', 'kasir'] // or you can only set roles in sub nav
        }
      },
      {
        path: '/item/masuk',
        component: () => import('@/views/item_masuk'),
        name: 'PagePermission',
        meta: {
          title: 'Item Masuk',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },

      {
        path: '/item/keluar',
        component: () => import('@/views/item_keluar'),
        name: 'PagePermission',
        meta: {
          title: 'Item Keluar',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: '/produk/jenis',
        component: () => import('@/views/kategori'),
        name: 'PagePermission',
        meta: {
          title: 'Jenis Produk',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },

      {
        path: '/produk/satuan',
        component: () => import('@/views/satuan'),
        name: 'PagePermission',
        meta: {
          title: 'Setting Satuan',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: '/item/detail/:id',
        component: () => import('@/views/item_detail'),
        name: 'PagePermission',
        hidden: true,
        meta: {
          title: 'Item Masuk',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: '/produk/kustom/:id',
        component: () => import('@/views/kustom_produk'),
        name: 'PagePermission',
        hidden: true,
        meta: {
          title: 'Kostum Harga',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: '/pembelian',
        component: () => import('@/views/stok_masuk'),
        name: 'PagePermission',
        hidden: true,

        meta: {
          title: 'Pembelian',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: '/penjualan',
        component: () => import('@/views/stok_keluar'),
        name: 'PagePermission',
        hidden: true,

        meta: {
          title: 'Penjualan',
          roles: ['admin', 'kasir'] // or you can only set roles in sub nav
        }
      },
      {
        path: '/penjualan/detail/:id',
        component: () => import('@/views/detail_penjualan'),
        name: 'PagePermission',
        hidden: true,
        meta: {
          title: 'Detail Penjualan',
          roles: ['admin', 'kasir'] // or you can only set roles in sub nav
        }
      },

      {
        path: '/pesanan/detail/:id',
        component: () => import('@/views/detail_pesanan'),
        name: 'PagePermission',
        hidden: true,
        meta: {
          title: 'Detail Pesanan',
          roles: ['admin', 'kasir'] // or you can only set roles in sub nav
        }
      },
      {
        path: '/pembelian/detail/:id',
        component: () => import('@/views/detail_pembelian'),
        name: 'PagePermission',
        hidden: true,
        meta: {
          title: 'detail pembelian',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }

    ]
  },

  {
    path: '/laporan',
    component: Layout,
    name: 'laporan',
    meta: {
      title: 'Laporan',
      icon: 'excel',
      roles: ['admin'] // you can set roles in root nav
    },
    children: [{
      path: '/neraca',
      component: () => import('@/views/neraca'),
      name: 'PagePermission',
      meta: {
        title: 'Neraca',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: '/laba/rugi',
      component: () => import('@/views/labarugi'),
      name: 'PagePermission',
      meta: {
        title: 'Laba Rugi',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: '/laba/rugi/ytd',
      component: () => import('@/views/labarugi_ytd'),
      name: 'PagePermission',
      meta: {
        title: 'Laba Rugi YTD',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: '/laporan/piutang/beredar',
      component: () => import('@/views/hutang_penjualan'),
      name: 'PagePermission',
      meta: {
        title: 'Piutang Beredar',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },

    {
      path: '/laporan/hutang/beredar',
      component: () => import('@/views/hutang_pembelian'),
      name: 'PagePermission',
      meta: {
        title: 'Hutang Beredar',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },

    {
      path: '/laporan/penjualan',
      component: () => import('@/views/laporan_penjualan'),
      name: 'PagePermission',
      meta: {
        title: 'Laporan Penjualan',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }
    ]
  },

  {
    path: '/finansial',
    component: Layout,
    name: 'finansial',
    hidden: true,
    meta: {
      title: 'Finansial',
      icon: 'people',
      roles: ['admin', 'kasir'] // you can set roles in root nav
    },
    children: [

      {
        path: '/kategori/detail/:nama/:id',
        component: () => import('@/views/kategori_detail'),
        name: 'PagePermission',
        hidden: true,
        meta: {
          title: 'jenis',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: '/akun',
        component: () => import('@/views/akun'),
        name: 'DirectivePermission',
        hidden: true,
        meta: {
          title: 'Akun',
          roles: ['admin']
        }
      },
      {
        path: '/kas/detail/:id',
        component: () => import('@/views/kas_detail'),
        name: 'RolePermission',
        hidden: true,
        meta: {
          title: 'Detail Kas',
          roles: ['admin']
        }
      },

      {
        path: '/kas/outdetail/:id',
        component: () => import('@/views/kas_outdetail'),
        name: 'RolePermission',
        hidden: true,
        meta: {
          title: 'Detail Kas',
          roles: ['admin', 'kasir']
        }
      },

      {
        path: '/transfer/detail/:id',
        component: () => import('@/views/transfer_detail'),
        name: 'RolePermission',
        hidden: true,
        meta: {
          title: 'Detail Transfer',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/permission',
    component: Layout,
    hidden: false, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Setting',
      icon: 'lock',
      roles: ['admin'] // you can set roles in root nav
    },
    children: [{
      path: 'role',
      component: () => import('@/views/permission/role'),
      name: 'RolePermission',
      hidden: true,
      meta: {
        title: 'Role Permission',
        roles: ['admin']
      }
    },
    {
      path: 'lisensi',
      component: () => import('@/views/lisensi'),
      name: 'lisensi',
      hidden: false,
      meta: {
        title: 'Lisensi',
        roles: ['admin']
      }
    },
    {
      path: 'reset',
      component: () => import('@/views/reset'),
      name: 'reset',
      hidden: false,
      meta: {
        title: 'Reset Database',
        roles: ['admin']
      }
    },
    {
      path: 'user',
      component: () => import('@/views/user'),
      name: 'RolePermission',
      meta: {
        title: 'User Manager',
        roles: ['admin']
      }
    },
    ]
  },

  {
    path: '/',
    component: Layout,
    children: [{
      path: 'guides',
      component: () => import('@/views/guides'),
      name: 'guides',
      meta: {
        title: 'Tutorial',
        icon: 'user',
        roles: ['admin', 'kasir']
      }
    }]
  },

  {
    path: '/penjualan/surat/jalan/:id',
    component: () => import('@/views/pdfnota'),
    name: 'PagePermission',
    hidden: true,
    meta: {
      title: 'surat jalan',
      roles: ['admin', 'kasir'] // or you can only set roles in sub nav
    }
  },

  {
    path: '/penjualan/nota/:id',
    component: () => import('@/views/pdfnotavalid'),
    name: 'PagePermission',
    hidden: true,
    meta: {
      title: 'Nota',
      roles: ['admin', 'kasir'] // or you can only set roles in sub nav
    }
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
