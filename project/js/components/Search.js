Vue.component('search',{
    template: `<form action="#" class="search-form">
                    <input type="text" class="search-field">
                    <button class="btn-search" type="submit"
                        @click="$emit('filter-goods')">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
`
})
