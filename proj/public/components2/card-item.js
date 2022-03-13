Vue.component('catalogItem',{
    data(){
        return{
        }
    },
    props:{
        product:{
            type:Object,
            default(){
                return[]
            }
        }
    },
    methods:{
        addItem(){
            this.$root.addToCard(this.product)
        }
    },
    computed:{},
    mounted(){},
    created(){

    },
    template:`
        <div class="product-item">
                <img class="product-image" :src="product.image" alt="">
                <div class="product__description">
                    <p>{{product.name}}</p>
                    <p>цена {{product.price}} руб</p>
                    <button 
                        class="product__buy" 
                        type="button" 
                        @click=addItem
                        >купить</button>
                </div>  
        </div>        
    `
})