import React, {useEffect, useRef} from 'react'

const Title = () => {
  let line1 = useRef(null)
  let line2 = useRef(null)
  
  return (
    <>
      <h1 className='page-title'>
        <div className="line-wrap">
          <div ref={el => line1 = el} className="line">
            Hello I got the job
          </div>
        </div>
      </h1>

      <h1 className='page-title'>
        <div className="line-wrap">
          <div ref={el => line2 = el} className="line">
            Hello Im Ergi with the job
          </div>
        </div>
      </h1>
      </>
  )
}
export default Title