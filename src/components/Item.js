import React from 'react'
import { useSelector } from 'react-redux';

function Item() {


  const catFact = useSelector((state) => state.catFact.fact);
  const loading = useSelector((state) => state.catFact.loading);
  const error = useSelector((state) => state.catFact.error);
  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div className='shadow-md bg-white text-center'>
      <p className='text-2xl p-10'>

      {loading && (
            <div className="bg-white p-6 text-center shadow-md">YÜKLENİYOR</div>
          )}
      <div>Cat Fact: <p>{catFact}</p></div>

      </p>
      
    </div>
  )
}

export default Item