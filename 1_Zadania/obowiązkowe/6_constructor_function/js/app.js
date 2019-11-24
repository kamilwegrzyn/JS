function Basket() {
    this.products = [];
    this.sum = 0;
    this.addProducts=function(name,sumi){
this.products.push(name);
this.sum=this.sum+sumi;

    }

this.showsum=function(){
    
}

    this.print = function() {
        console.log(this.products +  this.sum);

        var aliceBasket = new Basket();
        aliceBasket.addProduct("pomidor",10);
        aliceBasket.addProduct("arbuz",40);
        aliceBasket.showBasket();
        
        var bruceBasket = new Basket();
        bruceBasket.addProduct("rice", 10);
        bruceBasket.addProduct("grzyby mun",50);
        bruceBasket.addProduct("tofu",20);
        bruceBasket.showBasket();



    }
}