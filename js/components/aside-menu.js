Vue.component('asidemenu', {
	props: {
		data:{
			type:Array,
			required: true,
			default:[]
		},
		style:{
			type:Object,
			required:false,
			default:{}
		}
	},
	template: tpl('tpls/aside.html'),
	data(){
		return {
			open:false,
			selected:[]
		}
	},
	computed: {
		id: function () {
		  return this.model.id
		},
		title: function () {
			return this.model.text
		}
	},
	mounted(){
	 		
 	},
	methods: {
		route:function(item){
			//this.$root.route(item);
			if(item.key){
				router.push('/example/'+item.text)
			}else{
				router.push('/child/'+item.text)
			}
		},
		toggleMenu:function(el){
			this.open = !this.open;
			
//			el.target.children[0].className += " " + "animate-ink"
//			setTimeout(function(){
//				el.target.children[0].className = "ink"
//			},500)
		}
	},
	watch:{}
})