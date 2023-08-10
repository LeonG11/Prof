import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouterError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>
        <i>{error.statusError || error.message}</i>
      </p>
    </div>
  );
}
