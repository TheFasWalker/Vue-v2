Vue.component('filterItems',{
    data(){
        return{
            useSearch:''
        }
    },
    props:{},
    methods:{},
    computed:{},
    mounted(){},
    template:`
    <div class="search"
        <form 
            action="#" 
            class="search-form"
            @submit.prevent=
            >
            <input 
                type="text" 
                class="search-field"
            >
            <button class="btn-search" type="submit" > поиск</button>
        </form>
    </div>    
    `
})