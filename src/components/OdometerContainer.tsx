import Odometer from 'react-odometerjs';

//
type OdometerProptype = {
  values: Array<number>
}
const OdometerContainer = ({values}: OdometerProptype) => {
    return(
        <>
            <div className='counter'>
              {
                values.map((value, index) => (
                  <Odometer
                    key={index}
                    format="dddd-ddd-ddd"
                    duration={2000}
                    value={value}
                    // theme="custom"
                  />
                ))
              }
            </div>
        </>
    );
}

export default OdometerContainer;