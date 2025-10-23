import { toast } from "react-toastify"

export const getDownload = ()=>{
    const Download = localStorage.getItem('Download')
    if(Download) return JSON.parse(Download)
        return []
}


export const addDownload =(movie)=>{
    const Download = getDownload()
    const isExit = Download.find(down=> down.id == movie.id)
    if(isExit){
        toast.warn(' Already in your list!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
        });
        return; // Stop further execution
    }
    Download.push(movie);
    // console.log(Download)
    localStorage.setItem('Download',JSON.stringify(Download))

}

export const removeDownload = (id)=>{
    const Download = getDownload()
    const remainingDownload = Download.filter(download => download.id != id);
    localStorage.setItem('Download',JSON.stringify(remainingDownload))
}

