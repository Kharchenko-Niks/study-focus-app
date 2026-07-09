import "./Window.css";


interface WindowProps {

    title: string;

    children: React.ReactNode;

    onClose: () => void;

}



function Window({
    title,
    children,
    onClose

}: WindowProps){


    return(

        <div className="window">


            <div className="window-header">


                <h3>{title}</h3>


                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ✖
                </button>


            </div>



            <div className="window-content">

                {children}

            </div>


        </div>

    );

}


export default Window;