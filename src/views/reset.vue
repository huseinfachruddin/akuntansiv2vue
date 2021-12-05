<template>
  <div class="app-container">
    <h3>Reset Semua data data !!</h3>
    <h5>semua database akan dihapus kecuali data user...</h5>
          <el-button :loading="loading" type="danger" size="mini" @click="reset()">
            Reset database
          </el-button> </div>
</template>

<script>
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import axios from '@/api/axios'
import qs from 'qs'
import checkPermission from '@/utils/permission' // 权限判断函数
import { mapGetters } from 'vuex'

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
      ])
  },
  data() {
    return {
      start : '',
      dates : '',
      end : '',
      search : '',
      loading : false,
      config: {
        spinner: false,
        step: 10,
        prefix: "Rp ",
        precision: 0,
        decimal: ',',
        thousands: '.',
        bootstrap: true,
        amend: false,
        masked: false,
        allowBlank : true
      },
      from: '',
      to_item: '',
      total_kasIn: '',
      pengeluaran : '',
      keterangan : '',
      kasIn: {
        all: [{ biaya: '', total: [], desc: '' }]
      },
      tableKey: 0,
      iscashout : '',
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      cash: [],
      biaya: [],
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        code: '',
        date: '',
        timestamp: new Date(),
        title: '',
        to: '',
        chasin: '',
        total: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Biaya'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        // timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  methods: {
    reset(){
      try {
        if (confirm('Yakin Akan mereset data?')) {
          let res = axios.get('/clean')
          this.loading=false
          console.log(res)
          alert('data berhasil direset')
        }
      } catch (error) {
        console.log(error)
        this.loading=false
      }
    }
  }, 


  
}
</script>
