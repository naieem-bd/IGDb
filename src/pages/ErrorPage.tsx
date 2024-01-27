import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <h2 className='text-2xl'>Oops!</h2>
      <p>
        {isRouteErrorResponse(error)
          ? 'This page does not exist.'
          : 'An unexpected error occurred.'}
      </p>
    </>
  );
};

export default ErrorPage;
