/* import { toast } from 'react-toastify';


 
export const notify = (text, typ) =>{
                   if(typ === 'success'){
                    toast.success( 'success' );
                   } else{
                    toast.error(text);
                   }
}
     */






// Toast.js
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    useEffect(() => {
        const interval = setInterval(() => {
          
          toast(' Please click at the pictures for more information about available events!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }, 10000); 
        return () => clearInterval(interval);
      }, []);
    

  return (
    <div>
      {/* This component doesn't need to render anything */}
    </div>
  );
};

export default Toast;
