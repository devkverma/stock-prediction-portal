import  {useEffect, useState} from 'react'
import axiosInstance from '../../axiosInstance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    const [ticker, setTicker] = useState()
    const [error, setError] = useState()
    const [Loading, setLoading] = useState(false)
    const [plot, setPlot] = useState()
    const [ma100, setMA100] = useState()
    const [ma200, setMA200] = useState()
    const [prediction, setPrediction] = useState()
    const [evaluate, setEval] = useState()

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const response = await axiosInstance.get('/protected-view/')
            } catch(error) {
                console.error('Error fetching data: ', error)
            }
        }
        fetchProtectedData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await axiosInstance.post('/predict/',{
                ticker : ticker
            })
            const backendRoot = import.meta.env.VITE_BACKEND_ROOT
            const plotUrl = `${backendRoot}${response.data.plot_img}`
            const ma100url = `${backendRoot}${response.data.plot_100_dma}`
            const ma200url = `${backendRoot}${response.data.plot_200_dma}`
            const predictionurl = `${backendRoot}${response.data.plot_prediction}`
            setEval({
                'mse' : response.data.mse,
                'rmse' : response.data.rmse,
                'r2_score' : response.data.r2_score,
            })
            // Set plot
            setPlot(plotUrl)
            setMA100(ma100url)
            setMA200(ma200url)
            setPrediction(predictionurl)
            if (response.data.error) {
                setError(response.data.error)
                setPlot()
                setMA100()
                setMA200()
                setPrediction()
                setEval()
            } else {
                setError()
                
            }
        } catch (error) {
            console.error(error)
            setPlot()
        } finally {
            setLoading(false)
        }
    }


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 mx-auto'>
                <form onSubmit={handleSubmit}>
                    <input type="text" className='form-control' placeholder='Enter Stock Ticker'
                    onChange={(e) => setTicker(e.target.value)} required/>
                    <small>{error && <div className='text-danger'>{error}</div>}</small>
                    <button type='submit' className='btn btn-info mt-3'>
                        {Loading ? <span><FontAwesomeIcon icon={faSpinner} spin /></span> :
                        <span>See Prediction</span>}
                    </button>
                </form>

                <div className='prediction mt-5'>
                    <div className='p-3'>
                        {plot && (
                            <img src={plot} alt="plot_img" className="d-block mx-auto img-fluid" style={{maxWidth: '800px'}}/>
                        )}
                    </div>

                    <div className='p-3'>
                        {ma100 && (
                            <img src={ma100} style={{maxWidth: '800px'}}/>
                        )}
                    </div>

                    <div className='p-3'>
                        {ma200 && (
                            <img src={ma200} style={{maxWidth: '800px'}}/>
                        )}
                    </div>

                    <div className='p-3'>
                        {prediction && (
                            <img src={prediction} style={{maxWidth: '800px'}}/>
                        )}
                    </div>

                    <div className="text-ligth p-3">
                        { evaluate && (
                            <>
                                <h4>Model Evaluation</h4>
                                <p>Mean Squared Error: {evaluate.mse}</p>
                                <p>Root Mean Squared Error: {evaluate.rmse}</p>
                                <p>R Squared : {evaluate.r2_score}</p>
                            </>

                        )

                        }

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard