import Logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const navigate = useNavigate();
  const Confirm = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.isConfirmed);
        navigate("/");
      } else {
      }
    });
  };
  return (
    <>
      <div
        className=" p-3 bg-dark"
        style={{ height: "100vh", textAlign: "right" }}
      >
        <div className="d-flex flex-column justify-content-around p-2">
          <div
            className="d-flex gap-2 align-items-center mb-5"
            style={{ flex: "10%" }}
          >
            <img src={Logo} width={75} className="rounded" />
            <h3 className="text-light ps-2">الاستاذ ابراهيم العيسى</h3>
          </div>
          <div>
            <a href="#" onClick={Confirm} className="text-white navigationLink">
              اختبار جديد
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
