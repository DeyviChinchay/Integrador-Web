
const psv = new PhotoSphereViewer({
    panorama: 'https://www.shutterstock.com/shutterstock/photos/1009536772/display_1500/stock-photo-minsk-belarus-august-panorama-view-in-bedroom-loft-room-in-luxury-elite-vip-hotel-1009536772.jpg', 
    container: document.querySelector('.imagen-360'),
    loading_img :'./Assets/cargando.gif' ,
    navbar : 'autorotate zoom fullscreen',
    caption: 'SUITE COWORKING PARA STARTUPS MODERNAS',
    default_fov : 100,
    mousewheel:false,
    size:{
        height:600
    }
});
