import NavBar from "../components/NavBar";

export default function layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
