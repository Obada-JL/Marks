import { useNavigate } from "react-router-dom";
import "./StartPage.css";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../AppContext";
function StartPage() {
  const navigate = useNavigate();
  const studentName = useRef();
  const cuz = useRef();
  const { setValues } = useContext(AuthContext);
  const redirect = (e) => {
    console.log(e);
    const Values = {
      name: studentName.current.value,
      cuz: cuz.current.value,
      book: books,
    };
    setValues(Values);
    console.log(Values);
    navigate("/exam");
  };
  const [books, setbooks] = useState("book1");
  const onOptionChange = (e) => {
    setbooks(e.target.id);
  };
  return (
    <>
      <h2 className="d-flex justify-content-center text-primary mb-5 mt-3">
        معلومات الطالب
      </h2>
      <div className="d-flex flex-row-reverse gap-5 ">
        <div
          className=" inputContainer justify-content-sm-start"
          style={{ flex: "35%" }}
        >
          <input
            type="text"
            id="name"
            className="input"
            required
            ref={studentName}
          />
          <label htmlFor="name" className="ms-3">
            : اسم الطالب
          </label>
        </div>
        <div
          className="d-flex flex-column justify-content-between align-items-center"
          style={{ flex: "35%", height: "50vh" }}
        >
          <div className="d-flex flex-row-reverse gap-2">
            <label className="cuzLabel">: الجزء المختبر</label>
            <select
              className="selectItem bg-secondary text-light"
              required
              ref={cuz}
            >
              <option>1-2/3-4</option>
              <option>5-6/7-8</option>
              <option>9-10/11-12</option>
              <option>13-14/15-16</option>
              <option>17-18/19-20</option>
            </select>
          </div>
          <div>
            <button
              className="btn btn-success text-white ps-3 pe-3 pt-2 pb-2 border border-2 border-dark"
              onClick={redirect}
            >
              انتقل الى الاختبار
            </button>
          </div>
        </div>
        <div style={{ flex: "30%" }}>
          <div>
            <form className="booksForm">
              <label className="cuzLabel">: الكتاب المختبر منه</label>
              <div className="d-flex flex-column gap-2">
                <div className="pt-2 d-flex gap-2 flex-row-reverse">
                  <input
                    type="radio"
                    id="book1"
                    name="books"
                    value="مورد الظمان"
                    required
                    checked={books === "book1"}
                    onChange={onOptionChange}
                  />
                  <label htmlFor="book1">مورد الظمان</label>
                </div>
                <div className="d-flex gap-2 flex-row-reverse">
                  <input
                    type="radio"
                    id="book2"
                    name="books"
                    value="الدر الثمين"
                    required
                    checked={books === "book2"}
                    onChange={onOptionChange}
                  />
                  <label htmlFor="book2">الدر الثمين</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default StartPage;
