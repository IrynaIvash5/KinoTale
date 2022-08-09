export default{
    methods:{
        getImg(imgUrl){
            //  http//localhost:300/img/img.jpg
            if (imgUrl && imgUrl.startsWith('http')){
                return imgUrl
            }
            //  /img/img.jpg
            return 'http://localhost:3000' + imgUrl  
        },
    }
}