Vue.component('basketItem',{
    props:{
        cartItem:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    data(){
        return{}
    },
    methods:{
        deleteItem(){
            this.$root.deleteFromCard(this.cartItem)
        }
    },
    computed:{},
    mounted(){},
    created(){},
    watch:{
    },
    template:`
                <div class="catrItem" >
                    <div class="card-item-info">
                        <p class="product__title">название {{cartItem.name}}</p>
                        <p class="product__price">цена {{cartItem.price}}</p>
                        <p>количество {{cartItem.count}}</p>
                    </div>
                    <button
                     class="card-item-del"
                      :data-id="cartItem.id"
                      @click=deleteItem
                      >del</button>
                </div>
            </div>
        </div>
    `
});