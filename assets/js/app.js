const messages = {
    name:'messages',
    template:'#mainTemplate',

    template: //html 
    `
        <div id="mainTemplate" class="container">           
        <headers></headers>
            <banner></banner>
            <nosotros></nosotros>
            <servicios></servicios>
            <proyectos></proyectos>
            <contacto></contacto>
            <foot></foot>
        </div>
    `,

    data: function(){
        return{
            
        }        
    },
    methods: {
        
    },
}



var router = new VueRouter({
    //mode:'history',
    routes:[
      {path:'/', component:messages}
    ]
  });

new Vue({
    element:'#app',

    router,
    template:'#templates',

}).$mount('#app')