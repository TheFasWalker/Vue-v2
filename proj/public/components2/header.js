
Vue.component('site-header',{
    props:{
        basketItems:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
        return{
            basketCondition :true,

        }
    },
    methods:{
    },
    computed:{},
    mounted(){
    },
    template:`
        <header>
            <div header__logo>
                <span>Интернет магазин</span>
            </div>
           <filterItems />
            <button
                class="header__button"
                @click="basketCondition = !basketCondition"
             >Корзина</button>
            <basket 
                :basketVisibility ="basketCondition"
                :basket="basketItems"
            />

        </header>
    `
})

