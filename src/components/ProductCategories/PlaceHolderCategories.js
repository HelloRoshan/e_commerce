import React from 'react';
import { Placeholder } from 'react-bootstrap';

export const PlaceHolderCategories = () => {
  return (
    Array.from({ length: 6 }).map((cat, index )=> (
        <Placeholder animation="glow" key={index}>
            <Placeholder xs={12} />
        </Placeholder>
    ))
  );
}