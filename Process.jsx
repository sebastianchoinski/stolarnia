import React from 'react';
import './Process.scss'
export default function Process(props){
    return(
        <div className='mainprocessdivv'>
        <h1 className='processheader'>Proces</h1>
        <div className='mainprocessdiv'> 
        <div className='processes1'>
            <div className='singleprocess'>
                <div className='countingdiv'>
                <p>1</p>
                </div>
                <p className='processname'>
                Zapytanie, wstępna oferta
                </p>
            </div>
            <div className='singleprocess'><i className="arrowright"></i></div>
            <div className='singleprocess'>
                <div className='countingdiv'>
                <p>2</p>
                </div>
                <p className='processname'>
                Konsultacja, wybór materiałów i kosztorys
                </p>
            </div>
            <div className='singleprocess'><i className="arrowright"></i></div>

            <div className='singleprocess'>
                <div className='countingdiv'>
                <p>3</p>
                </div>
                <p className='processname'>
                Podpisanie umowy i pomiar
                </p>
            </div>
            
            
        </div>
        
        <div className='processes1'>
        <div className='singleprocess'>
                <div className='countingdiv'>
                <p>4</p>
                </div>
                <p className='processname'>
                Docelowy projekt                </p>
            </div>
            <div className='singleprocess'><i className="arrowright"></i></div>

            <div className='singleprocess'>
                <div className='countingdiv'>
                <p>5</p>
                </div>
                <p className='processname'>
                Produkcja i montaż mebli              </p>
            </div>
            <div className='singleprocess'><i className="arrowright"></i></div>

            <div className='singleprocess'>
                <div className='countingdiv'>
                <p>6</p>
                </div>
                <p className='processname'>
                Protokół odbioru              </p>
            </div>
        </div>
        </div>
        </div>
    )
}