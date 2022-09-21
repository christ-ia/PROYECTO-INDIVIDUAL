import loading from '../assets/loading.gif'
import './IsLoading.scss'

export const IsLoading = () => {
  return (
    <div className='isLoading-container'>
        <img src={loading} alt="Loading" />
    </div>
  )
}
