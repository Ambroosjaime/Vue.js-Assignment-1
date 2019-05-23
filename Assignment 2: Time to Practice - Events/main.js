
new Vue({
	el: '#exercise',
	data: {
		value:'',
		value1:'',
	},

	methods: {
		alert: function(){

		alert("Alert");

		
	},

 storeValue: function(event){

this.value = event.target.value;
 },

 storeData: function(event){
	 this.value1 = event.target.value;
 },
 
}

});

