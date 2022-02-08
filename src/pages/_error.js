const ErrorPage = ({ statusCode }) => {
  return (
    <div>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </div>
  );
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res?.statusCode ?? err?.statusCode;

  return { statusCode };
};

export default ErrorPage;
