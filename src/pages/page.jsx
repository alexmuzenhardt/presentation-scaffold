import React from 'react';
import {useParams} from 'react-router-dom';

const Page = () => {
  const {pageId} = useParams();

  return (
    <div className="flex justify-center">
      <h1>Page {pageId}</h1>
      {/* This is a page screen. Type here your html code and design it with a framework or pure CSS	*/}
    </div>
  );
};

export default Page;
