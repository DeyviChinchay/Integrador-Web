
const psv = new PhotoSphereViewer({
    panorama: 'https://www.shutterstock.com/shutterstock/photos/1788475781/display_1500/stock-photo--d-render-bedroom-design-degrees-panorama-1788475781.jpg', 
    container: document.querySelector('.imagen-360'),
    loading_img :'./Assets/cargando.gif' ,
    navbar : 'autorotate zoom fullscreen',
    caption: 'SUITE COWORKING PARA STARTUPS MODERNAS',
    default_fov : 65,
    mousewheel:false,
    size:{
        height:400
    }
});
