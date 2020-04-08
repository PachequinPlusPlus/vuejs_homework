
var ch = new Vue({
    el : '#change',
    data : {
        showing : './src/0_ravioli_sam.jpg',
        first : './src/0_ravioli_sam.jpg',
        second : './src/1_ravioli_sam.jpeg',
        counter : 0,
        seen : true,
        message : ""
    },
    methods: {
        swap : function(event){
            this.counter +=1;
            if(this.counter%2==1){
                this.showing = this.second;
            }else{
                this.showing = this.first;
            }
        }
    }
});
