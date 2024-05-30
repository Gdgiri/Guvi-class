import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import Tasks from "./Component/Tasks/Tasks";
import "./App.css";

function App() {
  const arrobj = [
    {
      head: "FREE",
      title: "$0/Month",
      a: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Single User
        </>
      ),
      b: (
        <>
          <FontAwesomeIcon icon={faCheck} /> 50GB Storage
        </>
      ),
      c: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Unlimited Public Projects
        </>
      ),
      d: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Community Access
        </>
      ),
      e: (
        <span className="text-secondary">
          <FontAwesomeIcon icon={faTimes} /> Unlimited Public Projects
        </span>
      ),
      f: (
        <span className="text-secondary">
          <FontAwesomeIcon icon={faTimes} /> Dedicated Phone Supports
        </span>
      ),
      g: (
        <span className="text-secondary">
          <FontAwesomeIcon icon={faTimes} /> Free Subdomain
        </span>
      ),
      h: (
        <span className="text-secondary">
          <FontAwesomeIcon icon={faTimes} /> Monthly Status Reports
        </span>
      ),
    },
    {
      head: "PLUS",
      title: "$9/Month",
      a: (
        <>
          <FontAwesomeIcon icon={faCheck} /> 5 Users
        </>
      ),
      b: (
        <>
          <FontAwesomeIcon icon={faCheck} />
          50GB Storage
        </>
      ),

      c: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Unlimited Public Projects
        </>
      ),

      d: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Community Access
        </>
      ),
      e: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Unlimited Private Projects
        </>
      ),
      f: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Dedicated Phone Supports
        </>
      ),

      g: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Free Subdomain
        </>
      ),

      h: (
        <span className="text-secondary">
          <FontAwesomeIcon icon={faTimes} /> Monthly Access Supports
        </span>
      ),
    },
    {
      head: "PRO",
      title: "$49/Month",
      a: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Unlimited Access
        </>
      ),
      b: (
        <>
          <FontAwesomeIcon icon={faCheck} /> 50GB Storage
        </>
      ),
      c: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Unlimited Public Projects
        </>
      ),

      d: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Community Access
        </>
      ),

      e: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Unlimited Private Projects
        </>
      ),
      f: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Dedicated Phone Supports
        </>
      ),
      g: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Free Subdomain
        </>
      ),
      h: (
        <>
          <FontAwesomeIcon icon={faCheck} /> Monthly Status Reports
        </>
      ),
    },
  ];

  return (
    <>
      <Tasks arrobj={arrobj} />
    </>
  );
}

export default App;
