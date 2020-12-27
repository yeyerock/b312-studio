Vue.component('headers',{
    template: //html
    `
    <div id="headers" class="navbar fixed-top d-flex justify-content-center">        
        <a href="#" > <img src="../assets/images/internal/logo.png" style="height: 30px;"></a>          
    </div>  
    `,
    data() {
        return {
            menu:{
                home: 'Home',
                servicios: "Servicios",
                contacto: 'Contacto',
            }
        }
    },
    methods: {
        
    },
})
