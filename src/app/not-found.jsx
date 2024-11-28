import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>{"404 | Not Found".toUpperCase()}</h2>
      <p>{"It seems that you are lost".toUpperCase()}</p>
      <Link href="/">{"Back to Home".toUpperCase()}</Link>
    </div>
  );
};

export default NotFound;
