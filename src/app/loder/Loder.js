import React from 'react';
import { Vortex } from 'react-loader-spinner'; // Assuming Vortex is from react-loader-spinner

function Loder() {
  return (
    <div className="vortex-wrapper">
      <Vortex
        visible={true}
        height="50"
        width="50"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
}

export default Loder;
