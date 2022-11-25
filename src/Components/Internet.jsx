import React from 'react'

const Internet = () => {

    const [internet, setInternet] = React.useState(false);


    const onlineIndicator = () => {
        if(navigator.onLine){
            setInternet(true);
        }else{
            setInternet(false);
        }
    }

    React.useEffect(()=>{
        onlineIndicator();
    },[])

  return (
    <div class={`container shadow p-3 mt-5 mb-5 bg-${internet?"success":"danger"} text-light rounded`}>online status</div>
  )
}

export default Internet