import React from 'react';
import Loading from '../../components/utils/Loading';
import { FavoriList } from './components';


const FavoriIndex = (props) => {
  return (
    <div className="d-flex flex-row flex-fill pt-4 p-2" >
      {props.loaded ? (
        <div className="d-flex flex-row flex-fill pt-4 p-2" >
          <FavoriList
            favoris={props.favoris}
            removeFavori={props.removeFavori}
          />
        </div>
      ) : (
          <Loading />
        )}
    </div>
  )
}

export default FavoriIndex