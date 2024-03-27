import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
        <div id="error-page" className="flex flex-col justify-center items-center h-screen space-y-3">
        <h1 className="text-5xl font-extrabold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
};

export default ErrorPage;