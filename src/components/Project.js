import React from 'react';

const Project = props => (
  <pre>
    {JSON.stringify(props, null, 2)}
  </pre>
)

export default Project;