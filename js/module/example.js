const mdlExample = {
	template:tpl('tpls/example.html'),
	data:function(){
		return {
			dialogVisible: false,
			input:"",
			select:"",
			options: [{
	          value: '选项1',
	          label: '黄金糕'
	        }, {
	          value: '选项2',
	          label: '双皮奶',
	          disabled:true
	        }, {
	          value: '选项3',
	          label: '蚵仔煎'
	        }, {
	          value: '选项4',
	          label: '龙须面'
	        }, {
	          value: '选项5',
	          label: '北京烤鸭'
	        }],
	        value: '',
	        value2:[],
	        value3:'',
	        time1:'',
	        time2:'',
	        pickerOptions0: {
	          disabledDate(time) {
	            return time.getTime() < Date.now() - 8.64e7;
	          }
	        },
	        picker0:'',
	        picker1:'',
	        picker2:'',
	        picker3:'',
	        picker4:'',
	        tableData: [{
	            date: '2016-05-02',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1518 弄'
	          }, {
	            date: '2016-05-04',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1517 弄'
	          }, {
	            date: '2016-05-01',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1519 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
          	}, {
	            date: '2016-05-04',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1517 弄'
	          }, {
	            date: '2016-05-01',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1519 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
          	}],
          	currentPage1:3
		}
	},
	methods:{
  	 	handleIconClick(ev) {
	     	console.log(ev);
	    },
	    open() {
	        this.$message('这是一条消息提示');
	    },
	    open2() {
	        this.$message({
	          message: '恭喜你，这是一条成功消息',
	          type: 'success'
	        });
	    },
	    open3() {
	        this.$message({
	          message: '警告哦，这是一条警告消息',
	          type: 'warning'
	        });
	    },
	    open4() {
	        this.$message.error('错了哦，这是一条错误消息');
	    },
	    open5(){
	        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          this.$message({
	            type: 'success',
	            message: '删除成功!'
	          });
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消删除'
	          });          
	        });
      	},
      	open6() {
	        this.$notify({
	          title: '成功',
	          message: '这是一条成功的提示消息',
	          type: 'success'
	        });
      	},
      	open7() {
	        this.$notify({
	          title: '警告',
	          message: '这是一条警告的提示消息',
	          type: 'warning'
	        });
      	},
      	open8() {
	        this.$notify.info({
	          title: '消息',
	          message: '这是一条消息的提示消息'
	        });
      	},
      	open9() {
	        this.$notify.error({
	          title: '错误',
	          message: '这是一条错误的提示消息',
	          duration:0
	        });
      	},
      	handleClose(done) {
			this.$confirm('确认关闭？')
		      .then(_ => {
		        done();
		      })
		      .catch(_ => {});
	  	},
	  	handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
      	},
      	handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
 	 	}	
	}
}