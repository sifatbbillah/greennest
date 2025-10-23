import { toast, Bounce } from "react-toastify";

export const getsavenext = () => {
    const watchletter = localStorage.getItem('watchletter');
    if (watchletter) return JSON.parse(watchletter);
    return [];
};

export const addsavenext = (movie) => {
    const watchletter = getsavenext();
    const isExist = watchletter.find(save => save.id === movie.id);
    if (isExist) {
        toast.warn(' Already in your list!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        return; // Stop further execution
    }

    watchletter.push(movie);
    localStorage.setItem('watchletter', JSON.stringify(watchletter));
    toast.success('✅ Added to your list!', {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
    });
};

export const removesave = (id) => {
    const watchletter = getsavenext();
    const remainingWatch = watchletter.filter(watch => watch.id !== id);
    localStorage.setItem('watchletter', JSON.stringify(remainingWatch));
    toast.info('ℹ️ Removed from your list.', {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
    });
};
