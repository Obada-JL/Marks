import { useContext, useEffect, useRef, useState } from "react";
import "./Main.css";
import { AuthContext } from "../AppContext";

function MainPage() {
  const { Value } = useContext(AuthContext);
  console.log(Value);
  const [counter, setcounter] = useState([]);
  const counters = [
    {
      category: "خطأ",
      mark: 0.75,
      bgColor: "success",
    },
    {
      category: "خطأ",
      mark: 0.75,
      bgColor: "success",
    },
    {
      category: "خطأ",
      mark: 0.75,
      bgColor: "success",
    },
    {
      category: "تنبيه",
      mark: 1,
      bgColor: "success",
    },
    {
      category: "تنبيه",
      mark: 1,
      bgColor: "success",
    },
    {
      category: "تنبيه",
      mark: 1,
      bgColor: "success",
    },
    {
      category: "المشدد أغن",
      mark: 0.5,
      bgColor: "primary",
    },
    {
      category: "المشدد أغن",
      mark: 0.5,
      bgColor: "primary",
    },
    {
      category: "المشدد أغن",
      mark: 0.5,
      bgColor: "primary",
    },
    {
      category: "المشدد أغن",
      mark: 0.5,
      bgColor: "primary",
    },
    {
      category: "المشدد أغن",
      mark: 0.5,
      bgColor: "primary",
    },
  ];
  const mark = useRef();
  const countingMinus = (e, ChangedMark) => {
    if (
      mark.current.innerText < 100 &&
      e.target.previousElementSibling.value !== "" &&
      e.target.previousElementSibling.value !== 0 &&
      e.target.previousElementSibling.value !== " "
    ) {
      if (e.target.previousElementSibling.value >= 1) {
        mark.current.innerText =
          Number(mark.current.innerText) + Number(ChangedMark);
      }
    }

    console.log(e.target.previousElementSibling.value);
    if (e.target.previousElementSibling.value >= 1) {
      e.target.previousElementSibling.value =
        e.target.previousElementSibling.value - 1;
    }
  };
  const countingPlus = (e, ChangedMark) => {
    if (
      e.target.nextElementSibling.value !== 0 &&
      e.target.nextElementSibling.value !== "" &&
      e.target.nextElementSibling.value !== " "
    ) {
      mark.current.innerText = mark.current.innerText - ChangedMark;
    }
    e.target.nextElementSibling.value =
      Number(e.target.nextElementSibling.value) + 1;
  };
  useEffect(() => {
    const counterElements = counters.map((counter) => (
      <div className="container">
        <div className={`pe-2 bg-${counter.bgColor} text-light category`}>
          {counter.category}
        </div>
        <div>
          <div class="counter">
            <button
              id="increment-btn "
              className={` bg-${counter.bgColor} text-light`}
              onClick={(e) => countingPlus(e, counter.mark)}
            >
              &#43;
            </button>
            <input type="number" id="counter-value" min={0} />
            <button
              id="decrement-btn "
              className={` bg-${counter.bgColor} text-light`}
              onClick={(e) => countingMinus(e, counter.mark)}
            >
              &#8722;
            </button>
          </div>
        </div>
      </div>
    ));

    setcounter(counterElements);
  }, []);
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => {
      window.removeEventListener("beforeunload", unloadCallback);
    };
  }, []);
  return (
    <>
      <div>
        <div
          className="d-flex justify-content-around flex-row-reverse pt-3 p-2 bg-secondary text-light"
          style={{ fontSize: "18px" }}
        >
          <div className="d-flex flex-row-reverse gap-2">
            <p>: اسم الطالب</p>
            <p>{Value.name}</p>
          </div>
          <div className="d-flex flex-row-reverse gap-2">
            <p>: الجزء المختبر</p>
            <p>{Value.cuz}</p>
          </div>
          <div className="d-flex flex-row-reverse gap-2">
            <p>: كتاب التجويد</p>
            <p>{Value.book === "book1" ? "مورد الظمان" : "الدر الثمين"}</p>
          </div>
        </div>
        <div className="d-flex flex-row-reverse p-3">
          <div style={{ flex: "50%" }}>
            <div className="d-flex flex-wrap gap-3">{counter}</div>
          </div>
          <div
            style={{ flex: "50%", height: "85vh" }}
            className="d-flex flex-column justify-content-between"
          >
            <div
              className="me-3"
              style={{ textAlign: "right", fontSize: "17px" }}
            >
              <p>: ملاحظات</p>
              <textarea cols={60} dir="rtl"></textarea>
            </div>
            <div className="d-flex justify-content-sm-end align-items-end gap-3 flex-row-reverse">
              <div className="d-flex flex-row-reverse align-items-center gap-2">
                <p
                  className="d-flex flex-column justify-content-between"
                  style={{ marginBlockEnd: "6px", fontSize: "20px" }}
                >
                  : العلامة
                </p>
                <p
                  style={{ marginBlockEnd: "6px", fontSize: "20px" }}
                  ref={mark}
                >
                  100
                </p>
              </div>
              <div>
                {/* <button className="btn btn-success">انهاء الاختبار</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainPage;
