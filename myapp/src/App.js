import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import TimelineSection from "./components/TimelineSection";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const events = [
  {
    date: "12/03/2023",
    event: "Hành Trình Bên Nhau Của Chúng Mình",
    image: "/12_3_23.jpg",
  },
  {
    date: "21/03/2023",
    event: "Hành Trình Bên Nhau Của Chúng Mình",
    image: "/21_3_23.jpg",
  },
  {
    date: "17/06/2023",
    event: "Hành Trình Bên Nhau Của Chúng Mình",
    image: "/17_6_23.jpg",
  },
  {
    date: "18/07/2023",
    event: "Hành Trình Bên Nhau Của Chúng Mình",
    image: "/18_7_23.jpg",
  },
  {
    date: "01/09/2023",
    event: "Hành Trình Bên Nhau Của Chúng Mình",
    image: "/1_9_23.jpg",
  },
  {
    date: "31/03/2024",
    event: "Hành Trình Bên Nhau Của Chúng Mình",
    image: "/31_3_24.jpg",
  },
  {
    date: "12/05/2024",
    event: "Hành Trình Bên Nhau Của Chúng Mình",
    image: "/12_5_24.jpg",
  },
  {
    date: "Vào lúc 8h50 ngày 12/07/2024",
    event:
      "Tụi mình rất hạnh phúc vì Sam đã đến bên ba mẹ, đó cũng là sự kết tinh từ tình yêu của 2 đứa",
    image: "/sam.jpg",
  },
  {
    event:
      "Sau bao nhiêu ngày cũng nhau vượt qua bao nhiêu khó khăn, gian truân thì tụi mình đã kết thúc quá trình từ người yêu để trở thành vợ chồng",
    image: "/doi1.jpg",
  },
  { image: "/anhcuoi1 - Copy.jpg" },
  { image: "/anhcuoi2 - Copy.jpg" },
  { image: "/anhcuoi3 - Copy.jpg" },
  { image: "/anhcuoi4 - Copy.jpg" },
  { image: "/anhcuoi5 - Copy.jpg" },
  { image: "/anhcuoi6 - Copy.jpg" },
  { event: "Gửi quà cho chúng mình ở đây!", image: "/banking.jpg" },
  { image: "/thankyou.png" },
];

const createSparkles = () => {
  const sparkleContainer = document.createElement("div");
  sparkleContainer.classList.add("sparkle-container");
  document.body.appendChild(sparkleContainer);

  for (let i = 0; i < 100; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    // Sử dụng backticks để nhúng các biểu thức vào chuỗi
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;

    sparkleContainer.appendChild(sparkle);
  }
};

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    createSparkles();
  }, []);

  return (
    <div className="App">
      <div className="gradient-background"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header
          bride={{ name: "Nguyễn Thanh Thu Hiền", image: "/hien - Copy.jpg" }}
          groom={{ name: "Lê Viết Cường", image: "/chure1.jpg" }}
        />
        <TimelineSection events={events} />
      </motion.div>
    </div>
  );
};

export default App;
