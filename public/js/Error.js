Vue.component('error', {
    data(){
        return{
            text: ''
        }
    },
    mathod: {
        setError(error){
            this.text = error
        }
    },
    template: `
    <div> {{ text }} </div>
    `
})
