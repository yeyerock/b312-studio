Vue.component('banner',{
    template: //html
    `
    <div id="home">     
           <div>
            <video id="myVideo" autoplay muted loop>              
                <source src="../assets/videos/video-1.mp4" type="video/mp4">
                        Your browser does not support HTML5 video.
            </video>         
            <div class="video-overlay content"></div> 
           </div>
        
    </div>
    `,
    data() {
        return {
            banner:{
                
            }
        }
    },
    methods: {
        
    },
})