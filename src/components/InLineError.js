import React from 'react';
import styled from "styled-components";

function InLineError({ error }) {
  return (
    <PStyle>{error}</PStyle>
  );
}

const PStyle = styled.div`
    font-size: 20px;
    color: #222;
`

export default InLineError;