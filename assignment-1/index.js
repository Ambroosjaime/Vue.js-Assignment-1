new Vue({

    el:'#exercise',
    data: {
        name: 'jaime',
        age: 32,
        imageLink:'https://bit.ly/30I5ggq',

    },
    methods: {
		ageMultiplied: function(multiplier){
			return this.age * multiplier
        },
        
        randomNum: function(){
			return Math.random()
		}
    }
});